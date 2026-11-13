import React, { useState } from 'react';
import { ExternalLink, Github, Info } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { Project } from '../types/portfolio';
import { SectionHeading } from './ui/SectionHeading';
import { Badge } from './ui/Badge';
import { ProjectModal } from './ProjectModal';
import { Reveal } from './ui/Reveal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Productivity', 'Finance'];

  const filteredProjects = selectedCategory === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === selectedCategory);

  return (
    <section id="work" className="relative py-20 pl-6 sm:pl-8 md:pl-28 lg:pl-36 pr-6 sm:pr-8 lg:pr-16">
      
      {/* Section Title & Station Header */}
      <SectionHeading
        stopNumber="STOP 01"
        totalStops="05"
        tagline="SELECTED PROJECTS"
        title="Work &amp; Deployed Projects"
        currentPlatform="PLATFORM 01 (PROJECTS)"
      />

      {/* Category Filter Controls */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b hairline-border border-[#1A1D24]">
        <span className="font-mono text-xs text-[#8A8F98] uppercase tracking-wider mr-2">Filter Track:</span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider rounded-sharp transition-all ${
              selectedCategory === cat
                ? 'bg-[#E0314B] text-white font-bold shadow-[0_0_12px_rgba(224,49,75,0.3)]'
                : 'bg-[#0E1015] hairline-border border-[#1A1D24] text-[#8A8F98] hover:text-[#F5F1EA] hover:border-[#E0314B]/50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects List */}
      <div className="space-y-12">
        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center hairline-border border-[#1A1D24] bg-[#0E1015] rounded-sharp">
            <p className="font-mono text-xs text-[#8A8F98]">NO PROJECTS FOUND ON THIS TRACK</p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="mt-4 px-4 py-2 bg-[#E0314B] text-white font-mono text-xs uppercase rounded-sharp"
            >
              Reset Track Filters
            </button>
          </div>
        ) : (
          filteredProjects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 0.08}>
              <div className="group hairline-border border-[#1A1D24] hover:border-[#E0314B]/50 bg-[#0E1015] rounded-sharp p-6 lg:p-8 transition-colors">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Info Column */}
                  <div className="lg:col-span-6 flex flex-col justify-between h-full">
                    <div>
                      {/* Top Bar with Project Number & Status */}
                      <div className="flex items-center justify-between mb-4 font-mono text-xs">
                        <span className="text-[#8A8F98] tracking-wider">{project.number}</span>
                        {project.status === 'LIVE' && (
                          <Badge variant="emerald" dot>STATUS: LIVE</Badge>
                        )}
                        {project.status === 'IN PROGRESS' && (
                          <Badge variant="amber" dot>STATUS: IN PROGRESS</Badge>
                        )}
                      </div>

                      {/* Title & Tagline */}
                      <div className="flex items-baseline gap-3 mb-1">
                        <h3 className="font-grotesk font-bold text-2xl sm:text-3xl text-[#F5F1EA] group-hover:text-[#E0314B] transition-colors">
                          {project.title}
                        </h3>
                        {project.tagline && (
                          <span className="font-mono text-xs text-[#E0314B] tracking-widest italic">
                            {project.tagline}
                          </span>
                        )}
                      </div>

                      <p className="font-mono text-xs text-[#E0314B] mb-4">{project.domain}</p>

                      <p className="text-[#8A8F98] font-grotesk text-sm sm:text-base leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Tech badges */}
                      <div className="flex flex-wrap gap-2 mb-8 font-mono text-xs">
                        {project.technologies.map((tech, techIdx) => {
                          const isSpecial = tech === 'React' || tech === 'Recharts';
                          return (
                            <span
                              key={techIdx}
                              className={`px-2.5 py-1 bg-[#08090C] hairline-border ${
                                isSpecial
                                  ? 'border-[#E0314B]/40 text-[#E0314B] font-medium'
                                  : 'border-[#1A1D24] text-[#F5F1EA]'
                              }`}
                            >
                              {tech}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    {/* Bottom Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t hairline-border border-[#1A1D24]">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2.5 bg-[#E0314B] hover:bg-[#E0314B]/90 text-white font-mono text-xs uppercase tracking-wider rounded-sharp flex items-center gap-2 transition-all shadow-sm"
                        >
                          <span>Live</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <div className="text-xs font-mono text-[#8A8F98] flex items-center gap-1.5 py-2">
                          <span className="text-[#FFD9A0]">●</span>
                          <span>Concept blueprint — staging refactor underway</span>
                        </div>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2.5 hairline-border border-[#1A1D24] hover:border-[#E0314B] text-[#8A8F98] hover:text-[#F5F1EA] font-mono text-xs uppercase tracking-wider rounded-sharp flex items-center gap-2 transition-all bg-[#08090C]"
                        >
                          <span>GitHub</span>
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}

                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="px-4 py-2.5 hairline-border border-[#1A1D24] hover:border-[#E0314B]/60 text-[#8A8F98] hover:text-[#E0314B] font-mono text-xs uppercase tracking-wider rounded-sharp flex items-center gap-1.5 transition-all ml-auto"
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>Inspect Specs</span>
                      </button>
                    </div>
                  </div>

                  {/* Right Mockup Display */}
                  <div className="lg:col-span-6 bg-[#08090C] hairline-border border-[#1A1D24] p-5 rounded-sharp relative overflow-hidden group-hover:border-[#E0314B]/30 transition-all">
                    {/* Fake browser topbar */}
                    <div className="flex items-center justify-between pb-3 border-b hairline-border border-[#1A1D24] font-mono text-[11px] text-[#8A8F98]">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#E0314B]/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FFD9A0]/60" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#1A1D24]" />
                      </div>
                      <span className="truncate max-w-[240px]">
                        {project.liveUrl || `prototype://${project.id}.local`}
                      </span>
                    </div>

                    {/* Mockup Screen Content */}
                    <div className="pt-4 space-y-3">
                      <div className="h-32 sm:h-36 bg-[#0E1015] hairline-border border-[#1A1D24] flex flex-col items-center justify-center relative p-4 text-center">
                        <div className="font-mono text-xs text-[#E0314B] mb-1 font-semibold">
                          {project.mockup.statusBadge}
                        </div>
                        <div className="font-grotesk font-semibold text-[#F5F1EA] text-base sm:text-lg">
                          {project.mockup.title}
                        </div>
                        <div className="font-mono text-[10px] text-[#8A8F98] mt-1 max-w-sm">
                          {project.mockup.subtitle}
                        </div>
                      </div>

                      {/* 3 Telemetry KPIs */}
                      <div className="grid grid-cols-3 gap-2 font-mono text-[10px] text-center">
                        <div className="p-2 bg-[#0E1015] border border-[#1A1D24] text-[#8A8F98] truncate">
                          {project.metrics.label1}: <span className="text-[#F5F1EA] font-semibold">{project.metrics.val1}</span>
                        </div>
                        <div className="p-2 bg-[#0E1015] border border-[#E0314B]/40 text-[#E0314B] font-semibold truncate">
                          {project.metrics.label2}: {project.metrics.val2}
                        </div>
                        <div className="p-2 bg-[#0E1015] border border-[#1A1D24] text-[#8A8F98] truncate">
                          {project.metrics.label3}: <span className="text-[#F5F1EA] font-semibold">{project.metrics.val3}</span>
                        </div>
                      </div>

                      <div className="p-2 bg-[rgba(224,49,75,0.08)] border border-[#E0314B]/20 text-center text-[#E0314B] text-[10px] font-mono tracking-wider">
                        {project.mockup.footerNote}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </Reveal>
          ))
        )}
      </div>

      {/* Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />

    </section>
  );
};
