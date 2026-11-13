import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio';

export const Banner: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const { personal } = portfolioData;
  const hasBannerImage = Boolean(personal.images.classroomBanner) && !imageError;

  return (
    <section className="relative my-16 overflow-hidden hairline-border border-[#1A1D24] mx-6 sm:mx-8 lg:mx-16 bg-[#08090C]">
      <div className="relative w-full h-56 md:h-72 lg:h-80">
        {hasBannerImage ? (
          <img
            src={personal.images.classroomBanner}
            alt={`${personal.name} at NIAT in collaboration with Joy University`}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center filter grayscale contrast-125 brightness-40"
          />
        ) : (
          <div className="w-full h-full bg-[#0E1015] bg-[radial-gradient(#E0314B_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
        )}
        
        {/* Dark gradient wash to merge completely into palette */}
        <div className="absolute inset-0 bg-[#08090C]/65 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090C] via-transparent to-[#08090C]" />

        {/* Crossing transit line with glowing node */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-[#E0314B]/70">
          <div className="max-w-[1440px] mx-auto relative px-6 sm:px-8 flex items-center justify-between">
            <div className="flex items-center gap-3 bg-[#08090C] px-4 py-1.5 hairline-border border-[#E0314B]/50 font-mono text-xs text-[#F5F1EA]">
              <span className="w-2 h-2 rounded-full bg-[#E0314B] animate-pulse" />
              <span>NIAT x JOY UNIVERSITY // FIRST YEAR</span>
            </div>
            <div className="hidden sm:block font-mono text-xs text-[#8A8F98] bg-[#08090C]/80 px-3 py-1 hairline-border border-[#1A1D24]">
              &ldquo;LEARN BY BUILDING.&rdquo;
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-6 sm:left-12 font-mono text-xs text-[#8A8F98]">
          <span>{personal.name.toUpperCase()} // B.TECH CSE (AI)</span>
        </div>
      </div>
    </section>
  );
};
