import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";
import Background from "./components/Background";
import Loader from "./components/Loader";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <AnimatePresence>
        <Loader />
      </AnimatePresence>

      <SmoothScroll />

      <Background />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;