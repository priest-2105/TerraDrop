"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Leaf, DollarSign, TreePine, Globe, ShieldCheck, Eye, Lock, Check } from "lucide-react"
import { useState } from "react"

export default function DonatePageComponent() {
  const [customAmount, setCustomAmount] = useState<number | string>("")
  const treesFromCustomAmount = typeof customAmount === "number" ? Math.floor(customAmount * 2) : 0 // Assuming $1 = 2 trees

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
        ease: "easeOut" as const,
      },
    }),
  }

  const donationTiers = [
    {
      name: "Seed Planter",
      amount: 25,
      trees: 50,
      description: "Plant 50 trees in deforested areas",
      features: ["GPS tracking", "Growth updates", "Digital certificate"],
    },
    {
      name: "Forest Guardian",
      amount: 50,
      trees: 125,
      description: "Restore a small forest patch",
      features: ["GPS tracking", "Growth updates", "Digital certificate", "Project photos"],
    },
    {
      name: "Ecosystem Hero",
      amount: 100,
      trees: 250,
      description: "Create a biodiversity corridor",
      features: ["GPS tracking", "Growth updates", "Digital certificate", "Project photos", "Impact report"],
    },
    {
      name: "Climate Champion",
      amount: 250,
      trees: 625,
      description: "Major reforestation contribution",
      features: [
        "GPS tracking",
        "Growth updates",
        "Digital certificate",
        "Project photos",
        "Impact report",
        "Personal consultation",
      ],
    },
  ]

  const impactStats = [
    { icon: DollarSign, value: "$25", label: "Plants 50 Trees", subLabel: "Enough to restore a small forest patch" },
    { icon: TreePine, value: "$100", label: "Plants 250 Trees", subLabel: "Creates a biodiversity corridor" },
    { icon: Globe, value: "$500", label: "Plants 1,000 Trees", subLabel: "Restores an entire ecosystem" },
  ]

  const trustIndicators = [
    { icon: Lock, title: "Secure Donations", description: "Bank-level security for all transactions" },
    { icon: Eye, title: "Transparent Impact", description: "Track every tree planted with GPS coordinates" },
    {
      icon: ShieldCheck,
      title: "Verified Results",
      description: "Independent verification of all reforestation projects",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
   
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=720&width=1280&text=Donate+Hero"
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
            Support Our
            <span className="text-emerald-300"> Mission</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed text-emerald-50 mb-8"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Every donation helps us plant more trees and restore Earth's forests.
          </motion.p>
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-white/20 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
              $1 = 2 Trees
            </div>
            <div className="text-lg text-emerald-50">Your donation goes directly to reforestation efforts</div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 px-6 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            Your Impact
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                className="group"
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.5 }}
                custom={index}
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200 hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-lg text-gray-600 mb-4">{stat.label}</div>
                  <div className="text-sm text-gray-500">{stat.subLabel}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="py-20 px-6 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            Choose Your Impact
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {donationTiers.map((tier, index) => (
              <motion.div
                key={index}
                className="group"
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.5 }}
                custom={index}
              >
                <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="bg-gradient-to-br from-emerald-600 to-teal-600 p-6 text-white text-center">
                    <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                    <div className="text-4xl font-bold mb-1">${tier.amount}</div>
                    <div className="text-sm opacity-90">{tier.trees} trees</div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4 leading-relaxed">{tier.description}</p>
                    <ul className="space-y-2 mb-6">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-center gap-2">
                          <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      disabled
                      className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-not-allowed duration-300"
                    >
                        Donate ${tier.amount}
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Donation */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            Custom Donation
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Choose your own amount and make a direct impact on reforestation efforts.
          </motion.p>

          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <label htmlFor="custom-amount" className="block text-lg font-semibold mb-4 text-emerald-100">
                  Donation Amount
                </label>
                <div className="flex flex-wrap gap-4 mb-6">
                  {[50, 100, 250].map((amount) => (
                    <Button
                      key={amount}
                      variant="outline"
                      className="px-6 py-3 bg-white/10 border-white/30 text-white hover:bg-white/20 transition-colors rounded-xl"
                      onClick={() => setCustomAmount(amount)}
                    >
                      ${amount}
                    </Button>
                  ))}
                </div>
                <Input
                  id="custom-amount"
                  type="number"
                  placeholder="Enter custom amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(Number(e.target.value))}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/70 focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-300 mb-2">
                  {treesFromCustomAmount > 0 ? `${treesFromCustomAmount} Trees` : "0 Trees"}
                </div>
                <div className="text-lg text-gray-300">Will be planted</div>
                <Button
                  asChild
                  disabled
                  className="mt-6 px-8 py-4 bg-emerald-500 text-white cursor-not-allowed font-semibold  rounded-xl hover:bg-emerald-600 transition-colors shadow-lg"
                >
                    Donate Now
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            Why Trust TerraDrop?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={index}
                className="group"
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.5 }}
                custom={index}
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200 hover:-translate-y-2">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <indicator.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{indicator.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{indicator.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
