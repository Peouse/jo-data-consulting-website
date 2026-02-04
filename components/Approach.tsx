import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Wrench, Terminal, Cpu } from 'lucide-react';

const Approach: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Animations
  const titleY = useTransform(scrollYProgress, [0.1, 0.4], [50, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  
  // Cards fade out as we scroll past the section
  const cardsOpacity = useTransform(scrollYProgress, [0.6, 0.8], [1, 0]);
  const cardsY = useTransform(scrollYProgress, [0.6, 0.8], [0, -50]);
  
  // Line extension
  const lineHeight = useTransform(scrollYProgress, [0.7, 0.95], ["0%", "100%"]);
  
  // Wireframe glow intensity increases as we scroll down
  const glowOpacity = useTransform(scrollYProgress, [0.5, 0.9], [0.3, 1]);

  return (
    <section ref={containerRef} className="min-h-[150vh] w-full bg-background flex flex-col items-center justify-start py-24 relative overflow-hidden border-t border-white/5">
        
        {/* Background Grid Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] mask-gradient pointer-events-none" />

        <div className="max-w-6xl w-full px-4 flex flex-col items-center relative z-10">
            
            {/* 1. The Headline */}
            <motion.div 
                style={{ y: titleY, opacity: titleOpacity }}
                className="text-center mb-8 relative z-20"
            >
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
                    The Mechanic's Instinct.<br />
                    <span className="text-gray-500">The Engineer's Code.</span>
                </h2>
            </motion.div>

            {/* 2. The Central Visual Metaphor */}
            <div className="relative w-64 h-64 md:w-96 md:h-96 my-8">
                {/* Image Source: A mechanical gear/turbo part */}
                <div className="absolute inset-0 w-full h-full">
                    {/* Left Half: Physical/Gritty */}
                    <div className="absolute inset-0 w-1/2 overflow-hidden z-10">
                        <img 
                            src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1000&auto=format&fit=crop" 
                            alt="Mechanical Part Physical"
                            className="w-[200%] h-full max-w-none object-contain object-center grayscale contrast-125" 
                            style={{ transform: 'translateX(0)' }}
                        />
                        {/* Gradient fade at the split line */}
                        <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-r from-transparent to-background/50 mix-blend-multiply" />
                    </div>

                    {/* Right Half: Digital/Wireframe */}
                    <div className="absolute inset-0 left-1/2 w-1/2 overflow-hidden z-10 border-l border-blue-500/30">
                        <div className="relative w-[200%] h-full -ml-[100%]">
                             {/* The same image, but processed to look like a blueprint/wireframe */}
                            <img 
                                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1000&auto=format&fit=crop" 
                                alt="Mechanical Part Digital"
                                className="w-full h-full object-contain object-center opacity-30 invert hue-rotate-180 saturate-200"
                            />
                            
                            {/* Digital Overlays */}
                            <motion.div style={{ opacity: glowOpacity }} className="absolute inset-0 bg-blue-900/20 mix-blend-overlay" />
                            
                            {/* Grid Lines */}
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                            <div className="absolute top-1/4 left-1/4 w-full h-[1px] bg-blue-500/50" />
                            <div className="absolute top-3/4 left-0 w-full h-[1px] bg-blue-500/50" />
                            <div className="absolute top-0 left-1/3 w-[1px] h-full bg-blue-500/50" />
                            
                            {/* Floating Code Snippets */}
                            <div className="absolute top-10 right-4 text-[8px] font-mono text-blue-400 opacity-80">
                                {`SELECT * FROM parts WHERE sku_id = 'TURBO_01'`}
                            </div>
                            <div className="absolute bottom-12 right-12 text-[8px] font-mono text-blue-400 opacity-80">
                                {`optimize_supply_chain(efficiency=0.99)`}
                            </div>

                            {/* Node points */}
                            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]" />
                            <div className="absolute top-1/3 left-2/3 w-1.5 h-1.5 bg-blue-400 rounded-full" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Caption */}
            <motion.p 
                style={{ opacity: titleOpacity }}
                className="font-mono text-xs md:text-sm text-blue-400/80 mb-16 tracking-wider"
            >
                {'>'} merging physical_supply_chain with digital_intelligence_
            </motion.p>

            {/* 3. The Dual Approach Cards */}
            <motion.div 
                style={{ opacity: cardsOpacity, y: cardsY }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full"
            >
                {/* Left Card: Context */}
                <div className="bg-[#1A1A1A] border border-[#333333] p-8 md:p-10 rounded-sm relative group hover:border-white/20 transition-colors duration-300">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-600 to-transparent opacity-50" />
                    <div className="mb-6 flex items-center justify-between">
                        <Wrench className="text-white" size={24} strokeWidth={1.5} />
                        <span className="font-mono text-xs text-muted tracking-widest">// THE CONTEXT</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">Industry Intuition</h3>
                    <p className="text-gray-400 font-light leading-relaxed">
                        Data doesn't exist in a vacuum. I understand that a SKU isn't just a number—it's a physical part sitting on a shelf taking up capital. I know the difference between seasonal demand and a dead product line because I understand the parts business.
                    </p>
                </div>

                {/* Right Card: Execution */}
                <div className="bg-[#1A1A1A] border border-[#333333] p-8 md:p-10 rounded-sm relative group hover:border-blue-500/30 transition-colors duration-300">
                     <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-transparent opacity-50" />
                    <div className="mb-6 flex items-center justify-between">
                        <Terminal className="text-blue-400" size={24} strokeWidth={1.5} />
                        <span className="font-mono text-xs text-blue-400/70 tracking-widest">// THE EXECUTION</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">Technical Precision</h3>
                    <p className="text-gray-400 font-light leading-relaxed">
                        Intuition isn't scalable; code is. I translate business context into rigorous statistical models and automated pipelines. This eliminates guesswork, ensuring every re-order point and forecast is backed by hard evidence.
                    </p>
                </div>
            </motion.div>

            {/* 4. Immersive Transition Line */}
            <div className="absolute bottom-0 left-1/2 w-[1px] h-32 md:h-48 -translate-x-1/2 overflow-hidden">
                <motion.div 
                    style={{ height: lineHeight }}
                    className="w-full bg-blue-500 shadow-[0_0_15px_#3b82f6]"
                />
            </div>

        </div>
    </section>
  );
};

export default Approach;