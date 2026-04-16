/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Ultra Premium Palette
        'platinum': '#E5E5E5',
        'soft-gold': '#D6B976',
        'rose-gold': '#E8B4B8',
        'teal': '#2CA8A8',
        'ice-blue': '#C7EAFB',
        'sapphire': '#0F4C81',
        'sapphire-dark': '#126099',
        
        // Base Colors
        'white': '#FFFFFF',
        'off-white': '#FAFAFA',
        'light-gray': '#F5F6F8',
        'subtle-gray': '#E8E9EA',
        
        // Accent Gradients
        'gold-gradient': 'linear-gradient(135deg, #D6B976 0%, #E5D4A1 100%)',
        'sapphire-gradient': 'linear-gradient(135deg, #0F4C81 0%, #126099 100%)',
        'ice-gradient': 'linear-gradient(135deg, #C7EAFB 0%, #E5F3FF 100%)',
        'platinum-gradient': 'linear-gradient(135deg, #E5E5E5 0%, #F0F0F0 100%)',
        
        // Legacy Colors (for compatibility)
        'primary-orange': '#FF6B35',
        'secondary-orange': '#F7931E',
        'accent-coral': '#FF8C42',
        'accent-yellow': '#FFD23F',
        'accent-purple': '#9B59B6',
        'accent-blue': '#3498DB',
        'accent-green': '#2ECC71',
        'bg-light': '#FFFFFF',
        'bg-gray': '#F8F9FA',
        'text-dark': '#2C3E50',
        'text-gray': '#7F8C8D',
        'text-light': '#95A5A6',
      },
      fontFamily: {
        'luxury': ['Neue Haas Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif'],
        'modern': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'font-modern': ['Poppins', 'Montserrat', 'Inter', 'system-ui', 'sans-serif']
      },
      animation: {
        shimmer: 'shimmer 2s linear infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'rotate-slow': 'rotate 30s linear infinite'
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      boxShadow: {
        'soft-glow': '0 0 40px rgba(214, 185, 118, 0.15)',
        'platinum-soft': '0 8px 32px rgba(229, 229, 229, 0.25)',
        'ice-soft': '0 8px 32px rgba(199, 234, 251, 0.25)',
        'sapphire-soft': '0 8px 32px rgba(15, 76, 129, 0.15)',
        'glassmorphism': '0 8px 32px rgba(31, 38, 135, 0.15)',
        'neumorphism': '0 4px 6px rgba(0, 0, 0, 0.1), 0 -4px 6px rgba(255, 255, 255, 0.9)'
      },
      backdropBlur: {
        'glass': '12px'
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #16213e 75%, #1a1a2e 100%)',
        'grid-pattern': `linear-gradient(30deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                           linear-gradient(150deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                           linear-gradient(30deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
        'corporate-pattern': `radial-gradient(circle at 20% 50%, rgba(15, 52, 96, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 80% 50%, rgba(22, 33, 62, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 50% 20%, rgba(26, 26, 46, 0.1) 0%, transparent 50%)`
      },
      backgroundSize: {
        'grid': '40px 40px, 40px 40px, 20px 20px'
      },
      backgroundPosition: {
        'grid': '0 0, 20px 0, 10px 10px'
      }
    },
  },
  plugins: [],
}
