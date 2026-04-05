import Navbar from './components/navbar';
import Hero from './components/hero';
import AboutSection from './components/aboutSection';
import SkillSection from './components/skillSection';
import ServiceSection from './components/serviceSection'; // New Import
import Projects from './components/projectSection';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen selection:bg-cyan-500/30">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <SkillSection />
        <ServiceSection /> {/* New Section Attached Here */}
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;