// Hero.tsx
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative max-w-6xl mx-2 sm:mx-auto rounded-3xl ring-inset ring-black/5 ring-1 overflow-hidden bg-gradient-to-br from-neutral-50 to-[#d4f1fe]/80 group"
    >
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

      <div className="container p-4 sm:p-6 lg:p-8 relative z-10">
        <div className="mx-auto flex flex-col gap-12 text-start">
          <h1 className="text-5xl font-semibold tracking-tight sm:text-8xl">
            Justin Bottinga
          </h1>
          <p className="mt-6 text-lg leading-8 w-7/12 tracking-tight font-semibold text-gray-700">
            A 21-year-old software developer based in the Netherlands. 
            I'm passionate about modern technologies and committed to continuously
            expanding my skill set.
          </p>
          <div className="mt-10 flex flex-wrap justify-start gap-4">
            <Button
              asChild
              className="bg-neutral-950 text-white shadow-md hover:bg-neutral-600 transition-colors rounded-full"
            >
              <Link href="mailto:jbottinga@outlook.com">
                <EmailIcon
                  fontSize="large"
                  style={{
                    width: 24,
                    height: 24,
                  }}
                />
                Contact Me
              </Link>
            </Button>

            <Button
              asChild
              className="bg-white text-black hover:bg-blue-600 shadow-md hover:text-white rounded-full transition-colors p-2"
            >
              <Link
                href="https://linkedin.com/in/justin-bottinga"
                target="_blank"
              >
                <LinkedInIcon
                  fontSize="large"
                  style={{
                    width: 24,
                    height: 24,
                  }}
                />
              </Link>
            </Button>

            <Button
              asChild
              className="bg-white text-black hover:bg-slate-800 shadow-md hover:text-white transition-colors  rounded-full p-2"
            >
              <Link href="https://github.com/justinbottinga" target="_blank">
                <GitHubIcon
                  fontSize="large"
                  style={{
                    width: 24,
                    height: 24,
                  }}
                />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
