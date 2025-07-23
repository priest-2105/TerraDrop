"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Leaf, Zap, Globe } from "lucide-react"

export default function HomePage() {
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
      },
    }),
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-roboto">
      {/* Hero Section */}
      <section className="relative w-full h-[calc(100vh-64px)] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Drone planting trees over deforested land"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-soil-brown/70 via-transparent to-transparent z-10" />
        <div className="relative z-20 text-white p-4 md:p-8 max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 font-inter"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Replanting Hope, One Seed at a Time.
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Harnessing the power of drone technology to restore deforested lands and combat climate change.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <Button
              asChild
              className="bg-earthy-green hover:bg-earthy-green/90 text-white px-8 py-3 text-lg rounded-full shadow-lg"
            >
              <Link href="/donate">
                Donate Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Impact Counters Section */}
      <section className="w-full py-16 md:py-24 bg-sky-blue text-soil-brown dark:bg-gray-800 dark:text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 font-inter"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            Our Impact So Far
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Leaf, value: "500K+", label: "Trees Planted" },
              { icon: Globe, value: "10+", label: "Countries Reached" },
              { icon: Zap, value: "1000+", label: "Hectares Restored" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md dark:bg-gray-900 dark:shadow-none dark:border dark:border-gray-700"
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.5 }}
                custom={index}
              >
                <item.icon className="h-12 w-12 text-earthy-green mb-4 dark:text-neon-green" />
                <p className="text-5xl font-bold mb-2 font-inter">{item.value}</p>
                <p className="text-lg font-medium">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-16 md:py-24 bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-inter text-earthy-green dark:text-neon-green">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed">
              TerraDrop is dedicated to revolutionizing reforestation efforts through cutting-edge drone technology. We
              believe in a future where technology and nature work in harmony to heal our planet. Our drones precisely
              plant seeds in hard-to-reach areas, accelerating the restoration of vital ecosystems and combating climate
              change at an unprecedented scale.
            </p>
            <p className="text-lg leading-relaxed">
              Every seed dropped is a step towards a greener, healthier Earth. Join us in our journey to bring life back
              to deforested landscapes and create a sustainable legacy for generations to come.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-earthy-green text-earthy-green hover:bg-earthy-green hover:text-white px-6 py-3 text-lg rounded-full dark:border-neon-green dark:text-neon-green dark:hover:bg-neon-green dark:hover:text-soil-brown bg-transparent"
            >
              <Link href="/about">
                Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Drone dropping a seed pod"
              width={800}
              height={600}
              className="rounded-xl shadow-lg object-cover w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-16 md:py-24 bg-soil-brown text-white text-center dark:bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 font-inter"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            Be a Part of the Solution
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your contribution directly fuels our drone reforestation missions, helping us plant more trees and restore
            more land. Every donation makes a tangible difference.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              asChild
              className="bg-neon-green hover:bg-neon-green/90 text-soil-brown px-10 py-4 text-xl rounded-full shadow-lg font-bold"
            >
              <Link href="/donate">
                Support TerraDrop Today <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 bg-gray-800 text-gray-300 text-center text-sm dark:bg-gray-900 dark:text-gray-400">
        <div className="container mx-auto px-4 md:px-6">
          <p>&copy; {new Date().getFullYear()} TerraDrop. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-2">
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
