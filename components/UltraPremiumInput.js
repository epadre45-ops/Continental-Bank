import { useState, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Check, AlertCircle, Search } from 'lucide-react';

const UltraPremiumInput = forwardRef(({
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  error,
  success,
  disabled = false,
  required = false,
  icon,
  showPasswordToggle = false,
  className = '',
  containerClassName = '',
  ...props
}, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const inputType = type === 'password' && showPassword ? 'text' : type;

  const inputVariants = {
    rest: {
      borderColor: '#E8E9EA',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05), 0 -4px 6px rgba(255, 255, 255, 0.9)'
    },
    focus: {
      borderColor: '#0F4C81',
      boxShadow: '0 0 0 4px rgba(15, 76, 129, 0.1), 0 8px 32px rgba(15, 76, 129, 0.15)'
    },
    error: {
      borderColor: '#EF4444',
      boxShadow: '0 0 0 4px rgba(239, 68, 68, 0.1), 0 8px 32px rgba(239, 68, 68, 0.15)'
    },
    success: {
      borderColor: '#10B981',
      boxShadow: '0 0 0 4px rgba(16, 185, 129, 0.1), 0 8px 32px rgba(16, 185, 129, 0.15)'
    }
  };

  const getState = () => {
    if (error) return 'error';
    if (success) return 'success';
    if (isFocused) return 'focus';
    return 'rest';
  };

  const handleFocus = (e) => {
    setIsFocused(true);
    props.onFocus?.(e);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    props.onBlur?.(e);
  };

  return (
    <div className={`relative ${containerClassName}`}>
      {label && (
        <motion.label
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </motion.label>
      )}

      <div className="relative">
        {/* Left Icon */}
        {icon && (
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}

        {/* Input Field */}
        <motion.input
          ref={ref}
          type={inputType}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          required={required}
          placeholder={placeholder}
          variants={inputVariants}
          animate={getState()}
          className={`
            w-full px-4 py-3 bg-white border-2 rounded-xl 
            focus:outline-none transition-all duration-300
            placeholder-gray-400 text-gray-900
            disabled:opacity-50 disabled:cursor-not-allowed
            ${icon ? 'pl-12' : 'pl-4'}
            ${showPasswordToggle || error || success ? 'pr-12' : 'pr-4'}
            ${className}
          `}
          {...props}
        />

        {/* Right Side Icons */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
          {showPasswordToggle && type === 'password' && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-400 hover:text-gray-600 transition-colors p-1"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          )}

          {success && !error && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="text-green-500"
            >
              <Check className="w-5 h-5" />
            </motion.div>
          )}

          {error && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="text-red-500"
            >
              <AlertCircle className="w-5 h-5" />
            </motion.div>
          )}
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-sm text-red-600 flex items-center"
        >
          <AlertCircle className="w-4 h-4 mr-1" />
          {error}
        </motion.p>
      )}

      {/* Success Message */}
      {success && typeof success === 'string' && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-sm text-green-600 flex items-center"
        >
          <Check className="w-4 h-4 mr-1" />
          {success}
        </motion.p>
      )}
    </div>
  );
});

UltraPremiumInput.displayName = 'UltraPremiumInput';

// Specialized input components
export const SearchInput = forwardRef(({
  onSearch,
  ...props
}, ref) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(value);
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <UltraPremiumInput
        ref={ref}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        icon={<Search className="w-5 h-5" />}
        placeholder="Search..."
        {...props}
      />
    </form>
  );
});

SearchInput.displayName = 'SearchInput';

export const PasswordInput = forwardRef((props, ref) => {
  return (
    <UltraPremiumInput
      ref={ref}
      type="password"
      showPasswordToggle={true}
      {...props}
    />
  );
});

PasswordInput.displayName = 'PasswordInput';

export const EmailInput = forwardRef((props, ref) => {
  return (
    <UltraPremiumInput
      ref={ref}
      type="email"
      placeholder="your@email.com"
      {...props}
    />
  );
});

EmailInput.displayName = 'EmailInput';

export const PhoneInput = forwardRef((props, ref) => {
  return (
    <UltraPremiumInput
      ref={ref}
      type="tel"
      placeholder="+33 6 12 34 56 78"
      {...props}
    />
  );
});

PhoneInput.displayName = 'PhoneInput';

export const NumberInput = forwardRef((props, ref) => {
  return (
    <UltraPremiumInput
      ref={ref}
      type="number"
      {...props}
    />
  );
});

NumberInput.displayName = 'NumberInput';

export const TextArea = forwardRef(({
  rows = 4,
  ...props
}, ref) => {
  return (
    <div className="relative">
      {props.label && (
        <motion.label
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {props.label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </motion.label>
      )}

      <motion.textarea
        ref={ref}
        rows={rows}
        className={`
          w-full px-4 py-3 bg-white border-2 border-platinum/30 rounded-xl 
          focus:outline-none focus:border-sapphire focus:shadow-sapphire-soft
          transition-all duration-300 placeholder-gray-400 text-gray-900
          resize-none disabled:opacity-50 disabled:cursor-not-allowed
          ${props.className}
        `}
        initial={{ borderColor: '#E8E9EA' }}
        whileFocus={{
          borderColor: '#0F4C81',
          boxShadow: '0 0 0 4px rgba(15, 76, 129, 0.1), 0 8px 32px rgba(15, 76, 129, 0.15)'
        }}
        {...props}
      />

      {props.error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-sm text-red-600 flex items-center"
        >
          <AlertCircle className="w-4 h-4 mr-1" />
          {props.error}
        </motion.p>
      )}
    </div>
  );
});

TextArea.displayName = 'TextArea';

export default UltraPremiumInput;
