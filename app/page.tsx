import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import WhyChooseUs from "../components/WhyChooseUs";
import ProcessTimeline from "../components/ProcessTimeline";
import ConsultationForm from "../components/ConsultationForm";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <WhyChooseUs />   {/* Trust & Privacy Section */}
      <ProcessTimeline />  {/* Design Process Timeline */}
      <ConsultationForm /> {/* Private Consultation Form */}
      <Contact />
      <Footer />
    </>
  );
}

