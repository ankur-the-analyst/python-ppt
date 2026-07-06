'use client';

import { motion } from 'motion/react';
import { ClipboardList, FileText, FileSignature } from 'lucide-react';

export default function Slide5Assessment() {
  const assessments = [
    {
      title: 'Quizzes (2)',
      icon: ClipboardList,
      co: [
        { label: 'CO1', marks: 10 },
        { label: 'CO2', marks: 10 }
      ],
      total: 20,
      colorClasses: {
        bg: 'bg-slate-50',
        text: 'text-slate-600',
        progress: 'bg-slate-500'
      }
    },
    {
      title: 'Assignments (2)',
      icon: FileText,
      co: [
        { label: 'CO1', marks: 10 },
        { label: 'CO2', marks: 30 }
      ],
      total: 40,
      colorClasses: {
        bg: 'bg-gray-50',
        text: 'text-gray-600',
        progress: 'bg-gray-500'
      }
    },
    {
      title: 'Final Lab Exam (1)',
      icon: FileSignature,
      co: [
        { label: 'CO1', marks: 10 },
        { label: 'CO2', marks: 10 },
        { label: 'CO3', marks: 20 }
      ],
      total: 40,
      colorClasses: {
        bg: 'bg-zinc-50',
        text: 'text-zinc-600',
        progress: 'bg-zinc-500'
      }
    }
  ];

  return (
    <section className="h-screen w-full min-w-full flex flex-col justify-center items-center relative overflow-hidden shrink-0 bg-slate-50 px-8">
      <div className="z-10 w-full max-w-6xl mx-auto flex flex-col gap-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-poppins mb-4">
            Evaluation Framework
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            A comprehensive continuous assessment model totaling 100 marks.
          </p>
        </motion.div>

        {/* Evaluation Matrix Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl border border-slate-200/60 shadow-xl overflow-hidden w-full"
        >
          {/* Table Header Accent Bar */}
          <div className="bg-slate-50 border-b border-slate-200/60 px-6 md:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-slate-400 animate-pulse" />
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500 font-mono">Academic Evaluation Scheme</span>
            </div>
            <div className="text-[10px] md:text-xs text-slate-400 font-bold font-mono">Continuous Evaluation Matrix</div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-200/60 text-slate-500 font-mono text-[10px] md:text-xs uppercase tracking-wider font-semibold">
                  <th className="py-4 px-6 md:px-8">Evaluation Component</th>
                  <th className="py-4 px-4 md:px-6 text-center">CO-1 Marks</th>
                  <th className="py-4 px-4 md:px-6 text-center">CO-2 Marks</th>
                  <th className="py-4 px-4 md:px-6 text-center">CO-3 Marks</th>
                  <th className="py-4 px-6 md:px-8 text-right">Total Weightage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {assessments.map((item, i) => {
                  const IconComponent = item.icon;
                  // Get marks for each CO
                  const co1Marks = item.co.find(c => c.label === 'CO1')?.marks || '-';
                  const co2Marks = item.co.find(c => c.label === 'CO2')?.marks || '-';
                  const co3Marks = item.co.find(c => c.label === 'CO3')?.marks || '-';

                  return (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.15 }}
                      className="hover:bg-slate-50/30 transition-colors group"
                    >
                      <td className="py-5 md:py-6 px-6 md:px-8">
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-xl ${item.colorClasses.bg} flex items-center justify-center ${item.colorClasses.text} group-hover:scale-105 transition-transform duration-300 shadow-sm border border-slate-100`}>
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="font-extrabold text-slate-900 block text-sm md:text-base leading-tight">{item.title}</span>
                            <span className="text-[10px] text-slate-400 font-bold font-mono uppercase tracking-wide">Continuous Assessment</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-5 md:py-6 px-4 md:px-6 text-center">
                        {co1Marks !== '-' ? (
                          <span className="inline-flex items-center justify-center bg-slate-100 text-slate-800 border border-slate-200/40 font-mono font-bold px-3 py-1 rounded-full text-xs min-w-12 shadow-sm">
                            {co1Marks}
                          </span>
                        ) : (
                          <span className="text-slate-300 font-light font-mono">-</span>
                        )}
                      </td>
                      <td className="py-5 md:py-6 px-4 md:px-6 text-center">
                        {co2Marks !== '-' ? (
                          <span className="inline-flex items-center justify-center bg-slate-100 text-slate-800 border border-slate-200/40 font-mono font-bold px-3 py-1 rounded-full text-xs min-w-12 shadow-sm">
                            {co2Marks}
                          </span>
                        ) : (
                          <span className="text-slate-300 font-light font-mono">-</span>
                        )}
                      </td>
                      <td className="py-5 md:py-6 px-4 md:px-6 text-center">
                        {co3Marks !== '-' ? (
                          <span className="inline-flex items-center justify-center bg-slate-100 text-slate-800 border border-slate-200/40 font-mono font-bold px-3 py-1 rounded-full text-xs min-w-12 shadow-sm">
                            {co3Marks}
                          </span>
                        ) : (
                          <span className="text-slate-300 font-light font-mono">-</span>
                        )}
                      </td>
                      <td className="py-5 md:py-6 px-6 md:px-8 text-right">
                        <span className={`text-xl md:text-2xl font-black ${item.colorClasses.text}`}>
                          {item.total}
                        </span>
                      </td>
                    </motion.tr>
                  );
                })}
                
                {/* Columns Total / Grand Summary Row */}
                <tr className="bg-slate-50/40 font-semibold text-slate-900 border-t border-slate-200">
                  <td className="py-5 px-6 md:px-8">
                    <span className="font-bold text-slate-950 text-base md:text-lg uppercase tracking-wide">Grand Total</span>
                    <span className="text-[10px] text-slate-400 font-bold font-mono block">Complete Course Assessment Weightage</span>
                  </td>
                  <td className="py-5 px-4 md:px-6 text-center">
                    <span className="inline-flex items-center justify-center bg-slate-200/60 text-slate-800 font-mono font-extrabold px-3 py-1 rounded-full text-xs min-w-12 border border-slate-300/40 shadow-sm">
                      30
                    </span>
                  </td>
                  <td className="py-5 px-4 md:px-6 text-center">
                    <span className="inline-flex items-center justify-center bg-slate-200/60 text-slate-800 font-mono font-extrabold px-3 py-1 rounded-full text-xs min-w-12 border border-slate-300/40 shadow-sm">
                      50
                    </span>
                  </td>
                  <td className="py-5 px-4 md:px-6 text-center">
                    <span className="inline-flex items-center justify-center bg-slate-200/60 text-slate-800 font-mono font-extrabold px-3 py-1 rounded-full text-xs min-w-12 border border-slate-300/40 shadow-sm">
                      20
                    </span>
                  </td>
                  <td className="py-5 px-6 md:px-8 text-right">
                    <span className="text-2xl md:text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-950 font-poppins">
                      100
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
