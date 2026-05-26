"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { PHONE_NUMBER } from "@/utils/constants";
import useBodyScrollLock from "@/hooks/useBodyScrollLock";

const navItems = [
  { label: "Services", id: "services" },
  { label: "Gallery", id: "designs" },
  { label: "Pricing", id: "pricing" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useBodyScrollLock(open);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
    closeMenu = false
  ) => {
    if (closeMenu) setOpen(false);
    if (!isHomePage) return;

    const el = document.getElementById(id);
    if (!el) return;

    e.preventDefault();
    const yOffset = -100;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 z-[100] w-full border-b text-white transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-black/95 py-3 shadow-lg backdrop-blur-lg"
            : "border-white/5 bg-black/80 py-4 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Link
            href="/"
            className="font-serif text-xl tracking-wide text-pearl-gold"
          >
            Pearl Interiors
          </Link>

          <div className="hidden items-center space-x-8 text-sm uppercase tracking-wider md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={`/#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className="group relative transition-all duration-300"
              >
                <span className="transition-colors group-hover:text-pearl-gold">
                  {item.label}
                </span>
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-pearl-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="text-pearl-gold md:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? (
              <XMarkIcon className="h-7 w-7" />
            ) : (
              <Bars3Icon className="h-7 w-7" />
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div
          role="presentation"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[150] bg-black/70 backdrop-blur-sm"
        />
      )}

      <div
        className={`fixed top-0 right-0 z-[200] h-full w-[85%] max-w-sm transform bg-gradient-to-b from-black to-zinc-900 text-white shadow-[0_0_40px_rgba(0,0,0,0.8)] transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-pearl-gold to-transparent opacity-70" />

        <div className="relative border-b border-white/10 p-6">
          <p className="font-serif text-xl text-pearl-gold">Menu</p>
          <p className="mt-1 text-xs text-gray-500">Pearl Interiors</p>

          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute right-6 top-5 text-white/70 hover:text-white"
          >
            <XMarkIcon className="h-7 w-7" />
          </button>
        </div>

        <div className="flex flex-col gap-8 p-10 font-serif text-xl">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`/#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id, true)}
              className="group relative rounded-lg py-2 pl-3 text-left transition hover:bg-white/5"
            >
              <span className="transition group-hover:text-pearl-gold">
                {item.label}
              </span>
              <span className="absolute -bottom-2 left-3 h-px w-0 bg-pearl-gold transition-all duration-300 group-hover:w-16" />
            </Link>
          ))}
        </div>

        <div className="mx-6 h-px bg-white/10" />

        <div className="p-6">
          <a
            href={`https://wa.me/${PHONE_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary block w-full py-4 text-lg"
          >
            Call / WhatsApp Now
          </a>
        </div>
      </div>
    </>
  );
}
