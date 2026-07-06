'use client';

import { motion } from 'motion/react';
import { BookOpen, TableProperties, BarChart3, Target } from 'lucide-react';

export default function Slide2Outcomes() {
  const outcomes = [
    {
      co: 'CO-1',
      title: 'Python Basics & Logic',
      desc: 'Learn fundamental Python concepts and syntax, including data types, control structures, and functions.',
      bloom: 'L1',
      bloomDesc: 'Recall & Understand',
      icon: BookOpen,
      domain: 'Programming Logic',
      badgeStyle: 'text-slate-700 bg-slate-100/80 border border-slate-200/50',
      bloomStyle: 'text-slate-800 bg-slate-50 border border-slate-200/60',
      iconStyle: 'bg-slate-50 text-slate-700 border border-slate-200/50'
    },
    {
      co: 'CO-2',
      title: 'Data Exploration & Manipulation',
      desc: 'Utilize Pandas library to manipulate and explore data, including reading, filtering, and aggregating datasets.',
      bloom: 'L3',
      bloomDesc: 'Apply & Execute',
      icon: TableProperties,
      domain: 'Data Engineering',
      badgeStyle: 'text-slate-700 bg-slate-100/80 border border-slate-200/50',
      bloomStyle: 'text-slate-800 bg-slate-50 border border-slate-200/60',
      iconStyle: 'bg-slate-50 text-slate-700 border border-slate-200/50'
    },
    {
      co: 'CO-3',
      title: 'Visual Analytics & Presentation',
      desc: 'Create basic visualizations to represent and analyze business data effectively.',
      bloom: 'L4',
      bloomDesc: 'Analyze & Design',
      icon: BarChart3,
      domain: 'Business Intelligence',
      badgeStyle: 'text-slate-700 bg-slate-100/80 border border-slate-200/50',
      bloomStyle: 'text-slate-800 bg-slate-50 border border-slate-200/60',
      iconStyle: 'bg-slate-50 text-slate-700 border border-slate-200/50'
    }
  ];

  return (
    <section className="h-screen w-full min-w-full flex flex-col justify-center items-center relative overflow-hidden shrink-0 bg-slate-50 px-8">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="z-10 w-full max-w-7xl mx-auto flex flex-col gap-8 md:gap-10">
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-2 text-slate-500 font-medium mb-2 md:mb-3">
            <Target className="w-4 h-4 text-slate-600" />
            <span className="uppercase tracking-widest text-xs font-bold font-mono">Course Outcomes</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 font-poppins leading-tight tracking-tight">
            Mapping Knowledge to <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-slate-900 to-slate-950">Measurable Results</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          id="course-outcomes-matrix"
          className="bg-white rounded-2xl border border-slate-200/60 shadow-xl overflow-hidden w-full"
        >
          {/* Table Header Accent Bar */}
          <div className="bg-slate-50 border-b border-slate-200/60 px-6 md:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-slate-400 animate-pulse" />
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500 font-mono">Academic Blueprint Matrix</span>
            </div>
            <div className="text-[10px] md:text-xs text-slate-400 font-bold font-mono">3 Core Learning Dimensions</div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-200/60 text-slate-500 font-mono text-[10px] md:text-xs uppercase tracking-wider font-semibold">
                  <th className="py-4 px-6 md:px-8 w-1/4">Outcome Code & Title</th>
                  <th className="py-4 px-4 md:px-6 text-center w-1/6">Bloom&apos;s Level</th>
                  <th className="py-4 px-6 md:px-8">Detailed Description & Competency</th>
                  <th className="py-4 px-6 md:px-8 text-right w-1/5">Target Domain</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {outcomes.map((outcome, i) => {
                  const IconComponent = outcome.icon;
                  return (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.15 }}
                      id={`outcome-row-${outcome.co.toLowerCase()}`}
                      className="hover:bg-slate-50/30 transition-colors group"
                    >
                      {/* Code and Title */}
                      <td className="py-5 md:py-6 px-6 md:px-8">
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-xl ${outcome.iconStyle} flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-sm`}>
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div>
                            <span className={`font-mono text-[9px] md:text-xs font-bold px-2 py-0.5 rounded ${outcome.badgeStyle}`}>
                              {outcome.co}
                            </span>
                            <span className="font-extrabold text-slate-900 block mt-1.5 text-sm md:text-base leading-tight">
                              {outcome.title}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Bloom's taxonomy */}
                      <td className="py-5 md:py-6 px-4 md:px-6 text-center">
                        <div className="flex flex-col items-center gap-1.5">
                          <span className={`inline-flex items-center justify-center font-mono font-bold px-2.5 py-0.5 rounded-full text-[10px] md:text-xs min-w-[28px] shadow-sm ${outcome.bloomStyle}`}>
                            {outcome.bloom}
                          </span>
                          <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">
                            {outcome.bloomDesc}
                          </span>
                        </div>
                      </td>

                      {/* Description */}
                      <td className="py-5 md:py-6 px-6 md:px-8 text-slate-600 leading-relaxed font-sans text-xs md:text-sm">
                        {outcome.desc}
                      </td>

                      {/* Target Domain */}
                      <td className="py-5 md:py-6 px-6 md:px-8 text-right">
                        <span className="inline-block text-[10px] md:text-xs font-bold px-3 py-1 rounded-full border border-slate-200/60 bg-white text-slate-700 font-mono shadow-sm">
                          {outcome.domain}
                        </span>
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
