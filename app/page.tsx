import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import WhyChooseUs from "../components/WhyChooseUs";
import ProcessTimeline from "../components/ProcessTimeline";
import ConsultationForm from "../components/ConsultationForm";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FadeInSection from "../components/FadeInSection";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import CitySEO from "../components/CitySEO";

export default function Home() {
  return (
    <>
      <Navbar />

      <FadeInSection>
        <Hero />
      </FadeInSection>

      <FadeInSection>
        <Services />
      </FadeInSection>

      <FadeInSection>
        <CitySEO />
      </FadeInSection>

      <FadeInSection>
        <Projects />
      </FadeInSection>

      <FadeInSection>
        <WhyChooseUs />
      </FadeInSection>

      <FadeInSection>
        <ProcessTimeline />
      </FadeInSection>

      <FadeInSection>
        <ConsultationForm />
      </FadeInSection>

      <FadeInSection>
        <Contact />
      </FadeInSection>

      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </>
  );
}

