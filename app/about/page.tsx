"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Leaf, Globe, Zap } from 'lucide-react'

const team = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Founder & CEO',
    img: '/images/homepage/pexels-chokniti-khongchum-1197604-2280568.jpg',
  },
  {
    name: 'Dr. Marcus Rodriguez',
    role: 'Chief Technology Officer',
    img: '/images/homepage/pexels-googledeepmind-17483908.jpg',
  },
  {
    name: 'Elena Petrov',
    role: 'Head of Operations',
    img: '/images/homepage/seeds-from-drone-2.jpg',
  },
]

export default function About() {
  return (
    <main className="min-h-screen bg-math text-soil-brown font-roboto">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/images/homepage/drone-quad-copter-with-high-resolution-digital-camera-green-corn-field.jpg"
          alt="Drone over field"
          fill
          className="object-cover z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-soil-brown/70 via-transparent to-transparent z-10" />
        <div className="relative z-20 p-4 md:p-8 max-w-3xl mx-auto">
          <motion.h1
            className="text-4xl md:text-6xl font-bold tracking-tight mb-4 font-inter text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Our Story
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl mb-4 text-[#f1f1f1]"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            From a vision of reforestation at scale to a reality of drone-powered ecological restoration.
          </motion.p>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="w-full py-16 md:py-24 bg-[#c0d4e5]">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-inter text-earthy-green mb-2">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed text-[#1f1d1a]">
              TerraDrop was born from a simple yet powerful idea: what if we could plant trees as efficiently as we cut them down? Using cutting-edge drone technology, we're revolutionizing reforestation by planting millions of seeds across deforested landscapes worldwide.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="flex flex-col items-center bg-white rounded-lg shadow p-4">
                <Leaf className="h-8 w-8 text-earthy-green mb-2" />
                <span className="font-bold text-xl text-[#1f1d1a]">10M+</span>
                <span className="text-sm text-[#1f1d1a]">Trees Planted</span>
              </div>
              <div className="flex flex-col items-center bg-white rounded-lg shadow p-4">
                <Globe className="h-8 w-8 text-earthy-green mb-2" />
                <span className="font-bold text-xl text-[#1f1d1a]">15+</span>
                <span className="text-sm text-[#1f1d1a]">Countries Reached</span>
              </div>
              <div className="flex flex-col items-center bg-white rounded-lg shadow p-4">
                <Zap className="h-8 w-8 text-earthy-green mb-2" />
                <span className="font-bold text-xl text-[#1f1d1a]">2000+</span>
                <span className="text-sm text-[#1f1d1a]">Hectares Restored</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/homepage/hero-drone.jpg"
              alt="Drone dropping a seed pod"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-16 md:py-24 bg-soil-brown text-[#000000]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 font-inter text-soil-brown"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            Why TerraDrop?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#2e261b] rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-2 text-neon-green">Innovation</h3>
              <p className="text-[#f1f1f1]">We harness the latest in drone and AI technology to maximize reforestation impact.</p>
            </div>
            <div className="bg-[#2e261b] rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-2 text-neon-green">Sustainability</h3>
              <p className="text-[#f1f1f1]">Our approach ensures long-term ecosystem health and community involvement.</p>
            </div>
            <div className="bg-[#2e261b] rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-2 text-neon-green">Global Impact</h3>
              <p className="text-[#f1f1f1]">We operate worldwide, restoring forests and fighting climate change at scale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-[#c0d4e5] text-soil-brown">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center font-inter text-earthy-green"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            Meet Our Team
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={member.name}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
              >
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 font-inter text-[#1f1d1a]">{member.name}</h3>
                <p className="font-body text-[#1f1d1a]">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 