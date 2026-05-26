"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    __pearlScrollLockCount?: number;
    __pearlPreviousBodyOverflow?: string;
  }
}

export default function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;

    const { body } = document;
    window.__pearlScrollLockCount = (window.__pearlScrollLockCount ?? 0) + 1;

    if (window.__pearlScrollLockCount === 1) {
      window.__pearlPreviousBodyOverflow = body.style.overflow;
      body.style.overflow = "hidden";
    }

    return () => {
      window.__pearlScrollLockCount = Math.max(
        (window.__pearlScrollLockCount ?? 1) - 1,
        0
      );

      if (window.__pearlScrollLockCount === 0) {
        body.style.overflow = window.__pearlPreviousBodyOverflow ?? "";
        delete window.__pearlPreviousBodyOverflow;
      }
    };
  }, [locked]);
}
