import Head from 'next/head';
import { Footer } from '@/components/footer';
import { Intro } from '@/components/magazine-components/intro';

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
              The Annual Publication of Insights, Stories, and Innovations
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#magazine" 
                className="bg-secondary hover:bg-opacity-90 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
              >
                Explore Now
              </a>
              <a 
                href="#subscribe" 
                className="bg-white hover:bg-opacity-90 text-primary font-semibold py-3 px-8 rounded-lg transition duration-300"
              >
                Get Updates
              </a>
            </div>
          </div>
        </section>

        {/* Magazine Intro */}
        <Intro/>

        {/* Magazine Preview */}
        <section id="magazine" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">Featured in This Edition</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="h-48 bg-secondary bg-opacity-20 rounded-md mb-4 flex items-center justify-center">
                  <span className="text-5xl text-neutral">Picture</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">The Audacity Roadmap</h3>
                <p className="text-gray-700">
                  Expert insights on scaling your business in today's competitive landscape.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="h-48 bg-secondary bg-opacity-20 rounded-md mb-4 flex items-center justify-center">
                <span className="text-5xl text-neutral">Picture</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Reality Check</h3>
                <p className="text-gray-700">
                  Discover groundbreaking ideas from this year's conference speakers.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="h-48 bg-secondary bg-opacity-20 rounded-md mb-4 flex items-center justify-center">
                <span className="text-5xl text-neutral">Picture</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Powerful Stories</h3>
                <p className="text-gray-700">
                  Exclusive interviews with our most influential presenters.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {/* <section id="subscribe" className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Connected</h2>
            <p className="text-xl mb-8">
              Subscribe to receive updates about future magazine editions and conference news.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary"
                required
              />
              <button 
                type="submit" 
                className="bg-secondary hover:bg-opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section> */}


      </main>
<Footer/>
    </>
  );
}
