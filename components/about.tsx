import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <section className="relative max-w-6xl mx-auto" id="about">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          <div className="bg-gradient-to-br from-neutral-50 to-[#d4dffe]/20 ring-inset ring-black/5 ring-1 rounded-3xl p-4 lg:p-8 lg:w-1/2 flex flex-col">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              About me
            </h2>
            <div className="prose prose-lg overflow-y-auto flex-grow">
              <p className="text-gray-700 font-normal leading-relaxed text-lg">
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
                with two of my peers. My passion for computers began at an early
                age, paired with a love for creative problem-solving. This led
                me to software development, where I now enjoy leveraging
                creativity to tackle complex challenges in my projects.
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
  );
}
