import { motion } from 'framer-motion';
import { ArrowRight, Loader2 } from 'lucide-react';

const UltraPremiumButton = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  loading = false,
  icon,
  href,
  onClick,
  className = '',
  ...props
}) => {
  const baseClasses = 'relative inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-4';
  
  const variants = {
    primary: 'bg-gradient-to-r from-sapphire to-sapphire-dark text-white hover:shadow-sapphire-soft hover:scale-105 focus:ring-sapphire/20',
    secondary: 'bg-gradient-to-r from-soft-gold to-platinum text-gray-900 hover:shadow-soft-glow hover:scale-105 focus:ring-soft-gold/20',
    outline: 'bg-white border-2 border-sapphire text-sapphire hover:bg-sapphire hover:text-white hover:scale-105 focus:ring-sapphire/20',
    ghost: 'bg-white/10 backdrop-blur-glass text-sapphire border border-white/20 hover:bg-white/20 hover:scale-105 focus:ring-white/20',
    danger: 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:shadow-lg hover:scale-105 focus:ring-red-500/20'
  };

  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };

  const buttonClasses = [
    baseClasses,
    variants[variant],
    sizes[size],
    fullWidth ? 'w-full' : '',
    disabled || loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
    className
  ].filter(Boolean).join(' ');

  const content = (
    <>
      {loading && (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="mr-2"
        >
          <Loader2 className="w-5 h-5" />
        </motion.div>
      )}
      
      {icon && !loading && (
        <span className="mr-2 group-hover:translate-x-1 transition-transform duration-300">
          {icon}
        </span>
      )}
      
      <span className="relative z-10">{children}</span>
      
      {!loading && (
        <motion.div
          className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300"
          style={{
            background: variant === 'primary' 
              ? 'linear-gradient(to right, #126099, #0F4C81)'
              : variant === 'secondary'
              ? 'linear-gradient(to right, #E5D4A1, #D6B976)'
              : undefined
          }}
        />
      )}
    </>
  );

  const motionProps = {
    whileHover: !disabled && !loading ? { scale: 1.05 } : {},
    whileTap: !disabled && !loading ? { scale: 0.95 } : {},
    transition: { duration: 0.2 }
  };

  if (href && !disabled && !loading) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        {...motionProps}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || loading}
      {...motionProps}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default UltraPremiumButton;
