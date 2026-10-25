import { useCallback, useEffect, useState } from 'react';
import { LoaderCircle } from 'lucide-react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import AboutSection from './components/aboutSection';
import SkillSection from './components/skillSection';
import EducationSection from './components/educationSection';
import ServiceSection from './components/serviceSection';
import Projects from './components/projectSection';
import Contact from './components/contact';
import Footer from './components/footer';
import CustomCursor from './components/CustomCursor';
import {
  getEducation,
  getProjects,
  getServices,
  getSkills,
} from './api/endpoints';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark');
  const [portfolioData, setPortfolioData] = useState(null);
  const [loadStatus, setLoadStatus] = useState('loading');

  const loadPortfolioData = useCallback(async () => {
    setLoadStatus('loading');

    try {
      const [skills, education, services, projects] = await Promise.all([
        getSkills(),
        getEducation(),
        getServices(),
        getProjects(),
      ]);

      setPortfolioData({ skills, education, services, projects });
      setLoadStatus('ready');
    } catch {
      setLoadStatus('error');
    }
  }, []);

  useEffect(() => {
    loadPortfolioData();
  }, [loadPortfolioData]);

  const toggleTheme = () => {
    setTheme(currentTheme => {
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('portfolio-theme', nextTheme);
      return nextTheme;
    });
  };

  if (loadStatus !== 'ready') {
    const hasError = loadStatus === 'error';

    return (
      <main
        className="portfolio-loader min-h-screen flex items-center justify-center overflow-hidden bg-[#030303] px-6 text-center text-white"
        role="status"
        aria-live="polite"
      >
        <div className="relative w-full max-w-lg">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />
          <div className="relative">
            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-400/20 bg-white/[0.03] shadow-[0_0_60px_rgba(34,211,238,0.12)]">
              <LoaderCircle
                aria-hidden="true"
                className={`h-9 w-9 text-cyan-400 ${hasError ? '' : 'animate-spin'}`}
                strokeWidth={1.5}
              />
            </div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-cyan-400">
              {hasError ? 'Connection taking longer' : 'A moment, please'}
            </p>
            <h1 className="mb-4 text-3xl font-black uppercase italic tracking-tight sm:text-4xl">
              {hasError ? 'Still waking up.' : 'The portfolio is waking up.'}
            </h1>
            <p className="mx-auto max-w-md text-sm leading-7 text-gray-400 sm:text-base">
              {hasError
                ? 'The portfolio server could not be reached just yet. Please try again in a moment.'
                : 'The server is starting and your projects and other portfolio details are on their way. This can take a little while on the first visit.'}
            </p>
            {hasError && (
              <button
                type="button"
                onClick={loadPortfolioData}
                className="mt-8 rounded-full border border-cyan-400/40 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300 transition-colors hover:border-cyan-300 hover:bg-cyan-400/10"
              >
                Try again
              </button>
            )}
            {!hasError && (
              <div className="mx-auto mt-9 h-px w-36 overflow-hidden bg-white/10">
                <div className="h-full w-1/2 animate-[loader-progress_1.6s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
              </div>
            )}
          </div>
        </div>
      </main>
    );
  }

  return (
    <>
      <CustomCursor />
      <div
        className={`${theme === 'light' ? 'theme-light' : 'theme-dark'} min-h-screen text-white transition-colors duration-500 selection:bg-cyan-500/30`}
      >
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        <main>
          <Hero />
          <AboutSection />
          <SkillSection skills={portfolioData.skills} />
          <EducationSection education={portfolioData.education} />
          <ServiceSection services={portfolioData.services} />
          <Projects projects={portfolioData.projects} />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;