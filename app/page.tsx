import FAQ from "../components/FAQ";
import Pricing from "../components/Pricing";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Projects from "../components/Projects";
import WhyChooseUs from "../components/WhyChooseUs";
import ProcessTimeline from "../components/ProcessTimeline";
import Footer from "../components/Footer";
import FadeInSection from "../components/FadeInSection";
import CitySEO from "../components/CitySEO";
import TrustProof from "../components/TrustProof";
import Testimonials from "../components/Testimonials";
import HomeHeroSection from "../components/HomeHeroSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <HomeHeroSection />

      <FadeInSection>
        <WhyChooseUs />
      </FadeInSection>

      <FadeInSection>
        <TrustProof />
      </FadeInSection>

      <FadeInSection>
        <Services />
      </FadeInSection>

      <FadeInSection>
        <Projects />
      </FadeInSection>

      <FadeInSection>
        <CitySEO />
      </FadeInSection>

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
          <ContactSection />
        </FadeInSection>
      </div>

      <Footer />
    </>
  );
}
