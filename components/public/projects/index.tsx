import Image from "next/image"
import { MapPin, TreePine, Users, Award, ArrowRight, Leaf } from "lucide-react"

export default function ProjectsComponent() {
  const projects = [
    {
      id: 1,
      name: "Amazon Rainforest Restoration",
      location: "Brazil",
      area: "50,000 hectares",
      treesPlanted: "2.5M",
      status: "Active",
      description: "Restoring critical biodiversity corridors in the world's largest rainforest.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
      progress: 85,
    },
    {
      id: 2,
      name: "Borneo Forest Initiative",
      location: "Indonesia",
      area: "25,000 hectares",
      treesPlanted: "1.2M",
      status: "Active",
      description: "Replanting native species to protect orangutan habitats and combat deforestation.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      progress: 72,
    },
    {
      id: 3,
      name: "Canadian Boreal Forest",
      location: "Canada",
      area: "75,000 hectares",
      treesPlanted: "3.8M",
      status: "Completed",
      description: "Large-scale reforestation in the northern boreal forest ecosystem.",
      image: "https://images.unsplash.com/photo-1511497584788-876760111969?w=400&h=300&fit=crop",
      progress: 100,
    },
    {
      id: 4,
      name: "African Savanna Project",
      location: "Kenya",
      area: "30,000 hectares",
      treesPlanted: "1.5M",
      status: "Active",
      description: "Restoring degraded savanna lands and creating wildlife corridors.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      progress: 68,
    },
    {
      id: 5,
      name: "European Green Belt",
      location: "Germany",
      area: "15,000 hectares",
      treesPlanted: "750K",
      status: "Active",
      description: "Connecting fragmented forest ecosystems across Central Europe.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
      progress: 91,
    },
    {
      id: 6,
      name: "Australian Bush Recovery",
      location: "Australia",
      area: "40,000 hectares",
      treesPlanted: "2.0M",
      status: "Active",
      description: "Post-wildfire restoration and native eucalyptus forest recovery.",
      image: "https://images.unsplash.com/photo-1511497584788-876760111969?w=400&h=300&fit=crop",
      progress: 79,
    },
  ]

  const stats = [
    { icon: TreePine, value: "6", label: "Active Projects", color: "text-emerald-500" },
    { icon: MapPin, value: "235K", label: "Hectares Restored", color: "text-blue-500" },
    { icon: Leaf, value: "11.8M", label: "Trees Planted", color: "text-green-500" },
    { icon: Award, value: "12", label: "Countries", color: "text-amber-500" },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop"
            alt="Global reforestation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 via-green-800/60 to-teal-900/80" />
        </div>

        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20">
            <Leaf className="w-4 h-4 text-green-300" />
            <span className="text-sm font-medium">Global Reforestation Initiative</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
            Our Projects
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed text-green-50">
            Discover our global reforestation initiatives and their transformative impact on Earth's ecosystems.
          </p>

          <div className="mt-12">
            <button className="group inline-flex items-center gap-2 bg-white text-green-800 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl">
              Explore Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Global Stats */}
      <section className="py-20 px-6 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Global Impact</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Measurable results from our worldwide reforestation efforts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-200">
                  <div className="flex items-center justify-between mb-4">
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Active Restoration Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each project represents a commitment to restoring our planet's natural ecosystems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group">
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 hover:-translate-y-2">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    <div className="absolute top-4 right-4">
                      <div
                        className={`text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm border ${
                          project.status === "Completed"
                            ? "bg-green-500/90 text-white border-green-400"
                            : "bg-blue-500/90 text-white border-blue-400"
                        }`}
                      >
                        {project.status}
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2">
                        <div className="flex justify-between items-center text-xs text-gray-700 mb-1">
                          <span>Progress</span>
                          <span>{project.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div
                            className="bg-gradient-to-r from-green-500 to-emerald-500 h-1.5 rounded-full transition-all duration-1000"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                      {project.name}
                    </h3>

                    <div className="flex items-center gap-1 text-gray-600 mb-4">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{project.location}</span>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-xs text-gray-500 mb-1">Area</div>
                        <div className="font-semibold text-gray-900">{project.area}</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-xs text-gray-500 mb-1">Trees</div>
                        <div className="font-semibold text-gray-900">{project.treesPlanted}</div>
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold py-3 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl group">
                      <span className="flex items-center justify-center gap-2">
                        View Details
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-20 px-6 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Impact Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from our reforestation efforts around the world
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="group">
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
                    alt="Biodiversity recovery"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-medium text-green-600">Biodiversity Impact</span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Species Recovery Success</h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Our reforestation projects have led to the return of 150+ species of birds, mammals, and insects to
                    previously deforested areas, creating thriving ecosystems.
                  </p>

                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-6 text-white">
                    <div className="text-3xl font-bold mb-2">150+</div>
                    <div className="text-green-100">Species Returned to Habitat</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop"
                    alt="Carbon sequestration"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Leaf className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium text-blue-600">Climate Impact</span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Carbon Sequestration</h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    The trees we've planted are estimated to sequester over 2.5 million tons of CO2 annually, making a
                    significant contribution to global climate goals.
                  </p>

                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-6 text-white">
                    <div className="text-3xl font-bold mb-2">2.5M</div>
                    <div className="text-blue-100">Tons CO2 Sequestered/Year</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
