// app/page.jsx

"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white">
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Blog />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-slate-950/50 backdrop-blur-sm py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400">
          <p>&copy; 2026 AI/ML Portfolio. Built with Next.js & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}