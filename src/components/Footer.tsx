import React from 'react';
import { ArrowUp, Github, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t hairline-border border-[#1A1D24] py-12 px-6 sm:px-8 lg:px-16 text-[#8A8F98] font-mono text-xs bg-[#08090C]">
      <div className="max-w-[1440px] mx-auto space-y-8">
        
        {/* Top Row: Quick Station Links & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b hairline-border border-[#1A1D24]">
          <div className="flex items-center gap-6 text-[11px] uppercase tracking-wider flex-wrap justify-center sm:justify-start">
            <a href="#hero" className="hover:text-[#F5F1EA] transition-colors">00 Top</a>
            <a href="#work" className="hover:text-[#F5F1EA] transition-colors">01 Work</a>
            <a href="#code" className="hover:text-[#F5F1EA] transition-colors">02 Code</a>
            <a href="#about" className="hover:text-[#F5F1EA] transition-colors">03 About</a>
            <a href="#skills" className="hover:text-[#F5F1EA] transition-colors">04 Skills</a>
            <a href="#contact" className="hover:text-[#F5F1EA] transition-colors">05 Contact</a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-1.5 hairline-border border-[#1A1D24] hover:border-[#E0314B] bg-[#0E1015] hover:text-[#F5F1EA] rounded-sharp transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#E0314B]" />
          </button>
        </div>

        {/* Bottom Row: Copyright & Direct Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[#E0314B]" />
            <span className="text-[#F5F1EA] font-semibold">
              &copy; {new Date().getFullYear()} {portfolioData.personal.name}
            </span>
            <span className="text-[#1A1D24] hidden sm:inline">|</span>
            <span className="text-[#8A8F98]">
              {portfolioData.personal.origin}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px]">
              Built with React, TypeScript &amp; Tailwind CSS
            </span>
            <a
              href={`mailto:${portfolioData.socials.email}`}
              className="p-1.5 hairline-border border-[#1A1D24] hover:border-[#E0314B] text-[#8A8F98] hover:text-[#F5F1EA] bg-[#0E1015] rounded-sharp transition-colors"
              title={`Email ${portfolioData.personal.name}`}
              aria-label={`Email ${portfolioData.personal.name}`}
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
            <a
              href={portfolioData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 hairline-border border-[#1A1D24] hover:border-[#E0314B] text-[#8A8F98] hover:text-[#F5F1EA] bg-[#0E1015] rounded-sharp transition-colors"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
