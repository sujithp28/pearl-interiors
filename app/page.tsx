import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Contact />
      <Footer />   {/* 👈 Added here */}
    </>
  );
}

