import React, { useState } from 'react';
import { ArrowDown, Github, Mail, Code2 } from 'lucide-react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  const { personal, departureBoard } = portfolioData;
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const hasHeroImage = Boolean(personal.images.heroNightShot) && !imageError;

  return (
    <section id="hero" className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 pl-6 sm:pl-8 md:pl-28 lg:pl-36 pr-6 sm:pr-8 lg:pr-16">
      
      {/* Origin & Transit ID Tag */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 font-mono text-xs text-[#8A8F98] tracking-widest uppercase"
      >
        <span className="w-2.5 h-2.5 bg-[#E0314B] rounded-full inline-block shrink-0 pulse-dot" />
        <span>Origin: {personal.origin}</span>
        <span className="text-[#E0314B]">//</span>
        <span>{personal.name}</span>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Editorial Headline & Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-7 z-20"
        >
          <h1 className="font-grotesk font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] leading-[1.05] tracking-tight text-[#F5F1EA] mb-6">
            {personal.heroHeadline}{' '}
            <span className="text-[#E0314B] underline decoration-[#E0314B]/50 underline-offset-8">
              {personal.heroHeadlineAccent}
            </span>
          </h1>
          
          <p className="font-grotesk text-lg lg:text-xl text-[#8A8F98] max-w-xl mb-10 leading-relaxed">
            {personal.heroBio}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <Button
              href="#work"
              variant="primary"
              size="lg"
              icon={<ArrowDown className="w-4 h-4" />}
            >
              View Projects
            </Button>
            
            <Button
              href="#contact"
              variant="secondary"
              size="lg"
              icon={<Mail className="w-4 h-4 text-[#8A8F98]" />}
            >
              Contact Me
            </Button>
          </div>

          {/* Social Links Row */}
          <div className="flex items-center gap-4 mb-10">
            <span className="font-mono text-xs text-[#8A8F98] uppercase tracking-wider">Links:</span>
            <div className="flex items-center gap-2">
              <a
                href={portfolioData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hairline-border border-[#1A1D24] hover:border-[#E0314B] text-[#8A8F98] hover:text-[#F5F1EA] bg-[#0E1015] rounded-sharp transition-colors"
                title="GitHub Profile"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${portfolioData.socials.email}`}
                className="p-2 hairline-border border-[#1A1D24] hover:border-[#E0314B] text-[#8A8F98] hover:text-[#F5F1EA] bg-[#0E1015] rounded-sharp transition-colors"
                title={`Email ${personal.name}`}
                aria-label={`Email ${personal.name}`}
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Info Indicators */}
          <div className="grid grid-cols-3 gap-3 pt-6 border-t hairline-border border-[#1A1D24] max-w-lg font-mono text-xs">
            <div>
              <div className="text-[#8A8F98] text-[10px] uppercase tracking-wider">Degree</div>
              <div className="text-[#F5F1EA] font-semibold mt-0.5">{personal.specialization}</div>
            </div>
            <div>
              <div className="text-[#8A8F98] text-[10px] uppercase tracking-wider">Approach</div>
              <div className="text-[#F5F1EA] font-semibold mt-0.5">{personal.stackFocus}</div>
            </div>
            <div>
              <div className="text-[#8A8F98] text-[10px] uppercase tracking-wider">Status</div>
              <div className="text-[#E0314B] font-semibold mt-0.5">{personal.availability}</div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Portrait Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[420px] aspect-[9/16] rounded-sharp overflow-hidden hairline-border border-[#1A1D24] shadow-2xl bg-[#0E1015]">
            {/* Soft amber glow */}
            <div className="absolute top-[28%] left-[45%] w-28 h-28 bg-[#FFD9A0]/20 blur-3xl pointer-events-none rounded-full z-10" />
            
            {/* Vignette & Edge Blend into Page BG */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-transparent to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#08090C] via-transparent to-transparent opacity-80 z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#08090C]/60 via-transparent to-[#08090C]/80 z-10 pointer-events-none" />

            {hasHeroImage ? (
              <img
                src={personal.images.heroNightShot}
                alt={`${personal.name} — ${personal.role}`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                className={`w-full h-full object-cover object-center filter brightness-95 contrast-105 transition-opacity duration-500 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#0E1015]">
                <div className="w-20 h-20 rounded-full border-2 border-[#E0314B] flex items-center justify-center mb-5 bg-[#08090C]">
                  <Code2 className="w-9 h-9 text-[#E0314B]" />
                </div>
                <div className="font-grotesk font-bold text-2xl text-[#F5F1EA]">{personal.name}</div>
                <div className="font-mono text-xs text-[#8A8F98] mt-2">First-year B.Tech CSE (AI)</div>
                <div className="font-mono text-[11px] text-[#E0314B] mt-1">{personal.origin}</div>
              </div>
            )}

            {/* Route Stamp Overlay */}
            <div className="absolute bottom-4 left-4 right-4 z-20 font-mono text-[10px] p-3 bg-[#08090C]/85 backdrop-blur-sm hairline-border border-[#1A1D24] flex items-center justify-between">
              <span className="text-[#8A8F98]">CSE (AI) // FIRST YEAR</span>
              <span className="text-[#E0314B] font-semibold tracking-wider">{personal.transitId}</span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Departure Board Strip at Hero Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="mt-14 hairline-border border-[#E0314B]/40 bg-[#0E1015] p-4 rounded-sharp overflow-x-auto shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
      >
        <div className="flex items-center justify-between min-w-[760px] font-mono text-xs flap-board">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-[#E0314B] rounded-full animate-ping" />
            <span className="text-[#8A8F98]">ORIGIN:</span>
            <span className="text-[#F5F1EA] font-semibold">{departureBoard.departure}</span>
          </div>
          <div className="text-[#1A1D24]">|</div>
          <div className="flex items-center gap-2">
            <span className="text-[#8A8F98]">FOCUS:</span>
            <span className="text-[#F5F1EA] font-semibold bg-[#08090C] px-2.5 py-0.5 border border-[#1A1D24]">
              {departureBoard.destination}
            </span>
          </div>
          <div className="text-[#1A1D24]">|</div>
          <div className="flex items-center gap-2">
            <span className="text-[#8A8F98]">TRACK:</span>
            <span className="text-[#F5F1EA]">{departureBoard.track}</span>
          </div>
          <div className="text-[#1A1D24]">|</div>
          <div className="flex items-center gap-2">
            <span className="text-[#8A8F98]">STATUS:</span>
            <span className="text-[#E0314B] font-bold bg-[rgba(224,49,75,0.15)] px-2.5 py-0.5 rounded-sharp border border-[#E0314B]/30">
              {departureBoard.status}
            </span>
          </div>
        </div>
      </motion.div>

    </section>
  );
};
