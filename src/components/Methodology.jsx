import React from 'react';
import {
  Database,
  Filter,
  Search,
  PieChart,
  LayoutDashboard,
  BookOpen,
  Code2,
  CheckCheck,
  Cpu
} from 'lucide-react';

export default function Methodology() {
  const steps = [
    {
      step: "01",
      icon: Database,
      title: "Data Collection",
      subtitle: "Multi-Source Ingestion & Registry Compilation",
      description:
        "Gathering electric vehicle market attributes, manufacturer specifications, EPA/WLTP range ratings, battery capacities (kWh), and regional registration statistics across public automotive data portals and clean transportation registries.",
      deliverable: "Standardized source data tables"
    },
    {
      step: "02",
      icon: Filter,
      title: "Data Preparation & Cleansing",
      subtitle: "Schema Normalization & Null Handling",
      description:
        "Auditing raw records for incomplete telemetry, reconciling trim variances, deduplicating manufacturer name classifications, normalizing currency currencies to USD benchmarks, and converting imperial and metric range units.",
      deliverable: "Cleaned data schema ready for analysis"
    },
    {
      step: "03",
      icon: Search,
      title: "Exploratory Data Analysis (EDA)",
      subtitle: "Statistical Distributions & Outlier Auditing",
      description:
        "Computing statistical distributions across vehicle MSRP, battery capacity, curb weight, and energy efficiency. Calculating bivariate correlations between battery size (kWh) and real-world range to identify diminishing returns.",
      deliverable: "Correlation matrices & distribution profiles"
    },
    {
      step: "04",
      icon: PieChart,
      title: "Data Visualization Architecture",
      subtitle: "Visual Encoding & Cognitive Ergonomics",
      description:
        "Selecting appropriate visual idioms: horizontal bar charts for OEM volume ranking, scatter plots for price-range elasticity, geographical choropleths for territory penetration, and dual-axis line charts for adoption trends.",
      deliverable: "Visual grammar & mockups"
    },
    {
      step: "05",
      icon: LayoutDashboard,
      title: "Dashboard Development (Tableau Public)",
      subtitle: "Interactive Worksheets & Cross-Filtering",
      description:
        "Constructing the interactive executive workbook in Tableau Desktop/Public. Designing synchronized filter actions, calculated fields, dynamic tooltips, and responsive layout containers tailored for desktop and mobile devices.",
      deliverable: "Published Tableau Public Executive Dashboard"
    },
    {
      step: "06",
      icon: BookOpen,
      title: "Story Creation & Narrative Flow",
      subtitle: "Guided Macro & Micro Story Points",
      description:
        "Arranging sequential narrative sheets to guide stakeholders through the market transition story: from macroeconomic policy tipping points to micro-level battery chemistry trade-offs and charging infrastructure parity.",
      deliverable: "Tableau Story with sequential chapters"
    },
    {
      step: "07",
      icon: Code2,
      title: "Web Integration & Modern Frontend",
      subtitle: "React, Vite & Tableau Embedding API v3",
      description:
        "Developing this production-quality responsive web application using React and Vite. Embedding the Tableau workbook using the modern Tableau Embedding API v3 with responsive containers, device previews, and fallback resilience.",
      deliverable: "Complete responsive web platform"
    },
    {
      step: "08",
      icon: CheckCheck,
      title: "Testing, Optimization & Documentation",
      subtitle: "Cross-Device Validation & GitHub CI/CD",
      description:
        "Validating responsive behavior on mobile and desktop viewports, testing keyboard accessibility, configuring automated GitHub Pages deployment pipelines via GitHub Actions, and authoring comprehensive documentation.",
      deliverable: "Production deployment & documentation"
    }
  ];

  return (
    <section id="methodology" className="py-20 md:py-28 bg-[#070b14] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Engineering & Analytics Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Methodology & Implementation Lifecycle
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            A rigorous 8-stage engineering process bridging raw automotive telemetry, exploratory statistical modeling,
            Tableau Public business intelligence, and a modern responsive web presentation.
          </p>
        </div>

        {/* 8-Stage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="glass-panel glass-panel-hover p-5 rounded-2xl border border-slate-800/80 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-orange-500/15 text-orange-400 border border-orange-500/30">
                      Stage {item.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-slate-400 group-hover:text-orange-400 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1 tracking-tight">
                    {item.title}
                  </h3>
                  <span className="text-[11px] font-mono text-orange-400/90 block mb-2.5">
                    {item.subtitle}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80">
                  <span className="text-[10px] text-slate-500 font-mono block uppercase">
                    Deliverable:
                  </span>
                  <span className="text-xs font-medium text-slate-300">
                    {item.deliverable}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
