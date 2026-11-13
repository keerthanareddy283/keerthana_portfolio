import React from 'react';

export interface SectionHeadingProps {
  stopNumber: string;
  totalStops?: string;
  tagline: string;
  title: string;
  currentPlatform?: string;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  stopNumber,
  totalStops = "05",
  tagline,
  title,
  currentPlatform,
  className = ''
}) => {
  return (
    <div className={`relative mb-12 sm:mb-14 pb-6 border-b hairline-border border-[#1A1D24] ${className}`}>
      {/* Station Node Marker on the vertical rail */}
      <div className="hidden md:flex absolute -left-28 lg:-left-36 -top-1 items-center z-20">
        <div className="station-node" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-[#E0314B] mb-2 flex items-center gap-2">
            <span>{stopNumber}</span>
            <span className="text-[#8A8F98]">/ {totalStops}</span>
            <span className="w-8 h-[1px] bg-[#E0314B]" />
            <span className="text-[#8A8F98]">{tagline}</span>
          </div>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-[#F5F1EA] tracking-tight">
            {title}
          </h2>
        </div>

        {currentPlatform && (
          <div className="font-mono text-xs text-[#8A8F98] flex items-center gap-2 shrink-0">
            <span>YOU ARE HERE:</span>
            <span className="px-2.5 py-1 bg-[rgba(224,49,75,0.15)] text-[#E0314B] font-bold rounded-sharp border border-[rgba(224,49,75,0.3)]">
              {currentPlatform}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
