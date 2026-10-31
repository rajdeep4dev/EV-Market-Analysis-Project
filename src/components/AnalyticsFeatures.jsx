import React from 'react';
import {
  TrendingUp,
  DollarSign,
  Globe2,
  Battery,
  Gauge,
  Factory,
  Zap,
  ArrowUpRight,
  SlidersHorizontal,
  ChevronRight
} from 'lucide-react';

export default function AnalyticsFeatures() {
  const features = [
    {
      id: "sales-analysis",
      icon: TrendingUp,
      title: "Manufacturer Sales Analysis",
      category: "Volume & Growth Trajectory",
      badge: "Market Penetration",
      description:
        "Evaluates aggregate electric vehicle unit delivery rates, year-over-year expansion curves, and quarter-by-quarter momentum across key automotive marques.",
      keyMetrics: ["Annual Delivery Volume", "YoY Growth Rate %", "Market Share Capture", "Fleet Mix (BEV vs PHEV)"],
      focusQuestions: "Which OEMs are accelerating production volume to achieve economies of scale?"
    },
    {
      id: "pricing-comparison",
      icon: DollarSign,
      title: "EV Pricing Comparison",
      category: "Economic Stratification",
      badge: "Affordability Index",
      description:
        "Analyzes manufacturer suggested retail prices (MSRP) across vehicle form factors—ranging from budget compact hatchbacks to ultra-luxury performance saloons and tri-motor pickups.",
      keyMetrics: ["Base MSRP vs Trims", "Price per kWh Battery Capacity", "Federal/State Subsidy Impact", "Residual Value Retention"],
      focusQuestions: "How rapidly are battery price reductions cascading down to mass-market consumer price tags?"
    },
    {
      id: "country-distribution",
      icon: Globe2,
      title: "Country-wise EV Distribution",
      category: "Geographic Penetration",
      badge: "Regional Velocity",
      description:
        "Maps international adoption percentages, clean vehicle subsidies, zero-emission vehicle mandates, and municipal charging point density across leading EV nations.",
      keyMetrics: ["New Car EV Share %", "Total Fleet Registrations", "Public Fast Chargers per 100 EVs", "Policy Incentive Tiering"],
      focusQuestions: "What national regulatory frameworks correlate most strongly with rapid consumer adoption?"
    },
    {
      id: "battery-capacity",
      icon: Battery,
      title: "Battery Capacity Analysis",
      category: "Electrochemical Sizing",
      badge: "Pack Architecture",
      description:
        "Examines gross and net usable kilowatt-hour (kWh) pack sizes, volumetric energy packaging, pack curb weights, and the trade-offs of pouch vs prismatic vs cylindrical cells.",
      keyMetrics: ["Usable kWh Capacity", "Pack Energy Density (Wh/kg)", "Thermal Management Topology", "Charging C-Rate Curve"],
      focusQuestions: "At what battery size does pack weight begin to deliver diminishing returns on vehicle efficiency?"
    },
    {
      id: "driving-range",
      icon: Gauge,
      title: "Driving Range Comparison",
      category: "Usability & Endurance",
      badge: "Certified Ranges",
      description:
        "Benchmarks official EPA and WLTP certified single-charge ranges across vehicle segments, analyzing highway versus urban stop-and-go energy recovery via regenerative braking.",
      keyMetrics: ["EPA / WLTP Range (km & mi)", "Highway Range Degradation", "Cold Weather Temperature Penalty", "Miles per Dollar Charging Cost"],
      focusQuestions: "How closely do real-world highway driving ranges match laboratory certification ratings?"
    },
    {
      id: "manufacturer-distribution",
      icon: Factory,
      title: "Manufacturer Distribution",
      category: "Competitive Landscape",
      badge: "OEM Specialization",
      description:
        "Dissects product portfolio diversity, examining whether automakers focus on unified skateboard platform architectures or adapted legacy internal combustion chassis.",
      keyMetrics: ["Dedicated EV Platforms", "Model Lineup Breadth", "Segment Specialization (SUV/Sedan/Truck)", "Supplier Sourcing Diversity"],
      focusQuestions: "How do dedicated electric skateboard platforms outcompete modified ICE conversions?"
    },
    {
      id: "efficiency-analysis",
      icon: Zap,
      title: "EV Efficiency Analysis",
      category: "Aerodynamics & Powertrain",
      badge: "Wh/km Consumption",
      description:
        "Measures energy consumption rate (Watt-hours per kilometer / MPGe), factoring in motor inverter topologies (SiC vs Silicon IGBT), drag coefficients (Cd), and rolling resistance.",
      keyMetrics: ["Energy Consumption (Wh/km)", "Inverter Thermal Efficiency %", "Aerodynamic Drag Coefficient (Cd)", "Regenerative Braking Capture"],
      focusQuestions: "Which powertrain engineering architectures extract maximum road kilometers per kilowatt-hour stored?"
    }
  ];

  return (
    <section id="analytics" className="py-20 md:py-28 bg-[#090d16] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Analytical Frameworks</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive Analytical Feature Modules
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            The project deconstructs the multifaceted electric vehicle transition into seven targeted analytical dimensions.
            Select any module to inspect its core variables or navigate to the live dashboard for data queries.
          </p>
        </div>

        {/* Feature Cards Grid (7 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                id={feature.id}
                className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800/80 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-105 group-hover:bg-orange-500/20 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-900 text-orange-400/90 border border-orange-500/20">
                      {feature.badge}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                    {feature.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-orange-300 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  {/* Key Metrics Chips */}
                  <div className="space-y-1.5 mb-4">
                    <span className="text-[10px] uppercase font-mono text-slate-400 block font-semibold">
                      Variables & Dimensions:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {feature.keyMetrics.map((metric, mIdx) => (
                        <span
                          key={mIdx}
                          className="px-2 py-0.5 text-[11px] rounded bg-slate-900/90 text-slate-300 border border-slate-800"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Core Research Question */}
                  <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/70 text-[11px] text-slate-400 leading-normal">
                    <strong className="text-slate-300 block mb-0.5 font-medium">Core Hypothesis:</strong>
                    "{feature.focusQuestions}"
                  </div>
                </div>

                {/* Bottom Action: Jump to Tableau Dashboard */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-mono">Module #{idx + 1}</span>
                  <a
                    href="#dashboard"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-400 hover:text-orange-300 transition"
                  >
                    <span>View in Dashboard</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
