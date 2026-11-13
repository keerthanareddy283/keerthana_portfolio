import React, { useState } from 'react';
import { 
  Code2, 
  Wrench, 
  Sparkles,
  MapPin
} from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';

export const Skills: React.FC = () => {
  const [viewMode, setViewMode] = useState<'map' | 'categories'>('map');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = [
    {
      title: "Frontend",
      icon: <Code2 className="w-4 h-4 text-[#E0314B]" />,
      skills: portfolioData.skills.filter(s => s.category === 'Frontend')
    },
    {
      title: "Tools",
      icon: <Wrench className="w-4 h-4 text-[#E0314B]" />,
      skills: portfolioData.skills.filter(s => s.category === 'Tools')
    },
    {
      title: "Focus Areas",
      icon: <Sparkles className="w-4 h-4 text-[#E0314B]" />,
      skills: portfolioData.skills.filter(s => s.category === 'Focus Areas')
    }
  ];

  return (
    <section id="skills" className="relative py-20 pl-6 sm:pl-8 md:pl-28 lg:pl-36 pr-6 sm:pr-8 lg:pr-16">
      
      {/* Section Title & Station Header */}
      <SectionHeading
        stopNumber="STOP 04"
        totalStops="05"
        tagline="TOOLING &amp; CAPABILITIES"
        title="Transit Line Skills Map"
        currentPlatform="ALL INTERCONNECTING HUBS"
      />

      {/* Switch between Horizontal Transit Rail Map & Categorized Deck */}
      <div className="flex items-center justify-between mb-8 pb-3 border-b hairline-border border-[#1A1D24]">
        <div className="flex items-center gap-2 font-mono text-xs text-[#8A8F98]">
          <span className="text-[#E0314B]">●</span>
          <span>DISPLAY MATRIX:</span>
        </div>
        <div className="flex items-center gap-1 bg-[#0E1015] p-1 hairline-border border-[#1A1D24] rounded-sharp">
          <button
            onClick={() => setViewMode('map')}
            className={`px-3 py-1 font-mono text-xs uppercase tracking-wider rounded-sharp transition-all ${
              viewMode === 'map'
                ? 'bg-[#E0314B] text-white font-bold'
                : 'text-[#8A8F98] hover:text-[#F5F1EA]'
            }`}
          >
            Transit Rail Map
          </button>
          <button
            onClick={() => setViewMode('categories')}
            className={`px-3 py-1 font-mono text-xs uppercase tracking-wider rounded-sharp transition-all ${
              viewMode === 'categories'
                ? 'bg-[#E0314B] text-white font-bold'
                : 'text-[#8A8F98] hover:text-[#F5F1EA]'
            }`}
          >
            Categorized Grid
          </button>
        </div>
      </div>

      {viewMode === 'map' ? (
        <Reveal>
          <div className="relative py-12 px-4 bg-[#0E1015] hairline-border border-[#1A1D24] rounded-sharp overflow-x-auto shadow-lg">
            <div className="min-w-[980px] relative px-6 py-6">
              
              {/* The Horizontal Rail */}
              <div className="absolute top-1/2 -translate-y-1/2 left-6 right-6 h-[2px] bg-[#E0314B]" />

              {/* Station Nodes Grid */}
              <div className="relative z-10 flex items-center justify-between">
                {portfolioData.skills.map((skill) => {
                  const isHighlighted = skill.highlight;
                  const isHovered = hoveredSkill === skill.name;

                  return (
                    <div
                      key={skill.name}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className="flex flex-col items-center group cursor-pointer transition-transform"
                    >
                      {/* Station Dot */}
                      <div
                        className={`rounded-full bg-[#08090C] border-2 border-[#E0314B] flex items-center justify-center mb-3 group-hover:scale-125 transition-transform ${
                          isHighlighted
                            ? 'w-6 h-6 ring-4 ring-[rgba(224,49,75,0.2)]'
                            : 'w-5 h-5'
                        }`}
                      >
                        <div
                          className={`rounded-full bg-[#E0314B] ${
                            isHighlighted ? 'w-2.5 h-2.5' : 'w-2 h-2'
                          }`}
                        />
                      </div>

                      {/* Station Label */}
                      <span
                        className={`font-mono text-xs font-bold text-center whitespace-nowrap transition-colors ${
                          isHighlighted || isHovered
                            ? 'text-[#E0314B]'
                            : 'text-[#F5F1EA]'
                        }`}
                      >
                        {skill.name}
                      </span>
                      <span className="font-mono text-[10px] text-[#8A8F98] mt-0.5 text-center whitespace-nowrap">
                        {skill.role}
                      </span>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Footer line */}
            <div className="mt-6 pt-4 border-t hairline-border border-[#1A1D24] flex items-center justify-between font-mono text-[11px] text-[#8A8F98]">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#E0314B]" />
                <span>SKILLS ON ROUTE: {portfolioData.skills.length}</span>
              </span>
              <span className="text-[#E0314B]">// FRONTEND + TOOLS + AI-ASSISTED DEV</span>
            </div>
          </div>
        </Reveal>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <Reveal key={cat.title} delay={idx * 0.1}>
              <div className="p-6 hairline-border border-[#1A1D24] bg-[#0E1015] hover:border-[#E0314B]/40 rounded-sharp transition-colors h-full">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b hairline-border border-[#1A1D24]">
                  {cat.icon}
                  <h3 className="font-grotesk font-bold text-base text-[#F5F1EA]">
                    {cat.title}
                  </h3>
                  <span className="ml-auto font-mono text-[10px] text-[#8A8F98]">
                    {cat.skills.length}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 bg-[#08090C] hairline-border border-[#1A1D24] rounded-sharp flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-xs font-semibold text-[#F5F1EA]">
                          {skill.name}
                        </span>
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E0314B]" />
                        )}
                      </div>
                      <span className="font-mono text-[10px] text-[#8A8F98]">
                        {skill.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      )}

    </section>
  );
};
