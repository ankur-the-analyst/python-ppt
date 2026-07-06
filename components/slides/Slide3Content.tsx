'use client';

import { motion } from 'motion/react';
import { Layers, TerminalSquare, FileSpreadsheet, PieChart } from 'lucide-react';

export default function Slide3Content() {
  const units = [
    {
      title: 'UNIT 1',
      subtitle: 'Fundamentals',
      icon: Layers,
      topics: ['Introduction to Python', 'Python in Business', 'Installing Anaconda', 'Jupyter Notebook Basics', 'Variables & Data Types', 'Arithmetic Operations'],
      color: 'from-slate-400 to-slate-500'
    },
    {
      title: 'UNIT 2',
      subtitle: 'Core Syntax',
      icon: TerminalSquare,
      topics: ['Python Syntax', 'Indentation & Comments', 'Data Types', 'Loops & Conditions', 'Functions'],
      color: 'from-gray-500 to-gray-600'
    },
    {
      title: 'UNIT 3',
      subtitle: 'Data Manipulation',
      icon: FileSpreadsheet,
      topics: ['File Handling', 'CSV & Excel Operations', 'Pandas Introduction', 'Series & DataFrames', 'Data Analysis', 'Reading/Writing Files'],
      color: 'from-slate-500 to-slate-700'
    },
    {
      title: 'UNIT 4',
      subtitle: 'Visualization',
      icon: PieChart,
      topics: ['Histograms', 'Bar Charts', 'Pie Charts', 'Scatter Plots', 'Box Plots', 'Plot Customization'],
      color: 'from-gray-600 to-gray-800'
    }
  ];

  return (
    <section className="h-screen w-full min-w-full flex flex-col justify-center items-center relative overflow-hidden shrink-0 bg-slate-50 px-8 text-slate-900">
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[20%] left-[20%] w-[600px] h-[600px] bg-slate-300 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-[20%] right-[20%] w-[600px] h-[600px] bg-gray-300 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="z-10 w-full max-w-7xl mx-auto flex flex-col gap-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Curriculum Architecture
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            A progressive learning journey from fundamental programming to advanced business data visualization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {units.map((unit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -10 }}
              className="relative group bg-white/50 backdrop-blur-md rounded-3xl p-6 border border-slate-200 overflow-hidden shadow-sm"
            >
              {/* Hover gradient background */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.03] bg-gradient-to-br ${unit.color} transition-opacity duration-500`} />
              
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${unit.color} p-[1px]`}>
                  <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                    <unit.icon className="w-5 h-5 text-slate-800" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-xl">{unit.title}</h3>
                  <p className="text-sm text-slate-500">{unit.subtitle}</p>
                </div>
              </div>

              <ul className="space-y-3">
                {unit.topics.map((topic, j) => (
                  <motion.li 
                    key={j}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: (i * 0.15) + (j * 0.1) }}
                    className="text-slate-700 text-sm flex items-start gap-2"
                  >
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${unit.color} shrink-0`} />
                    {topic}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
