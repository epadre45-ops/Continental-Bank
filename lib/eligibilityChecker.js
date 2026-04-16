/**
 * Eligibility Checker - Bank Standards (Germany/Europe)
 * Based on criteria from major German banks: Deutsche Bank, Commerzbank, ING, DKB
 */

const ELIGIBILITY_RULES = {
  // Age requirements
  minAge: 18,
  maxAge: 75,
  
  // Income requirements (monthly in EUR)
  minMonthlyIncome: 1000,
  minMonthlyIncomeForLargeLoan: 2500,
  
  // Credit score thresholds (German SCHUFA equivalent)
  minCreditScore: 650, // Fair
  
  // Debt-to-income ratio
  maxDebtToIncomeRatio: 0.4, // 40%
  
  // Employment requirements
  minEmploymentDuration: 3, // months
  acceptedEmploymentTypes: ['fulltime', 'parttime', 'selfemployed', 'retired', 'pension'],
  
  // Residency requirements
  minResidencyDuration: 6, // months
  acceptedCountries: ['deutschland', 'germany', 'de', 'ger', 'at', 'ch', 'fr', 'nl', 'be', 'lu'],
  
  // Loan amount limits
  minLoanAmount: 500,
  maxLoanAmount: 100000,
  maxLoanAmountForUnemployed: 10000,
  
  // Loan term limits
  minLoanTerm: 6, // months
  maxLoanTerm: 120, // months (10 years)
  maxLoanTermForLargeAmount: 240, // 20 years for amounts > 50k
};

/**
 * Calculate age from birthdate
 */
const calculateAge = (birthdate) => {
  if (!birthdate) return null;
  const birth = new Date(birthdate);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
};

/**
 * Calculate debt-to-income ratio
 */
const calculateDebtToIncomeRatio = (monthlyDebt, monthlyIncome) => {
  if (!monthlyIncome || monthlyIncome <= 0) return 1; // 100% debt if no income
  if (!monthlyDebt) return 0;
  return monthlyDebt / monthlyIncome;
};

/**
 * Check if income meets loan amount requirements
 */
const checkIncomeForLoanAmount = (monthlyIncome, loanAmount) => {
  const income = parseFloat(monthlyIncome) || 0;
  const amount = parseFloat(loanAmount) || 0;
  
  // Large loans require higher income
  if (amount > 25000 && income < ELIGIBILITY_RULES.minMonthlyIncomeForLargeLoan) {
    return {
      eligible: false,
      reason: 'income_too_low',
      message: `Revenu mensuel insuffisant pour ce montant. Minimum requis : ${ELIGIBILITY_RULES.minMonthlyIncomeForLargeLoan}€`
    };
  }
  
  // General income check
  if (income < ELIGIBILITY_RULES.minMonthlyIncome) {
    return {
      eligible: false,
      reason: 'income_too_low',
      message: `Revenu mensuel minimum requis : ${ELIGIBILITY_RULES.minMonthlyIncome}€`
    };
  }
  
  return { eligible: true };
};

/**
 * Check employment eligibility
 */
const checkEmployment = (employmentType, employmentDuration) => {
  const duration = parseInt(employmentDuration) || 0;
  
  if (!ELIGIBILITY_RULES.acceptedEmploymentTypes.includes(employmentType?.toLowerCase())) {
    return {
      eligible: false,
      reason: 'employment_type_not_accepted',
      message: 'Type d\'emploi non accepté'
    };
  }
  
  if (duration < ELIGIBILITY_RULES.minEmploymentDuration) {
    return {
      eligible: false,
      reason: 'employment_duration_too_short',
      message: `Durée d'emploi minimum requise : ${ELIGIBILITY_RULES.minEmploymentDuration} mois`
    };
  }
  
  return { eligible: true };
};

/**
 * Check residency eligibility
 */
const checkResidency = (country, residencyDuration) => {
  const duration = parseInt(residencyDuration) || 0;
  
  if (!ELIGIBILITY_RULES.acceptedCountries.includes(country?.toLowerCase())) {
    return {
      eligible: false,
      reason: 'country_not_accepted',
      message: 'Pays de résidence non accepté'
    };
  }
  
  if (duration < ELIGIBILITY_RULES.minResidencyDuration) {
    return {
      eligible: false,
      reason: 'residency_duration_too_short',
      message: `Durée de résidence minimum requise : ${ELIGIBILITY_RULES.minResidencyDuration} mois`
    };
  }
  
  return { eligible: true };
};

/**
 * Main eligibility check function
 */
export const checkEligibility = (formData) => {
  const issues = [];
  const warnings = [];
  let score = 100;
  
  // Age check
  const age = calculateAge(formData.geburtsdatum || formData.dateOfBirth);
  if (age) {
    if (age < ELIGIBILITY_RULES.minAge) {
      issues.push({
        field: 'age',
        reason: 'too_young',
        message: `Âge minimum requis : ${ELIGIBILITY_RULES.minAge} ans`
      });
      score -= 30;
    } else if (age > ELIGIBILITY_RULES.maxAge) {
      issues.push({
        field: 'age',
        reason: 'too_old',
        message: `Âge maximum : ${ELIGIBILITY_RULES.maxAge} ans`
      });
      score -= 20;
    }
  }
  
  // Income check
  const incomeCheck = checkIncomeForLoanAmount(
    formData.monatsgehaltNetto || formData.monthlyIncome,
    formData.kreditbetrag || formData.loanAmount
  );
  if (!incomeCheck.eligible) {
    issues.push({
      field: 'income',
      reason: incomeCheck.reason,
      message: incomeCheck.message
    });
    score -= 25;
  }
  
  // Employment check
  if (formData.beschaeftigungsart || formData.employmentStatus) {
    const employmentCheck = checkEmployment(
      formData.beschaeftigungsart || formData.employmentStatus,
      formData.beschaeftigungSeit || formData.employmentDuration
    );
    if (!employmentCheck.eligible) {
      issues.push({
        field: 'employment',
        reason: employmentCheck.reason,
        message: employmentCheck.message
      });
      score -= 20;
    }
  }
  
  // Residency check
  if (formData.land || formData.country) {
    const residencyCheck = checkResidency(
      formData.land || formData.country,
      formData.wohnhaftSeit || formData.residencyDuration
    );
    if (!residencyCheck.eligible) {
      issues.push({
        field: 'residency',
        reason: residencyCheck.reason,
        message: residencyCheck.message
      });
      score -= 15;
    }
  }
  
  // Debt-to-income ratio
  if (formData.monatlicheBelastung || formData.monthlyDebt) {
    const ratio = calculateDebtToIncomeRatio(
      formData.monatlicheBelastung || formData.monthlyDebt,
      formData.monatsgehaltNetto || formData.monthlyIncome
    );
    if (ratio > ELIGIBILITY_RULES.maxDebtToIncomeRatio) {
      warnings.push({
        field: 'debt_ratio',
        reason: 'high_debt_ratio',
        message: `Ratio dette/revenu élevé (${(ratio * 100).toFixed(1)}%)`
      });
      score -= 10;
    }
  }
  
  // Loan amount check
  const loanAmount = parseFloat(formData.kreditbetrag || formData.loanAmount) || 0;
  if (loanAmount < ELIGIBILITY_RULES.minLoanAmount) {
    issues.push({
      field: 'loan_amount',
      reason: 'amount_too_low',
      message: `Montant minimum : ${ELIGIBILITY_RULES.minLoanAmount}€`
    });
  } else if (loanAmount > ELIGIBILITY_RULES.maxLoanAmount) {
    issues.push({
      field: 'loan_amount',
      reason: 'amount_too_high',
      message: `Montant maximum : ${ELIGIBILITY_RULES.maxLoanAmount}€`
    });
  }
  
  // Loan term check
  const loanTerm = parseInt(formData.kreditlaufzeit || formData.loanTerm) || 0;
  const maxTerm = loanAmount > 50000 ? ELIGIBILITY_RULES.maxLoanTermForLargeAmount : ELIGIBILITY_RULES.maxLoanTerm;
  
  if (loanTerm < ELIGIBILITY_RULES.minLoanTerm) {
    issues.push({
      field: 'loan_term',
      reason: 'term_too_short',
      message: `Durée minimum : ${ELIGIBILITY_RULES.minLoanTerm} mois`
    });
  } else if (loanTerm > maxTerm) {
    issues.push({
      field: 'loan_term',
      reason: 'term_too_long',
      message: `Durée maximum : ${maxTerm} mois`
    });
  }
  
  // Determine overall eligibility
  const eligible = issues.length === 0;
  const eligibleWithWarnings = eligible && warnings.length > 0;
  
  return {
    eligible,
    eligibleWithWarnings,
    score: Math.max(0, score),
    issues,
    warnings,
    summary: eligible
      ? eligibleWithWarnings
        ? 'Éligible avec avertissements'
        : 'Éligible'
      : 'Non éligible'
  };
};

/**
 * Get eligibility score color
 */
export const getScoreColor = (score) => {
  if (score >= 80) return 'text-emerald-600 bg-emerald-50';
  if (score >= 60) return 'text-amber-600 bg-amber-50';
  if (score >= 40) return 'text-orange-600 bg-orange-50';
  return 'text-red-600 bg-red-50';
};

/**
 * Get eligibility score label
 */
export const getScoreLabel = (score) => {
  if (score >= 90) return 'Excellent';
  if (score >= 80) return 'Très bon';
  if (score >= 70) return 'Bon';
  if (score >= 60) return 'Acceptable';
  if (score >= 40) return 'Faible';
  return 'Insuffisant';
};
