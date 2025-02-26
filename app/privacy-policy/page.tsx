"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import HomeIcon from "@mui/icons-material/Home";

export default function PrivacyPolicy() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative max-w-6xl mx-2 sm:mx-auto my-8 group"
    >
      {/* First blur - top right (light blue) */}
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
            className="bg-neutral-950 text-white w-fit shadow-md hover:bg-neutral-600 transition-colors rounded-full px-6 py-2"
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
            Privacy Policy
          </h1>

          <div className="mt-4 space-y-6 text-gray-700">
            <p className="text-lg">
              Welcome to the less-boring-than-usual Privacy Policy! While most
              people skip these (we get it), I've tried to make this one
              actually readable. Let's dive in!
            </p>

            <h2 className="text-2xl font-medium mt-8">
              What I Collect (Spoiler: Not Much)
            </h2>
            <p>
              When you visit my portfolio, I collect only the bare minimum data
              needed to make things work smoothly:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                Basic analytics to see which projects are getting the most love
              </li>
              <li>
                Any information you voluntarily share through the contact form
              </li>
              <li>
                Standard server logs that help me fix things if they break
              </li>
            </ul>

            <h2 className="text-2xl font-medium mt-8">How I Use Your Data</h2>
            <p>Your data helps me:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                Respond to your messages (can't reply if I don't have your
                email!)
              </li>
              <li>
                Improve my portfolio based on which sections get the most
                attention
              </li>
              <li>Fix technical issues and make the site run better</li>
            </ul>

            <h2 className="text-2xl font-medium mt-8">Cookies & Tracking</h2>
            <p>
              This site uses minimal cookies to enhance your experience. They're
              like digital breadcrumbs that help the site remember basic
              preferences, but they don't follow you around the internet like
              some creepy digital stalker.
            </p>

            <h2 className="text-2xl font-medium mt-8">Third-Party Services</h2>
            <p>
              I use a few trusted services to keep this site running smoothly:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Hosting providers that keep the lights on</li>
              <li>Analytics tools that help me understand site traffic</li>
              <li>Email services that make sure your messages reach me</li>
            </ul>
            <p className="mt-2">
              Each of these services has their own privacy policy, but I've
              chosen them carefully with your privacy in mind.
            </p>

            <h2 className="text-2xl font-medium mt-8">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Ask what data I have about you (probably not much!)</li>
              <li>Request that I update or delete your information</li>
              <li>Opt out of future communications</li>
              <li>
                Take your data elsewhere (though there's not much to take)
              </li>
            </ul>

            <h2 className="text-2xl font-medium mt-8">Security</h2>
            <p>
              I take reasonable measures to protect your information, including
              using secure connections and keeping software updated. As a
              developer, I take security seriously!
            </p>

            <h2 className="text-2xl font-medium mt-8">
              Updates to This Policy
            </h2>
            <p>
              This policy might change as my site evolves. I'll post updates
              here, but I won't make dramatic changes without letting you know.
            </p>

            <h2 className="text-2xl font-medium mt-8">Contact Me</h2>
            <p>
              Have questions about this policy? Feel free to reach out at{" "}
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
