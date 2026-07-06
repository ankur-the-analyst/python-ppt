'use client';

import { motion } from 'motion/react';
import { BrainCircuit, LineChart, Zap, Users, ShieldCheck } from 'lucide-react';

export default function Slide2WhyPython() {
  const reasons = [
    {
      title: 'Data-Driven Decision Making',
      desc: 'Transition from gut-feeling to empirical evidence. Python enables managers to analyze massive datasets quickly, uncovering hidden trends that drive strategic choices.',
      icon: LineChart,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      title: 'Workflow Automation',
      desc: 'Eliminate repetitive manual tasks. Automate data collection, report generation, and spreadsheet manipulation, freeing up time for high-level strategic thinking.',
      icon: Zap,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200'
    },
    {
      title: 'Bridging the Tech Gap',
      desc: 'Act as the crucial translator between business needs and technical teams. Understanding Python helps managers scope projects accurately and lead tech initiatives.',
      icon: Users,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200'
    },
    {
      title: 'Future-Proof Skillset',
      desc: 'As AI and machine learning become corporate standards, Python serves as the foundational language to understand and implement these transformative technologies.',
      icon: BrainCircuit,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    }
  ];

  return (
    <section className="h-screen w-full min-w-full flex flex-col justify-center items-center relative overflow-y-auto md:overflow-hidden shrink-0 bg-slate-50 px-4 md:px-8 py-6 md:py-10 text-slate-900">
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-100/60 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-indigo-50/40 rounded-full blur-3xl" />
      </div>

      <div className="z-10 w-full max-w-6xl mx-auto flex flex-col items-center gap-8 md:gap-12 text-center">
        
        {/* Title Group */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl flex flex-col items-center"
        >
          <div className="flex items-center gap-2 text-slate-500 font-medium mb-3">
            <ShieldCheck className="w-5 h-5 text-indigo-600" />
            <span className="uppercase tracking-widest text-xs font-bold font-mono text-indigo-900/70">The Management Imperative</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 font-poppins leading-tight tracking-tight mb-4">
            Why Management Students <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800">Must Learn Python</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base lg:text-lg mt-2 max-w-3xl font-sans leading-relaxed">
            In today&apos;s digital economy, technical fluency is a core leadership competency. Python empowers management professionals to move beyond basic spreadsheets, enabling scalable analytics, process automation, and effective leadership of technical teams.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
        >
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200/60 shadow-sm hover:shadow-md transition-all text-left flex flex-col h-full"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border ${reason.bgColor} ${reason.color} ${reason.borderColor}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-poppins mb-3">
                  {reason.title}
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed font-sans">
                  {reason.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-4"
        >
          <span className="inline-block bg-slate-100 text-slate-700 font-bold text-xs md:text-sm px-4 py-2 rounded-full border border-slate-200/60 font-mono shadow-sm">
            Python is not just coding. It&apos;s a strategic management tool.
          </span>
        </motion.div>

      </div>
    </section>
  );
}
