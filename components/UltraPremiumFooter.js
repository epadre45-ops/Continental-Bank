import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Facebook, Twitter, Instagram, 
  Linkedin, Youtube, Shield, Sparkles, ChevronUp,
  Globe, CreditCard, Smartphone, TrendingUp
} from 'lucide-react';
import Link from 'next/link';

const UltraPremiumFooter = () => {
  const [email, setEmail] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);

  const footerSections = [
    {
      title: 'Products & Services',
      links: [
        { name: 'Personal Banking', href: '/personal-banking' },
        { name: 'Business Banking', href: '/business-banking' },
        { name: 'Premium Banking', href: '/premium' },
        { name: 'Digital Banking', href: '/mobile-banking' },
        { name: 'Credit Cards', href: '/cards' },
        { name: 'Loans & Mortgages', href: '/loans' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press & Media', href: '/press' },
        { name: 'Investor Relations', href: '/investors' },
        { name: 'Sustainability', href: '/sustainability' },
        { name: 'Awards & Recognition', href: '/awards' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'Security Center', href: '/security' },
        { name: 'Blog & Insights', href: '/blog' },
        { name: 'Financial Tools', href: '/tools' },
        { name: 'API Documentation', href: '/api' },
        { name: 'Mobile Apps', href: '/mobile-banking/mobile-app' },
      ]
    },
    {
      title: 'Legal & Compliance',
      links: [
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'Regulatory Information', href: '/regulatory' },
        { name: 'Compliance', href: '/compliance' },
        { name: 'Whistleblowing', href: '/whistleblowing' },
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const certifications = [
    { icon: Shield, label: 'Banking License' },
    { icon: CreditCard, label: 'PCI DSS Certified' },
    { icon: Smartphone, label: 'Mobile Banking' },
    { icon: TrendingUp, label: 'ISO 27001' },
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter submission
    console.log('Newsletter submission:', email);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="relative bg-gradient-to-b from-white via-off-white to-light-gray">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-soft-gold/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-ice-blue/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Top Section */}
        <div className="border-t border-platinum/20">
          <div className="container mx-auto px-6 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Brand Section */}
              <div className="lg:col-span-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <div className="flex items-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-soft-gold to-platinum rounded-full blur-xl opacity-50"></div>
                      <div className="relative flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-sapphire to-sapphire-dark rounded-full flex items-center justify-center mr-4">
                          <Sparkles className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 font-luxury tracking-tight">
                            EUROPA
                          </h3>
                          <p className="text-sm font-light text-gray-600 font-luxury tracking-wider">
                            KREDIT BANK
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed max-w-sm">
                    Experience the future of banking with our ultra-premium digital solutions. 
                    Where innovation meets luxury, and your financial dreams become reality.
                  </p>

                  {/* Newsletter */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Stay Updated</h4>
                    <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-3 bg-white border border-platinum/30 rounded-full focus:border-sapphire focus:outline-none transition-colors text-sm"
                        required
                      />
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-gradient-to-r from-sapphire to-sapphire-dark text-white rounded-full hover:shadow-sapphire-soft transition-all duration-300 text-sm font-medium"
                      >
                        Subscribe
                      </motion.button>
                    </form>
                  </div>

                  {/* Certifications */}
                  <div className="flex flex-wrap gap-4">
                    {(certifications || []).map((cert, index) => (
                      <motion.div
                        key={cert.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center space-x-2 px-3 py-2 bg-white rounded-full border border-platinum/30 shadow-neumorphism"
                      >
                        <cert.icon className="w-4 h-4 text-sapphire" />
                        <span className="text-xs text-gray-600">{cert.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Links Sections */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {(footerSections || []).map((section, sectionIndex) => (
                    <motion.div
                      key={section.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                      className="space-y-4"
                    >
                      <h4 className="font-semibold text-gray-900 text-sm tracking-wide">
                        {section.title}
                      </h4>
                      <ul className="space-y-3">
                        {(section?.links || []).map((link, linkIndex) => (
                          <li key={link.name}>
                            <Link
                              href={link.href}
                              className="text-gray-600 hover:text-sapphire transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="border-t border-platinum/20">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-wrap gap-6 text-sm text-gray-600"
              >
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-sapphire" />
                  1 RUE LA VRILLIERE 75001 PARIS
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-sapphire" />
                  +33 7 80 93 38 72
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-sapphire" />
                  contact@continentalbk.de
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center space-x-4"
              >
                {(socialLinks || []).map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white rounded-full border border-platinum/30 flex items-center justify-center hover:border-sapphire hover:text-sapphire transition-all duration-300 shadow-neumorphism"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-600" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-platinum/20 bg-gradient-to-r from-platinum/10 to-ice-blue/10">
          <div className="container mx-auto px-6 py-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
            >
              <div className="text-sm text-gray-600 text-center md:text-left">
                © 2024 EUROPA KREDIT BANK. All rights reserved. | 
                <Link href="/terms" className="hover:text-sapphire transition-colors ml-1">Terms</Link> | 
                <Link href="/privacy" className="hover:text-sapphire transition-colors ml-1">Privacy</Link>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Globe className="w-4 h-4" />
                <select className="bg-transparent border-none focus:outline-none text-gray-600 cursor-pointer">
                  <option>English</option>
                  <option>Français</option>
                  <option>Deutsch</option>
                </select>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-gradient-to-r from-sapphire to-sapphire-dark text-white rounded-full shadow-sapphire-soft flex items-center justify-center hover:shadow-lg transition-all duration-300"
            aria-label="Back to top"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default UltraPremiumFooter;
