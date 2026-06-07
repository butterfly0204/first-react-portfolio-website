import { useState } from "react";
import Header from "./components/Header"
import Navbar from "./components/Navbar";
import  Calltoaction from "./components/Calltoaction"

import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import  Experience from "./components/ Experience";

function App() {


  return (
      <>
      <Header/>
      <Calltoaction/>
      <Navbar />
      <About />
      < Experience />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      
      
      </>
  
  );
}


export default App;