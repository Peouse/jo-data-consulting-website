import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Terminal, BarChart2, Server, Code2, Globe, Cpu, Layers } from 'lucide-react';

interface Tool {
  name: string;
  icon: React.ReactNode;
  snippet: string;
}

const tools: Tool[] = [
  { 
    name: 'Python', 
    icon: <Terminal size={24} />, 
    snippet: 'import pandas as pd\ndf = pd.read_csv("data.csv")\ndf.groupby("category").sum()' 
  },
  { 
    name: 'SQL', 
    icon: <Database size={24} />, 
    snippet: 'SELECT sku, SUM(revenue)\nFROM transactions\nGROUP BY 1\nHAVING SUM(revenue) < 1000;' 
  },
  { 
    name: 'PowerBI', 
    icon: <BarChart2 size={24} />, 
    snippet: 'CALCULATE(\n  SUM(Sales[Amount]),\n  DATESYTD(Calendar[Date])\n)' 
  },
  { 
    name: 'BigQuery', 
    icon: <Server size={24} />, 
    snippet: 'CREATE OR REPLACE MODEL\n`project.dataset.model`\nOPTIONS(model_type="linear_reg")' 
  },
  { 
    name: 'TypeScript', 
    icon: <Code2 size={24} />, 
    snippet: 'interface DataPoint {\n  id: string;\n  value: number;\n  timestamp: Date;\n}' 
  },
  { 
    name: 'React', 
    icon: <Globe size={24} />, 
    snippet: 'const [data, setData] = useState([]);\nuseEffect(() => {\n  fetchData();\n}, []);' 
  },
  { 
    name: 'TensorFlow', 
    icon: <Cpu size={24} />, 
    snippet: 'model.compile(\n  optimizer="adam",\n  loss="mean_squared_error"\n);' 
  },
  { 
    name: 'dbt', 
    icon: <Layers size={24} />, 
    snippet: '{{ config(materialized="table") }}\nSELECT * FROM {{ ref("stg_users") }}' 
  },
];

const Toolkit: React.FC = () => {
  const [hoveredTool, setHoveredTool] = useState<Tool | null>(null);

  return (
    <section className="min-h-screen bg-background flex flex-col items-center justify-center py-24 relative px-4">
      
      <div className="max-w-4xl w-full mb-12 flex justify-between items-end border-b border-border pb-4">
        <div>
            <h2 className="text-3xl font-bold text-white mb-2">The Toolkit</h2>
            <p className="text-muted font-mono text-sm">// ENGINEERED FOR SCALE</p>
        </div>
      </div>

      <div className="max-w-4xl w-full grid grid-cols-2 md:grid-cols-4 gap-4">
        {tools.map((tool) => (
          <motion.div
            key={tool.name}
            className="bg-card border border-border aspect-square flex flex-col items-center justify-center cursor-pointer hover:border-white transition-colors group relative"
            onMouseEnter={() => setHoveredTool(tool)}
            onMouseLeave={() => setHoveredTool(null)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-muted group-hover:text-white transition-colors mb-4">
                {tool.icon}
            </div>
            <span className="font-mono text-sm text-gray-500 group-hover:text-white">{tool.name}</span>
            
            {/* Mobile/Corner indicator */}
            <div className="absolute top-2 right-2 w-1 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.div>
        ))}
      </div>

      {/* Code Snippet Overlay - Fixed position or below? Let's do a dedicated area below the grid for visual stability */}
      <div className="max-w-4xl w-full h-32 mt-8 bg-[#050505] border border-border/50 rounded p-4 font-mono text-xs md:text-sm text-gray-400 overflow-hidden relative">
        <div className="absolute top-2 left-2 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
        </div>
        <div className="mt-6">
            <AnimatePresence mode='wait'>
                {hoveredTool ? (
                    <motion.pre
                        key={hoveredTool.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-green-400"
                    >
                        {hoveredTool.snippet}
                    </motion.pre>
                ) : (
                    <motion.div
                        key="default"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                        exit={{ opacity: 0 }}
                    >
                        # Hover over a tool to view implementation details...
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
      </div>

    </section>
  );
};

export default Toolkit;