export function Features() {
  return (  
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
                  Expert insights on scaling your business in today&rsquo;s competitive landscape.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="h-48 bg-secondary bg-opacity-20 rounded-md mb-4 flex items-center justify-center">
                <span className="text-5xl text-neutral">Picture</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Reality Check</h3>
                <p className="text-gray-700">
                  Discover groundbreaking ideas from this year&rsquo;s conference speakers.
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
    );
}