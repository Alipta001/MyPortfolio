import { useState } from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import AboutSection from './components/aboutSection';
import SkillSection from './components/skillSection';
import EducationSection from './components/educationSection';
import ServiceSection from './components/serviceSection'; // New Import
import Projects from './components/projectSection';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark');

  const toggleTheme = () => {
    setTheme(currentTheme => {
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('portfolio-theme', nextTheme);
      return nextTheme;
    });
  };

  return (
    <div
      className={`${theme === 'light' ? 'theme-light' : 'theme-dark'} min-h-screen text-white transition-colors duration-500 selection:bg-cyan-500/30`}
    >
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <AboutSection />
        <SkillSection />
        <EducationSection />
        <ServiceSection />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;