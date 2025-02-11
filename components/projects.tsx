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

        <div className="bg-gradient-to-bl from-neutral-50 to-[#d4feee]/20 ring-inset ring-black/5 ring-1 rounded-3xl p-4 lg:p-8 flex flex-col">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Want to see more?
          </h2>
          <div className="prose prose-lg mt-4">
            <p className="text-gray-700 font-normal leading-relaxed text-lg">
              I'm currently working on a few projects at{" "}
              <Link
                href="https://www.grufix.nl"
                target="_blank"
                className="underline text-pink-600"
              >
                Grufix
              </Link>
              {". "}
            </p>
            <p className="text-gray-700 font-normal leading-relaxed text-lg">
              Check it out to explore more of my current projects and see the
              exciting work we’re doing. Grufix is where I channel my creativity
              and passion into meaningful projects—don’t miss it!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
