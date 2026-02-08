export const metadata = {
  title: "Luxury Interior Designers in Hyderabad & Bangalore",
  description:
    "Premium home interiors, modular kitchens and wardrobes. 45-day delivery with warranty.",
};
import FAQ from "../components/FAQ";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
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

      {/* 1️⃣ HERO */}
      <FadeInSection>
        <Hero />
      </FadeInSection>

      {/* 2️⃣ TRUST FIRST */}
      <FadeInSection>
        <WhyChooseUs />
      </FadeInSection>

      {/* 3️⃣ SERVICES */}
      <FadeInSection>
        <Services />
      </FadeInSection>

      {/* 4️⃣ SHOW WORK EARLY (VERY IMPORTANT) */}
      <FadeInSection>
        <Projects />
      </FadeInSection>

      {/* 5️⃣ SEO CITY CONTENT (MOVE DOWN) */}
      <FadeInSection>
        <CitySEO />
      </FadeInSection>

      {/* 6️⃣ PROCESS */}
      <FadeInSection>
        <ProcessTimeline />
      </FadeInSection>
	
      <FadeInSection>
        <Pricing />
      </FadeInSection>

      {/* ⭐ TESTIMONIALS */}
      <FadeInSection>
        <Testimonials />
      </FadeInSection>


      {/* 7️⃣ LEAD CAPTURE FORM */}
      <FadeInSection>
        <ConsultationForm />
      </FadeInSection>

      {/* 8️⃣ FINAL CONTACT CTA */}
      <FadeInSection>
        <Contact />
      </FadeInSection>

      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </>
  );
}

