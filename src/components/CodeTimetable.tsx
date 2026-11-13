import React from 'react';
import { ExternalLink, GitBranch, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';

export const CodeTimetable: React.FC = () => {
  return (
    <section id="code" className="relative py-20 pl-6 sm:pl-8 md:pl-28 lg:pl-36 pr-6 sm:pr-8 lg:pr-16">
      
      {/* Section Title & Station Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b hairline-border border-[#1A1D24] relative">
        <div className="hidden md:flex absolute -left-28 lg:-left-36 -top-1 items-center z-20">
          <div className="station-node" />
        </div>

        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-[#E0314B] mb-2 flex items-center gap-2">
            <span>STOP 02</span>
            <span className="text-[#8A8F98]">/ 05</span>
            <span className="w-8 h-[1px] bg-[#E0314B]" />
            <span className="text-[#8A8F98]">REPOSITORIES &amp; COMMITS</span>
          </div>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-[#F5F1EA]">
            Code Timetable
          </h2>
        </div>
        <div className="mt-4 md:mt-0 font-mono text-xs">
          <a
            href={portfolioData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 hairline-border border-[#E0314B]/50 hover:bg-[#E0314B] hover:text-white text-[#E0314B] transition-all inline-flex items-center gap-2 rounded-sharp bg-[#0E1015]"
          >
            <span>github.com/keerthanareddy283</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Timetable Style Table */}
      <Reveal>
        <div className="hairline-border border-[#1A1D24] bg-[#0E1015] rounded-sharp overflow-x-auto shadow-lg">
          <table className="w-full text-left font-mono text-xs min-w-[700px]">
            <thead className="border-b hairline-border border-[#1A1D24] text-[#8A8F98] bg-[#08090C]/90 uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-4 px-6">Repository</th>
                <th className="py-4 px-6">Description</th>
                <th className="py-4 px-6">Language / Tech</th>
                <th className="py-4 px-6">Year</th>
                <th className="py-4 px-6 text-right">Repository Link</th>
              </tr>
            </thead>
            <tbody className="divide-y hairline-border divide-[#1A1D24]">
              {portfolioData.repositories.map((repo) => (
                <tr key={repo.name} className="hover:bg-[#08090C]/60 transition-colors group">
                  <td className="py-5 px-6 font-bold text-[#F5F1EA] group-hover:text-[#E0314B] transition-colors flex items-center gap-2">
                    <span className="text-[#E0314B]">●</span>
                    <span>{repo.name}</span>
                  </td>
                  <td className="py-5 px-6 text-[#8A8F98] font-grotesk max-w-xs text-sm">
                    {repo.description}
                  </td>
                  <td className="py-5 px-6">
                    <span className="px-2.5 py-1 bg-[#08090C] border border-[#1A1D24] text-[#F5F1EA] rounded-sharp">
                      {repo.language}
                    </span>
                  </td>
                  <td className="py-5 px-6 text-[#8A8F98]">
                    {repo.updated}
                  </td>
                  <td className="py-5 px-6 text-right">
                    <a
                      href={repo.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#E0314B] hover:underline font-semibold tracking-wider inline-flex items-center gap-1"
                    >
                      <span>GITHUB</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      {/* Commit Telemetry Footer */}
      <div className="mt-4 flex flex-wrap items-center justify-between text-[#8A8F98] font-mono text-[11px] px-2">
        <div className="flex items-center gap-2">
          <GitBranch className="w-3.5 h-3.5 text-[#E0314B]" />
          <span>PUBLIC REPOSITORIES // GITHUB</span>
        </div>
        <div>
          <span>BUILT WITH AI-ASSISTED DEVELOPMENT</span>
        </div>
      </div>

    </section>
  );
};
