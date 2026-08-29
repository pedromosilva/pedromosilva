import { About } from "@/components/About";
import { Certifications } from "@/components/Certifications";
import { Community } from "@/components/Community";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Links } from "@/components/Links";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Projects />
        <Community />
        <Links />
      </main>
      <Footer />
    </div>
  );
}

export default App;
