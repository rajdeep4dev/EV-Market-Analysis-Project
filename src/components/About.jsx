import React from 'react';
import { Target, TrendingUp, LineChart, Globe2, Lightbulb, Compass, CheckCircle2 } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: Target,
      title: "What the Project Analyzes",
      description:
        "Investigates the global transition from internal combustion engines to battery electric vehicles (BEVs) and plug-in hybrids (PHEVs). Covers manufacturer market share, powertrain specs, vehicle MSRP vs range efficiency, and geographic adoption rates."
    },
    {
      icon: TrendingUp,
      title: "Why EV Market Analysis Matters",
      description:
        "The transport sector accounts for over 20% of global greenhouse emissions. Understanding OEM volume ramps, battery cell chemistry supply constraints, and grid readiness informs strategic policy, clean tech investments, and consumer transition decisions."
    },
    {
      icon: LineChart,
      title: "Purpose of Data Visualization",
      description:
        "Raw tables obscure multifaceted relationships. Dynamic interactive Tableau dashboards empower researchers, students, and evaluators to uncover non-linear correlations between kilowatt-hour capacity, vehicle weight, aerodynamic drag, and real-world range."
    },
    {
      icon: Globe2,
      title: "How It Empowers Exploratory Inquiry",
      description:
        "Provides frictionless multidimensional filtering across manufacturer cohorts, price bands, and regional policies. Users can isolate premium vs mass-market segments to witness how cost-per-kilometer is approaching cost parity."
    }
  ];

  const keyQuestions = [
    "Which automotive manufacturers lead in battery pack energy utilization?",
    "How strongly does price (MSRP) correlate with EPA / WLTP certified range?",
    "What regional incentives and geographical factors accelerate EV fleet expansion?",
    "How do battery capacity distributions vary between sedans, SUVs, and commercial haulers?",
    "At what threshold does battery weight trigger diminishing returns on range efficiency?"
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#070b14] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Lightbulb className="w-3.5 h-3.5" />
            <span>Academic Motivation & Purpose</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Understanding the Electric Mobility Paradigm Shift
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            A comprehensive investigation into the automotive industry's most significant disruption in over a century.
            Discover why empirical market intelligence is essential for stakeholders navigating the clean transportation era.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/80 hover:border-slate-700 transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/10 border border-orange-500/30 flex items-center justify-center mb-5 text-orange-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Inquiries / Questions Explored */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-950 border border-slate-800">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-md">
              <span className="text-xs font-bold text-orange-400 uppercase tracking-wider font-mono">
                Methodological Scope
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Core Research Inquiries
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                The visual models and analytical sheets were structured to resolve high-impact empirical questions regarding market behavior and consumer trade-offs.
              </p>
            </div>

            <div className="flex-1 w-full space-y-3">
              {keyQuestions.map((q, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-300 font-medium">
                    {q}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
