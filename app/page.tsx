import FAQ from "../components/FAQ";
import Pricing from "../components/Pricing";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Projects from "../components/Projects";
import WhyChooseUs from "../components/WhyChooseUs";
import ProcessTimeline from "../components/ProcessTimeline";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FadeInSection from "../components/FadeInSection";
import CitySEO from "../components/CitySEO";
import TrustProof from "../components/TrustProof";
import Testimonials from "../components/Testimonials";
import HomeHeroSection from "../components/HomeHeroSection";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* 1️⃣ HERO */}
      <HomeHeroSection />

      {/* 2️⃣ TRUST */}
      <FadeInSection>
        <WhyChooseUs />
      </FadeInSection>

      <FadeInSection>
        <TrustProof />
      </FadeInSection>

      {/* 3️⃣ SERVICES */}
      <FadeInSection>
        <Services />
      </FadeInSection>

      {/* 4️⃣ PROJECTS */}
      <FadeInSection>
        <Projects />
      </FadeInSection>

      {/* 5️⃣ CITY SEO */}
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

      <FadeInSection>
        <Testimonials />
      </FadeInSection>

      <FadeInSection>
        <FAQ />
      </FadeInSection>

      <div id="contact">
        <FadeInSection>
          <Contact />
        </FadeInSection>
      </div>

      <Footer />
    </>
  );
}
