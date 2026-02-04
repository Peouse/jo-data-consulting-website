import React from 'react';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Approach from './components/Approach';
import Work from './components/Work';
import Toolkit from './components/Toolkit';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <main className="w-full bg-background text-primary font-sans antialiased overflow-x-hidden selection:bg-white selection:text-background">
      <Hero />
      <Philosophy />
      <Approach />
      <Work />
      <Toolkit />
      <Contact />
    </main>
  );
};

export default App;