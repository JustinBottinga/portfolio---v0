"use client";

import Link from "next/link";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Navigation() {
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute("href");
      if (href?.startsWith("#")) {
        const targetId = href.substring(1);
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({ behavior: "smooth" });
      }
    };

    const links = document.querySelectorAll('nav a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);

  return (
    <motion.section
      className="max-w-6xl mx-auto"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <nav className="m-2 container mx-auto px-4 flex flex-row justify-end gap-8 font-semibold text-gray-700">
        <Link href="#about" className="hover:text-gray-950 transition-colors">
          About
        </Link>
        <Link
          href="#projects"
          className="hover:text-gray-950 transition-colors"
        >
          Projects
        </Link>
      </nav>
    </motion.section>
  );
}
