'use client';

import { motion } from 'motion/react';
import { Network } from 'lucide-react';

export default function Slide6Conclusion() {
  const tableData = [
    { co: 'CO-1', po1: '1', po2: '', po3: '', po4: '', po5: '', po6: '', po7: '3' },
    { co: 'CO-2', po1: '', po2: '2', po3: '', po4: '', po5: '1', po6: '', po7: '3' },
    { co: 'CO-3', po1: '', po2: '2', po3: '', po4: '', po5: '1', po6: '', po7: '3' },
    { co: 'PO (AVG. SCORE)', po1: '1', po2: '2', po3: '', po4: '', po5: '1', po6: '', po7: '3' },
  ];

  return (
    <section className="h-screen w-full min-w-full flex flex-col justify-center items-center relative overflow-y-auto md:overflow-hidden shrink-0 bg-slate-50 px-4 md:px-8 py-6 md:py-10 text-slate-900">
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-slate-100/50 to-gray-100/50 rounded-full blur-3xl mix-blend-multiply" />
      </div>

      <div className="z-10 w-full max-w-6xl mx-auto flex flex-col items-center gap-6 md:gap-8 text-center">
        
        {/* Mapping Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <div className="flex items-center justify-center gap-2 text-slate-500 font-medium mb-2">
            <Network className="w-4 h-4" />
            <span className="uppercase tracking-widest text-xs font-bold font-mono">Outcomes Matrix</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 font-poppins mb-4 md:mb-6 leading-tight tracking-tight">
            Program Outcomes Mapping
          </h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-5xl lg:max-w-6xl mx-auto overflow-hidden bg-white rounded-2xl border border-slate-200/60 shadow-md"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/50 border-b border-slate-200/60">
                    <th className="p-3 md:p-4 lg:p-5 xl:p-6 font-bold text-slate-900 border-r border-slate-200/60 text-center bg-white text-xs md:text-sm lg:text-base font-mono">COs / POs</th>
                    {['PO-1', 'PO-2', 'PO-3', 'PO-4', 'PO-5', 'PO-6', 'PO-7'].map((po) => (
                      <th key={po} className="p-3 md:p-4 lg:p-5 xl:p-6 font-bold text-slate-500 text-center text-xs md:text-sm lg:text-base font-mono">{po}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, i) => (
                    <tr 
                      key={i}
                      className={`border-b border-slate-100 last:border-0 hover:bg-slate-50/30 transition-colors ${row.co.includes('AVG') ? 'bg-slate-50 font-bold' : ''}`}
                    >
                      <td className="p-3 md:p-4 lg:p-5 xl:p-6 text-slate-900 border-r border-slate-200/60 bg-white text-xs md:text-sm lg:text-base font-bold font-mono">
                        {row.co}
                      </td>
                      <td className="p-3 md:p-4 lg:p-5 xl:p-6 text-center text-xs md:text-sm lg:text-base text-slate-600 font-mono">{row.po1}</td>
                      <td className="p-3 md:p-4 lg:p-5 xl:p-6 text-center text-xs md:text-sm lg:text-base text-slate-600 font-mono">{row.po2}</td>
                      <td className="p-3 md:p-4 lg:p-5 xl:p-6 text-center text-xs md:text-sm lg:text-base text-slate-600 font-mono">{row.po3}</td>
                      <td className="p-3 md:p-4 lg:p-5 xl:p-6 text-center text-xs md:text-sm lg:text-base text-slate-600 font-mono">{row.po4}</td>
                      <td className="p-3 md:p-4 lg:p-5 xl:p-6 text-center text-xs md:text-sm lg:text-base text-slate-600 font-mono">{row.po5}</td>
                      <td className="p-3 md:p-4 lg:p-5 xl:p-6 text-center text-xs md:text-sm lg:text-base text-slate-600 font-mono">{row.po6}</td>
                      <td className="p-3 md:p-4 lg:p-5 xl:p-6 text-center text-xs md:text-sm lg:text-base text-slate-600 font-mono">{row.po7}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
