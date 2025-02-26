"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../../components/ui/button";

import HomeIcon from "@mui/icons-material/Home";

export default function TermsOfService() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative max-w-6xl mx-2 sm:mx-auto my-8 group"
    >
      <div
        className="absolute top-4 right-4 w-64 h-64 rounded-full blur-[150px]"
        style={{
          background:
            "radial-gradient(circle, rgba(173,216,230,1) 0%, rgba(135,206,250,1) 100%)",
        }}
      />
      {/* Second blur - bottom middle (green) */}
      <div
        className="absolute bottom-0  transform -translate-x-1/2 w-96 h-64 rounded-full  blur-[150px] "
        style={{
          background:
            "radial-gradient(circle, rgba(204,250,180,1) 0%, rgba(192,250,234,1) 100%)",
        }}
      />

      <div
        className="absolute top-0 transform -translate-x-1/2 w-96 h-64 rounded-full  blur-[150px] "
        style={{
          background:
            "radial-gradient(circle, rgba(250,245,180,1) 0%, rgba(250,245,234,1) 100%)",
        }}
      />

      <div className="container p-4 sm:p-6 lg:p-8 relative z-10">
        <div className="mx-auto flex flex-col gap-6 text-start">
          <Button
            asChild
            className="bg-neutral-950 text-white shadow-md w-fit hover:bg-neutral-600 transition-colors rounded-full px-6 py-2"
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

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Terms of Service
          </h1>

          <div className="mt-4 space-y-6 text-gray-700">
            <p className="text-lg">
              Welcome to the Terms of Service that you might actually enjoy
              reading! I've tried to keep things straightforward and human.
              Let's get to it!
            </p>

            <h2 className="text-2xl font-medium mt-8">The Basics</h2>
            <p>
              By visiting my portfolio website, you're agreeing to these terms.
              It's like a digital handshake between us—no complicated legal
              jargon needed.
            </p>

            <h2 className="text-2xl font-medium mt-8">Using My Content</h2>
            <p>
              While I'm thrilled you're checking out my work, everything on this
              site (code, designs, text) is my intellectual property. Feel free
              to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                Get inspired by my projects (imitation is flattery, after all!)
              </li>
              <li>Share links to my portfolio with others (please do!)</li>
              <li>Reference my work with proper attribution</li>
            </ul>
            <p className="mt-2">But please don't:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                Copy and paste my code for commercial projects without
                permission
              </li>
              <li>Redistribute my work as your own</li>
              <li>Use my personal information for marketing or spam</li>
            </ul>

            <h2 className="text-2xl font-medium mt-8">Your Conduct</h2>
            <p>
              When interacting with my site, especially through the contact
              form, please keep things professional and respectful. I'm always
              open to feedback, collaboration opportunities, and even
              constructive criticism—just keep it civil!
            </p>

            <h2 className="text-2xl font-medium mt-8">Project Showcases</h2>
            <p>
              The projects displayed on my portfolio represent my work and
              skills. While I strive for accuracy, I'm human (not an AI,
              promise!) and may occasionally make mistakes. If you spot
              something that needs correction, feel free to let me know.
            </p>

            <h2 className="text-2xl font-medium mt-8">
              Links to Other Websites
            </h2>
            <p>
              My portfolio may link to external sites (like GitHub or LinkedIn).
              I'm not responsible for what happens once you click those
              links—you'll be subject to their terms and policies. Choose your
              clicking adventures wisely!
            </p>

            <h2 className="text-2xl font-medium mt-8">
              Availability & Updates
            </h2>
            <p>
              I do my best to keep this site up and running smoothly, but I
              can't guarantee 100% uptime. Sometimes I'll be updating features
              or fixing bugs, which might cause brief interruptions. I also
              reserve the right to change or remove content at any time as my
              portfolio evolves.
            </p>

            <h2 className="text-2xl font-medium mt-8">
              Limitation of Liability
            </h2>
            <p>
              While I've built this site with care, I provide it "as is" without
              warranties. I'm not liable for damages arising from your use of
              the site. In simple terms: I've done my best, but I can't be
              responsible for every possible scenario.
            </p>

            <h2 className="text-2xl font-medium mt-8">
              Changes to These Terms
            </h2>
            <p>
              As my portfolio grows, these terms might need updating. I'll post
              revisions here, and continued use of the site means you accept any
              changes. If you have concerns about updates, please reach out.
            </p>

            <h2 className="text-2xl font-medium mt-8">Contact</h2>
            <p>
              Questions about these terms? Want to discuss a project? Just want
              to say hi? Reach out at{" "}
              <a
                href="mailto:jbottinga@outlook.com"
                className="text-blue-600 hover:underline"
              >
                jbottinga@outlook.com
              </a>
            </p>

            <p className="text-sm text-gray-500 mt-8">
              Last updated: February 26, 2025
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
