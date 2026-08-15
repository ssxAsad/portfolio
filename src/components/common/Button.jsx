import { motion } from 'framer-motion';

/**
 * Reusable animated Button component supporting both link and button semantics.
 */
export function Button({ 
  children, 
  href, 
  variant = 'primary', 
  className = '', 
  onClick, 
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center font-sans font-medium rounded-lg transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2";
  
  const variants = {
    primary: "bg-primary text-white px-8 py-3.5 shadow-md shadow-primary/20 hover:bg-blue-800 hover:shadow-lg hover:shadow-primary/30",
    secondary: "bg-surface text-textMain border border-gray-200 px-8 py-3.5 hover:border-primary hover:text-primary shadow-xs hover:shadow-sm",
    outline: "bg-transparent text-primary border border-primary px-8 py-3.5 hover:bg-primary/5"
  };

  const selectedVariantStyle = variants[variant] || variants.primary;
  const combinedClassName = `${baseStyles} ${selectedVariantStyle} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.96 }}
        className={combinedClassName}
        onClick={onClick}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.96 }}
      className={combinedClassName}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
}
