"use client";

import Link from "next/link";
import { useEffect } from "react";

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
    <section className="max-w-6xl mx-auto">
      <nav className="m-2 container mx-auto px-4 flex flex-row justify-end gap-8 font-semibold text-gray-700">
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
      </nav>
    </section>
  );
}
