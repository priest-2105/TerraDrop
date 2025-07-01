import Image from 'next/image'

export default function Donate() {
  const donationTiers = [
    {
      name: "Seed Planter",
      amount: 25,
      trees: 50,
      description: "Plant 50 trees in deforested areas",
      features: ["GPS tracking", "Growth updates", "Digital certificate"]
    },
    {
      name: "Forest Guardian",
      amount: 50,
      trees: 125,
      description: "Restore a small forest patch",
      features: ["GPS tracking", "Growth updates", "Digital certificate", "Project photos"]
    },
    {
      name: "Ecosystem Hero",
      amount: 100,
      trees: 250,
      description: "Create a biodiversity corridor",
      features: ["GPS tracking", "Growth updates", "Digital certificate", "Project photos", "Impact report"]
    },
    {
      name: "Climate Champion",
      amount: 250,
      trees: 625,
      description: "Major reforestation contribution",
      features: ["GPS tracking", "Growth updates", "Digital certificate", "Project photos", "Impact report", "Personal consultation"]
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-earth to-soil">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop"
            alt="Forest restoration"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="text-center text-white z-10">
          <h1 className="text-5xl md:text-7xl font-header font-bold mb-6">
            Support Our Mission
          </h1>
          <p className="text-xl md:text-2xl font-body max-w-3xl mx-auto px-6 mb-8">
            Every donation helps us plant more trees and restore Earth's forests.
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="text-4xl font-bold mb-2">$1 = 2 Trees</div>
            <div className="text-lg font-body">Your donation goes directly to reforestation efforts</div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 px-6 bg-sky">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-header font-bold text-earth mb-12">
            Your Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8">
              <div className="text-5xl font-bold text-earth mb-2">$25</div>
              <div className="text-lg font-body text-soil mb-4">Plants 50 Trees</div>
              <div className="text-sm font-body text-soil">Enough to restore a small forest patch</div>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <div className="text-5xl font-bold text-earth mb-2">$100</div>
              <div className="text-lg font-body text-soil mb-4">Plants 250 Trees</div>
              <div className="text-sm font-body text-soil">Creates a biodiversity corridor</div>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <div className="text-5xl font-bold text-earth mb-2">$500</div>
              <div className="text-lg font-body text-soil mb-4">Plants 1,000 Trees</div>
              <div className="text-sm font-body text-soil">Restores an entire ecosystem</div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-header font-bold text-earth mb-16 text-center">
            Choose Your Impact
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {donationTiers.map((tier, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-earth to-soil p-6 text-white text-center">
                  <h3 className="text-xl font-header font-bold mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold mb-1">${tier.amount}</div>
                  <div className="text-sm font-body opacity-90">{tier.trees} trees</div>
                </div>
                <div className="p-6">
                  <p className="text-soil font-body mb-4">{tier.description}</p>
                  <ul className="space-y-2 mb-6">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm font-body text-soil flex items-center">
                        <span className="text-earth mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full px-4 py-3 bg-earth text-white font-header rounded-lg hover:bg-soil transition-colors">
                    Donate ${tier.amount}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Donation */}
      <section className="py-20 px-6 bg-soil text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-header font-bold mb-8">
            Custom Donation
          </h2>
          <p className="text-xl font-body mb-12">
            Choose your own amount and make a direct impact on reforestation efforts.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <label className="block text-lg font-body mb-4">Donation Amount</label>
                <div className="flex space-x-4 mb-6">
                  <button className="px-6 py-3 bg-earth text-white font-header rounded-lg hover:bg-soil transition-colors">
                    $50
                  </button>
                  <button className="px-6 py-3 bg-earth text-white font-header rounded-lg hover:bg-soil transition-colors">
                    $100
                  </button>
                  <button className="px-6 py-3 bg-earth text-white font-header rounded-lg hover:bg-soil transition-colors">
                    $250
                  </button>
                </div>
                <input 
                  type="number" 
                  placeholder="Enter custom amount"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 font-body"
                />
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-neon mb-2">100 Trees</div>
                <div className="text-lg font-body">Will be planted</div>
                <button className="mt-6 px-8 py-4 bg-neon text-soil font-header font-bold rounded-lg hover:bg-white transition-colors">
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-header font-bold text-earth mb-12">
            Why Trust TerraDrop?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="relative w-20 h-20 mx-auto mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=200&h=200&fit=crop"
                  alt="Secure donations"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-header font-bold text-earth mb-2">Secure Donations</h3>
              <p className="font-body text-soil">Bank-level security for all transactions</p>
            </div>
            <div>
              <div className="relative w-20 h-20 mx-auto mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=200&h=200&fit=crop"
                  alt="Transparent impact"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-header font-bold text-earth mb-2">Transparent Impact</h3>
              <p className="font-body text-soil">Track every tree planted with GPS coordinates</p>
            </div>
            <div>
              <div className="relative w-20 h-20 mx-auto mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=200&fit=crop"
                  alt="Verified results"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-header font-bold text-earth mb-2">Verified Results</h3>
              <p className="font-body text-soil">Independent verification of all reforestation projects</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 