"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import {
  ArrowRight,
  Leaf,
  Zap,
  Globe,
  CalendarDays,
  PlayCircle,
  TreePine,
  Users,
  Target,
  X,
  CheckCircle,
} from "lucide-react"
import { useState, useRef } from "react"
// import Navigation from "@/components/layout/NavigationOrb"

export default function HomePageComponent() {
  const [showVideo, setShowVideo] = useState(false)
  const timelineRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  })

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

  const impactStats = [
    { icon: TreePine, value: "500K+", label: "Trees Planted" },
    { icon: Globe, value: "10+", label: "Countries Reached" },
    { icon: Zap, value: "1000+", label: "Hectares Restored" },
    { icon: Users, value: "50+", label: "Communities Helped" },
  ]

  const journeyMilestones = [
    {
      year: "2018",
      title: "Inception & Research",
      description:
        "TerraDrop was born out of a vision to transform environmental restoration through drone technology. Our early efforts focused on research, experimenting with seed pod designs and prototyping drone hardware capable of navigating diverse terrains.",
      image: "/placeholder.svg?height=400&width=600&text=Research+Lab",
      achievements: ["First prototype developed", "Seed pod design patented", "Initial funding secured"],
      intensity: "light",
    },
    {
      year: "2020",
      title: "First Pilot Projects",
      description:
        "We transitioned from research to real-world application, launching our first pilot programs in critically affected regions. Using early-generation drones, we successfully deployed over 10,000 seed pods, proving the technical feasibility of drone-based reforestation.",
      image: "/placeholder.svg?height=400&width=600&text=First+Pilot+Project",
      achievements: ["10,000+ seeds deployed", "3 pilot locations established", "98% germination rate achieved"],
      intensity: "medium",
    },
    {
      year: "2022",
      title: "Global Expansion",
      description:
        "2022 marked our transition from local pilots to a global environmental movement. We expanded into new regions, partnering with organizations and governments, leading to over 100,000 trees being planted across diverse ecosystems.",
      image: "/placeholder.svg?height=400&width=600&text=Global+Expansion",
      achievements: ["100,000+ trees planted", "10 countries reached", "50+ partnerships formed"],
      intensity: "strong",
    },
    {
      year: "2024",
      title: "Innovation & Future",
      description:
        "We integrated advanced AI into our drones, allowing real-time terrain mapping and optimized seed distribution. Our vision is to make large-scale reforestation more efficient, intelligent, and ecologically sound for future generations.",
      image: "/placeholder.svg?height=400&width=600&text=AI+Innovation",
      achievements: ["AI integration completed", "500K+ trees planted", "Carbon offset verified"],
      intensity: "vibrant",
    },
  ]

  // Timeline progress animation
  const timelineProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  // Get gradient classes based on intensity
  const getGradientClass = (intensity: string) => {
    switch (intensity) {
      case "light":
        return "from-emerald-300 to-teal-400"
      case "medium":
        return "from-emerald-400 to-teal-500"
      case "strong":
        return "from-emerald-500 to-teal-600"
      case "vibrant":
        return "from-emerald-600 to-teal-700"
      default:
        return "from-emerald-500 to-teal-600"
    }
  }

  const getBgClass = (intensity: string) => {
    switch (intensity) {
      case "light":
        return "bg-emerald-300/20"
      case "medium":
        return "bg-emerald-400/20"
      case "strong":
        return "bg-emerald-500/20"
      case "vibrant":
        return "bg-emerald-600/20"
      default:
        return "bg-emerald-500/20"
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {/* Navigation */}
      {/* <Navigation /> */}

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920&text=Drone+Reforestation"
            alt="Drone planting trees over deforested land"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 via-green-800/60 to-teal-900/70" />
        </div>

        <div className="relative z-20 text-white max-w-6xl mx-auto px-6 text-center">
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Leaf className="w-5 h-5 text-emerald-300" />
            <span className="text-sm font-medium">Revolutionizing Reforestation</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-emerald-100 to-teal-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Replanting Hope,
            <br />
            <span className="text-emerald-300">One Seed at a Time</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed text-emerald-50"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            Harnessing the power of drone technology to restore deforested lands and combat climate change at
            unprecedented scale.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <Link href="/donate">
                Donate Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg rounded-full bg-transparent"
              onClick={() => setShowVideo(true)}
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              Watch Our Story
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Impact Counters Section */}
      <section className="w-full py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Impact So Far</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable results from our global reforestation efforts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((item, index) => (
              <motion.div
                key={item.label}
                className="group"
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.5 }}
                custom={index}
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200 hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{item.value}</div>
                  <div className="text-gray-600 font-medium">{item.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 rounded-full px-4 py-2 mb-6">
                <Target className="w-4 h-4" />
                <span className="text-sm font-medium">Our Mission</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Technology Meets
                <span className="text-emerald-600"> Nature</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                TerraDrop is dedicated to revolutionizing reforestation efforts through cutting-edge drone technology.
                We believe in a future where technology and nature work in harmony to heal our planet.
              </p>
              <p>
                Our drones precisely plant seeds in hard-to-reach areas, accelerating the restoration of vital
                ecosystems and combating climate change at an unprecedented scale. Every seed dropped is a step towards
                a greener, healthier Earth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-3 rounded-full shadow-lg"
              >
                <Link href="/about">
                  Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Drone+Technology"
                alt="Drone dropping a seed pod"
                width={800}
                height={600}
                className="object-cover w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Timeline Section */}
      <section
        ref={timelineRef}
        className="w-full py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-emerald-900 text-white overflow-hidden"
      >
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <CalendarDays className="w-5 h-5 text-emerald-300" />
              <span className="text-sm font-medium">Our Journey</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
              Timeline of Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From research to global impact - the evolution of TerraDrop's mission to restore our planet
            </p>
          </motion.div>

          <div className="relative max-w-7xl mx-auto">
            {/* Animated Timeline Track */}
            <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gray-700 rounded-full">
              <motion.div
                className="w-full bg-gradient-to-b from-emerald-400 via-emerald-500 to-teal-500 rounded-full origin-top"
                style={{ scaleY: timelineProgress }}
              />
            </div>

            <div className="space-y-24">
              {journeyMilestones.map((milestone, index) => {
                const isEven = index % 2 === 0

                return (
                  <TimelineItem
                    key={milestone.year}
                    milestone={milestone}
                    index={index}
                    isEven={isEven}
                    getGradientClass={getGradientClass}
                    getBgClass={getBgClass}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Visual Storytelling Section */}
      <section className="w-full py-20 bg-gradient-to-br from-gray-900 to-emerald-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Witness the Impact</h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              See our drones in action, transforming barren landscapes into thriving forests
            </p>
          </motion.div>

          <motion.div
            className="relative w-full max-w-5xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            onClick={() => setShowVideo(true)}
          >
            <Image
              src="/placeholder.svg?height=720&width=1280&text=Drone+Footage"
              alt="Drone footage thumbnail"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 flex items-center justify-center group-hover:bg-black/70 transition-colors duration-300">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 group-hover:bg-white/30 transition-all duration-300">
                <PlayCircle className="h-16 w-16 text-white" />
              </div>
            </div>
          </motion.div>

          {/* Video Modal */}
          {showVideo && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
              <div className="relative w-full max-w-6xl mx-4 aspect-video">
                <button
                  className="absolute -top-12 right-0 text-white hover:text-emerald-300 transition-colors z-10"
                  onClick={() => setShowVideo(false)}
                  aria-label="Close video"
                >
                  <X className="h-8 w-8" />
                </button>
                <video src="/placeholder.mp4" controls autoPlay className="w-full h-full rounded-2xl shadow-2xl" />
              </div>
            </div>
          )}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Be a Part of the Solution</h2>
            <p className="text-xl mb-10 text-emerald-100 leading-relaxed">
              Your contribution directly fuels our drone reforestation missions, helping us plant more trees and restore
              more land. Every donation makes a tangible difference in our fight against climate change.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-emerald-600 hover:bg-emerald-50 px-10 py-4 text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold"
              >
                <Link href="/donate">
                  Support TerraDrop Today <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg rounded-full bg-transparent"
              >
                <Link href="/projects">View Our Projects</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


function TimelineItem({
  milestone,
  index,
  isEven,
  getGradientClass,
  getBgClass,
}: {
  milestone: any
  index: number
  isEven: boolean
  getGradientClass: (intensity: string) => string
  getBgClass: (intensity: string) => string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      className={`relative flex flex-col md:flex-row items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      {/* Timeline Node */}
      <motion.div
        className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 z-20"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
      >
        <div
          className={`w-16 h-16 rounded-full bg-gradient-to-r ${getGradientClass(milestone.intensity)} flex items-center justify-center shadow-2xl border-4 border-white/20`}
        >
          <span className="text-white font-bold text-lg">{milestone.year.slice(-2)}</span>
        </div>

        {/* Pulse animation */}
        <motion.div
          className={`absolute inset-0 rounded-full bg-gradient-to-r ${getGradientClass(milestone.intensity)} opacity-30`}
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
        />
      </motion.div>

      {/* Content Card */}
      <div className={`w-full md:w-5/12 ml-24 md:ml-0 ${isEven ? "md:pr-16" : "md:pl-16"}`}>
        <motion.div
          className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
          initial={{ opacity: 0, x: isEven ? -100 : 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -100 : 100 }}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.1 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className={`px-4 py-2 rounded-full bg-gradient-to-r ${getGradientClass(milestone.intensity)} text-white text-sm font-bold`}
            >
              {milestone.year}
            </div>
            <h3 className="text-2xl font-bold text-white">{milestone.title}</h3>
          </div>

          <p className="text-gray-300 leading-relaxed mb-6">{milestone.description}</p>

          {/* Achievements */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-emerald-300 mb-3">Key Achievements:</h4>
            {milestone.achievements.map((achievement: string, i: number) => (
              <motion.div
                key={i}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.5 + i * 0.1 }}
              >
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-300">{achievement}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Image */}
      <div className={`w-full md:w-5/12 mt-8 md:mt-0 ml-24 md:ml-0 ${isEven ? "md:pl-16" : "md:pr-16"}`}>
        <motion.div
          className="relative rounded-3xl overflow-hidden shadow-2xl group"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
        >
          <Image
            src={milestone.image || "/placeholder.svg"}
            alt={milestone.title}
            width={600}
            height={400}
            className="object-cover w-full h-80 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Year overlay */}
          <div className="absolute top-4 left-4">
            <div
              className={`px-4 py-2 rounded-full bg-gradient-to-r ${getGradientClass(milestone.intensity)} text-white font-bold shadow-lg`}
            >
              {milestone.year}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
