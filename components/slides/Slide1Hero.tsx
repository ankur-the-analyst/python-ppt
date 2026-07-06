'use client';

import { motion } from 'motion/react';
import { Terminal, Database, LineChart, Code2, GraduationCap } from 'lucide-react';

export default function Slide1Hero() {
  return (
    <section className="h-screen w-full min-w-full flex flex-col justify-center items-center relative overflow-y-auto md:overflow-hidden shrink-0 bg-slate-50 px-4 md:px-8 py-6 md:py-10">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center gap-6 md:gap-8">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-2 md:space-y-4"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 font-poppins flex flex-col items-center gap-2 md:gap-3">
            <span>
              HANDS-ON <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-slate-800 to-slate-950">
                PYTHON TOOL
              </span>
            </span>
            <span className="text-xl md:text-2xl text-slate-400 font-normal tracking-normal mt-1">
              (1.5 credits)
            </span>
          </h1>

          <div className="flex flex-col items-center justify-center mt-6 md:mt-8 text-center space-y-1">
            <h2 className="text-slate-800 font-bold text-lg md:text-2xl uppercase tracking-wider">
              TLEP Presentation
            </h2>
            <p className="text-slate-600 text-base md:text-lg font-medium">
              By Prof. Ankur Madan
            </p>
            <p className="text-slate-500 text-sm md:text-base">
              (Course Coordinator)
            </p>
          </div>
        </motion.div>

        {/* Facilitators */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl"
        >
          {[
            { name: 'Dr. Manish Verma', email: 'manish.verma@glbimr.org' },
            { name: 'Prof. Hasan Haider Jafri', email: 'hasanhaider.jafri@glbimr.org' },
            { name: 'Prof. Ankur Madan', email: 'ankur.madan@glbimr.org' },
          ].map((prof, i) => (
            <div key={i} className="flex flex-col items-center p-4 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/60 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center mb-2 text-slate-600 font-bold text-sm">
                {prof.name.split(' ').map(n => n[0]).join('').slice(0,2)}
              </div>
              <h3 className="font-semibold text-xs md:text-sm text-slate-800">{prof.name}</h3>
              <p className="text-[11px] md:text-xs text-slate-500 mt-0.5">{prof.email}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
