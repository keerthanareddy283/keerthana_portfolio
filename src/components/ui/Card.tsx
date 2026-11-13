import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  glow = false,
  hoverEffect = true,
  ...props
}) => {
  return (
    <div
      className={`hairline-border border-[#1A1D24] bg-[#0E1015] rounded-sharp p-6 lg:p-8 ${
        hoverEffect ? 'hover:border-[#E0314B]/50 transition-colors duration-200' : ''
      } ${glow ? 'amber-glow' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
