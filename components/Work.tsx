import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip, LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

// --- Types ---
interface CaseStudyProps {
  title: string;
  subtitle: string;
  category: string;
  stats: { label: string; value: string }[];
  children: React.ReactNode;
}

// --- Data for Charts ---
const dataFinance = [
  { name: 'Q1', val: 4000 },
  { name: 'Q2', val: 3000 },
  { name: 'Q3', val: 2000 },
  { name: 'Q4', val: 2780 },
  { name: 'Q5', val: 1890 },
  { name: 'Q6', val: 2390 },
];

const dataMarketing = [
  { name: 'Jan', uv: 4000, pv: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398 },
  { name: 'Mar', uv: 2000, pv: 9800 },
  { name: 'Apr', uv: 2780, pv: 3908 },
  { name: 'May', uv: 1890, pv: 4800 },
  { name: 'Jun', uv: 2390, pv: 3800 },
  { name: 'Jul', uv: 3490, pv: 4300 },
];

// --- Sub-components ---

const CaseStudyCard: React.FC<CaseStudyProps> = ({ title, subtitle, category, stats, children }) => {
  return (
    <div className="w-[85vw] md:w-[60vw] h-[70vh] flex-shrink-0 bg-card border border-border p-8 flex flex-col justify-between relative overflow-hidden group hover:border-white/20 transition-colors duration-500">
      <div className="absolute top-4 right-4 font-mono text-xs text-muted uppercase tracking-widest border border-border px-2 py-1 rounded">
        {category}
      </div>

      <div className="z-10">
        <h3 className="text-3xl md:text-5xl font-bold mb-2 text-white">{subtitle}</h3>
        <p className="text-xl text-muted font-light">{title}</p>
      </div>

      <div className="flex-grow my-8 bg-background border border-border/50 relative overflow-hidden flex items-center justify-center rounded">
        {children}
      </div>

      <div className="z-10 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-border pt-6">
        {stats.map((stat, idx) => (
          <div key={idx}>
            <p className="text-xs text-muted font-mono uppercase mb-1">{stat.label}</p>
            <p className="text-xl md:text-2xl text-white font-mono">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Heatmap Component ---
const HeatmapVis = () => {
    // Generate a static grid of colors
    const rows = 10;
    const cols = 20;
    const getIntensity = (i: number, j: number) => {
        // Create a mock "hotspot" in the middle
        const cx = cols / 2;
        const cy = rows / 2;
        const dist = Math.sqrt(Math.pow(i - cx, 2) + Math.pow(j - cy, 2));
        return Math.max(0.1, 1 - dist / 8);
    };

    return (
        <div className="grid gap-1 w-full h-full p-4" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
            {Array.from({ length: rows * cols }).map((_, idx) => {
                const i = idx % cols;
                const j = Math.floor(idx / cols);
                const opacity = getIntensity(i, j);
                return (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: opacity }}
                        viewport={{ once: true }}
                        transition={{ delay: Math.random() * 1 }}
                        className="bg-red-500 rounded-sm w-full h-full"
                        style={{ opacity: opacity }}
                    />
                )
            })}
        </div>
    )
}


const Work: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Intro text positioned absolute or separate? Let's make it part of the scroll flow or a header */}
        <div className="absolute top-8 left-8 md:top-12 md:left-12 z-20">
             <h2 className="text-sm font-mono text-muted uppercase tracking-widest mb-2">// SELECTED WORKS</h2>
             <div className="w-12 h-[1px] bg-white"></div>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-8 md:px-24">
          
          {/* Intro Card */}
          <div className="w-[30vw] md:w-[20vw] h-[70vh] flex-shrink-0 flex items-center">
             <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                 Real<br/>
                 World<br/>
                 <span className="text-gray-600">Impact.</span>
             </h2>
          </div>

          {/* Slide 1: Logistics */}
          <CaseStudyCard 
            category="Logistics"
            title="The Dead Stock Destroyer"
            subtitle="Warehouse Optimization"
            stats={[{ label: "Space Recovered", value: "35%" }, { label: "Dead Stock", value: "-$1.2M" }]}
          >
            <HeatmapVis />
          </CaseStudyCard>

          {/* Slide 2: Finance */}
          <CaseStudyCard 
            category="Finance"
            title="The Margin Maximizer"
            subtitle="Cost Recovery"
            stats={[{ label: "ROI", value: "+215%" }, { label: "Cash Flow", value: "+30%" }]}
          >
             <div className="w-full h-full p-6">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={dataFinance}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                        <XAxis dataKey="name" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                        <Tooltip 
                            contentStyle={{ backgroundColor: '#1A1A1A', borderColor: '#333', color: '#fff' }} 
                            cursor={{fill: '#ffffff10'}}
                        />
                        <Bar dataKey="val" fill="#fff" radius={[2, 2, 0, 0]}>
                            {dataFinance.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={index === 3 ? '#4ade80' : '#ffffff'} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
             </div>
          </CaseStudyCard>

          {/* Slide 3: Marketing */}
          <CaseStudyCard 
            category="Marketing"
            title="The Demand Forecaster"
            subtitle="Trend Prediction"
            stats={[{ label: "Accuracy", value: "94%" }, { label: "Stockouts", value: "0%" }]}
          >
            <div className="w-full h-full p-6">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={dataMarketing}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                        <XAxis dataKey="name" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                        <Tooltip 
                            contentStyle={{ backgroundColor: '#1A1A1A', borderColor: '#333', color: '#fff' }} 
                        />
                        <Line type="monotone" dataKey="pv" stroke="#4ade80" strokeWidth={2} dot={false} />
                        <Line type="monotone" dataKey="uv" stroke="#666" strokeWidth={2} dot={false} strokeDasharray="5 5" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
          </CaseStudyCard>

          {/* Outro Spacer */}
           <div className="w-[10vw] flex-shrink-0" />

        </motion.div>
      </div>
    </section>
  );
};

export default Work;