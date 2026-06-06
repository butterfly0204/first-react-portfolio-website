import { useState } from "react";
import Header from "./components/Header"
import Navbar from "./components/Navbar";
import  Calltoaction from "./components/Calltoaction"

import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Theme
      </button>
      <Header/>
      <Calltoaction/>
      <Navbar />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;