"use client";

import { useState } from "react";
import Contact from "@/components/Contact";
import ConsultationForm from "@/components/ConsultationForm";

export default function ContactSection() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <>
      <Contact onOpenForm={() => setOpenForm(true)} />
      {openForm && <ConsultationForm onClose={() => setOpenForm(false)} />}
    </>
  );
}
