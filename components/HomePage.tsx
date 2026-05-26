"use client";

import { useState } from "react";

import Pricing from "./Pricing";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Projects from "./Projects";
import WhyChooseUs from "./WhyChooseUs";
import ProcessTimeline from "./ProcessTimeline";
import ConsultationForm from "./ConsultationForm";
import Contact from "./Contact";
import Footer from "./Footer";
import FadeInSection from "./FadeInSection";
import CitySEO from "./CitySEO";

export default function HomePage() {
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

      <div id="contact">
        <FadeInSection>
          <Contact />
        </FadeInSection>
      </div>

      <Footer />

      {/* ⭐ GLOBAL MODAL (VERY IMPORTANT) */}
      {openForm && <ConsultationForm onClose={() => setOpenForm(false)} />}
    </>
  );
}
