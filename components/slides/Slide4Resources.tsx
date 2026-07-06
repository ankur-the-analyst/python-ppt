'use client';

import { motion } from 'motion/react';
import { Wrench, BookOpenCheck, Library } from 'lucide-react';

export default function Slide4Resources() {
  return (
    <section className="h-screen w-full min-w-full flex flex-col justify-center items-center relative overflow-hidden shrink-0 bg-slate-50 px-8">
      
      <div className="z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Left Column: Title & Tools */}
        <div className="col-span-1 md:col-span-4 flex flex-col justify-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-poppins mb-4">
              Ecosystem & <br/>
              <span className="text-slate-500">Resources</span>
            </h2>
            <p className="text-slate-600">
              Industry-standard tools and academic literature designed to build a strong foundation in data analytics.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 text-slate-800 font-semibold text-lg">
              <Wrench className="w-5 h-5 text-slate-500" />
              Primary Tools
            </div>
            <div className="flex flex-wrap gap-3">
              {['Jupyter Notebook', 'Anaconda', 'Pandas', 'Python'].map((tool, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 bg-white rounded-xl shadow-sm border border-slate-200 text-slate-700 font-medium"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Books */}
        <div className="col-span-1 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Textbooks */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500" />
            <div className="flex items-center gap-3 text-slate-900 font-bold tracking-tight text-xl mb-8">
              <BookOpenCheck className="w-6 h-6 text-slate-500" />
              Required Textbooks
            </div>
            
            <div className="space-y-6">
              {[
                { title: 'Python for Data Analysis', author: 'William McKinney' },
                { title: 'Python Data Visualization Essentials Guide', author: 'Kalilur Rahman' },
                { title: 'Data Analytics Using Python', author: 'Bharti Motwani' }
              ].map((book, i) => (
                <div key={i} className="flex flex-col gap-1 pb-4 last:pb-0">
                  <span className="font-semibold text-slate-800">{book.title}</span>
                  <span className="text-sm text-slate-500">by {book.author}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Reference Books */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500" />
            <div className="flex items-center gap-3 text-slate-900 font-bold tracking-tight text-xl mb-8">
              <Library className="w-6 h-6 text-gray-500" />
              Reference Materials
            </div>
            
            <div className="space-y-6">
              {[
                { title: 'Python for Data Science', author: 'Mohd. Abdul Hameed' },
                { title: 'Data Mining', author: 'Dunham D.H.' }
              ].map((book, i) => (
                <div key={i} className="flex flex-col gap-1 pb-4 last:pb-0">
                  <span className="font-semibold text-slate-800">{book.title}</span>
                  <span className="text-sm text-slate-500">by {book.author}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
