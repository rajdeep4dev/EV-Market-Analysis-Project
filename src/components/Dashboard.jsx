import React from 'react';
import { ExternalLink, BarChart, Layers, HelpCircle, Info, ShieldCheck } from 'lucide-react';
import TableauEmbed from './TableauEmbed.jsx';
import { TABLEAU_CONFIG } from '../config/tableau.js';

export default function Dashboard() {
  return (
    <section id="dashboard" className="py-20 md:py-28 bg-[#090d16] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <BarChart className="w-3.5 h-3.5" />
              <span>Tableau Public Interactive Embed</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              EV Executive Dashboard
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
              Interact with the official published Tableau workbook. Filter by manufacturer, analyze pricing distributions,
              examine battery capacities, and explore geographical concentration in real time.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={TABLEAU_CONFIG.dashboardPublicPageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-orange-500/20 transition-all transform active:scale-95"
            >
              <span>Open in Tableau Public</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Tableau Interactive Visualization Canvas */}
        <div className="w-full">
          <TableauEmbed
            src={TABLEAU_CONFIG.dashboardUrl}
            publicPageUrl={TABLEAU_CONFIG.dashboardPublicPageUrl}
            title="EV Executive Dashboard"
            height={850}
            hideTabs={true}
          />
        </div>

        {/* Guidance and Tips Bar */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400 shrink-0">
              <Info className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-200">Interactive Filtering</h4>
              <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                Click directly on any bar, scatter bubble, or map region inside the viz to filter associated metric cards simultaneously.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400 shrink-0">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-200">Tooltip Diagnostics</h4>
              <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                Hover over data points to reveal granular metrics including exact battery pack kWh, certified ranges, and model variants.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400 shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-200">Tableau Public Host</h4>
              <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                Rendered securely via Tableau Public cloud infrastructure. No credentials, tokens, or sign-in needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
