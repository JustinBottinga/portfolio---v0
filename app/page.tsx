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
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen flex flex-col gap-8">
        <Hero />
        <About />
        <Projects />
        <Footer />
      </div>
    </>
  );
}
