"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import ConsultationForm from "@/components/ConsultationForm";
import FadeInSection from "@/components/FadeInSection";

export default function HomeHeroSection() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <>
      <FadeInSection>
        <Hero openForm={() => setOpenForm(true)} />
      </FadeInSection>

      {openForm && <ConsultationForm onClose={() => setOpenForm(false)} />}
    </>
  );
}
