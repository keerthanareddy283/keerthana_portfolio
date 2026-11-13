import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, ArrowUpRight, Copy, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { Button } from './ui/Button';
import { Reveal } from './ui/Reveal';

// Optional Formspree endpoint; when empty, submissions prepare and launch a mailto: draft
const FORMSPREE_ENDPOINT: string = "";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Return email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format (e.g. name@example.com).';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const buildMailtoUrl = () => {
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name.trim()}`);
    const body = encodeURIComponent(
      `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\n${formData.message.trim()}`
    );
    return `mailto:${portfolioData.socials.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    if (FORMSPREE_ENDPOINT) {
      try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        if (!response.ok) throw new Error('Submission error');
      } catch (err) {
        console.error('Submission error:', err);
      }
    } else {
      window.location.href = buildMailtoUrl();
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="relative py-24 pl-6 sm:pl-8 md:pl-28 lg:pl-36 pr-6 sm:pr-8 lg:pr-16">
      
      {/* Final Station Node Marker */}
      <div className="hidden md:flex absolute -left-28 lg:-left-36 top-24 items-center z-20">
        <div className="w-5 h-5 rounded-full bg-[#E0314B] border-4 border-[#08090C] ring-4 ring-[rgba(224,49,75,0.25)]" />
      </div>

      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b hairline-border border-[#1A1D24]">
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-[#E0314B] mb-2 flex items-center gap-2">
            <span>FINAL STOP</span>
            <span className="text-[#8A8F98]">/ CONTACT</span>
          </div>
          <h2 className="font-grotesk font-bold text-4xl sm:text-5xl lg:text-6xl text-[#F5F1EA] tracking-tight">
            Final stop: let’s talk.
          </h2>
        </div>
        <div className="font-mono text-xs text-[#8A8F98] mt-4 md:mt-0 flex items-center gap-2">
          <span className="w-2 h-2 bg-emerald-400 rounded-full shrink-0" />
          <span>OPEN TO LEARNING &amp; COLLABORATING</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Direct Channels */}
        <div className="lg:col-span-5 space-y-8">
          <Reveal>
            <p className="font-grotesk text-lg text-[#8A8F98] leading-relaxed">
              Interested in connecting, sharing feedback on my projects, or collaborating on a web build? Feel free to reach out by email or check out my code on GitHub.
            </p>

            <div className="space-y-4 font-mono text-xs mt-8">
              
              {/* Email direct channel with copy toggle */}
              <div className="p-4 hairline-border border-[#1A1D24] hover:border-[#E0314B] bg-[#0E1015] rounded-sharp flex items-center justify-between group transition-colors">
                <a href={`mailto:${portfolioData.socials.email}`} className="truncate mr-3">
                  <div className="text-[10px] text-[#8A8F98] uppercase">Direct Email</div>
                  <div className="text-[#F5F1EA] font-semibold text-sm group-hover:text-[#E0314B] mt-0.5 truncate">
                    {portfolioData.socials.email}
                  </div>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 hairline-border border-[#1A1D24] hover:border-[#E0314B] bg-[#08090C] rounded-sharp text-[#8A8F98] hover:text-[#F5F1EA] transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* GitHub */}
              <a
                href={portfolioData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 hairline-border border-[#1A1D24] hover:border-[#E0314B] bg-[#0E1015] rounded-sharp flex items-center justify-between group transition-colors block"
              >
                <div>
                  <div className="text-[10px] text-[#8A8F98] uppercase">GitHub</div>
                  <div className="text-[#F5F1EA] font-semibold text-sm group-hover:text-[#E0314B] mt-0.5">
                    github.com/keerthanareddy283
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#E0314B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

            </div>

            <div className="p-4 bg-[#08090C] border border-[#E0314B]/30 font-mono text-xs text-[#8A8F98] rounded-sharp mt-6">
              <span className="text-[#E0314B] font-bold">[NOTE]</span> First-year B.Tech CSE (AI) student at NIAT in collaboration with Joy University. Always glad to connect and learn.
            </div>
          </Reveal>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <div className="hairline-border border-[#1A1D24] bg-[#0E1015] p-6 sm:p-8 rounded-sharp shadow-xl">
              
              <div className="font-mono text-xs text-[#8A8F98] uppercase tracking-wider mb-6 flex items-center justify-between pb-3 border-b border-[#1A1D24]">
                <span>SEND A MESSAGE</span>
                <span className="text-[#E0314B] font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#E0314B] pulse-dot" />
                  <span>MAILTO READY</span>
                </span>
              </div>

              {isSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[rgba(224,49,75,0.15)] border border-[#E0314B] flex items-center justify-center mx-auto text-[#E0314B]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-grotesk font-bold text-2xl text-[#F5F1EA]">
                    Message Ready to Send
                  </h3>
                  <p className="font-grotesk text-sm text-[#8A8F98] max-w-md mx-auto">
                    Thank you, <span className="text-[#F5F1EA] font-semibold">{formData.name}</span>. Your email client should open with a draft addressed to <span className="text-[#E0314B]">{portfolioData.socials.email}</span>.
                  </p>

                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <Button variant="outline" size="sm" onClick={handleReset}>
                      Write Another Message
                    </Button>
                    <Button
                      href={buildMailtoUrl()}
                      variant="primary"
                      size="sm"
                    >
                      Open Email Client
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  
                  {/* Name field */}
                  <div className="relative">
                    <label htmlFor="name" className="block font-mono text-[11px] text-[#8A8F98] uppercase mb-2">
                      01 / Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="Your name"
                      className={`w-full bg-[#08090C] px-4 py-3 border-b-2 text-[#F5F1EA] font-grotesk placeholder-[#8A8F98]/40 outline-none transition-colors rounded-none ${
                        errors.name
                          ? 'border-[#E0314B]'
                          : 'border-[#1A1D24] focus:border-[#E0314B]'
                      }`}
                    />
                    {errors.name && (
                      <div className="mt-1.5 flex items-center gap-1.5 font-mono text-[11px] text-[#E0314B]">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </div>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="relative">
                    <label htmlFor="email" className="block font-mono text-[11px] text-[#8A8F98] uppercase mb-2">
                      02 / Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="e.g. name@example.com"
                      className={`w-full bg-[#08090C] px-4 py-3 border-b-2 text-[#F5F1EA] font-grotesk placeholder-[#8A8F98]/40 outline-none transition-colors rounded-none ${
                        errors.email
                          ? 'border-[#E0314B]'
                          : 'border-[#1A1D24] focus:border-[#E0314B]'
                      }`}
                    />
                    {errors.email && (
                      <div className="mt-1.5 flex items-center gap-1.5 font-mono text-[11px] text-[#E0314B]">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>

                  {/* Message field */}
                  <div className="relative">
                    <label htmlFor="message" className="block font-mono text-[11px] text-[#8A8F98] uppercase mb-2">
                      03 / Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Say hello or share details about a project or learning opportunity..."
                      className={`w-full bg-[#08090C] px-4 py-3 border-b-2 text-[#F5F1EA] font-grotesk placeholder-[#8A8F98]/40 outline-none transition-colors rounded-none resize-none ${
                        errors.message
                          ? 'border-[#E0314B]'
                          : 'border-[#1A1D24] focus:border-[#E0314B]'
                      }`}
                    />
                    {errors.message && (
                      <div className="mt-1.5 flex items-center gap-1.5 font-mono text-[11px] text-[#E0314B]">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <span className="font-mono text-[11px] text-[#8A8F98]">
                      DIRECT MAILTO // {portfolioData.socials.email}
                    </span>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      variant="primary"
                      size="lg"
                      icon={<Send className="w-3.5 h-3.5" />}
                    >
                      {isSubmitting ? 'Preparing...' : 'Send Message'}
                    </Button>
                  </div>

                </form>
              )}

            </div>
          </Reveal>
        </div>

      </div>

    </section>
  );
};
