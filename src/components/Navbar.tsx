import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'work', 'code', 'about', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { num: '01', label: 'Work', href: '#work', id: 'work' },
    { num: '02', label: 'Code', href: '#code', id: 'code' },
    { num: '03', label: 'About', href: '#about', id: 'about' },
    { num: '04', label: 'Skills', href: '#skills', id: 'skills' },
    { num: '05', label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#08090C]/95 backdrop-blur-md shadow-lg'
          : 'bg-[#08090C]/90 backdrop-blur-sm'
      } hairline-border border-x-0 border-t-0`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16 h-20 flex items-center justify-between">
        
        {/* Monogram Brand */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 hairline-border border-[#E0314B]/60 bg-[#0E1015] flex items-center justify-center font-mono font-bold text-[#F5F1EA] text-sm tracking-widest rounded-sharp group-hover:border-[#E0314B] group-hover:shadow-[0_0_12px_rgba(224,49,75,0.3)] transition-all">
            {portfolioData.personal.monogram}
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-grotesk font-bold text-xs uppercase tracking-widest text-[#F5F1EA]">
              {portfolioData.personal.name}
            </span>
            <span className="font-mono text-[10px] text-[#8A8F98] tracking-wider">
              {portfolioData.personal.subRole}
            </span>
          </div>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8 font-mono text-xs uppercase tracking-wider text-[#8A8F98]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`transition-colors flex items-center gap-1.5 py-1 ${
                  isActive
                    ? 'text-[#F5F1EA] font-semibold'
                    : 'hover:text-[#F5F1EA]'
                }`}
              >
                <span className={isActive ? 'text-[#E0314B] font-bold' : 'text-[#E0314B]'}>
                  {link.num}
                </span>
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Status Pill & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2.5 px-3.5 py-1.5 hairline-border border-[#E0314B]/40 bg-[#0E1015] rounded-sharp">
            <span className="w-2 h-2 rounded-full bg-[#E0314B] pulse-dot shrink-0" />
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#F5F1EA] whitespace-nowrap">
              <span className="text-[#8A8F98]">Track:</span>{' '}
              <span className="text-[#E0314B] font-semibold">First-Year CSE (AI)</span>
            </span>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#8A8F98] hover:text-[#F5F1EA] hairline-border border-[#1A1D24] bg-[#0E1015] rounded-sharp"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#E0314B]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#08090C] border-b hairline-border border-[#1A1D24] px-6 py-6 space-y-4">
          <div className="flex items-center gap-2.5 px-3 py-2 hairline-border border-[#E0314B]/30 bg-[#0E1015] rounded-sharp mb-4">
            <span className="w-2 h-2 rounded-full bg-[#E0314B] pulse-dot" />
            <span className="font-mono text-xs uppercase text-[#F5F1EA]">
              <span className="text-[#8A8F98]">Track:</span>{' '}
              <span className="text-[#E0314B] font-semibold">First-Year CSE (AI)</span>
            </span>
          </div>

          <nav className="flex flex-col space-y-3 font-mono text-xs uppercase tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 hairline-border border-[#1A1D24] bg-[#0E1015] hover:border-[#E0314B] text-[#F5F1EA] rounded-sharp transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[#E0314B]">{link.num}</span>
                  <span>{link.label}</span>
                </div>
                <span className="text-[#8A8F98] text-[10px]">ROUTE ↗</span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
