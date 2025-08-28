import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import TargetCursor from "./components/TargetCursor/TargetCursor";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className=" mx-auto">
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Testimonial />
      <Contact />
      <Footer />
      <ToastContainer position="bottom-right"/>
    </div>
  );
};

export default App;
