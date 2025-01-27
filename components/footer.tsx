import Link from "next/link";

export default function Footer() {
  return (
    <section className="mb-4">
      <footer className="mx-2 sm:mx-auto  max-w-6xl">
        <div className="container mx-auto">
          <div className="relative rounded-3xl ring-inset p-4 sm:p-6 lg:p-8 ring-black/5 ring-1 overflow-hidden bg-gradient-to-br from-neutral-50 to-[#d4feee]/20 group">
            {/* First blur - top right (light blue) */}
            <div
              className="absolute top-0 right-1/4 w-64 h-64 rounded-full opacity-50 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(173,216,230,1) 0%, rgba(135,206,250,1) 100%)",
              }}
            />
            {/* Second blur - bottom middle (green) */}
            <div
              className="absolute bottom-0 left-1 transform -translate-x-1/2 w-96 h-64 rounded-full opacity-50 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(204,250,180,1) 0%, rgba(192,250,234,1) 100%)",
              }}
            />

            <div className="!pb-2 p-4 sm:p-6 lg:p-8 relative z-10 ">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
              <div className="mt-8 text-center text-gray-600">
                <p>
                  © {new Date().getFullYear()} Justin Bottinga. All rights
                  reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
