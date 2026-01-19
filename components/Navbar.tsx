"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Pearl Interiors</h1>

        <div className="hidden md:flex space-x-8">
          <a href="#services" className="hover:text-gray-300">Services</a>
          <a href="#projects" className="hover:text-gray-300">Projects</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white transform ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="p-4 flex justify-between items-center">
          <span className="font-bold">Menu</span>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        <div className="flex flex-col space-y-4 p-4">
          <a href="#services" onClick={() => setOpen(false)}>Services</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      </div>
    </nav>
  );
}

