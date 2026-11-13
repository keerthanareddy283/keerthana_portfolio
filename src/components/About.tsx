import React, { useState } from 'react';
import { BookOpen, Hammer, Sparkles, UserCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';

export const About: React.FC = () => {
  const { personal } = portfolioData;
  const [imageError, setImageError] = useState(false);
  const hasPortrait = Boolean(personal.images.portraitCrimson) && !imageError;

  return (
    <section id="about" className="relative py-20 pl-6 sm:pl-8 md:pl-28 lg:pl-36 pr-6 sm:pr-8 lg:pr-16">
      
      {/* Section Title & Station Header */}
      <SectionHeading
        stopNumber="STOP 03"
        totalStops="05"
        tagline="STUDENT PROFILE"
        title={`About ${personal.shortName}`}
        currentPlatform="STATION: EDUCATION"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Portrait Frame */}
        <div className="lg:col-span-4">
          <Reveal direction="right">
            <div className="relative w-full aspect-[3/4] hairline-border border-[#E0314B]/40 bg-[#0E1015] rounded-sharp overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[#E0314B] mix-blend-multiply opacity-35 z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-[#08090C]/20 z-10 pointer-events-none" />
              
              {hasPortrait ? (
                <img
                  src={personal.images.portraitCrimson}
                  alt={`${personal.name} portrait`}
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover duotone-crimson contrast-125"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#0E1015] text-center">
                  <div className="w-16 h-16 rounded-full border-2 border-[#E0314B] flex items-center justify-center mb-4 bg-[#08090C]">
                    <UserCheck className="w-7 h-7 text-[#E0314B]" />
                  </div>
                  <div className="font-grotesk font-bold text-xl text-[#F5F1EA]">{personal.name}</div>
                  <div className="font-mono text-xs text-[#8A8F98] mt-1">{personal.origin}</div>
                </div>
              )}
              
              {/* Card Badge Tag */}
              <div className="absolute bottom-3 left-3 right-3 z-20 font-mono text-[10px] p-2.5 bg-[#08090C]/90 border hairline-border border-[#E0314B]/50 text-[#F5F1EA] flex items-center justify-between">
                <span>{personal.name.toUpperCase()}</span>
                <span className="text-[#E0314B] font-bold">CSE (AI) // 1ST YR</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Bio & Milestone Timetable */}
        <div className="lg:col-span-8 space-y-8">
          <Reveal direction="left">
            <div>
              <h3 className="font-grotesk font-bold text-2xl sm:text-3xl text-[#F5F1EA] mb-4">
                Learning by building websites with the help of AI.
              </h3>
              {personal.fullBio.map((paragraph, pIdx) => (
                <p key={pIdx} className="font-grotesk text-base text-[#8A8F98] leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* "Currently" Strip */}
            <div className="my-6 p-4 bg-[#08090C] hairline-border border-[#1A1D24] rounded-sharp">
              <div className="font-mono text-[11px] text-[#E0314B] uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E0314B] pulse-dot" />
                <span>CURRENTLY</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
                <div className="border-l hairline-border border-[#E0314B]/30 pl-3">
                  <div className="text-[#8A8F98] text-[10px] uppercase flex items-center gap-1.5 mb-1">
                    <BookOpen className="w-3 h-3 text-[#E0314B]" />
                    <span>Learning</span>
                  </div>
                  <div className="text-[#F5F1EA] font-semibold">{personal.currently.learning}</div>
                </div>
                <div className="border-l hairline-border border-[#E0314B]/30 pl-3">
                  <div className="text-[#8A8F98] text-[10px] uppercase flex items-center gap-1.5 mb-1">
                    <Hammer className="w-3 h-3 text-[#E0314B]" />
                    <span>Building</span>
                  </div>
                  <div className="text-[#F5F1EA] font-semibold">{personal.currently.building}</div>
                </div>
                <div className="border-l hairline-border border-[#E0314B]/30 pl-3">
                  <div className="text-[#8A8F98] text-[10px] uppercase flex items-center gap-1.5 mb-1">
                    <Sparkles className="w-3 h-3 text-[#E0314B]" />
                    <span>Open To</span>
                  </div>
                  <div className="text-[#E0314B] font-semibold">{personal.currently.openTo}</div>
                </div>
              </div>
            </div>

            {/* Milestone Schedule List */}
            <div className="pt-6 border-t hairline-border border-[#1A1D24]">
              <div className="font-mono text-xs text-[#E0314B] uppercase tracking-wider mb-4 flex items-center justify-between">
                <span>EDUCATION</span>
                <span className="text-[#8A8F98] text-[11px]">2026 - PRESENT</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                {portfolioData.experienceEducation.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 hairline-border border-[#1A1D24] bg-[#0E1015] hover:border-[#E0314B]/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-sharp transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#E0314B] shrink-0" />
                      <span className="text-[#F5F1EA] font-semibold">{item.role}</span>
                    </div>
                    <div className="text-[#8A8F98] truncate max-w-xs">{item.institution}</div>
                    <div className="text-[#E0314B] font-bold shrink-0">{item.period}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
};
