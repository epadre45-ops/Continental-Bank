import pool from './mysql.js';

class DatabaseManager {
  constructor() {
    this.pool = pool;
  }

  // Permet les requêtes directes rapides
  async query(sql, params) {
    try {
      const [results] = await this.pool.query(sql, params);
      return results;
    } catch (error) {
      console.error(`❌ [MySQL] Error executing query: ${sql}`, error);
      throw error;
    }
  }

  generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  // ===== GESTION DES UTILISATEURS =====
  
  async createUser(userData) {
    const newUser = {
      id: this.generateId(),
      ...userData,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      isActive: true,
      lastLogin: null
    };
    
    await this.query('INSERT INTO users SET ?', [newUser]);
    return newUser;
  }

  async findUserByEmail(email) {
    const users = await this.query('SELECT * FROM users WHERE email = ? AND isActive = 1', [email]);
    return users.length ? users[0] : null;
  }

  async updateLastLogin(userId) {
    await this.query('UPDATE users SET lastLogin = ? WHERE id = ?', [
      new Date().toISOString().slice(0, 19).replace('T', ' '),
      userId
    ]);
  }

  async getAllUsers() {
    return await this.query('SELECT * FROM users WHERE isActive = 1', []);
  }

  // ===== GESTION DES CONTACTS =====
  
  async createContact(contactData) {
    const newContact = {
      id: this.generateId(),
      ...contactData,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      status: 'pending'
    };
    
    await this.query('INSERT INTO contacts SET ?', [newContact]);
    return newContact;
  }

  async getAllContacts() {
    return await this.query('SELECT * FROM contacts', []);
  }

  async updateContactStatus(contactId, status) {
    const result = await this.query('UPDATE contacts SET status = ?, updatedAt = ? WHERE id = ?', [
      status,
      new Date().toISOString().slice(0, 19).replace('T', ' '),
      contactId
    ]);
    return result.affectedRows > 0;
  }

  // ===== GESTION DES SESSIONS =====
  
  async createSession(userId, duration = 30) {
    const session = {
      id: this.generateId(),
      userId: userId,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      expiresAt: new Date(Date.now() + duration * 60 * 1000).toISOString().slice(0, 19).replace('T', ' '),
      isActive: true
    };
    
    await this.query('INSERT INTO sessions SET ?', [session]);
    return session;
  }

  async getSession(sessionId) {
    const sessions = await this.query('SELECT * FROM sessions WHERE id = ? AND isActive = 1', [sessionId]);
    if (!sessions.length) return null;

    const session = sessions[0];
    if (new Date(session.expiresAt) < new Date()) {
      await this.destroySession(sessionId);
      return null;
    }
    return session;
  }

  async destroySession(sessionId) {
    const result = await this.query('UPDATE sessions SET isActive = 0 WHERE id = ?', [sessionId]);
    return result.affectedRows > 0;
  }

  async cleanupExpiredSessions() {
    await this.query('UPDATE sessions SET isActive = 0 WHERE expiresAt < ?', [
      new Date().toISOString().slice(0, 19).replace('T', ' ')
    ]);
  }

  async deactivateSession(sessionId) {
    const result = await this.query('UPDATE sessions SET isActive = 0, deactivatedAt = ? WHERE id = ?', [
      new Date().toISOString().slice(0, 19).replace('T', ' '),
      sessionId
    ]);
    return result.affectedRows > 0;
  }

  // ===== LOGIQUE DE DEMANDES DYNAMIQUES =====
  // Pour éviter la redondance excessive, toutes les "applications" existantes appellent une méthode générique MySQL
  async genericCreateApplication(table, data, defaultType = null) {
    let base = {
      id: this.generateId(),
      email: data.email,
      status: 'pending',
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    };
    if (defaultType) {
      base.type = defaultType;
    }

    let details = { ...data };
    delete details.email;

    if (data.amount !== undefined) {
      base.amount = data.amount;
      delete details.amount;
    }
    if (data.name !== undefined && (table === 'adviceRequests' || table === 'governanceRequests')) {
      base.name = data.name;
      delete details.name;
    }
    if (data.companyName !== undefined && table === 'businessBankingApplications') {
      base.companyName = data.companyName;
      delete details.companyName;
    }

    base.details = JSON.stringify(details);

    await this.query(`INSERT INTO ?? SET ?`, [table, base]);
    return base;
  }

  async genericGetAll(table) {
    return await this.query(`SELECT * FROM ??`, [table]);
  }

  async genericUpdateStatus(table, id, status) {
    const result = await this.query(`UPDATE ?? SET status = ?, updatedAt = ? WHERE id = ?`, [
      table,
      status,
      new Date().toISOString().slice(0, 19).replace('T', ' '),
      id
    ]);
    return result.affectedRows > 0;
  }

  // Wrappers pour toutes les fonctions originales :
  async createLoanApplication(data) { return this.genericCreateApplication('loanApplications', data, 'personal_loan'); }
  async getAllLoanApplications() { return this.genericGetAll('loanApplications'); }
  async updateLoanApplicationStatus(id, s) { return this.genericUpdateStatus('loanApplications', id, s); }
  
  async createCreditApplication(data) { return this.genericCreateApplication('creditApplications', data, 'credit'); }
  async getAllCreditApplications() { return this.genericGetAll('creditApplications'); }
  
  async createAdviceRequest(data) { return this.genericCreateApplication('adviceRequests', data); }
  async getAllAdviceRequests() { return this.genericGetAll('adviceRequests'); }
  
  async createGovernanceRequest(data) { return this.genericCreateApplication('governanceRequests', data); }
  async getAllGovernanceRequests() { return this.genericGetAll('governanceRequests'); }
  
  async createBusinessBankingApplication(data) { return this.genericCreateApplication('businessBankingApplications', data, 'business_banking'); }
  async getAllBusinessBankingApplications() { return this.genericGetAll('businessBankingApplications'); }
  
  async createNewConstructionRequest(data) { return this.genericCreateApplication('newConstructionRequests', data, 'new_construction'); }
  async getAllNewConstructionRequests() { return this.genericGetAll('newConstructionRequests'); }
  
  async createTransferRequest(data) { return this.genericCreateApplication('transferRequests', data, 'transfer'); }
  async getAllTransferRequests() { return this.genericGetAll('transferRequests'); }
  
  async createCareerApplication(data) { return this.genericCreateApplication('careerApplications', data, 'career'); }
  async getAllCareerApplications() { return this.genericGetAll('careerApplications'); }
  
  async createDocumentRequest(data) { return this.genericCreateApplication('documentRequests', data, 'document'); }
  async getAllDocumentRequests() { return this.genericGetAll('documentRequests'); }
  
  async createFeedbackSubmission(data) { return this.genericCreateApplication('feedbackSubmissions', data, 'feedback'); }
  async getAllFeedbackSubmissions() { return this.genericGetAll('feedbackSubmissions'); }

  // ===== GESTION DES ABONNEMENTS NEWSLETTER =====
  async createNewsletterSubscription(data) {
    const existing = await this.query('SELECT id FROM newsletterSubscriptions WHERE email = ? AND isActive = 1', [data.email]);
    if (existing.length > 0) throw new Error('Cet email est déjà abonné à la newsletter');
    
    const base = {
      id: this.generateId(),
      email: data.email,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      isActive: true,
      type: 'newsletter'
    };
    await this.query('INSERT INTO newsletterSubscriptions SET ?', [base]);
    return base;
  }
  async getAllNewsletterSubscriptions() { return await this.query('SELECT * FROM newsletterSubscriptions WHERE isActive = 1', []); }
  async unsubscribeNewsletter(email) {
    const result = await this.query('UPDATE newsletterSubscriptions SET isActive = 0, unsubscribedAt = ? WHERE email = ? AND isActive = 1', [
      new Date().toISOString().slice(0, 19).replace('T', ' '),
      email
    ]);
    return result.affectedRows > 0;
  }

  // ===== GESTION DES SAUVEGARDES DE CALCULATRICES =====
  async saveCalculatorCalculation(data) {
    const base = {
      id: this.generateId(),
      email: data.email,
      type: 'calculator',
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    };
    let details = { ...data };
    delete details.email;
    base.details = JSON.stringify(details);

    await this.query('INSERT INTO calculatorSaves SET ?', [base]);
    return base;
  }
  async getAllCalculatorSaves() { return await this.query('SELECT * FROM calculatorSaves', []); }
  async getCalculatorSavesByEmail(email) { return await this.query('SELECT * FROM calculatorSaves WHERE email = ?', [email]); }

  // ===== AUTRES ======
  async getStats() {
    const queries = [
      { key: 'totalUsers', sql: 'SELECT COUNT(*) as c FROM users WHERE isActive = 1' },
      { key: 'totalContacts', sql: 'SELECT COUNT(*) as c FROM contacts' },
      { key: 'activeSessions', sql: 'SELECT COUNT(*) as c FROM sessions WHERE isActive = 1' },
      { key: 'pendingContacts', sql: 'SELECT COUNT(*) as c FROM contacts WHERE status = "pending"' },
      { key: 'loanApplications', sql: 'SELECT COUNT(*) as c FROM loanApplications' },
      { key: 'creditApplications', sql: 'SELECT COUNT(*) as c FROM creditApplications' },
      { key: 'adviceRequests', sql: 'SELECT COUNT(*) as c FROM adviceRequests' },
      { key: 'governanceRequests', sql: 'SELECT COUNT(*) as c FROM governanceRequests' },
      { key: 'businessBankingApplications', sql: 'SELECT COUNT(*) as c FROM businessBankingApplications' },
      { key: 'newConstructionRequests', sql: 'SELECT COUNT(*) as c FROM newConstructionRequests' },
      { key: 'transferRequests', sql: 'SELECT COUNT(*) as c FROM transferRequests' },
      { key: 'careerApplications', sql: 'SELECT COUNT(*) as c FROM careerApplications' },
      { key: 'calculatorSaves', sql: 'SELECT COUNT(*) as c FROM calculatorSaves' },
      { key: 'newsletterSubscriptions', sql: 'SELECT COUNT(*) as c FROM newsletterSubscriptions WHERE isActive = 1' },
      { key: 'documentRequests', sql: 'SELECT COUNT(*) as c FROM documentRequests' },
      { key: 'feedbackSubmissions', sql: 'SELECT COUNT(*) as c FROM feedbackSubmissions' }
    ];

    let stats = {};
    for (let q of queries) {
      let res = await this.query(q.sql, []);
      stats[q.key] = res[0].c;
    }
    return stats;
  }
}

const db = new DatabaseManager();
export default db;
