"use client";

import { useState } from "react";

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
import CitySEO from "../components/CitySEO";

export default function Home() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <>
      <Navbar />

      {/* 1️⃣ HERO */}
      <FadeInSection>
        <Hero openForm={() => setOpenForm(true)} />
      </FadeInSection>

      {/* 2️⃣ TRUST */}
      <FadeInSection>
        <WhyChooseUs />
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

      {/* 7️⃣ TESTIMONIALS */}
      <FadeInSection>
        <Testimonials />
      </FadeInSection>

      {/* 8️⃣ CONTACT */}
      <FadeInSection>
        <Contact />
      </FadeInSection>

      <Footer />

      {/* ⭐ GLOBAL MODAL (VERY IMPORTANT) */}
      {openForm && (
        <ConsultationForm onClose={() => setOpenForm(false)} />
      )}
    </>
  );
}
