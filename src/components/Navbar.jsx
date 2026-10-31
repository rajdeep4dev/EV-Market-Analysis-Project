import React, { useState, useEffect } from 'react';
import { Zap, Menu, X, ExternalLink, Github, BarChart3, BookOpen, Layers, Cpu, Award } from 'lucide-react';
import { TABLEAU_CONFIG } from '../config/tableau.js';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Dashboard', href: '#dashboard', badge: 'Live' },
    { name: 'Story', href: '#story' },
    { name: 'Analytics', href: '#analytics' },
    { name: 'Methodology', href: '#methodology' },
    { name: 'Tech Stack', href: '#tech-stack' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090d16]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Title */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 p-[1.5px] shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/40 transition-shadow">
              <div className="w-full h-full bg-[#0b1120] rounded-[10px] flex items-center justify-center">
                <Zap className="w-5 h-5 text-orange-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-tight text-white flex items-center gap-1.5">
                EV <span className="text-orange-500">INSIGHTS</span>
              </span>
              <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">
                Market Performance Platform
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors relative flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
              >
                {link.name}
                {link.badge && (
                  <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-orange-500/20 text-orange-400 border border-orange-500/30 rounded-full">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* GitHub Repo Link */}
            <a
              href={TABLEAU_CONFIG.githubRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View on GitHub"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition focus:outline-none focus:ring-2 focus:ring-orange-500/50"
              title="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* Direct Tableau CTA */}
            <a
              href={TABLEAU_CONFIG.dashboardPublicPageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-orange-500/15 hover:bg-orange-500/25 border border-orange-500/30 text-orange-400 hover:text-orange-300 text-xs font-semibold tracking-wide transition shadow-sm active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Tableau Public</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={TABLEAU_CONFIG.dashboardPublicPageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-orange-500/20 text-orange-400 border border-orange-500/30"
              aria-label="Tableau Public"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#090d16]/98 border-b border-slate-800 px-4 pt-3 pb-6 mt-3 space-y-1 backdrop-blur-xl animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800/80 hover:text-orange-400 transition"
            >
              <span>{link.name}</span>
              {link.badge && (
                <span className="px-2 py-0.5 text-[10px] font-semibold bg-orange-500/20 text-orange-400 border border-orange-500/30 rounded-full">
                  {link.badge}
                </span>
              )}
            </a>
          ))}

          <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-2">
            <a
              href={TABLEAU_CONFIG.dashboardPublicPageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 font-bold text-sm"
            >
              <BarChart3 className="w-4 h-4" />
              <span>Launch Tableau Public Viz</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={TABLEAU_CONFIG.githubRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-800 text-slate-200 text-sm font-medium hover:bg-slate-700"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
