import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Banner } from './components/Banner';
import { CodeTimetable } from './components/CodeTimetable';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#08090C] text-[#F5F1EA] font-grotesk selection:bg-[#E0314B] selection:text-white relative overflow-x-hidden">
      
      {/* Background Subtle Grid / Transit Ruling */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#F5F1EA_1px,transparent_1px)] [background-size:24px_24px] z-0" 
        aria-hidden="true" 
      />

      {/* Navigation Topbar */}
      <Navbar />

      {/* Main Layout Container with Continuous Transit Spine Rail */}
      <main className="relative max-w-[1440px] mx-auto z-10">
        
        {/* Continuous Transit Line Spine (hidden on mobile, left-aligned on tablet/desktop) */}
        <div className="transit-spine hidden md:block" aria-hidden="true" />

        {/* Hero Section */}
        <Hero />

        {/* Stop 01: Work & Deployed Projects */}
        <Projects />

        {/* Divider Banner */}
        <Banner />

        {/* Stop 02: Code Timetable */}
        <CodeTimetable />

        {/* Stop 03: About & Milestones */}
        <About />

        {/* Stop 04: Transit Line Skills Map */}
        <Skills />

        {/* Education & Milestones Timeline */}
        <Experience />

        {/* Final Stop: Contact */}
        <Contact />

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
