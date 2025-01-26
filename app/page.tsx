import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import SkillsMarquee from "@/components/SkillsMarquee";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen flex flex-col gap-8">
        <section className="relative max-w-6xl mx-auto rounded-3xl ring-inset ring-black/5 ring-1 overflow-hidden bg-gradient-to-br from-neutral-50 to-[#d4f1fe]/80 group">
          {/* First blur - top right (light blue) */}
          <div
            className="absolute top-4 right-4 w-64 h-64 rounded-full opacity-50 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(173,216,230,1) 0%, rgba(135,206,250,1) 100%)",
            }}
          />
          {/* Second blur - bottom middle (green) */}
          <div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-64 rounded-full opacity-50 blur-3xl "
            style={{
              background:
                "radial-gradient(circle, rgba(204,250,180,1) 0%, rgba(192,250,234,1) 100%)",
            }}
          />

          <div className="container mx-auto p-4 sm:p-6 lg:p-8 relative z-10">
            <div className="mx-auto flex flex-col gap-12 text-start">
              <h1 className="text-5xl font-semibold tracking-tight sm:text-8xl">
                Justin Bottinga
              </h1>
              <p className="mt-6 text-lg leading-8 w-7/12 tracking-tight font-semibold text-gray-700">
                A 20-year-old software development student from the Netherlands,
                passionate about modern technologies and committed to
                continuously expanding my skill set.
              </p>
              <div className="mt-10 flex flex-wrap justify-start gap-4">
                <Button
                  asChild
                  className="bg-neutral-950 text-white shadow-md hover:bg-neutral-800  rounded-full"
                >
                  <Link href="mailto:jbottinga@outlook.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Me
                  </Link>
                </Button>

                <Button
                  asChild
                  className="bg-white text-black hover:bg-blue-600 shadow-md hover:text-white rounded-full p-3"
                >
                  <Link
                    href="https://linkedin.com/in/justin-bottinga"
                    target="_blank"
                  >
                    <Linkedin className="h-5 w-5 p-0 m-0" />
                  </Link>
                </Button>

                <Button
                  asChild
                  className="bg-white text-black hover:bg-slate-900 shadow-md hover:text-white  rounded-full p-3"
                >
                  <Link
                    href="https://github.com/justinbottinga"
                    target="_blank"
                  >
                    <Github className="h-5 w-5 p-0 m-0" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section - Updated styling to match reference */}
        <section className="relative max-w-6xl mx-auto" id="about">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-8 items-stretch">
              <div className="bg-gradient-to-br from-neutral-50 to-[#d4dffe]/20 ring-inset ring-black/5 ring-1 rounded-3xl p-4 lg:p-8 lg:w-1/2 flex flex-col">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                  About Me
                </h2>
                <div className="prose prose-lg overflow-y-auto flex-grow">
                  <p className="text-gray-600 leading-relaxed text-lg">
                    My name is Justin Bottinga, a 20-year-old student currently
                    pursuing a career in software development. Recently, I
                    co-founded an agency called{" "}
                    <Link
                      href="https://www.grufix.nl"
                      target="_blank"
                      className="underline text-pink-600"
                    >
                      Grufix
                    </Link>{" "}
                    with two of my peers. My passion for computers began at an
                    early age, paired with a love for creative problem-solving.
                    This led me to software development, where I now enjoy
                    leveraging creativity to tackle complex challenges in my
                    projects.
                  </p>
                </div>
              </div>
              <div className="hidden lg:block lg:w-1/2">
                <div className="h-full relative">
                  <Image
                    src="/74e9bac7-e9a1-4676-870d-e60a1ec732ce2.jpg"
                    alt="Justin Bottinga"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto"></section>

        {/* Projects Section - More playful cards */}
        <section
          className="relative bg-gradient-to-b from-white to-gray-50"
          id="projects"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96"></div>
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-16 text-start">
              Project Highlights
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              <Card className="transform transition-all hover:scale-105 hover:shadow-xl">
                <CardHeader className="bg-gradient-to-br m-2  rounded-lg from-blue-100 to-purple-100 rounded-t-lg">
                  <CardTitle className="text-2xl">WeMind Balance</CardTitle>
                  <CardDescription className="text-base font-medium italic">
                    Developed using Angular 17
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 grid">
                  <p className="text-gray-600 leading-relaxed">
                    An application designed to help users manage stress through
                    guided exercises, self-reflection tools, and access to
                    professional therapists.
                  </p>
                  <Button
                    asChild
                    className="bg-neutral-950 text-white hover:bg-neutral-800  rounded-full justify-self-end"
                  >
                    <Link
                      href="https://apps.apple.com/nl/app/wemind-balance/id6443795997"
                      target="_blank"
                    >
                      See more
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="transform transition-all hover:scale-105 hover:shadow-xl">
                <CardHeader className="bg-gradient-to-br m-2 rounded-lg from-pink-100 to-purple-100 rounded-t-lg">
                  <CardTitle className="text-2xl">WeMind EMDR</CardTitle>
                  <CardDescription className="text-base font-medium italic">
                    Developed using Angular 17
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 grid">
                  <p className="text-gray-600 leading-relaxed">
                    A web application delivering EMDR therapy, supported by
                    certified EMDR specialists, to improve mental health
                    outcomes.
                  </p>
                  <Button
                    asChild
                    className="bg-neutral-950 text-white hover:bg-neutral-800  rounded-full justify-self-end"
                  >
                    <Link
                      href="https://moovd.nl/methodes/wemind-emdr/"
                      target="_blank"
                    >
                      See more
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="transform transition-all hover:scale-105 hover:shadow-xl">
                <CardHeader className="bg-gradient-to-br m-2 rounded-lg from-green-100 to-blue-100 rounded-t-lg">
                  <CardTitle className="text-2xl">
                    Minecraft Marketplace
                  </CardTitle>
                  <CardDescription className="text-base font-medium italic">
                    Freelance Project
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 grid">
                  <p className="text-gray-600 leading-relaxed">
                    Contributed to a Minecraft Marketplace product by
                    implementing advanced entity logic. This engaging project
                    merged my passion for gaming with software development.
                  </p>
                  <Button
                    asChild
                    className="bg-neutral-950 text-white hover:bg-neutral-800  rounded-full justify-self-end"
                  >
                    <Link
                      href="https://www.minecraft.net/en-us/marketplace/pdp?id=2c654b66-b09f-45f4-a431-34bf91c27b59"
                      target="_blank"
                    >
                      See more
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer - Matching reference image style */}
        <footer className="p-2 ring-inset ring-black/5 ring-1 bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]">
          <div className="rounded-3xl py-20 bg-white  m2 px-4">
            <div className="grid grid-cols-2 max-w-6xl mx-auto md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="mailto:jbottinga@outlook.com"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Personal Email
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="mailto:justin@grufix.nl"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Grufix Email
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Social</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="https://github.com/justinbottinga"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      GitHub
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://linkedin.com/in/justin-bottinga"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      LinkedIn
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="https://www.grufix.nl"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Grufix
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-16 text-center text-gray-600">
              <p>
                © {new Date().getFullYear()} Justin Bottinga. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
