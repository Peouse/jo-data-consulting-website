import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      alert(`Connecting to ${email}...`);
      setEmail('');
  };

  return (
    <section className="h-screen bg-background flex flex-col items-center justify-center px-4 relative">
      
      <div className="text-center mb-12">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
          Ready to optimize?
        </h2>
        <p className="text-muted font-mono text-sm uppercase tracking-widest">
            // INITIALIZE_CONNECTION
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div 
            className={`bg-black border ${isFocused ? 'border-white' : 'border-border'} p-6 rounded-lg transition-colors duration-300 font-mono text-lg md:text-xl flex items-center shadow-2xl`}
        >
            <span className="text-green-500 mr-3 select-none">{'>'}</span>
            <div className="flex-grow relative">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className="bg-transparent border-none outline-none text-white w-full placeholder-gray-700"
                    placeholder="Enter email_"
                    autoComplete="off"
                />
            </div>
            {isFocused && (
                <span className={`w-3 h-6 bg-white ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}></span>
            )}
        </div>
        
        <div className="mt-8 flex justify-center gap-8 text-sm font-mono text-muted">
             <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
             <a href="#" className="hover:text-white transition-colors">GITHUB</a>
             <a href="#" className="hover:text-white transition-colors">TWITTER</a>
        </div>
      </form>

      <footer className="absolute bottom-8 text-xs text-gray-800 font-mono">
        © 2024 PRECISION ANALYTICS. ALL RIGHTS RESERVED.
      </footer>
    </section>
  );
};

export default Contact;