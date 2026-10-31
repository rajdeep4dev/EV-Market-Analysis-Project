import React from 'react';
import { Zap, Github, ArrowUp, BarChart3, ExternalLink, ShieldCheck } from 'lucide-react';
import { TABLEAU_CONFIG } from '../config/tableau.js';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#05080f] border-t border-slate-900 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Project Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 p-[1.5px]">
                <div className="w-full h-full bg-[#0b1120] rounded-[7px] flex items-center justify-center">
                  <Zap className="w-4 h-4 text-orange-400" />
                </div>
              </div>
              <span className="font-extrabold text-base tracking-tight text-white">
                {TABLEAU_CONFIG.projectShortTitle}
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              {TABLEAU_CONFIG.projectTitle} is a college academic evaluation and portfolio project analyzing
              the global electric vehicle transition through interactive business intelligence and verified Tableau Public visualizations.
            </p>

            <div className="flex items-center gap-2 text-slate-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Project Lead: <strong className="text-slate-200">{TABLEAU_CONFIG.author}</strong></span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-mono">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-orange-400 transition">Project Overview</a>
              </li>
              <li>
                <a href="#about" className="hover:text-orange-400 transition">About Research</a>
              </li>
              <li>
                <a href="#dashboard" className="hover:text-orange-400 transition">Executive Dashboard</a>
              </li>
              <li>
                <a href="#story" className="hover:text-orange-400 transition">Tableau Market Story</a>
              </li>
              <li>
                <a href="#analytics" className="hover:text-orange-400 transition">Analytics Modules</a>
              </li>
              <li>
                <a href="#methodology" className="hover:text-orange-400 transition">8-Stage Methodology</a>
              </li>
              <li>
                <a href="#tech-stack" className="hover:text-orange-400 transition">Technology Stack</a>
              </li>
            </ul>
          </div>

          {/* External Links & Verified Artifacts */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-mono">
              Resources & Repository
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={TABLEAU_CONFIG.githubRepoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href={TABLEAU_CONFIG.dashboardPublicPageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition flex items-center gap-1.5"
                >
                  <BarChart3 className="w-3.5 h-3.5" />
                  <span>Tableau Public Workbook</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href={TABLEAU_CONFIG.tableauProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition flex items-center gap-1.5"
                >
                  <span>Tableau Public Profile</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} {TABLEAU_CONFIG.projectShortTitle} &bull; Academic Portfolio Project by {TABLEAU_CONFIG.author}. Hosted via GitHub Pages.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition text-xs focus:outline-none focus:ring-2 focus:ring-orange-500"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-orange-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
