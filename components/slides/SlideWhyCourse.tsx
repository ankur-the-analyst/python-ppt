'use client';

import { motion } from 'motion/react';
import { HelpCircle, Layers, TerminalSquare, FileSpreadsheet, PieChart } from 'lucide-react';

export default function SlideWhyCourse() {
  const useCases = [
    {
      domain: 'Unit 1: Fundamentals',
      useCase: 'Business Analyst Workbench',
      icon: Layers,
      bottleneck: 'Rigid, non-scalable calculation workflows in static financial platforms with no custom coding flexibility.',
      pythonAction: 'Anaconda setup, Jupyter notebooks, variable assignment & basic calculations',
      metric: 'Interactive IDE Setup',
    },
    {
      domain: 'Unit 2: Core Syntax',
      useCase: 'Workflow & Decision Automation',
      icon: TerminalSquare,
      bottleneck: 'Manual and error-prone calculation of conditional discounts, customer tiers, and transaction rules.',
      pythonAction: 'Decision logic, loop iterations, standard collections, & custom functions',
      metric: '100% Rule Execution',
    },
    {
      domain: 'Unit 3: Data Manipulation',
      useCase: 'Spreadsheet Batch Processing',
      icon: FileSpreadsheet,
      bottleneck: 'Excel files freezing, VLOOKUP limits, and slow manual copy-pasting of legacy weekly spreadsheets.',
      pythonAction: 'Pandas DataFrames, Excel/CSV file reading, batch sanitization & integration',
      metric: '95% Speed Improvement',
    },
    {
      domain: 'Unit 4: Visualization',
      useCase: 'Executive Report Visuals',
      icon: PieChart,
      bottleneck: 'Spending valuable hours copying standard graphics into executive decks and losing visual depth.',
      pythonAction: 'Auto-generating histograms, bar/pie charts, box plots, & custom styling',
      metric: '1-Click Chart Render',
    },
  ];

  return (
    <section className="h-screen w-full min-w-full flex flex-col justify-center items-center relative overflow-y-auto md:overflow-hidden shrink-0 bg-slate-50 px-4 md:px-8 py-6 md:py-10 text-slate-900">
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-gray-100/40 rounded-full blur-3xl" />
      </div>

      <div className="z-10 w-full max-w-6xl mx-auto flex flex-col items-center gap-6 md:gap-8 text-center">
        
        {/* Title Group */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl flex flex-col items-center"
        >
          <div className="flex items-center gap-2 text-slate-500 font-medium mb-2">
            <HelpCircle className="w-4 h-4 text-slate-500" />
            <span className="uppercase tracking-widest text-xs font-bold font-mono">Business-Centric Applications</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 font-poppins leading-tight tracking-tight">
            Why This Course? Hands-On Business Use Cases
          </h2>
          <p className="text-slate-500 text-xs md:text-sm mt-2 max-w-2xl font-sans">
            Programming is no longer just for developers. Modern business leadership demands hands-on analytical fluency to drive efficiency, uncover insights, and automate traditional bottlenecks.
          </p>
        </motion.div>

        {/* Use Case Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-5xl lg:max-w-6xl mx-auto overflow-hidden bg-white rounded-2xl border border-slate-200/60 shadow-md"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-200/60">
                  <th className="p-3 md:p-4 lg:p-5 xl:p-6 font-bold text-slate-900 text-xs md:text-sm font-mono border-r border-slate-200/60 w-1/4">Domain / Use Case</th>
                  <th className="p-3 md:p-4 lg:p-5 xl:p-6 font-bold text-slate-500 text-xs md:text-sm font-mono border-r border-slate-200/60 w-1/3">Traditional Bottleneck</th>
                  <th className="p-3 md:p-4 lg:p-5 xl:p-6 font-bold text-slate-500 text-xs md:text-sm font-mono border-r border-slate-200/60 w-1/4">Python Automation & Tooling</th>
                  <th className="p-3 md:p-4 lg:p-5 xl:p-6 font-bold text-slate-500 text-xs md:text-sm font-mono text-center w-1/6">Outcome Metric</th>
                </tr>
              </thead>
              <tbody>
                {useCases.map((row, i) => {
                  const Icon = row.icon;
                  return (
                    <tr 
                      key={i}
                      className="border-b border-slate-100 last:border-0 hover:bg-slate-50/30 transition-colors"
                    >
                      <td className="p-3 md:p-4 lg:p-5 xl:p-6 border-r border-slate-200/60 bg-white">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 shrink-0 mt-0.5">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400 font-mono mb-0.5">{row.domain}</div>
                            <div className="text-xs md:text-sm font-bold text-slate-900 font-poppins leading-tight">{row.useCase}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-3 md:p-4 lg:p-5 xl:p-6 text-xs md:text-sm text-slate-600 border-r border-slate-200/60 font-sans leading-relaxed">
                        {row.bottleneck}
                      </td>
                      <td className="p-3 md:p-4 lg:p-5 xl:p-6 border-r border-slate-200/60 font-mono">
                        <span className="text-[11px] md:text-xs font-bold text-slate-700 bg-slate-100/80 px-2.5 py-1 rounded border border-slate-200/40 inline-block leading-tight">
                          {row.pythonAction}
                        </span>
                      </td>
                      <td className="p-3 md:p-4 lg:p-5 xl:p-6 text-center">
                        <span className="text-[10px] md:text-xs font-bold font-mono uppercase tracking-wide bg-slate-100 text-slate-800 border border-slate-200/60 px-2.5 py-1 rounded-full whitespace-nowrap">
                          {row.metric}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-center"
        >
          <span className="text-slate-400 font-bold text-[9px] md:text-xs uppercase tracking-widest font-mono">
            Bridging Business Strategy & Algorithmic Execution
          </span>
        </motion.div>

      </div>
    </section>
  );
}
