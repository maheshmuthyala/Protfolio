import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Publications from './components/Publications';
import Projects from './components/Projects';
import DashboardGenerator from './components/DashboardGenerator';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Publications />
      <Projects />
      <DashboardGenerator />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
