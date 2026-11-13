import React from 'react';
import { X, ExternalLink, Github, Zap, Sparkles } from 'lucide-react';
import { Project } from '../types/portfolio';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';

export interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-opacity duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#0E1015] hairline-border border-[#E0314B]/60 rounded-sharp p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-4 border-b hairline-border border-[#1A1D24] mb-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#E0314B] font-bold">{project.number}</span>
            <span className="text-[#8A8F98]">/</span>
            <span className="font-mono text-xs text-[#8A8F98]">{project.category}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#8A8F98] hover:text-[#F5F1EA] hover:border-[#E0314B] hairline-border border-[#1A1D24] bg-[#08090C] rounded-sharp transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Title & Domain */}
        <div className="mb-6">
          <div className="flex items-center gap-3 flex-wrap mb-1">
            <h3 className="font-grotesk font-bold text-3xl sm:text-4xl text-[#F5F1EA]">
              {project.title}
            </h3>
            {project.status === 'LIVE' && (
              <Badge variant="emerald" dot>LIVE DEPLOYMENT</Badge>
            )}
            {project.status === 'IN PROGRESS' && (
              <Badge variant="amber" dot>IN PROGRESS</Badge>
            )}
          </div>
          {project.tagline && (
            <p className="font-mono text-xs text-[#E0314B] italic mt-1">{project.tagline}</p>
          )}
          <p className="font-mono text-xs text-[#8A8F98] mt-1">{project.domain}</p>
        </div>

        {/* Problem Statement Card */}
        <div className="mb-6 p-4 bg-[#08090C] hairline-border border-[#1A1D24] rounded-sharp">
          <div className="font-mono text-[11px] text-[#E0314B] uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5" />
            <span>Goal &amp; Use Case</span>
          </div>
          <p className="font-grotesk text-sm text-[#F5F1EA] leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* Technical Architecture & What Was Built */}
        <div className="mb-6 space-y-3">
          <div className="font-mono text-[11px] text-[#8A8F98] uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#E0314B]" />
            <span>Overview &amp; Features</span>
          </div>
          <p className="font-grotesk text-sm sm:text-base text-[#8A8F98] leading-relaxed">
            {project.description}
          </p>
          <div className="p-4 bg-[rgba(224,49,75,0.06)] border border-[#E0314B]/30 rounded-sharp">
            <div className="font-mono text-[10px] text-[#E0314B] uppercase mb-1">What Was Built:</div>
            <p className="font-grotesk text-sm text-[#F5F1EA] font-medium">
              {project.outcome}
            </p>
          </div>
        </div>

        {/* Project Highlights Grid */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="p-3 bg-[#08090C] hairline-border border-[#1A1D24] text-center">
            <div className="font-mono text-[10px] text-[#8A8F98] uppercase">{project.metrics.label1}</div>
            <div className="font-mono text-xs font-bold text-[#F5F1EA] mt-1">{project.metrics.val1}</div>
          </div>
          <div className="p-3 bg-[#08090C] hairline-border border-[#E0314B]/40 text-center">
            <div className="font-mono text-[10px] text-[#E0314B] uppercase">{project.metrics.label2}</div>
            <div className="font-mono text-xs font-bold text-[#E0314B] mt-1">{project.metrics.val2}</div>
          </div>
          <div className="p-3 bg-[#08090C] hairline-border border-[#1A1D24] text-center">
            <div className="font-mono text-[10px] text-[#8A8F98] uppercase">{project.metrics.label3}</div>
            <div className="font-mono text-xs font-bold text-[#F5F1EA] mt-1">{project.metrics.val3}</div>
          </div>
        </div>

        {/* Tech Stack Badges */}
        <div className="mb-8">
          <div className="font-mono text-[11px] text-[#8A8F98] uppercase tracking-wider mb-2.5">
            Tech Stack:
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="subtle">{tech}</Badge>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t hairline-border border-[#1A1D24]">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <Button
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
                icon={<ExternalLink className="w-3.5 h-3.5" />}
              >
                Live
              </Button>
            )}
            {project.githubUrl && (
              <Button
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="md"
                icon={<Github className="w-3.5 h-3.5" />}
              >
                GitHub
              </Button>
            )}
          </div>
          
          <Button variant="ghost" size="sm" onClick={onClose}>
            Close Inspection [Esc]
          </Button>
        </div>

      </div>
    </div>
  );
};
