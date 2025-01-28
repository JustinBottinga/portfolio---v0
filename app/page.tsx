// Page.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Footer from "@/components/footer";
import Contact from "@/components/contact";

export default function Home() {
  const [showHero, setShowHero] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show hero after a short delay
    const heroTimer = setTimeout(() => setShowHero(true), 400);

    // Show content after hero animation
    const contentTimer = setTimeout(() => setShowContent(true), 1300);

    return () => {
      clearTimeout(heroTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <>
      <Navigation />
      <div className="min-h-screen flex flex-col gap-8">
        <AnimatePresence>{showHero && <Hero />}</AnimatePresence>
        <AnimatePresence>
          {showContent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-8"
            >
              <About />
              <Projects />
              <Contact />
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
