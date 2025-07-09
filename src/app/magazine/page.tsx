'use client';

import Head from 'next/head';
import { Footer } from '@/components/footer';
import { Intro } from '@/components/magazine-components/intro';
// import { Features } from '@/components/magazine-components/features';

export default function MagazineLanding() {
  return (
    <>
      <Head>
        <title>GROW Conference Magazine | Annual Edition</title>
        <meta name="description" content="Explore the official magazine of the GROW Conference" />
      </Head>

      <main className="min-h-screen bg-neutral font-sans">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-primary text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">GROW Magazine</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              The Quarterly Publication of Insights, Stories, and Innovations
            </p>
          </div>
        </section>

        {/* Magazine Intro */}
        <Intro/>

        {/* Magazine Featured Details */}
    {/* <Features/> */}
      </main>
      
      <Footer/>
    </>
  );
}