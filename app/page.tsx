import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-sky via-earth to-soil overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop"
            alt="Forest canopy"
            fill
            // className="object-cover opacity-30"
          />
        </div>
        
        <div className="text-center text-white z-10 px-6">
          <h1 className="text-6xl md:text-8xl font-header font-bold mb-6 drop-shadow-2xl">
            TerraDrop
          </h1>
          <p className="text-2xl md:text-3xl font-body max-w-4xl mx-auto mb-8 leading-relaxed">
            Reforesting the Earth with drone-powered seeding.<br />
            A fusion of ecology and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="px-8 py-4 bg-neon text-soil font-header text-xl font-bold rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-105">
              Learn More
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-header text-xl rounded-full hover:bg-white hover:text-soil transition-all duration-300 hover:scale-105">
              Donate Now
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Impact Counters */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-header font-bold text-earth mb-16 text-center">
            Our Impact
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-earth mb-4">11.8M+</div>
              <div className="text-xl font-body text-soil mb-2">Trees Planted</div>
              <div className="text-sm font-body text-soil opacity-75">Across 6 continents</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-earth mb-4">235K</div>
              <div className="text-xl font-body text-soil mb-2">Hectares Restored</div>
              <div className="text-sm font-body text-soil opacity-75">Forest ecosystems</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-earth mb-4">95%</div>
              <div className="text-xl font-body text-soil mb-2">Success Rate</div>
              <div className="text-sm font-body text-soil opacity-75">Tree survival rate</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-earth mb-4">12</div>
              <div className="text-xl font-body text-soil mb-2">Countries</div>
              <div className="text-sm font-body text-soil opacity-75">Active projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-sky">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-header font-bold text-earth mb-8">
                Our Mission
              </h2>
              <p className="text-xl font-body text-soil mb-6 leading-relaxed">
                We're on a mission to restore Earth's forests at an unprecedented scale. Using cutting-edge drone technology, we plant millions of trees across deforested landscapes worldwide.
              </p>
              <p className="text-xl font-body text-soil mb-8 leading-relaxed">
                Every tree we plant is tracked with GPS coordinates, monitored for growth, and contributes to biodiversity restoration and carbon sequestration.
              </p>
              <button className="px-8 py-4 bg-earth text-white font-header text-lg font-bold rounded-full hover:bg-soil transition-colors">
                Learn How It Works
              </button>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=300&h=300&fit=crop"
                    alt="Drone technology"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-2xl font-header font-bold text-earth mb-4">
                  Drone Technology
                </h3>
                <p className="text-soil font-body mb-6">
                  Our autonomous drones can plant up to 100,000 trees per day with centimeter-level precision.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-bold text-earth">Speed</div>
                    <div className="font-body text-soil">10x faster than manual</div>
                  </div>
                  <div>
                    <div className="font-bold text-earth">Precision</div>
                    <div className="font-body text-soil">GPS-guided accuracy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6 bg-soil text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-header font-bold mb-16 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop"
                  alt="Amazon Rainforest"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-header font-bold mb-4">Amazon Rainforest</h3>
              <p className="font-body mb-4 opacity-90">
                Restoring critical biodiversity corridors in the world's largest rainforest.
              </p>
              <div className="text-neon font-bold">2.5M trees planted</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
                  alt="Borneo Forest"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-header font-bold mb-4">Borneo Forest</h3>
              <p className="font-body mb-4 opacity-90">
                Replanting native species to protect orangutan habitats and combat deforestation.
              </p>
              <div className="text-neon font-bold">1.2M trees planted</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1511497584788-876760111969?w=400&h=300&fit=crop"
                  alt="Canadian Boreal Forest"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-header font-bold mb-4">Canadian Boreal</h3>
              <p className="font-body mb-4 opacity-90">
                Large-scale reforestation in the northern boreal forest ecosystem.
              </p>
              <div className="text-neon font-bold">3.8M trees planted</div>
            </div>
          </div>
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-neon text-soil font-header text-lg font-bold rounded-full hover:bg-white transition-colors">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-br from-earth to-soil text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-header font-bold mb-8">
            Join Our Mission
          </h2>
          <p className="text-xl font-body mb-12 max-w-2xl mx-auto">
            Every donation helps us plant more trees and restore Earth's forests. 
            Together, we can make a difference for future generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-neon text-soil font-header text-xl font-bold rounded-full hover:bg-white transition-all duration-300 hover:scale-105">
              Donate Now
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-header text-xl rounded-full hover:bg-white hover:text-soil transition-all duration-300 hover:scale-105">
              Get Involved
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
