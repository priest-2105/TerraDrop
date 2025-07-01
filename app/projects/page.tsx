export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Amazon Rainforest Restoration",
      location: "Brazil",
      area: "50,000 hectares",
      treesPlanted: "2.5M",
      status: "Active",
      description: "Restoring critical biodiversity corridors in the world's largest rainforest.",
      image: "🌳"
    },
    {
      id: 2,
      name: "Borneo Forest Initiative",
      location: "Indonesia",
      area: "25,000 hectares",
      treesPlanted: "1.2M",
      status: "Active",
      description: "Replanting native species to protect orangutan habitats and combat deforestation.",
      image: "🌴"
    },
    {
      id: 3,
      name: "Canadian Boreal Forest",
      location: "Canada",
      area: "75,000 hectares",
      treesPlanted: "3.8M",
      status: "Completed",
      description: "Large-scale reforestation in the northern boreal forest ecosystem.",
      image: "🌲"
    },
    {
      id: 4,
      name: "African Savanna Project",
      location: "Kenya",
      area: "30,000 hectares",
      treesPlanted: "1.5M",
      status: "Active",
      description: "Restoring degraded savanna lands and creating wildlife corridors.",
      image: "🦁"
    },
    {
      id: 5,
      name: "European Green Belt",
      location: "Germany",
      area: "15,000 hectares",
      treesPlanted: "750K",
      status: "Active",
      description: "Connecting fragmented forest ecosystems across Central Europe.",
      image: "🍃"
    },
    {
      id: 6,
      name: "Australian Bush Recovery",
      location: "Australia",
      area: "40,000 hectares",
      treesPlanted: "2.0M",
      status: "Active",
      description: "Post-wildfire restoration and native eucalyptus forest recovery.",
      image: "🦘"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-sky to-earth">
        <div className="text-center text-white z-10">
          <h1 className="text-5xl md:text-7xl font-header font-bold mb-6">
            Our Projects
          </h1>
          <p className="text-xl md:text-2xl font-body max-w-3xl mx-auto px-6">
            Discover our global reforestation initiatives and their impact on Earth's ecosystems.
          </p>
        </div>
      </section>

      {/* Global Stats */}
      <section className="py-16 px-6 bg-soil text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-5xl font-bold text-neon mb-2">6</div>
              <div className="text-lg font-body">Active Projects</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-neon mb-2">235K</div>
              <div className="text-lg font-body">Hectares Restored</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-neon mb-2">11.8M</div>
              <div className="text-lg font-body">Trees Planted</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-neon mb-2">12</div>
              <div className="text-lg font-body">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-header font-bold text-earth mb-16 text-center">
            Active Restoration Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="bg-sky p-8 text-center">
                  <div className="text-6xl mb-4">{project.image}</div>
                  <div className="text-sm font-body text-soil bg-white px-3 py-1 rounded-full inline-block">
                    {project.status}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-header font-bold text-earth mb-2">
                    {project.name}
                  </h3>
                  <p className="text-sm font-body text-soil mb-4">
                    📍 {project.location}
                  </p>
                  <p className="text-soil font-body mb-4">
                    {project.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-bold text-earth">Area</div>
                      <div className="font-body text-soil">{project.area}</div>
                    </div>
                    <div>
                      <div className="font-bold text-earth">Trees</div>
                      <div className="font-body text-soil">{project.treesPlanted}</div>
                    </div>
                  </div>
                  <button className="w-full mt-4 px-4 py-2 bg-earth text-white font-header rounded-lg hover:bg-soil transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-20 px-6 bg-soil text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-header font-bold mb-16 text-center">
            Impact Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-header font-bold mb-4">Biodiversity Recovery</h3>
              <p className="text-lg font-body mb-6">
                Our reforestation projects have led to the return of 150+ species of birds, mammals, and insects to previously deforested areas.
              </p>
              <div className="bg-earth rounded-lg p-4">
                <div className="text-2xl font-bold mb-2">150+</div>
                <div className="font-body">Species Returned</div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-header font-bold mb-4">Carbon Sequestration</h3>
              <p className="text-lg font-body mb-6">
                The trees we've planted are estimated to sequester over 2.5 million tons of CO2 annually, contributing to global climate goals.
              </p>
              <div className="bg-earth rounded-lg p-4">
                <div className="text-2xl font-bold mb-2">2.5M</div>
                <div className="font-body">Tons CO2/year</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 