"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../components/ui/button";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";

export default function NotFound() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative max-w-6xl mx-2 sm:mx-auto my-8 rounded-3xl ring-inset ring-black/5 ring-1 overflow-hidden bg-gradient-to-bl from-neutral-50 to-[#fff5e6]/80 group min-h-[70vh] flex items-center"
    >
      {/* First blur - top right (orange) */}
      <div
        className="absolute top-4 right-4 w-64 h-64 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,165,0,0.7) 0%, rgba(255,140,0,0.5) 100%)",
        }}
      />
      {/* Second blur - bottom middle (yellow) */}
      <div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-64 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,215,0,0.7) 0%, rgba(255,235,59,0.5) 100%)",
        }}
      />

      <div className="container p-4 sm:p-6 lg:p-8 relative z-10">
        <div className="mx-auto flex flex-col gap-6 text-center items-center">
          <h1 className="text-6xl font-bold tracking-tight sm:text-8xl text-gray-800">
            404
          </h1>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl mt-2">
            Page Not Found
          </h2>

          <div className="mt-4 space-y-6 text-gray-700 max-w-xl">
            <p className="text-lg">
              Oops! Looks like you've ventured into uncharted digital territory.
              This page seems to have pulled a disappearing act.
            </p>

            <p className="text-lg">
              Maybe it's taking a coffee break, or perhaps it never existed in
              the first place. The mysteries of the web are endless!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button
              asChild
              className="bg-neutral-950 text-white shadow-md hover:bg-neutral-600 transition-colors rounded-full px-6 py-2"
            >
              <Link href="/">
                <HomeIcon
                  fontSize="small"
                  style={{
                    width: 20,
                    height: 20,
                    marginRight: 8,
                  }}
                />
                Back to Home
              </Link>
            </Button>
          </div>

          <div className="mt-12 text-gray-500">
            <p>
              If you believe this is an error, feel free to{" "}
              <a
                href="mailto:jbottinga@outlook.com"
                className="text-orange-600 hover:underline"
              >
                contact me
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
