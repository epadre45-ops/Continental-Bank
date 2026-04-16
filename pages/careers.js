import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../lib/i18n';
import { 
  Users, 
  Briefcase, 
  Award, 
  ChevronRight, 
  ArrowUpRight, 
  Star, 
  Target, 
  Globe, 
  Heart, 
  Zap, 
  Building, 
  TrendingUp, 
  Calendar, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Lightbulb 
} from 'lucide-react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CareersPage() {
  const { t } = useTranslation();
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const departments = [
    { id: 'all', name: t('pages.careers.filter_all_depts'), icon: <Building className="w-4 h-4" /> },
    { id: 'banking', name: t('pages.contact.svc_investment'), icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'technology', name: t('pages.contact.svc_digital'), icon: <Lightbulb className="w-4 h-4" /> },
    { id: 'risk', name: t('pages.contact.svc_structured'), icon: <Target className="w-4 h-4" /> },
    { id: 'compliance', name: t('pages.contact.svc_consulting'), icon: <Award className="w-4 h-4" /> },
    { id: 'marketing', name: t('pages.contact.svc_support'), icon: <Star className="w-4 h-4" /> },
    { id: 'hr', name: t('pages.careers.val_collaboration'), icon: <Users className="w-4 h-4" /> }
  ];

  const locations = [
    { id: 'all', name: t('pages.careers.filter_all_locations') },
    { id: 'munich', name: 'Munich' },
    { id: 'london', name: 'London' },
    { id: 'frankfurt', name: 'Frankfurt' },
    { id: 'zurich', name: 'Zurich' },
    { id: 'new-york', name: 'New York' },
    { id: 'singapore', name: 'Singapore' }
  ];

  const jobOpenings = [
    {
      id: 'QUANT-ANALYST-001',
      title: t('pages.careers.job_senior_quant'),
      department: 'banking',
      location: 'munich',
      type: t('pages.careers.job_type_fulltime'),
      experience: t('pages.careers.job_exp_5_7'),
      description: t('pages.careers.job_desc_quant'),
      requirements: ['PhD in Mathematics/Finance', 'Python/R expertise', 'ML experience'],
      featured: true
    },
    {
      id: 'RISK-MANAGER-002',
      title: t('pages.careers.job_risk_dir'),
      department: 'risk',
      location: 'london',
      type: t('pages.careers.job_type_fulltime'),
      experience: t('pages.careers.job_exp_8_10'),
      description: t('pages.careers.job_desc_risk'),
      requirements: ['Finance Master\'s', 'FRM/CFA Certification', 'Banking experience'],
      featured: true
    },
    {
      id: 'FULLSTACK-DEV-003',
      title: t('pages.careers.job_senior_dev'),
      department: 'technology',
      location: 'frankfurt',
      type: t('pages.careers.job_type_fulltime'),
      experience: t('pages.careers.job_exp_4_6'),
      description: t('pages.careers.job_desc_dev'),
      requirements: ['React/Node.js expertise', 'Cloud AWS/Azure', 'Finance background'],
      featured: false
    },
    {
      id: 'COMPLIANCE-OFFICER-004',
      title: t('pages.careers.job_compliance_off'),
      department: 'compliance',
      location: 'zurich',
      type: t('pages.careers.job_type_fulltime'),
      experience: t('pages.careers.job_exp_3_5'),
      description: t('pages.careers.job_desc_compliance'),
      requirements: ['Banking law', 'FINMA regulation', 'Fluent English'],
      featured: false
    },
    {
      id: 'PRODUCT-MANAGER-005',
      title: t('pages.careers.job_product_mgr'),
      department: 'marketing',
      location: 'munich',
      type: t('pages.careers.job_type_fulltime'),
      experience: t('pages.careers.job_exp_5_7'),
      description: t('pages.careers.job_desc_product'),
      requirements: ['Product experience', 'Fintech', 'UX/UI'],
      featured: false
    },
    {
      id: 'DATA-SCIENTIST-006',
      title: t('pages.careers.job_data_sci'),
      department: 'technology',
      location: 'new-york',
      type: t('pages.careers.job_type_fulltime'),
      experience: t('pages.careers.job_exp_3_5'),
      description: t('pages.careers.job_desc_data'),
      requirements: ['PhD/MS Data Science', 'Python/ML', 'Finance'],
      featured: true
    }
  ];

  const benefits = [
    {
      icon: <Award className="w-8 h-8" />,
      title: t('pages.careers.ben_compensation'),
      description: t('pages.careers.ben_compensation_desc')
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: t('pages.careers.ben_wellbeing'),
      description: t('pages.careers.ben_wellbeing_desc')
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: t('pages.careers.ben_development'),
      description: t('pages.careers.ben_development_desc')
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: t('pages.careers.ben_flexibility'),
      description: t('pages.careers.ben_flexibility_desc')
    }
  ];

  const cultureValues = [
    {
      icon: <Users className="w-8 h-8" />,
      title: t('pages.careers.val_collaboration'),
      description: t('pages.careers.val_collaboration_desc')
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: t('pages.careers.val_innovation'),
      description: t('pages.careers.val_innovation_desc')
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: t('pages.careers.val_excellence'),
      description: t('pages.careers.val_excellence_desc')
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: t('pages.careers.val_integrity'),
      description: t('pages.careers.val_integrity_desc')
    }
  ];

  const filteredJobs = jobOpenings.filter(job => 
    (selectedDepartment === 'all' || job.department === selectedDepartment) &&
    (selectedLocation === 'all' || job.location === selectedLocation)
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Ultra Premium */}
      <section className="section-institutional-navy pt-20 sm:pt-24 md:pt-32 relative overflow-hidden">
        {/* Premium Background with Multiple Layers */}
        <div className="absolute inset-0">
          {/* Main Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=1080&fit=crop&auto=format&q=95"
            srcSet="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=640&h=480&fit=crop&auto=format&q=95 640w,
                    https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=768&h=576&fit=crop&auto=format&q=95 768w,
                    https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1024&h=768&fit=crop&auto=format&q=95 1024w,
                    https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=1080&fit=crop&auto=format&q=95 1920w"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            alt="Professional work environment"
            className="w-full h-full object-cover"
          />
          
          {/* Premium Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F3C]/95 via-[#0E2E5C]/85 to-[#153E75]/90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F3C]/98 via-transparent to-[#0A1F3C]/60"></div>
          
          {/* Decorative Light Effects */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C7CCD6]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E8D8C3]/10 rounded-full blur-3xl"></div>
        </div>

        {/* Premium Decorative Lines */}
        <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C7CCD6]/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C7CCD6]/30 to-transparent"></div>

        <div className="relative z-10 container-institutional">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/15 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full mb-6 sm:mb-8 backdrop-blur-xl border border-white/20 shadow-2xl"
            >
              <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-[#E8D8C3]" />
              <span className="text-xs sm:text-sm font-medium text-white tracking-wide">{t('pages.careers.hero_tag')}</span>
            </motion.div>
            
            {/* Premium Title with Gradient Text */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 text-white leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {t('pages.careers.hero_title')}
            </motion.h1>
            
            {/* Premium Divider with Glow Effect */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "120px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 mx-auto mb-8 sm:mb-10 bg-gradient-to-r from-transparent via-[#E8D8C3] to-transparent rounded-full shadow-lg"
            ></motion.div>
            
            {/* Premium Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light"
            >
              {t('pages.careers.hero_subtitle')}
            </motion.p>

            {/* Premium Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-8 sm:gap-12 mt-10 sm:mt-12"
            >
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">50+</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">Open Positions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">25+</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">98%</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">Employee Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">Top</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">Employer</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-[#E8D8C3] rounded-full"
            ></motion.div>
          </div>
        </motion.div>
      </section>

      {/* Culture Section */}
      <section className="section-institutional-white">
        <div className="container-institutional">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="h2-institutional mb-4 sm:mb-6">{t('pages.careers.culture_title')}</h2>
              <div className="divider-institutional-gradient w-20 sm:w-24 mb-6 sm:mb-8"></div>
              <p className="body-institutional text-[#64748B] mb-6 sm:mb-8">
                {t('pages.careers.culture_subtitle')}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {(cultureValues || []).map((value) => (
                  <div key={value.title} className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl hover:bg-[#F6F8FB] transition-colors">
                    <div className="text-[#0E2E5C] mt-0.5 sm:mt-1">
                      <div className="w-6 h-6 sm:w-8 sm:h-8">{value.icon}</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0A1F3C] mb-0.5 sm:mb-1 text-sm sm:text-base">{value.title}</h4>
                      <p className="text-xs sm:text-sm text-[#64748B]">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&h=1000&fit=crop&auto=format"
                  srcSet="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=500&fit=crop&auto=format 500w,
                          https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=750&h=750&fit=crop&auto=format 750w,
                          https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&h=1000&fit=crop&auto=format 1000w"
                  sizes="(max-width: 500px) 500px, (max-width: 750px) 750px, 1000px"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 bg-[#0E2E5C] p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl text-white max-w-xs sm:max-w-sm">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-[#D4AF37] mb-3 sm:mb-4" />
                <h4 className="text-lg sm:text-xl font-bold mb-1.5 sm:mb-2">{t('pages.careers.culture_banner_title')}</h4>
                <p className="text-xs sm:text-sm text-white/80">
                  {t('pages.careers.culture_banner_desc')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-institutional-stratified">
        <div className="container-institutional">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="h2-institutional mb-4 sm:mb-6">{t('pages.careers.benefits_title')}</h2>
            <div className="divider-institutional-gradient w-20 sm:w-24 mx-auto mb-6 sm:mb-8"></div>
            <p className="body-institutional-lg text-[#64748B] max-w-2xl sm:max-w-3xl mx-auto">
              {t('pages.careers.benefits_subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {(benefits || []).map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="text-[#0E2E5C] mb-4 sm:mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 sm:w-8 sm:h-8">{benefit.icon}</div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#0A1F3C] mb-3 sm:mb-4">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="section-institutional-white">
        <div className="container-institutional">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 sm:mb-16"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
              <h2 className="h2-institutional">{t('pages.careers.jobs_title')}</h2>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
                <select 
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="bg-white border border-[rgba(10,30,60,0.08)] rounded-lg px-3 sm:px-4 py-2 text-[#0A1F3C] focus:outline-none focus:ring-2 focus:ring-[#0E2E5C] text-sm sm:text-base"
                >
                  {(departments && departments.length > 0) ? departments.map(dept => (
                    <option key={dept.id} value={dept.id}>{dept.name}</option>
                  )) : <option value="">No departments available</option>}
                </select>
                <select 
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="bg-white border border-[rgba(10,30,60,0.08)] rounded-lg px-3 sm:px-4 py-2 text-[#0A1F3C] focus:outline-none focus:ring-2 focus:ring-[#0E2E5C] text-sm sm:text-base"
                >
                  {(locations || []).map(loc => (
                    <option key={loc.id} value={loc.id}>{loc.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid gap-4 sm:gap-6">
              {(filteredJobs || []).map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-institutional-elevated p-4 sm:p-6 md:p-8 hover:border-[#0E2E5C] transition-all group"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-6">
                    <div className="space-y-3 sm:space-y-4 w-full">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-[#0E2E5C]">
                        <span className="bg-[#F6F8FB] px-2 py-0.5 sm:px-3 sm:py-1 rounded-full uppercase tracking-wider">{job.department}</span>
                        <span className="flex items-center"><MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" />{job.location}</span>
                        <span className="flex items-center"><Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" />{job.type}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#0A1F3C] group-hover:text-[#0E2E5C] transition-colors">{job.title}</h3>
                      <p className="text-sm sm:text-base text-[#64748B] max-w-2xl">{job.description}</p>
                      <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
                        {(job?.requirements || []).map((req, idx) => (
                          <span key={idx} className="flex items-center text-[10px] sm:text-xs text-[#94A3B8]">
                            <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 sm:mr-1 text-[#0E2E5C]" />
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link href={`/careers/${job.id}`} className="btn-institutional-secondary px-4 sm:px-6 w-full sm:w-auto">
                      {t('pages.careers.apply_btn')}
                      <ArrowUpRight className="ml-1.5 sm:ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Institutional Programs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mt-12 sm:mt-16 md:mt-20">
            <div className="bg-gradient-to-br from-[#0A1F3C] to-[#153E75] p-6 sm:p-8 md:p-12 rounded-3xl relative overflow-hidden group">
              <Zap className="absolute top-4 sm:top-8 right-4 sm:right-8 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-white/5 group-hover:scale-110 transition-transform duration-500" />
              <div className="relative z-10">
                <span className="bg-white/10 text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full mb-4 sm:mb-6 inline-block uppercase tracking-wider">
                  Program
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Graduate Programme</h3>
                <p className="text-white/70 mb-6 sm:mb-8 max-w-md text-sm sm:text-base">
                  Rotational experience across multiple asset classes and strategy desks.
                </p>
                <div className="grid grid-cols-2 gap-4 sm:gap-6 text-xs sm:text-sm text-white/60 mb-6 sm:mb-8">
                  <div className="flex items-center"><Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" /> 24 Months</div>
                  <div className="flex items-center"><Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" /> Top-tier Graduates</div>
                </div>
                <button className="btn-institutional-primary bg-white text-[#0A1F3C] hover:bg-white/90 text-sm sm:text-base">
                  Join the Programme
                </button>
              </div>
            </div>

            <div className="bg-[#F6F8FB] p-6 sm:p-8 md:p-12 rounded-3xl border border-[rgba(10,30,60,0.08)] relative overflow-hidden group">
              <TrendingUp className="absolute top-4 sm:top-8 right-4 sm:right-8 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-[#0A1F3C]/5 group-hover:scale-110 transition-transform duration-500" />
              <div className="relative z-10">
                <span className="bg-[#0E2E5C]/10 text-[#0E2E5C] text-[10px] sm:text-xs font-bold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full mb-4 sm:mb-6 inline-block uppercase tracking-wider">
                  Program
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0A1F3C] mb-4 sm:mb-6">Expert Track</h3>
                <p className="text-[#64748B] mb-6 sm:mb-8 max-w-md text-sm sm:text-base">
                  Advanced certification and research grants for senior banking specialists.
                </p>
                <div className="grid grid-cols-2 gap-4 sm:gap-6 text-xs sm:text-sm text-[#94A3B8] mb-6 sm:mb-8">
                  <div className="flex items-center"><Target className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" /> Continuous</div>
                  <div className="flex items-center"><Award className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" /> Senior Mentoring</div>
                </div>
                <button className="btn-institutional-secondary text-sm sm:text-base">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Ultra Premium */}
      <section className="section-institutional-stratified w-full relative overflow-hidden">
        {/* Premium Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0E2E5C]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E8D8C3]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* Premium Glass Card */}
            <div className="relative bg-white/80 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 lg:p-20 max-w-5xl mx-auto border border-white/40 shadow-2xl overflow-hidden">
              {/* Premium Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0E2E5C] via-[#E8D8C3] to-[#0E2E5C]"></div>
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#E8D8C3]/20 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-br from-[#0E2E5C]/10 to-transparent rounded-full blur-2xl"></div>

              {/* Premium Header */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="font-primary text-2xl sm:text-3xl lg:text-5xl font-bold text-[#0A1F3C] mb-6 sm:mb-8"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {t('pages.careers.cta_title')}
              </motion.h2>
              
              {/* Premium Divider */}
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: "100px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="h-1 mx-auto mb-8 sm:mb-10 bg-gradient-to-r from-transparent via-[#0E2E5C] to-transparent rounded-full"
              ></motion.div>
              
              {/* Premium Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-base sm:text-lg lg:text-xl text-[#64748B] mb-10 sm:mb-14 max-w-3xl mx-auto leading-relaxed font-light"
              >
                {t('pages.careers.cta_subtitle')}
              </motion.p>

              {/* Premium Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
              >
                <button className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-[#0E2E5C] to-[#153E75] text-white rounded-full font-medium text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-3">
                  <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span>{t('pages.careers.apply_now')}</span>
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-white text-[#0E2E5C] border-2 border-[#0E2E5C] rounded-full font-medium text-base sm:text-lg hover:bg-[#0E2E5C] hover:text-white transition-all duration-300 hover:-translate-y-1 flex items-center gap-3">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span>{t('pages.careers.talent_pool')}</span>
                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 group-hover:translate-y-[-2px] transition-transform" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
