import Image from 'next/image'

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-sky to-earth">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop"
            alt="Forest landscape"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="text-center text-white z-10">
          <h1 className="text-5xl md:text-7xl font-header font-bold mb-6">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl font-body max-w-3xl mx-auto px-6">
            From a vision of reforestation at scale to a reality of drone-powered ecological restoration.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-header font-bold text-earth mb-12 text-center">
            Our Mission
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg font-body text-soil mb-6">
                TerraDrop was born from a simple yet powerful idea: what if we could plant trees as efficiently as we cut them down?
              </p>
              <p className="text-lg font-body text-soil mb-6">
                Using cutting-edge drone technology, we're revolutionizing reforestation by planting millions of seeds across deforested landscapes worldwide.
              </p>
              <p className="text-lg font-body text-soil">
                Our mission is to restore Earth's forests, one drone flight at a time, creating a sustainable future for generations to come.
              </p>
            </div>
            <div className="bg-sky rounded-2xl p-8 text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop"
                  alt="Forest restoration"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div className="text-6xl font-bold text-earth mb-4">10M+</div>
              <div className="text-xl font-body text-soil">Trees Planted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-soil text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-header font-bold mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop"
                  alt="Dr. Sarah Chen"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-header font-bold mb-2">Dr. Sarah Chen</h3>
              <p className="font-body">Founder & CEO</p>
            </div>
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
                  alt="Dr. Marcus Rodriguez"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-header font-bold mb-2">Dr. Marcus Rodriguez</h3>
              <p className="font-body">Chief Technology Officer</p>
            </div>
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop"
                  alt="Elena Petrov"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-header font-bold mb-2">Elena Petrov</h3>
              <p className="font-body">Head of Operations</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 