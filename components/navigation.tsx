"use client";

import Link from "next/link";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
      <nav className="container p-2 mx-auto flex flex-row justify-start gap-8 font-semibold text-gray-700">
        <Image
          src="/favicon.svg"
          className="fixed z-50 mix-blend-difference filter invert"
          alt="Logo"
          width={20}
          height={20}
        />
        <div className="flex w-full gap-8 self-end justify-end ">
          <Link href="#about" className="hover:text-gray-950 transition-colors">
            About
          </Link>
          <Link
            href="#projects"
            className="hover:text-gray-950 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="hover:text-gray-950 transition-colors"
          >
            Contact
          </Link>
        </div>
      </nav>
    </motion.section>
  );
}
