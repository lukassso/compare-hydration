'use client';

import Head from 'next/head';
import Image from 'next/image'
import * as React from 'react';


/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

const coverImage =
  "https://images.unsplash.com/photo-1590767950092-42b8362368da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80";

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section className="relative md:-mt-[76px] not-prose">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="pt-0 md:pt-[76px] pointer-events-none"></div>
        <div className="py-12 md:py-20 lg:py-0 lg:flex lg:items-center lg:h-screen lg:gap-8">
          <div className="basis-1/2 text-center lg:text-left pb-10 md:pb-16 mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">
              Free template for <br className="hidden lg:block" />{" "}
              <span className="hidden lg:inline">create a website using </span>{" "}
              <span className="text-[#039de1]">Qwik</span> +{" "}
              <span className="sm:whitespace-nowrap text-[#039de1]">
                Tailwind CSS
              </span>
            </h1>
            <div className="max-w-3xl mx-auto lg:max-w-none">
              <p className="text-xl text-muted mb-6 dark:text-slate-300">
                <span className="font-semibold underline decoration-wavy decoration-1 decoration-secondary-600 underline-offset-2">
                  Qwind
                </span>{" "}
                is a production ready template to start your new website using{" "}
                <em>Qwik</em> + <em>Tailwind CSS</em>. It has been designed
                following Best Practices, SEO, Accessibility,{" "}
                <span className="inline md:hidden">...</span>
                <span className="hidden md:inline">
                  Dark Mode, Great Page Speed, image optimization, sitemap
                  generation and more.
                </span>
              </p>
              {/* <Counter /> */}
            </div>
          </div>
          <div className="basis-1/2">
            <Image
              src={coverImage}
              // layout="constrained"
              width={493}
              height={616}
              alt="Qwind Hero Image (Cool dog)"
              className="mx-auto lg:mr-0 w-full drop-shadow-2xl rounded-md"
              priority={true}
              // breakpoints={[320, 480, 640, 768, 1024]}
            />
          </div>
        </div>
      </div>
    </section>
    </main>
  );
}
