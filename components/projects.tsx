import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  // Array of placeholder images for the gallery background
  const placeholderImages = [
    "/projects/Frame 1.png",
    "/projects/Frame 1-1.png",
    "/projects/eHOEOI4RCokuBzKGTpwURpwJrM.png",
    "/projects/AsaQTC5WpA4eRechCZXwmpBHjxU.png",
    "/projects/txr3zIaNF1t7rRbZzpXVGvOQw.webp",
    "/projects/V4OIc3mUh0YYEaxYFtdD0HgrWBs.jpg",
  ];

  return (
    <section className="relative mx-2 sm:mx-auto max-w-6xl" id="projects">
      <div className="container flex flex-col gap-8">
        <div className="flex flex-wrap gap-8">
          {/* Project Card - Celestia */}
          <Link
            href="https://github.com/JustinBottinga/celestia"
            target="_blank"
            className="flex-grow w-full md:w-[48%]"
          >
            <div className="group relative rounded-3xl bg-gradient-to-br from-slate-950 to-slate-900 p-8 transition-all duration-500 flex flex-col h-full">
              {/* Header Section */}
              <div className="mb-6 flex justify-between items-start transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-105">
                <div>
                  <h4 className="text-2xl font-semibold text-white mb-2">
                    Celestia
                  </h4>
                  <p className="text-gray-100">AI chat companion</p>
                </div>
                <div className="rounded-full bg-white p-2 transition-all duration-500 group-hover:scale-105 hover:bg-pink-400 hover:text-white">
                  <ArrowUpRight />
                </div>
              </div>

              {/* Image Container */}
              <div className="relative rounded-lg transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative">
                  <Image
                    src="/projects/celestia.png"
                    alt="Celestia image"
                    width={600}
                    height={500}
                    className="rounded-lg border-2 border-white/10 transition-all duration-500 group-hover:border-white/20"
                  />
                </div>
              </div>
            </div>
          </Link>

          {/* Project Card - JSON Helper */}
          <Link
            href="https://ultimate-json-parser.vercel.app/"
            target="_blank"
            className="flex-grow w-full md:w-[48%]"
          >
            <div className="group relative rounded-3xl bg-gradient-to-b from-orange-500 to-amber-700 p-8 transition-all duration-500 flex flex-col h-full">
              {/* Header Section */}
              <div className="mb-6 flex justify-between items-start transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-105">
                <div>
                  <h4 className="text-2xl font-semibold text-white mb-2">
                    JSON Helper
                  </h4>
                  <p className="text-gray-100">
                    The ultimate JSON toolkit for developers
                  </p>
                </div>
                <div className="rounded-full bg-white p-2 transition-all duration-500 group-hover:scale-105 hover:bg-orange-400 hover:text-white">
                  <ArrowUpRight />
                </div>
              </div>

              {/* Image Container */}
              <div className="relative rounded-lg transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-yellow-500/20">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-400 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative">
                  <Image
                    src="/projects/Json-helper.png"
                    alt="JSON Helper image"
                    width={600}
                    height={500}
                    className="rounded-lg border-2 border-white/10 transition-all duration-500 group-hover:border-white/20"
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="relative rounded-3xl overflow-hidden">
          {/* Gallery background */}
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-1">
            {placeholderImages.map((src, index) => (
              <div key={index} className="relative w-full h-full">
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`Grufix project ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/70"></div>

          {/* Content */}
          <div className="relative z-10 p-4 lg:p-8 flex flex-col">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Want to see more?
            </h2>
            <div className="mt-4">
              <p className="text-white/90 font-normal leading-relaxed text-lg">
                I'm currently working on a few projects at{" "}
                <Link
                  href="https://www.grufix.nl"
                  target="_blank"
                  className="relative underline text-pink-300 hover:text-pink-200 transition-colors inline-block"
                >
                  <span className="relative z-10">Grufix</span>
                  <span className="absolute inset-0 bg-pink-500/30 blur-md rounded-lg"></span>
                </Link>
                {". "}
              </p>
              <p className="text-white/90 font-normal leading-relaxed text-lg">
                Check it out to explore more of my current projects and see the
                exciting work we're doing. Grufix is where I channel my
                creativity and passion into meaningful projects—don't miss it!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
