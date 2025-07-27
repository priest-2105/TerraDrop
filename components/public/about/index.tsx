"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Handshake, Eye, Sparkles, TreePine, Target } from "lucide-react"

export default function AboutPage() {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  }

  const teamMembers = [
    {
      name: "Dr. Elara Vance",
      role: "CEO & Co-founder",
      image: "/placeholder.svg?height=200&width=200&text=Elara+Vance",
      bio: "A visionary leader with a background in environmental science and drone engineering. Passionate about scalable reforestation.",
    },
    {
      name: "Kai Chen",
      role: "CTO & Co-founder",
      image: "/placeholder.svg?height=200&width=200&text=Kai+Chen",
      bio: "Expert in AI and robotics, leading the development of TerraDrop's autonomous planting systems.",
    },
    {
      name: "Lena Petrova",
      role: "Head of Field Operations",
      image: "/placeholder.svg?height=200&width=200&text=Lena+Petrova",
      bio: "Oversees all global planting missions, ensuring successful deployment and ecological integrity.",
    },
    {
      name: "Marcus Thorne",
      role: "Chief Scientific Officer",
      image: "/placeholder.svg?height=200&width=200&text=Marcus+Thorne",
      bio: "Specializes in seed science and ecosystem restoration, guiding species selection and biodiversity efforts.",
    },
  ]

  const coreValues = [
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Continuously pushing the boundaries of technology to achieve unprecedented reforestation scale.",
    },
    {
      icon: TreePine,
      title: "Sustainability",
      description: "Committed to long-term ecological health and creating resilient, biodiverse ecosystems.",
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description: "Partnering with local communities, governments, and organizations for shared success.",
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Openly sharing our progress, challenges, and impact with our global community.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=720&width=1280&text=About+Us+Hero"
            alt="Lush green forest canopy"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 via-green-800/60 to-teal-900/70" />
        </div>

        <div className="relative z-10 text-white max-w-4xl mx-auto px-6">
          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tight mb-4 bg-gradient-to-r from-white via-emerald-100 to-teal-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            About TerraDrop
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed text-emerald-50"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Our Story, Our Mission, Our Commitment to a Greener Planet.
          </motion.p>
        </div>
      </section>

      {/* Our Story & Mission Section */}
      <section className="w-full py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 rounded-full px-4 py-2 mb-6">
              <Target className="w-4 h-4" />
              <span className="text-sm font-medium">Our Story</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Reimagining Reforestation for a <span className="text-emerald-600">Sustainable Future</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                TerraDrop was founded in 2018 by a team of environmental scientists and drone engineers who shared a
                common vision: to leverage cutting-edge technology to combat global deforestation at an unprecedented
                scale. Witnessing the devastating impact of climate change and habitat loss, we set out to create a
                solution that was both efficient and ecologically sound.
              </p>
              <p>
                Our journey began with extensive research into seed science, drone mechanics, and AI-driven planting
                algorithms. After years of development and successful pilot projects, TerraDrop emerged as a leader in
                drone-based reforestation, capable of planting millions of seeds in hard-to-reach and degraded areas.
              </p>
              <p>
                Today, we operate globally, partnering with local communities and organizations to restore vital
                ecosystems, enhance biodiversity, and sequester carbon. Every seed we plant is a step towards a greener,
                healthier planet for future generations.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/placeholder.svg?height=600&width=800&text=Our+Story"
              alt="Team collaborating on drone technology"
              width={800}
              height={600}
              className="object-cover w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="w-full py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our mission and every action we take.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                className="group"
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.5 }}
                custom={index}
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200 hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="w-full py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-emerald-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The dedicated individuals driving TerraDrop's mission forward.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="group"
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.5 }}
                custom={index}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-emerald-500 group-hover:scale-105 transition-transform duration-300">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-emerald-300 text-sm font-medium mb-4">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-center">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl mb-10 text-emerald-100 leading-relaxed">
              Whether you're a passionate individual, a potential partner, or an investor, there are many ways to
              contribute to TerraDrop's vision for a greener world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-emerald-600 hover:bg-emerald-50 px-10 py-4 text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold"
              >
                <Link href="/contact">
                  Contact Us <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg rounded-full bg-transparent"
              >
                <Link href="/donate">Support Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
