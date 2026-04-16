import { motion } from 'framer-motion';
import { ArrowRight, Star, Shield, TrendingUp } from 'lucide-react';

const UltraPremiumCard = ({
  children,
  title,
  subtitle,
  description,
  icon,
  badge,
  gradient = 'from-sapphire to-sapphire-dark',
  hover = true,
  className = '',
  onClick,
  ...props
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const hoverVariants = {
    rest: { 
      y: 0, 
      boxShadow: '0 8px 32px rgba(229, 229, 229, 0.25)' 
    },
    hover: { 
      y: -8, 
      boxShadow: '0 20px 60px rgba(15, 76, 129, 0.15)',
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const gradientClasses = {
    'from-sapphire to-sapphire-dark': 'bg-gradient-to-br from-sapphire to-sapphire-dark',
    'from-soft-gold to-platinum': 'bg-gradient-to-br from-soft-gold to-platinum',
    'from-teal to-ice-blue': 'bg-gradient-to-br from-teal to-ice-blue',
    'from-rose-gold to-soft-gold': 'bg-gradient-to-br from-rose-gold to-soft-gold',
    'from-platinum to-white': 'bg-gradient-to-br from-platinum to-white'
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={hover ? "hover" : "rest"}
      className={`
        relative bg-white rounded-3xl border border-platinum/20 
        overflow-hidden group cursor-pointer
        ${hover ? 'transition-all duration-300' : ''}
        ${className}
      `}
      onClick={onClick}
      {...props}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute top-4 right-4 z-10">
          <div className="px-3 py-1 bg-gradient-to-r from-soft-gold to-platinum rounded-full text-xs font-medium text-gray-900 shadow-soft-glow">
            {badge}
          </div>
        </div>
      )}

      {/* Icon Section */}
      {icon && (
        <div className="relative p-8 pb-4">
          <div className="relative">
            <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
            <div className={`relative w-16 h-16 bg-gradient-to-r ${gradient} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
              {icon}
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="px-8 pb-8">
        {title && (
          <h3 className="text-2xl font-bold text-gray-900 mb-2 font-luxury">
            {title}
          </h3>
        )}
        
        {subtitle && (
          <p className="text-lg text-gray-600 mb-4 font-light">
            {subtitle}
          </p>
        )}
        
        {description && (
          <p className="text-gray-600 leading-relaxed mb-6">
            {description}
          </p>
        )}
        
        {children}
      </div>

      {/* Hover Overlay */}
      {hover && (
        <div className="absolute inset-0 bg-gradient-to-t from-sapphire/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
    </motion.div>
  );
};

// Specialized card components
export const FeatureCard = ({ icon, title, description, stats, color = 'sapphire' }) => {
  return (
    <UltraPremiumCard
      icon={icon}
      title={title}
      description={description}
      className="text-center"
    >
      {stats && (
        <div className="mt-4">
          <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-soft-gold to-platinum rounded-full text-xs font-medium text-gray-900">
            {stats}
          </span>
        </div>
      )}
    </UltraPremiumCard>
  );
};

export const SolutionCard = ({ 
  title, 
  subtitle, 
  description, 
  features, 
  cta, 
  gradient,
  icon 
}) => {
  return (
    <UltraPremiumCard
      title={title}
      subtitle={subtitle}
      description={description}
      icon={icon}
      gradient={gradient}
      className="p-8"
    >
      <div className="space-y-4">
        {features && (
          <div className="grid grid-cols-2 gap-4">
            {(features || []).map((feature) => (
              <div key={feature} className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span className="text-gray-700 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        )}
        
        {cta && (
          <button className="group inline-flex items-center text-sapphire font-medium hover:text-sapphire-dark transition-colors">
            {cta}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        )}
      </div>
    </UltraPremiumCard>
  );
};

export const PricingCard = ({ 
  name, 
  price, 
  description, 
  features, 
  popular = false,
  color = 'sapphire'
}) => {
  return (
    <UltraPremiumCard
      className={`relative ${popular ? 'scale-105 border-soft-gold' : ''}`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
          <div className="px-4 py-2 bg-gradient-to-r from-soft-gold to-platinum rounded-full text-sm font-medium text-gray-900 shadow-soft-glow">
            Most Popular
          </div>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <div className="text-4xl font-bold text-gray-900 mb-2">{price}</div>
        <p className="text-gray-600">{description}</p>
      </div>

      <ul className="space-y-4 mb-8">
        {(features || []).map((feature) => (
          <li key={feature} className="flex items-start">
            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <button className={`w-full py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
        popular
          ? 'bg-gradient-to-r from-soft-gold to-platinum text-gray-900 hover:shadow-soft-glow'
          : 'bg-gradient-to-r from-sapphire to-sapphire-dark text-white hover:shadow-sapphire-soft'
      }`}>
        Get Started
      </button>
    </UltraPremiumCard>
  );
};

export const TestimonialCard = ({ 
  name, 
  role, 
  content, 
  rating, 
  avatar 
}) => {
  return (
    <UltraPremiumCard className="p-8">
      <div className="flex items-center mb-6">
        <div className="text-4xl mr-4">{avatar}</div>
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {[...Array(rating || 0)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      
      <p className="text-gray-700 leading-relaxed italic">"{content}"</p>
    </UltraPremiumCard>
  );
};

export default UltraPremiumCard;
