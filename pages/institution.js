import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../lib/i18n';
import { 
  Shield, 
  Building, 
  TrendingUp, 
  Globe, 
  Users,
  Award,
  ChevronRight,
  ArrowUpRight,
  Star,
  BarChart3,
  Target,
  History,
  Eye,
  Heart,
  Zap
} from 'lucide-react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function InstitutionPage() {
  const { t, isLoading } = useTranslation();
  const [milestones, setMilestones] = useState([]);
  const [values, setValues] = useState([]);
  const [leadership, setLeadership] = useState([]);

  // Initialiser les données quand les traductions sont chargées
  useEffect(() => {
    if (!isLoading) {
      setMilestones([
        {
          year: '1875',
          title: t('institution.milestones.foundation'),
          description: t('institution.milestones.foundation_desc')
        },
        {
          year: '1920',
          title: t('institution.milestones.european_expansion'),
          description: t('institution.milestones.european_expansion_desc')
        },
        {
          year: '1965',
          title: t('institution.milestones.technological_innovation'),
          description: t('institution.milestones.technological_innovation_desc')
        },
        {
          year: '1998',
          title: t('institution.milestones.globalization'),
          description: t('institution.milestones.globalization_desc')
        },
        {
          year: '2020',
          title: t('institution.milestones.digital_transformation'),
          description: t('institution.milestones.digital_transformation_desc')
        }
      ]);

      setValues([
        {
          icon: <Shield className="w-8 h-8" />,
          title: t('institution.values.integrity'),
          description: t('institution.values.integrity_desc')
        },
        {
          icon: <Eye className="w-8 h-8" />,
          title: t('institution.values.transparency'),
          description: t('institution.values.transparency_desc')
        },
        {
          icon: <Heart className="w-8 h-8" />,
          title: t('institution.values.excellence'),
          description: t('institution.values.excellence_desc')
        },
        {
          icon: <Zap className="w-8 h-8" />,
          title: t('institution.values.innovation'),
          description: t('institution.values.innovation_desc')
        }
      ]);

      setLeadership([
        {
          name: t('institution.leadership_team.jean_louis'),
          position: t('institution.leadership_team.jean_louis_position'),
          experience: t('institution.leadership_team.jean_louis_experience'),
          education: t('institution.leadership_team.jean_louis_education')
        },
        {
          name: t('institution.leadership_team.marie'),
          position: t('institution.leadership_team.marie_position'),
          experience: t('institution.leadership_team.marie_experience'),
          education: t('institution.leadership_team.marie_education')
        },
        {
          name: t('institution.leadership_team.klaus'),
          position: t('institution.leadership_team.klaus_position'),
          experience: t('institution.leadership_team.klaus_experience'),
          education: t('institution.leadership_team.klaus_education')
        },
        {
          name: t('institution.leadership_team.sophie'),
          position: t('institution.leadership_team.sophie_position'),
          experience: t('institution.leadership_team.sophie_experience'),
          education: t('institution.leadership_team.sophie_education')
        }
      ]);
    }
  }, [isLoading, t]);

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <Header />
      
      {/* Afficher un état de chargement si les traductions ne sont pas encore chargées */}
      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0E2E5C] mx-auto mb-4"></div>
            <p className="text-gray-600">Chargement...</p>
          </div>
        </div>
      ) : (
        <>
          {/* Hero Section - Ultra Premium */}
          <section className="section-institutional-navy w-full pt-20 md:pt-24 lg:pt-32 relative overflow-hidden">
        {/* Premium Background with Multiple Layers */}
        <div className="absolute inset-0">
          {/* Main Background Image */}
          <img
            src="https://images.unsplash.com/photo-1565514020126-7e6e44f9bb5f?w=1920&h=1080&fit=crop&auto=format&q=95"
            srcSet="https://images.unsplash.com/photo-1565514020126-7e6e44f9bb5f?w=640&h=480&fit=crop&auto=format&q=95 640w,
                    https://images.unsplash.com/photo-1565514020126-7e6e44f9bb5f?w=768&h=576&fit=crop&auto=format&q=95 768w,
                    https://images.unsplash.com/photo-1565514020126-7e6e44f9bb5f?w=1024&h=768&fit=crop&auto=format&q=95 1024w,
                    https://images.unsplash.com/photo-1565514020126-7e6e44f9bb5f?w=1920&h=1080&fit=crop&auto=format&q=95 1920w"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            alt="Siège historique EUROPA KREDIT BANK - Architecture bancaire prestigieuse"
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

        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 mx-auto">
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
              <Building className="w-4 h-4 sm:w-5 sm:h-5 text-[#E8D8C3]" />
              <span className="text-xs sm:text-sm font-medium text-white tracking-wide">{t('institution.our_institution')}</span>
            </motion.div>
            
            {/* Premium Title with Gradient Text */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 text-white leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {t('institution.excellence_since_1875')}
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
              {t('institution.institution_description')}
            </motion.p>

            {/* Premium Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-8 sm:gap-12 mt-10 sm:mt-12"
            >
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">150+</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">Années</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">28</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">Pays</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">€45B+</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">Actifs</div>
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

      {/* Historical Timeline */}
      <section className="section-institutional-white w-full">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="h2-institutional mb-4 sm:mb-6">{t('institution.heritage_innovation')}</h2>
            <div className="divider-institutional-gradient w-16 sm:w-24 mx-auto mb-6 sm:mb-8"></div>
            <p className="body-institutional-lg text-[#64748B] max-w-3xl mx-auto text-sm sm:text-base lg:text-lg">
              {t('institution.heritage_description')}
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#0A1F3C] via-[#0E2E5C] to-transparent hidden md:block"></div>
            
            <div className="space-y-12 md:space-y-16">
              {(milestones || []).map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
                >
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'} mb-4 md:mb-0`}>
                    <div className="card-institutional-elevated p-4 md:p-6">
                      <div className="text-xl md:text-2xl font-bold text-[#0E2E5C] mb-2">{milestone.year}</div>
                      <h3 className="text-lg md:text-xl font-semibold text-[#0A1F3C] mb-2 md:mb-3">{milestone.title}</h3>
                      <p className="text-sm md:text-base text-[#64748B]">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-12 md:w-2/12 flex justify-center order-first md:order-none">
                    <div className="w-4 h-4 bg-[#0E2E5C] rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-institutional-stratified w-full">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="h2-institutional mb-4 sm:mb-6">{t('institution.core_values')}</h2>
            <div className="divider-institutional-gradient w-16 sm:w-24 mx-auto mb-6 sm:mb-8"></div>
            <p className="body-institutional-lg text-[#64748B] max-w-3xl mx-auto text-sm sm:text-base lg:text-lg">
              {t('institution.core_values_description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {(values || []).map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-institutional-elevated p-6 lg:p-8 text-center group"
              >
                <div className="text-[#0E2E5C] mb-4 lg:mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-lg lg:text-xl font-semibold text-[#0A1F3C] mb-3 lg:mb-4">{value.title}</h3>
                <p className="text-sm lg:text-base text-[#64748B] leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-institutional-white w-full">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="h2-institutional mb-4 sm:mb-6">{t('institution.leadership')}</h2>
            <div className="divider-institutional-gradient w-16 sm:w-24 mx-auto mb-6 sm:mb-8"></div>
            <p className="body-institutional-lg text-[#64748B] max-w-3xl mx-auto text-sm sm:text-base lg:text-lg">
              {t('institution.leadership_description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {(leadership || []).map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-institutional-elevated p-6 lg:p-8 group"
              >
                <div className="flex items-start space-x-4 lg:space-x-6">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#0E2E5C] to-[#153E75] rounded-full flex items-center justify-center text-white text-xl lg:text-2xl font-bold flex-shrink-0">
                    {(leader.name?.split(' ') || []).map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg lg:text-xl font-semibold text-[#0A1F3C] mb-1 lg:mb-2">{leader.name}</h3>
                    <p className="text-sm lg:text-base text-[#0E2E5C] font-medium mb-2 lg:mb-3">{leader.position}</p>
                    <div className="space-y-1 lg:space-y-2 text-xs lg:text-sm text-[#64748B]">
                      <p>• {leader.experience}</p>
                      <p>• {leader.education}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image de groupe de leadership - Ultra Premium */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 lg:mt-16 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&h=700&fit=crop&auto=format&q=95"
                srcSet="https://images.unsplash.com/photo-1497366216548-37526070297c?w=640&h=400&fit=crop&auto=format&q=95 640w,
                        https://images.unsplash.com/photo-1497366216548-37526070297c?w=768&h=480&fit=crop&auto=format&q=95 768w,
                        https://images.unsplash.com/photo-1497366216548-37526070297c?w=1024&h=576&fit=crop&auto=format&q=95 1024w,
                        https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&h=700&fit=crop&auto=format&q=95 1400w"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                alt="Équipe de direction EUROPA KREDIT BANK - Excellence collective"
                className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F3C]/95 via-[#0A1F3C]/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
                <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-5 sm:p-6 lg:p-7 border border-white/30 shadow-2xl">
                  <h3 className="font-primary text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {t('institution.collective_excellence')}
                  </h3>
                  <p className="text-white/90 text-sm sm:text-base lg:text-lg font-light leading-relaxed">
                    {t('institution.collective_excellence_desc')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="section-institutional-navy w-full">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="h2-institutional mb-4 sm:mb-6 text-white">{t('institution.global_presence')}</h2>
            <div className="divider-institutional-gradient w-16 sm:w-24 mx-auto mb-6 sm:mb-8"></div>
            <p className="body-institutional-lg text-white/80 max-w-3xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base lg:text-lg">
              {t('institution.global_presence_description')}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8 text-white">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">28</div>
                <div className="text-white/60 text-xs sm:text-sm">{t('institution.global_stats.countries')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">150+</div>
                <div className="text-white/60 text-xs sm:text-sm">{t('institution.global_stats.offices')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">12,000+</div>
                <div className="text-white/60 text-xs sm:text-sm">{t('institution.global_stats.employees')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">€45B+</div>
                <div className="text-white/60 text-xs sm:text-sm">{t('institution.global_stats.assets')}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA - Ultra Premium */}
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center justify-center mb-6 sm:mb-8"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-[#E8D8C3]/20 blur-xl rounded-full"></div>
                  <Award className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#0E2E5C] relative" />
                </div>
                <h2 className="font-primary text-2xl sm:text-3xl lg:text-5xl font-bold text-[#0A1F3C] ml-3 sm:ml-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {t('institution.join_excellence')}
                </h2>
              </motion.div>
              
              {/* Premium Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-base sm:text-lg lg:text-xl text-[#64748B] mb-10 sm:mb-14 max-w-3xl mx-auto leading-relaxed font-light"
              >
                {t('institution.join_excellence_description')}
              </motion.p>

              {/* Premium Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
              >
                <Link 
                  href="/contact" 
                  className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-[#0E2E5C] to-[#153E75] text-white rounded-full font-medium text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-3"
                >
                  <span>{t('institution.initiate_relation')}</span>
                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
                <Link 
                  href="/careers" 
                  className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-white text-[#0E2E5C] border-2 border-[#0E2E5C] rounded-full font-medium text-base sm:text-lg hover:bg-[#0E2E5C] hover:text-white transition-all duration-300 hover:-translate-y-1 flex items-center gap-3"
                >
                  <span>{t('institution.careers')}</span>
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
        </>
      )}
    </div>
  );
}
