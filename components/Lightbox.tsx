"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import useBodyScrollLock from "@/hooks/useBodyScrollLock";
import { blurMap } from "@/utils/blurData";

type LightboxProps = {
  images: string[];
  index: number;
  label: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function Lightbox({
  images,
  index,
  label,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useBodyScrollLock(true);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "ArrowRight") {
        onNext();
        return;
      }
      if (e.key === "ArrowLeft") {
        onPrev();
        return;
      }
      if (e.key !== "Tab") return;

      const container = dialogRef.current;
      if (!container) return;

      const focusable = Array.from(
        container.querySelectorAll<HTMLElement>("button:not([disabled])")
      ).filter((el) => el.offsetParent !== null);
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement;

      if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
      previouslyFocused?.focus?.();
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${label} gallery, image ${index + 1} of ${images.length}`}
      className="fixed inset-0 z-[300] flex flex-col bg-black/95 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between px-6 py-4 text-sm text-white/70">
        <span>
          {label} · {index + 1} / {images.length}
        </span>
        <button
          ref={closeRef}
          type="button"
          aria-label="Close gallery"
          onClick={onClose}
          className="rounded-full border border-white/20 p-2 transition hover:border-pearl-gold hover:text-pearl-gold"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Clicking the backdrop closes; the image itself does not. */}
      <div
        role="presentation"
        onClick={onClose}
        className="relative flex flex-1 items-center justify-center px-4 pb-8"
      >
        <div
          role="presentation"
          onClick={(e) => e.stopPropagation()}
          className="relative h-full w-full max-w-6xl"
        >
          <Image
            src={images[index]}
            alt={`${label} interior design ${index + 1}`}
            fill
            sizes="100vw"
            quality={90}
            placeholder="blur"
            blurDataURL={blurMap[images[index]]}
            className="object-contain"
            priority
          />
        </div>

        <button
          type="button"
          aria-label="Previous image"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white transition hover:border-pearl-gold hover:text-pearl-gold md:left-8"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>

        <button
          type="button"
          aria-label="Next image"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white transition hover:border-pearl-gold hover:text-pearl-gold md:right-8"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
