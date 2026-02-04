import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Wrench, Terminal } from 'lucide-react';

const Approach: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Animations
  const titleOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const cardsOpacity = useTransform(scrollYProgress, [0.7, 0.9], [1, 0]);
  const cardsY = useTransform(scrollYProgress, [0.7, 0.9], [0, -50]);
  const lineHeight = useTransform(scrollYProgress, [0.8, 1], ["0%", "100%"]);
  
  return (
    <section ref={containerRef} className="min-h-[150vh] w-full bg-background flex flex-col items-center justify-start py-24 relative overflow-hidden border-t border-white/5">
        
        {/* Background Grid Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] mask-gradient pointer-events-none" />

        <div className="max-w-6xl w-full px-4 flex flex-col items-center relative z-10">
            
            {/* 1. The Headline */}
            <motion.div 
                style={{ opacity: titleOpacity }}
                className="text-center mb-12 relative z-20"
            >
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
                    The Mechanic's Instinct.<br />
                    <span className="text-gray-500">The Engineer's Code.</span>
                </h2>
            </motion.div>

            {/* 2. The Central Visual Metaphor - Recreated Programmatically */}
            <div className="relative w-full max-w-3xl h-[300px] md:h-[500px] my-4 mb-20 group">
                
                {/* Container for the split images */}
                <div className="relative w-full h-full flex justify-center items-center">
                    
                    {/* LEFT HALF: Physical */}
                    <div className="absolute inset-y-0 left-0 w-1/2 overflow-hidden">
                        <img 
                            src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1200&auto=format&fit=crop" 
                            alt="Physical Turbo"
                            className="absolute inset-y-0 left-0 w-[200%] h-full object-contain object-center grayscale contrast-125" 
                        />
                        {/* Shadow/Depth to separate from background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent opacity-50"></div>
                    </div>

                    {/* RIGHT HALF: Digital Wireframe */}
                    <div className="absolute inset-y-0 right-0 w-1/2 overflow-hidden bg-blue-900/5 border-r border-blue-500/10">
                         {/* The Image treated to look like wireframe */}
                         <img 
                            src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1200&auto=format&fit=crop" 
                            alt="Digital Turbo"
                            className="absolute inset-y-0 right-0 w-[200%] h-full object-contain object-center mix-blend-screen filter brightness-75 sepia hue-rotate-[170deg] saturate-[400%] contrast-[1.2]" 
                        />
                        
                        {/* Blueprint Grid Overlay */}
                        <div className="absolute inset-0 bg-[size:20px_20px] bg-[linear-gradient(to_right,#22d3ee10_1px,transparent_1px),linear-gradient(to_bottom,#22d3ee10_1px,transparent_1px)]"></div>
                        
                        {/* Overlay: Nodes and Data */}
                        <div className="absolute inset-0">
                             {/* Random Nodes based on image structure */}
                             <motion.div 
                                animate={{ opacity: [0.4, 1, 0.4] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute top-[35%] left-[20%] w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_cyan]" 
                             />
                             <motion.div 
                                animate={{ opacity: [0.4, 1, 0.4] }}
                                transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                                className="absolute top-[25%] left-[60%] w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_8px_cyan]" 
                             />
                             <motion.div 
                                animate={{ opacity: [0.4, 1, 0.4] }}
                                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                                className="absolute bottom-[40%] left-[40%] w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_cyan]" 
                             />

                             {/* SVG Connection Lines */}
                             <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                <motion.path 
                                    d="M 120 150 L 250 120" 
                                    stroke="cyan" 
                                    strokeWidth="0.5" 
                                    strokeOpacity="0.5"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    transition={{ duration: 2 }}
                                />
                                <motion.path 
                                    d="M 250 120 L 200 250" 
                                    stroke="cyan" 
                                    strokeWidth="0.5" 
                                    strokeOpacity="0.3"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    transition={{ duration: 2, delay: 0.5 }}
                                />
                             </svg>

                             {/* Code Annotations */}
                             <div className="absolute top-10 right-10 text-[10px] font-mono text-cyan-500/80 hidden md:block">
                                 SELECT * FROM parts_data WHERE id=123;
                             </div>
                             <div className="absolute bottom-20 right-4 text-[10px] font-mono text-cyan-500/80">
                                 OPTIMIZE_FLOW
                             </div>
                             <div className="absolute top-1/2 right-2 text-[10px] font-mono text-cyan-500/60 hidden md:block">
                                 300V Inventory ON...
                             </div>
                        </div>
                    </div>

                    {/* Central Scan Line */}
                    <div className="absolute inset-y-0 left-1/2 w-[2px] -translate-x-1/2 bg-cyan-500 shadow-[0_0_15px_#22d3ee] z-30">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-white opacity-50"></div>
                    </div>
                    
                </div>
            </div>

            {/* Caption */}
            <motion.p 
                style={{ opacity: titleOpacity }}
                className="font-mono text-xs md:text-sm text-cyan-500/80 mb-16 tracking-wider"
            >
                {'>'} merging physical_supply_chain with digital_intelligence_
            </motion.p>

            {/* 3. The Dual Approach Cards */}
            <motion.div 
                style={{ opacity: cardsOpacity, y: cardsY }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full"
            >
                {/* Left Card: Context */}
                <div className="bg-[#1A1A1A] border border-[#333333] p-8 rounded-sm relative group hover:border-white/20 transition-colors duration-300">
                    <div className="mb-6 flex items-center justify-between">
                        <Wrench className="text-white" size={24} strokeWidth={1.5} />
                        <span className="font-mono text-xs text-muted tracking-widest">// THE CONTEXT</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">Industry Intuition</h3>
                    <p className="text-gray-400 font-light leading-relaxed text-sm">
                        Data doesn't exist in a vacuum. I understand that a SKU isn't just a number—it's a physical part sitting on a shelf taking up capital. I know the difference between seasonal demand and a dead product line.
                    </p>
                </div>

                {/* Right Card: Execution */}
                <div className="bg-[#1A1A1A] border border-[#333333] p-8 rounded-sm relative group hover:border-cyan-500/30 transition-colors duration-300">
                    <div className="mb-6 flex items-center justify-between">
                        <Terminal className="text-cyan-400" size={24} strokeWidth={1.5} />
                        <span className="font-mono text-xs text-cyan-400/70 tracking-widest">// THE EXECUTION</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">Technical Precision</h3>
                    <p className="text-gray-400 font-light leading-relaxed text-sm">
                        Intuition isn't scalable; code is. I translate business context into rigorous statistical models and automated pipelines. This eliminates guesswork, ensuring forecasts are backed by hard evidence.
                    </p>
                </div>
            </motion.div>

            {/* 4. Immersive Transition Line */}
            <div className="absolute bottom-0 left-1/2 w-[1px] h-32 -translate-x-1/2 overflow-hidden">
                <motion.div 
                    style={{ height: lineHeight }}
                    className="w-full bg-cyan-500 shadow-[0_0_15px_#22d3ee]"
                />
            </div>

        </div>
    </section>
  );
};

export default Approach;