import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  icon,
  iconPosition = 'right',
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-mono uppercase tracking-wider rounded-sharp transition-all select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-[11px] gap-1.5",
    md: "px-6 py-3 text-xs font-semibold gap-2",
    lg: "px-8 py-3.5 text-xs font-semibold tracking-widest gap-2.5"
  };

  const variantStyles = {
    primary: "bg-[#E0314B] hover:bg-[#E0314B]/90 text-white shadow-sm hover:shadow-[0_0_15px_rgba(224,49,75,0.4)]",
    secondary: "hairline-border border-[#F5F1EA]/20 hover:border-[#E0314B] text-[#F5F1EA] bg-[#0E1015]/80 hover:bg-[#0E1015]",
    outline: "hairline-border border-[#E0314B]/60 hover:bg-[#E0314B] hover:text-white text-[#E0314B]",
    ghost: "text-[#8A8F98] hover:text-[#F5F1EA] hover:bg-[#1A1D24]/40"
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
        className={combinedClasses}
      >
        {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
      </a>
    );
  }

  return (
    <button
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
