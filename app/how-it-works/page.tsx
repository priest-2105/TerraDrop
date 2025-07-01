import Image from 'next/image'

export default function HowItWorks() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-earth to-soil">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=1200&h=800&fit=crop"
            alt="Drone technology"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="text-center text-white z-10">
          <h1 className="text-5xl md:text-7xl font-header font-bold mb-6">
            How It Works
          </h1>
          <p className="text-xl md:text-2xl font-body max-w-3xl mx-auto px-6">
            From seed to forest: our revolutionary drone seeding process explained.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-header font-bold text-earth mb-16 text-center">
            The TerraDrop Process
          </h2>
          
          <div className="space-y-20">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-6xl font-bold text-earth mb-4">01</div>
                <h3 className="text-3xl font-header font-bold text-earth mb-4">Site Analysis</h3>
                <p className="text-lg font-body text-soil mb-6">
                  Our advanced drones scan deforested areas using multispectral imaging and AI-powered analysis to identify optimal planting locations.
                </p>
                <ul className="space-y-2 text-soil font-body">
                  <li>• Soil composition assessment</li>
                  <li>• Climate and weather analysis</li>
                  <li>• Biodiversity mapping</li>
                </ul>
              </div>
              <div className="bg-sky rounded-2xl p-8 text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=300&h=300&fit=crop"
                    alt="Drone mapping"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="text-xl font-body text-soil">Advanced Mapping</div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-sky rounded-2xl p-8 text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=300&h=300&fit=crop"
                      alt="Seed preparation"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div className="text-xl font-body text-soil">Seed Preparation</div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="text-6xl font-bold text-earth mb-4">02</div>
                <h3 className="text-3xl font-header font-bold text-earth mb-4">Seed Preparation</h3>
                <p className="text-lg font-body text-soil mb-6">
                  Native seeds are carefully selected and prepared with biodegradable coatings that protect them and provide essential nutrients for germination.
                </p>
                <ul className="space-y-2 text-soil font-body">
                  <li>• Native species selection</li>
                  <li>• Biodegradable coating</li>
                  <li>• Nutrient enhancement</li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-6xl font-bold text-earth mb-4">03</div>
                <h3 className="text-3xl font-header font-bold text-earth mb-4">Precision Planting</h3>
                <p className="text-lg font-body text-soil mb-6">
                  Autonomous drones navigate to predetermined coordinates, dropping seeds with centimeter-level precision at optimal depths for maximum survival rates.
                </p>
                <ul className="space-y-2 text-soil font-body">
                  <li>• GPS-guided precision</li>
                  <li>• Optimal depth planting</li>
                  <li>• Real-time monitoring</li>
                </ul>
              </div>
              <div className="bg-sky rounded-2xl p-8 text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=300&h=300&fit=crop"
                    alt="Drone deployment"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="text-xl font-body text-soil">Drone Deployment</div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-sky rounded-2xl p-8 text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop"
                      alt="Growth monitoring"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div className="text-xl font-body text-soil">Growth Monitoring</div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="text-6xl font-bold text-earth mb-4">04</div>
                <h3 className="text-3xl font-header font-bold text-earth mb-4">Growth Monitoring</h3>
                <p className="text-lg font-body text-soil mb-6">
                  Regular drone surveys track seedling growth, health, and survival rates, providing data-driven insights for continuous improvement.
                </p>
                <ul className="space-y-2 text-soil font-body">
                  <li>• Growth rate tracking</li>
                  <li>• Health assessment</li>
                  <li>• Success rate analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 px-6 bg-soil text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-header font-bold mb-16">
            Our Impact
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-5xl font-bold text-neon mb-2">95%</div>
              <div className="text-lg font-body">Success Rate</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-neon mb-2">10x</div>
              <div className="text-lg font-body">Faster Planting</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-neon mb-2">50%</div>
              <div className="text-lg font-body">Cost Reduction</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-neon mb-2">24/7</div>
              <div className="text-lg font-body">Operation Capability</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 