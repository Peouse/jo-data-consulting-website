import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, AlertCircle, Database, ArrowRight } from 'lucide-react';

const Philosophy: React.FC = () => {
  return (
    <section className="min-h-screen w-full bg-background flex flex-col justify-center items-center py-24 px-4 relative border-t border-white/5">
      
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Story Text */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-600 mb-4">
              10,000 SKUs.<br/>
              3 Warehouses.<br/>
              Zero visibility.
            </h2>
            <p className="text-gray-500 font-mono text-sm border-l border-gray-700 pl-4">
              // THE PROBLEM
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Raw data is noise.<br/>
              Structured data is <span className="text-green-400">profit</span>.
            </h2>
             <p className="text-white font-mono text-sm border-l border-white pl-4">
              // THE SHIFT
            </p>
          </motion.div>
        </div>

        {/* Visual Cards */}
        <div className="relative h-[500px] w-full flex items-center justify-center">
            
            {/* Before Card - Slightly rotated and behind */}
            <motion.div
                initial={{ opacity: 0, rotate: -5, scale: 0.9 }}
                whileInView={{ opacity: 0.4, rotate: -6, scale: 0.95 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="absolute w-full max-w-md bg-card border border-border p-6 rounded-lg blur-[2px] hover:blur-0 transition-all duration-500 z-0"
            >
                <div className="flex items-center gap-2 mb-4 border-b border-border pb-2">
                    <AlertCircle size={16} className="text-red-500" />
                    <span className="text-xs font-mono text-red-400">UNSTRUCTURED_DATA.CSV</span>
                </div>
                <div className="grid grid-cols-4 gap-2 text-[10px] font-mono text-gray-600 opacity-50">
                    {[...Array(24)].map((_, i) => (
                        <div key={i} className="bg-white/5 h-4 rounded"></div>
                    ))}
                </div>
            </motion.div>

            {/* After Card - Front and Center */}
             <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute w-full max-w-md bg-card border border-border p-6 rounded-lg shadow-2xl z-10"
            >
                <div className="flex items-center justify-between mb-6 border-b border-border pb-4">
                    <div className="flex items-center gap-2">
                        <Database size={16} className="text-green-400" />
                        <span className="text-xs font-mono text-green-400">INTELLIGENT_INSIGHTS</span>
                    </div>
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                </div>
                
                <div className="space-y-6">
                    <div className="space-y-2">
                        <div className="flex justify-between text-xs text-muted">
                            <span>Optimization Score</span>
                            <span>98%</span>
                        </div>
                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: "98%" }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                                className="h-full bg-green-500"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                         <div className="bg-background border border-border p-3 rounded">
                            <div className="text-xs text-muted mb-1">Cost Reduction</div>
                            <div className="text-xl font-mono text-white">-24.5%</div>
                         </div>
                         <div className="bg-background border border-border p-3 rounded">
                            <div className="text-xs text-muted mb-1">Efficiency</div>
                            <div className="text-xl font-mono text-white">+140%</div>
                         </div>
                    </div>
                    
                    <div className="h-24 w-full bg-background border border-border rounded p-2 flex items-end gap-1">
                        {[40, 65, 45, 80, 55, 90, 70, 95].map((h, i) => (
                            <motion.div 
                                key={i}
                                initial={{ height: 0 }}
                                whileInView={{ height: `${h}%` }}
                                transition={{ duration: 0.5, delay: 0.8 + (i * 0.1) }}
                                className="flex-1 bg-white hover:bg-green-400 transition-colors"
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
      </div>
      
      {/* Visual connector line */}
      <div className="absolute top-0 left-1/2 w-[1px] h-24 bg-gradient-to-b from-transparent to-white/20 -translate-x-1/2"></div>
    </section>
  );
};

export default Philosophy;