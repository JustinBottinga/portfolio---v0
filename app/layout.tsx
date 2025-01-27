import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Justin Bottinga - Software Developer",
  description:
    "Personal portfolio of Justin Bottinga, a student software developer from the Netherlands.",
  keywords: [
    "Web developer Twente",
    "Website laten maken Enschede",
    "Webapp ontwikkelaar Almelo",
    "Fullstack developer Hengelo",
    "Freelance webdeveloper Overijssel",
    "React developer Enschede",
    "Next.js webapplicaties laten bouwen Hengelo",
    "Angular ontwikkelaar Almelo",
    "Website bouwer in Twente",
    "Fullstack software ontwikkeling Oldenzaal",
    "Front-end developer near Rijssen",
    "Maatwerk websites Borne",
    "Freelance web app ontwikkelaar Twente",
    "Webdesign bureau in Goor",
    "Softwareontwikkeling Overijssel",
    "Next.js ontwikkelaar in Tubbergen",
    "Professionele websites bouwen Enschede",
    "Webapps laten ontwikkelen Hengelo",
    "Webdesign specialist Almelo",
    "Applicatieontwikkeling Delden",
    "Fullstack developer met React en Node.js",
    "Next.js ontwikkelaar freelance",
    "Front-end frameworks React en Angular",
    "Professionele Angular ontwikkelaars Nederland",
    "React apps laten bouwen freelance",
    "Next.js fullstack development specialist",
    "Freelance developer gespecialiseerd in Next.js",
    "Moderne front-end frameworks React en Angular",
    "API-integratie met React en Next.js",
    "SEO-geoptimaliseerde websites met Next.js",
    "Freelance webdeveloper met ervaring in Angular",
    "E-commerce webapps laten maken met React",
    "Single Page Applications (SPA) met React en Angular",
    "Freelance ontwikkelaar voor webapplicaties",
    "Web development met moderne frameworks",
    "Progressive Web Apps (PWA) laten bouwen met React",
    "Maatwerk oplossingen met Next.js en Angular",
    "Back-end en front-end integratie met Next.js",
    "React developer gezocht Nederland",
    "Professioneel website-ontwerp met Angular en Next.js",
    "Next.js webdevelopment specialist in Twente",
    "Websites laten bouwen met React in Enschede",
    "Angular ontwikkelaars gezocht in Hengelo",
    "Fullstack webapp ontwikkelaar Overijssel",
    "Freelance front-end React developer Twente",
    "Professionele webapplicaties in Almelo met Next.js",
    "SEO-geoptimaliseerde websites in Overijssel met Angular",
    "Freelance softwareontwikkelaar in de buurt van Oldenzaal",
    "Webapp specialist met ervaring in Next.js Enschede",
    "Custom websites laten bouwen met React en Node.js in Twente",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Justin Bottinga - Software Developer",
    description:
      "Personal portfolio of Justin Bottinga, a student software developer from the Netherlands.",
    url: "https://www.justinbottinga.com/",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.justinbottinga.com/74e9bac7-e9a1-4676-870d-e60a1ec732ce2.jpg",
        width: 1200,
        height: 630,
        alt: "Justin Bottinga - Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourTwitterHandle", // Replace with your Twitter handle if applicable
    creator: "@yourTwitterHandle", // Replace with your Twitter handle if applicable
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
