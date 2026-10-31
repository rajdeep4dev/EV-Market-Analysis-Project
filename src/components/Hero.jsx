import React from 'react';
import { Zap, ArrowRight, BookOpen, BarChart3, BatteryCharging, Gauge, Compass, ShieldCheck, Sparkles } from 'lucide-react';
import { TABLEAU_CONFIG } from '../config/tableau.js';

export default function Hero() {
  const highlights = [
    {
      icon: BatteryCharging,
      title: "Battery Dynamics",
      desc: "Capacity, pack architecture & chemical cell evolution"
    },
    {
      icon: Gauge,
      title: "Range & Pricing",
      desc: "Real-world driving range vs MSRP elasticity curves"
    },
    {
      icon: Compass,
      title: "Global Distribution",
      desc: "Cross-border adoption velocity and market penetration"
    },
    {
      icon: BarChart3,
      title: "OEM Benchmarking",
      desc: "Legacy automotive vs pure-play EV manufacturer output"
    }
  ];

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-orange-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-orange-500/30 shadow-inner text-xs font-medium text-orange-300">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="tracking-wide">Academic Portfolio Project &bull; {TABLEAU_CONFIG.academicYear}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            Electric Vehicle Market{' '}
            <span className="electric-gradient-text block mt-1 sm:inline">
              Performance & Insights
            </span>
          </h1>

          {/* Subtitle / Project Intro */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            A comprehensive, interactive analytics platform synthesizing worldwide electric mobility trends,
            OEM competition, pricing dynamics, battery chemistry advancements, and range efficiency powered by
            verified Tableau Public intelligence.
          </p>

          {/* CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#dashboard"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-orange-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <BarChart3 className="w-4 h-4 text-slate-950" />
              <span>Explore Dashboard</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </a>

            <a
              href="#story"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 text-slate-200 font-semibold text-sm tracking-wide transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-slate-500"
            >
              <BookOpen className="w-4 h-4 text-orange-400" />
              <span>Explore Story & Narrative</span>
            </a>
          </div>

          {/* Author attribution pill */}
          <div className="pt-2 flex items-center justify-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Curated by <strong className="text-slate-200 font-medium">{TABLEAU_CONFIG.author}</strong></span>
            <span className="text-slate-600">&bull;</span>
            <span className="text-slate-400 font-mono text-[11px]">Tableau Public Verified Embed</span>
          </div>
        </div>

        {/* Highlight Feature Badges Grid */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-5 rounded-2xl flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-3 group-hover:scale-105 group-hover:bg-orange-500/20 transition-all">
                    <Icon className="w-5 h-5 text-orange-400" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-1 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-normal">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-orange-400/90">
                  <span>Analytical Dimension #{idx + 1}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
