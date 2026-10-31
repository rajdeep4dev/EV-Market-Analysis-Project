import React, { useState } from 'react';
import { BookOpen, ExternalLink, Settings, Sparkles, CheckCircle2, ChevronRight, AlertCircle, FileCode } from 'lucide-react';
import TableauEmbed from './TableauEmbed.jsx';
import { TABLEAU_CONFIG } from '../config/tableau.js';

export default function Story() {
  // Allow user to test or configure story URL live in the browser, falling back to config file
  const [customStoryUrl, setCustomStoryUrl] = useState(() => {
    return localStorage.getItem('ev_insights_custom_story_url') || TABLEAU_CONFIG.storyUrl || '';
  });
  const [inputUrl, setInputUrl] = useState(customStoryUrl);
  const [showConfigModal, setShowConfigModal] = useState(false);

  const activeStoryUrl = customStoryUrl.trim();
  const hasValidStoryUrl = activeStoryUrl.length > 0;

  const handleSaveUrl = (e) => {
    e.preventDefault();
    setCustomStoryUrl(inputUrl);
    localStorage.setItem('ev_insights_custom_story_url', inputUrl);
    setShowConfigModal(false);
  };

  const handleClearUrl = () => {
    setCustomStoryUrl('');
    setInputUrl('');
    localStorage.removeItem('ev_insights_custom_story_url');
  };

  // Structured Story Narrative Chapters
  const storyChapters = [
    {
      chapter: "01",
      title: "Market Inflection & S-Curve Adoption",
      subtitle: "The tipping point where electric drivetrains transition from early adopters to mainstream mass market.",
      narrative: [
        "Historical adoption patterns indicate that once an alternative fuel vehicle reaches ~5% of new vehicle sales in a territory, market penetration accelerates non-linearly.",
        "Regulatory phase-outs of internal combustion engines and fleet emission penalties serve as key catalysts forcing vehicle manufacturers to electrify foundational nameplates.",
        "Total Cost of Ownership (TCO) parity is increasingly achieved earlier in high-utilization commercial fleets due to reduced maintenance and drivetrain part complexity."
      ],
      metricsContext: "Explanatory commentary on macroeconomic market momentum and fleet transition dynamics."
    },
    {
      chapter: "02",
      title: "OEM Market Dynamics: Pure-Play vs Legacy",
      subtitle: "Strategic agility, supply chain vertical integration, and dedicated EV skateboard architecture.",
      narrative: [
        "Pure-play EV manufacturers benefited from clean-sheet vehicle design without legacy powertrain compromise or dealership margin friction.",
        "Incumbent original equipment manufacturers (OEMs) leverage massive capital reserves, global tooling networks, and trusted brand equity to scale multi-segment product lines.",
        "Software-defined vehicle (SDV) capabilities and over-the-air (OTA) powertrain efficiency updates have emerged as fundamental competitive differentiators."
      ],
      metricsContext: "Explanatory commentary on automotive industrial strategies and competitive posturing."
    },
    {
      chapter: "03",
      title: "Battery Chemistry & Energy Density",
      subtitle: "The cathode technology spectrum: Lithium Iron Phosphate (LFP) vs Nickel Manganese Cobalt (NMC).",
      narrative: [
        "LFP chemistries dominate cost-conscious urban models due to exceptional cycle longevity, fire safety stability, and reliance on abundant iron/phosphate minerals.",
        "High-nickel chemistries (NMC/NCA) power long-range crossovers and performance platforms where gravimetric energy density (Wh/kg) is critical.",
        "Cell-to-pack (CTP) structural architectures eliminate redundant modular casings, boosting volumetric packaging efficiency by up to 20%."
      ],
      metricsContext: "Technical synthesis of electrochemical trends influencing vehicle weight and pack sizing."
    },
    {
      chapter: "04",
      title: "Price Elasticity vs Real-World Range",
      subtitle: "Decoupling range anxiety from prohibitive premium vehicle MSRPs.",
      narrative: [
        "Consumer survey data consistently reveals 400–500 km (250–310 miles) as the psychological barrier eliminating daily commuter range anxiety.",
        "Automakers initially satisfied range demands by packing oversized 100+ kWh battery packs, inflating curb weights and vehicle acquisition costs.",
        "Current market frontiers focus on aerodynamic drag reduction (Cd < 0.22) and 800V silicon-carbide (SiC) inverters to deliver longer range from smaller, cheaper packs."
      ],
      metricsContext: "Economic and engineering trade-off analysis between battery size, cost, and efficiency."
    },
    {
      chapter: "05",
      title: "Geographical Distribution & Charging Parity",
      subtitle: "Regional adoption velocity dictated by grid capacity, subsidies, and high-power DC fast charging.",
      narrative: [
        "Metropolitan corridors with dense DC fast-charging clusters exhibit 3x higher adoption rates compared to regions reliant purely on Level 2 municipal charging.",
        "National tax exemptions, toll fee reductions, and zero-emission vehicle mandates generate pronounced regional variance in registration figures.",
        "Emerging markets prioritize two- and three-wheeler electrification where battery swapping networks mitigate initial upfront purchase premiums."
      ],
      metricsContext: "Macro-regional infrastructure synthesis examining the charging-to-vehicle ratio."
    }
  ];

  return (
    <section id="story" className="py-20 md:py-28 bg-[#070b14] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Tableau Story & Market Narrative</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              EV Market Story & Thematic Analysis
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
              Explore sequential analytical storylines detailing the structural forces reshaping global mobility.
              View the embedded Tableau Story or navigate our comprehensive chapter insights below.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Story Configuration Setting Button */}
            <button
              onClick={() => setShowConfigModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs sm:text-sm font-medium transition"
            >
              <Settings className="w-4 h-4 text-orange-400" />
              <span>{hasValidStoryUrl ? 'Configure Story Link' : 'Set Story URL'}</span>
            </button>

            {hasValidStoryUrl && (
              <a
                href={TABLEAU_CONFIG.storyPublicPageUrl || activeStoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-orange-500/20 transition-all transform active:scale-95"
              >
                <span>Open Story in Tableau</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Tableau Story Embed / Config Setting Block */}
        {hasValidStoryUrl ? (
          <div className="mb-16">
            <TableauEmbed
              src={activeStoryUrl}
              publicPageUrl={TABLEAU_CONFIG.storyPublicPageUrl || activeStoryUrl}
              title="Tableau EV Market Story"
              height={820}
              hideTabs={false}
            />
          </div>
        ) : (
          <div className="mb-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800/90 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/5 blur-3xl pointer-events-none rounded-full" />
            
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 text-xs font-semibold mb-3 border border-amber-500/20 font-mono">
                  <Sparkles className="w-3.5 h-3.5" />
                  Tableau Story Embed Configuration
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Connect Your Published Tableau Story
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                  The executive dashboard is live above. If you have published your dedicated Tableau Story sheet to Tableau Public,
                  you can paste its view URL here for an instant live embed, or configure it permanently in{' '}
                  <code className="text-orange-400 bg-slate-950 px-1.5 py-0.5 rounded font-mono text-xs">src/config/tableau.js</code>.
                </p>
              </div>

              <button
                onClick={() => setShowConfigModal(true)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-orange-500/25 transition active:scale-95 shrink-0"
              >
                <Settings className="w-4 h-4" />
                <span>Configure Story Embed</span>
              </button>
            </div>
          </div>
        )}

        {/* Modal / Slide-out for Story URL configuration */}
        {showConfigModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <div className="bg-[#0b1120] border border-slate-700 rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Settings className="w-5 h-5 text-orange-400" />
                Configure Tableau Story Embed URL
              </h3>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                Paste the full URL of your published Tableau Public Story below to embed it immediately into the website.
              </p>

              <form onSubmit={handleSaveUrl} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Tableau Story View URL
                  </label>
                  <input
                    type="url"
                    value={inputUrl}
                    onChange={(e) => setInputUrl(e.target.value)}
                    placeholder="https://public.tableau.com/views/YourWorkbook/YourStorySheet"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <span className="text-[11px] text-slate-500 mt-1 block">
                    Example: <code className="text-slate-400">https://public.tableau.com/views/.../EVStory</code>
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400 space-y-1">
                  <div className="flex items-center gap-1.5 font-semibold text-slate-300">
                    <FileCode className="w-3.5 h-3.5 text-orange-400" />
                    <span>Permanent Deployment Configuration:</span>
                  </div>
                  <p>
                    To save this permanently for GitHub Pages, update <code className="text-orange-400">storyUrl</code> inside <code className="text-orange-400 font-mono">src/config/tableau.js</code>.
                  </p>
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  {customStoryUrl && (
                    <button
                      type="button"
                      onClick={handleClearUrl}
                      className="px-3.5 py-2 rounded-xl text-xs text-red-400 hover:bg-red-500/10 transition"
                    >
                      Clear URL
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => setShowConfigModal(false)}
                    className="px-4 py-2 rounded-xl text-xs text-slate-300 hover:bg-slate-800 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-slate-950 font-bold text-xs transition"
                  >
                    Save & Embed
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Narrative & Story Insights Chapters */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Analytical Storyline & Key Market Chapters
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Structured domain breakdown synthesizing the macroeconomic and technological pillars of the EV transition.
              </p>
            </div>
            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] text-slate-400 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
              <span>5 Chapters</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {storyChapters.map((story) => (
              <div
                key={story.chapter}
                className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between border border-slate-800/80"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-orange-500/80">
                      {story.chapter}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                      Analytical Pillar
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white mb-1.5 leading-snug">
                    {story.title}
                  </h4>
                  <p className="text-xs text-orange-400/90 font-medium mb-4 leading-relaxed">
                    {story.subtitle}
                  </p>

                  <div className="space-y-2.5 text-xs text-slate-300 leading-relaxed">
                    {story.narrative.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2">
                        <ChevronRight className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  <span className="text-[10px] text-slate-500 block leading-tight font-mono">
                    {story.metricsContext}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Academic Disclaimer regarding Explanatory text */}
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 flex items-start gap-3 text-xs text-slate-400">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p>
              <strong className="text-slate-300">Methodological Note:</strong> The narrative chapters above provide explanatory conceptual context surrounding the market dynamics. For empirical calculations and interactive data filtering, explore the verified live visual workbook embedded in the <a href="#dashboard" className="text-orange-400 underline hover:text-orange-300">Dashboard</a> section.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
