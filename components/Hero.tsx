import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);
  const y = useTransform(scrollY, [0, 300], [0, 50]);

  // Simulated data points for background graph
  const [points, setPoints] = useState<string>("");
  
  useEffect(() => {
    // Generate a smooth random curve
    const width = window.innerWidth;
    const height = window.innerHeight;
    let path = `M0,${height / 2} `;
    
    // Create a curve that starts chaotic and levels out
    for (let i = 0; i <= width; i += 50) {
      const progress = i / width;
      const amplitude = 150 * (1 - progress); // Dampening amplitude
      const noise = (Math.random() - 0.5) * amplitude;
      const yPos = height / 2 + noise + (Math.sin(i / 100) * 20);
      path += `L${i},${yPos} `;
    }
    setPoints(path);
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Background Data Line Animation */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
         <svg className="w-full h-full">
           <motion.path
             d={points}
             fill="none"
             stroke="currentColor"
             strokeWidth="2"
             initial={{ pathLength: 0, opacity: 0 }}
             animate={{ pathLength: 1, opacity: 1 }}
             transition={{ duration: 3, ease: "easeInOut" }}
             className="text-gray-600"
           />
         </svg>
      </div>

      <motion.div 
        style={{ opacity, scale, y }}
        className="z-10 text-center px-4 max-w-5xl"
      >
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 text-white"
        >
          Stop Guessing Demand.
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-xl md:text-2xl text-muted font-light tracking-wide"
        >
          Precision Analytics for the Auto & Transport Industry.
        </motion.p>
      </motion.div>

      {/* Guide Line to next section */}
      <motion.div 
        className="absolute bottom-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent to-white/50 h-24 -translate-x-1/2"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 96, opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      />
      
      <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 2, duration: 1 }}
         className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted animate-bounce"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;