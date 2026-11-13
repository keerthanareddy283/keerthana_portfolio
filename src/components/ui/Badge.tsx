import React from 'react';

export interface BadgeProps {
  variant?: 'crimson' | 'emerald' | 'amber' | 'subtle' | 'outline';
  dot?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'subtle',
  dot = false,
  children,
  className = ''
}) => {
  const baseStyles = "inline-flex items-center gap-1.5 px-2.5 py-1 font-mono text-[11px] tracking-wider uppercase rounded-sharp select-none";

  const variantStyles = {
    crimson: "bg-[rgba(224,49,75,0.12)] text-[#E0314B] border border-[rgba(224,49,75,0.35)]",
    emerald: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30",
    amber: "bg-amber-500/10 text-amber-300 border border-amber-500/30",
    subtle: "bg-[#08090C] text-[#F5F1EA] hairline-border border-[#1A1D24]",
    outline: "text-[#8A8F98] border border-[#1A1D24] bg-transparent"
  };

  const dotColors = {
    crimson: "bg-[#E0314B]",
    emerald: "bg-emerald-400",
    amber: "bg-amber-300",
    subtle: "bg-[#8A8F98]",
    outline: "bg-[#8A8F98]"
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {dot && <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${dotColors[variant]}`} />}
      <span>{children}</span>
    </span>
  );
};
