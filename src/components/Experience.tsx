import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-20 pl-6 sm:pl-8 md:pl-28 lg:pl-36 pr-6 sm:pr-8 lg:pr-16">
      
      {/* Section Title & Station Header */}
      <SectionHeading
        stopNumber="EDUCATION"
        totalStops="05"
        tagline="ACADEMIC TIMELINE"
        title="Education"
        currentPlatform="NIAT x JOY UNIVERSITY"
      />

      <div className="relative pl-6 sm:pl-8 border-l hairline-border border-[#E0314B]/40 space-y-12">
        {portfolioData.experienceEducation.map((item, idx) => (
          <Reveal key={item.id} delay={idx * 0.1}>
            <div className="relative group">
              {/* Timeline Marker Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#08090C] border-2 border-[#E0314B] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#E0314B]" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 hairline-border border-[#1A1D24] group-hover:border-[#E0314B]/40 bg-[#0E1015] rounded-sharp transition-colors shadow-md">
                
                {/* Header: Period, Tag, Role */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#E0314B] font-bold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                  {item.tag && (
                    <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 bg-[#08090C] border border-[#1A1D24] text-[#8A8F98] rounded-sharp w-fit">
                      {item.tag}
                    </span>
                  )}
                </div>

                <h3 className="font-grotesk font-bold text-xl sm:text-2xl text-[#F5F1EA] mb-1 group-hover:text-[#E0314B] transition-colors">
                  {item.role}
                </h3>
                
                <div className="flex items-center gap-2 font-mono text-xs text-[#8A8F98] mb-6">
                  <span>{item.institution}</span>
                  {item.location && (
                    <>
                      <span>//</span>
                      <span className="flex items-center gap-1 text-[#8A8F98]">
                        <MapPin className="w-3 h-3 text-[#E0314B]" />
                        <span>{item.location}</span>
                      </span>
                    </>
                  )}
                </div>

                {/* Outcome-Focused Measurable Bullets */}
                <ul className="space-y-3 font-grotesk text-sm text-[#8A8F98]">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="text-[#E0314B] font-mono text-xs mt-0.5 shrink-0">›</span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          </Reveal>
        ))}
      </div>

    </section>
  );
};
