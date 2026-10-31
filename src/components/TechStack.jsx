import React from 'react';
import { Layers, CheckCircle2, Code2, Sparkles, Globe, Terminal, FileCode, BarChart } from 'lucide-react';
import { TABLEAU_CONFIG } from '../config/tableau.js';

export default function TechStack() {
  const technologies = [
    {
      name: "React",
      category: "Frontend Framework",
      version: "v19",
      role: "Component-driven architecture for state management, modular section rendering, and interactive UI states.",
      highlight: "Declarative UI & Hooks"
    },
    {
      name: "Vite",
      category: "Build Tool & Bundler",
      version: "v8",
      role: "Ultra-fast ES module development server and optimized static asset packaging for GitHub Pages deployment.",
      highlight: "Instant HMR & Bundling"
    },
    {
      name: "JavaScript",
      category: "Programming Language",
      version: "ES2022+",
      role: "Standardized ECMAScript driving application logic, dynamic DOM bindings, and event orchestration without transpilation bloat.",
      highlight: "Clean Client-Side Execution"
    },
    {
      name: "HTML5",
      category: "Markup & Semantics",
      version: "Living Standard",
      role: "Accessible semantic structure, OpenGraph rich card metadata, viewport controls, and SEO tags.",
      highlight: "Accessible Semantic Core"
    },
    {
      name: "CSS3 & Tailwind CSS",
      category: "Styling & Design System",
      version: "v4",
      role: "High-performance utility styling, custom electric orange design tokens, glassmorphism blur effects, and responsive breakpoints.",
      highlight: "Responsive Design System"
    },
    {
      name: "Tableau Public",
      category: "Business Intelligence",
      version: "Embedding API v3",
      role: "Host platform for the interactive executive workbook, calculated fields, multi-dimensional filters, and chart rendering.",
      highlight: "Interactive Visual Analytics"
    },
    {
      name: "GitHub",
      category: "Version Control & CI/CD",
      version: "Git VCS",
      role: "Source code repository management, versioning, collaboration, and automated workflow triggers via GitHub Actions.",
      highlight: "Source Control & Workflows"
    },
    {
      name: "GitHub Pages",
      category: "Cloud Hosting",
      version: "Static Edge",
      role: "Global CDN static site hosting deploying straight from the repository with automated GitHub Actions workflows.",
      highlight: "Zero-Cost Serverless Hosting"
    }
  ];

  return (
    <section id="tech-stack" className="py-20 md:py-28 bg-[#090d16] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Architecture & Tooling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Production Technology Stack
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Engineered exclusively with lightweight, open web standards and official business intelligence embeds.
            No server runtime dependencies, Python bottlenecks, or proprietary third-party hosting platforms.
          </p>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="glass-panel glass-panel-hover p-5 rounded-2xl border border-slate-800/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                    {tech.category}
                  </span>
                  <span className="text-[11px] font-mono text-orange-400 font-semibold">
                    {tech.version}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1 tracking-tight">
                  {tech.name}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {tech.role}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-mono text-orange-400/90">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <span>{tech.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Deployment Guarantee Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-orange-500/10 via-amber-500/5 to-transparent border border-orange-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">GitHub Pages Ready Deployment</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Pre-configured with dynamic relative base paths and GitHub Actions CI/CD pipeline for instant push-to-deploy.
              </p>
            </div>
          </div>
          <a
            href={TABLEAU_CONFIG.githubRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200 transition shrink-0"
          >
            Inspect GitHub Actions Workflow
          </a>
        </div>
      </div>
    </section>
  );
}
