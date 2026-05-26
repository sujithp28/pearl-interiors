"use client";

import { PHONE_NUMBER, DISPLAY_PHONE } from "@/utils/constants";
import SectionHeader from "@/components/SectionHeader";

type ContactProps = {
  onOpenForm?: () => void;
};

export default function Contact({ onOpenForm }: ContactProps) {
  return (
    <section className="bg-gradient-to-b from-zinc-950 to-black py-24 text-center">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeader
          eyebrow="Get Started"
          title="Schedule a Private Consultation"
          subtitle="Every project begins with a confidential design discussion. We respect your privacy and craft each space exclusively for you."
        />

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {onOpenForm && (
            <button type="button" onClick={onOpenForm} className="btn-primary px-8 py-4">
              Request Consultation Form
            </button>
          )}

          <a
            href={`https://wa.me/${PHONE_NUMBER}?text=Hi%20I%20am%20interested%20in%20interior%20design`}
            target="_blank"
            rel="noopener noreferrer"
            className={onOpenForm ? "btn-outline px-8 py-4" : "btn-primary px-8 py-4"}
          >
            WhatsApp: {DISPLAY_PHONE}
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          All consultations are strictly confidential.
        </p>
      </div>
    </section>
  );
}
