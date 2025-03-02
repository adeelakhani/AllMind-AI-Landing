"use client";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronUp,
  ChevronDown,
  ChevronRight,
  LightbulbIcon,
  Lock,
  Shield,
} from "lucide-react";
import { useState } from "react";
export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-gray-800 bg-gradient-to-l from-[#ff9156cc] via-[#f796e4cc] to-[#8a84a4cc] backdrop-blur-sm shadow-2xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              {
                <Image
                  src="/main-camelai.webp"
                  alt="camelAI logo"
                  width={96}
                  height={96}
                  className="mr-2"
                />
              }
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link
              href="/blog"
              className="text-sm font-medium hover:text-gray-300"
            >
              Blog
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium hover:text-gray-300"
            >
              Pricing
            </Link>
            <Link
              href="/login"
              className="text-sm font-medium hover:text-gray-300"
            >
              Log in
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-gradient-to-l from-[#ff9156cc] via-[#f796e4cc] to-[#8a84a4cc] backdrop-blur-sm shadow-2xl py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4 text-5xl font-bold tracking-tight">
              The AI Data Analyst
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
              Ask questions, get instant charts and insights from your data.
            </p>
            <div className="mx-auto mb-16 flex max-w-md flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                href="#"
                className="flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-gray-200 sm:w-auto"
              >
                Try free
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="flex w-full items-center justify-center rounded-full border border-gray-600 bg-black/40 px-6 py-3 text-sm font-medium text-white hover:bg-black/60 sm:w-auto"
              >
                Book demo
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="mx-auto mb-16 flex max-w-lg flex-wrap items-center justify-center gap-4">
              <div className="flex items-center rounded bg-orange-900/30 px-3 py-1 text-xs">
                <Image
                  src="/yc-logo.webp"
                  alt="camelAI logo"
                  width={16}
                  height={16}
                  className="mr-1"
                />
                Y Combinator backed
              </div>
              <div className="flex items-center rounded bg-gray-800/50 px-3 py-1 text-xs">
                <Lock className="mr-1 h-3 w-3" />
                Enterprise Security
              </div>
              <div className="flex items-center rounded bg-gray-800/50 px-3 py-1 text-xs">
                <Shield className="mr-1 h-3 w-3" />
                100% Data Privacy
              </div>
            </div>

            <div className="flex justify-center items-center">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/rdPeT8-iiqY"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-br from-black via-black to-blue-900/20 py-24">
          <div className="mx-auto mb-16 grid max-w-5xl grid-cols-6 gap-4 md:grid-cols-9">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-center rounded-lg bg-gray-800/50 p-4 transform transition-all duration-300 hover:bg-gray-700 hover:scale-105"
              >
                <Image
                  src={`/${i + 1}.webp`} // Dynamically generate the image path
                  alt={`Image ${i + 1}`} // Alt text for each image
                  width={40} // Width for the image
                  height={40} // Height for the image
                  className="rounded-md"
                />
              </div>
            ))}
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-center rounded-lg bg-gray-800/50 p-4 transform transition-all duration-300 hover:bg-gray-700 hover:scale-105"
              >
                <Image
                  src={`/${i + 10}.webp`} // Dynamically generate the image path
                  alt={`Image ${i + 1}`} // Alt text for each image
                  width={40} // Width for the image
                  height={40} // Height for the image
                  className="rounded-md"
                />
              </div>
            ))}
          </div>
        </section>
        <section className="bg-gradient-to-br from-blue-900/20 via-black to-black py-24">
          <div className="container mx-auto px-4 text-center">
            <div className="mx-auto mb-8 inline-block rounded-lg border border-gray-700 bg-gray-800/20 px-6 py-3">
              <code className="text-lg font-mono">
                &lt;/&gt; Ask any question
              </code>
            </div>
            <p className="mx-auto mb-16 max-w-2xl text-lg text-gray-300">
              Camel uses your live data.
              <br />
              Get tables and charts instantly.
            </p>

            <div className="mx-auto max-w-5xl rounded-lg border border-gray-800 bg-gray-900/50 shadow-2xl">
              <Image
                src="/IMAGEgraph1.webp"
                alt="Dashboard Preview"
                width={1200}
                height={675}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-blue-900/20 via-black to-black py-24">
          <div className="mx-auto text-center">
            <div className="mx-auto mb-8 inline-block rounded-lg border border-gray-700 bg-gray-800/20 px-6 py-3">
              <LightbulbIcon className="mr-2 inline-block h-5 w-5" />
              <span className="text-lg font-mono">Powerful Dashboards</span>
            </div>
            <p className="mx-auto mb-16 max-w-2xl text-lg text-gray-300">
              Save any graph to a live dashboard.
              <br />
              Start a chat to answer ad hoc questions.
            </p>

            <div className="mx-auto max-w-5xl rounded-lg border border-gray-800 bg-gray-900/50 shadow-2xl">
              <Image
                src="/ImageGraph2.webp"
                alt="Dashboard Preview"
                width={1200}
                height={675}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-black via-black to-blue-900/20 py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-mono">
                  Want to build with camelAI?
                </h2>
                <p className="mb-8 text-lg text-gray-300">
                  Embed AI-powered analytics directly in your application with
                  our API
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center rounded-full border border-gray-600 bg-white px-6 py-3 text-sm font-medium text-black"
                >
                  Join API Waitlist
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="mb-2 text-xl font-semibold">
                    Natural Language → SQL
                  </h3>
                  <p className="text-gray-400">
                    Same powerful query engine that powers camelAI
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">
                    Secure Integration
                  </h3>
                  <p className="text-gray-400">
                    Enterprise-grade security and permissions
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">
                    Flexible Integration
                  </h3>
                  <p className="text-gray-400">
                    Full control over the user experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">FAQs</h2>
            <div className="mx-auto max-w-3xl space-y-4">
              <FaqItem
                question="How is my data stored?"
                answer="camelAI's infrastructure is hosted on AWS. Data from applications is pulled only when necessary and limited to what you request in your prompt. It is stored in an EC2 cache for 5 minutes and then deleted. For more information, please see our Security Policy and our security blog post."
              />
              <FaqItem
                question="Do you train on my data?"
                answer="No, we do not train on your data. CamelAI is powered by OpenAI's API. We have opted out of data sharing for training. You can read more about OpenAI's API policies here."
              />
              <FaqItem
                question="Are my app connections secure?"
                answer="Yes, your app connections are secure. We use OAuth 2.0 when available or secure key authentication to authenticate and authorize access to your applications. Your data is encrypted in transit and at rest. If you revoke access to an app, the connection is immediately destroyed and we will no longer have access to that application."
              />
              <FaqItem
                question="How do you pull my data?"
                answer="camelAI only communicates with your connected apps when you request data in the chat. We do not train on your data, nor do we access or store any data without your request and supervision."
              />
            </div>
          </div>
        </section>

        <section className="bg-black py-24">
          <div className="container mx-auto px-4 text-center flex justify-evenly text-sm">
            <h2 className="mb-2 text-3xl font-bold">
              Get started for{" "}
              <span className="bg-gradient-to-r from-gray-600 via-orange-500 to-yellow-500 text-transparent bg-clip-text">
                free
              </span>
              .
            </h2>
            <div className="flex">
              <Link
                href="#"
                className="flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-gray-200 sm:w-auto"
              >
                Try Free
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="flex w-full items-center justify-center rounded-full border border-gray-600 bg-black/40 px-6 py-3 text-sm font-medium text-white hover:bg-black/60 sm:w-auto"
              >
                Contact us
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800 bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-16 md:grid-cols-[1fr,2fr]">
            <div>
              <Image
                src="/FooterImage.webp"
                alt="camelAI logo"
                width={300}
                height={300}
                className="mb-8"
              />
              <p className="mb-4 text-sm text-gray-400">
                Subscribe to our newsletter for product updates
              </p>
              <div className="relative mb-8 flex">
                <input
                  type="email"
                  placeholder="email"
                  className="w-full rounded-full border border-gray-800 bg-gray-900/50 px-4 py-2 pr-24 text-sm text-white placeholder-gray-500 focus:border-gray-700"
                />
                <button className="right-1 top-1 flex items-center rounded-full bg-white px-3 py-1 text-sm font-medium text-black">
                  Subscribe
                  <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>

              <div className="flex space-x-4">
                <Link href="#" className="text-gray-600 hover:text-gray-400">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-400">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-400">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-400">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-400">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <h3 className="mb-3 text-xs font-medium uppercase text-gray-500">
                  Company
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Schedule a call
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Email Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-xs font-medium uppercase text-gray-500">
                  Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Data Sources
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Demo Videos
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Product Hunt
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-xs font-medium uppercase text-gray-500">
                  Legal
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Security
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Acceptable Use
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-16 text-xs text-gray-600">
            © 2024 camelAI (DBA camelAI) All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

// function FaqItem({ question }: { question: string }) {
//   return (
//     <div className="border-b border-gray-800 py-4">
//       <button className="flex w-full items-center justify-between text-left">
//         <h3 className="text-lg font-medium">{question}</h3>
//         <ChevronDown className="h-5 w-5 text-gray-400" />
//       </button>
//     </div>
//   )
// }
function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 p-4">
      <button
        className="flex w-full items-center justify-between text-left text-lg font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        {isOpen ? (
          <ChevronUp className="w-5 h-5 font-mono" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        )}
      </button>
      {isOpen && <p className="mt-2 text-gray-300 font-mono">{answer}</p>}
    </div>
  );
}
