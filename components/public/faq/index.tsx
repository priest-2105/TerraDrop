"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, HelpCircle, Leaf, DollarSign, TreePine } from "lucide-react"

export default function FAQPage() {
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

  const faqCategories = [
    {
      category: "General Questions",
      icon: HelpCircle,
      faqs: [
        {
          question: "What is TerraDrop?",
          answer:
            "TerraDrop is an environmental organization that uses advanced drone technology to accelerate reforestation efforts globally, combating deforestation and climate change.",
        },
        {
          question: "How does drone reforestation work?",
          answer:
            "Our drones precisely deploy biodegradable seed pods in deforested areas. These pods contain native seeds, nutrients, and protective elements, optimizing germination and growth.",
        },
        {
          question: "Where does TerraDrop operate?",
          answer:
            "We operate in various critically deforested regions worldwide, focusing on areas with high ecological impact potential. Our projects span across multiple continents.",
        },
        {
          question: "Is TerraDrop a non-profit organization?",
          answer:
            "Yes, TerraDrop is a registered non-profit dedicated to environmental restoration. All donations go directly towards funding our reforestation projects and research.",
        },
      ],
    },
    {
      category: "Projects & Impact",
      icon: TreePine,
      faqs: [
        {
          question: "How do you select project locations?",
          answer:
            "We select locations based on scientific data, including deforestation rates, biodiversity loss, and community needs. We prioritize areas where our technology can have the most significant impact.",
        },
        {
          question: "How do you track the trees planted?",
          answer:
            "Every tree planted is recorded with GPS coordinates. We use regular drone surveys and satellite imagery to monitor growth, health, and overall ecosystem recovery.",
        },
        {
          question: "What types of trees do you plant?",
          answer:
            "We exclusively plant native tree species that are ecologically appropriate for each specific region, ensuring biodiversity and ecosystem resilience.",
        },
        {
          question: "What is the success rate of your planting?",
          answer:
            "Thanks to our precision technology and optimized seed pods, we achieve a germination and survival rate significantly higher than traditional manual planting methods, typically over 90%.",
        },
      ],
    },
    {
      category: "Donations & Support",
      icon: DollarSign,
      faqs: [
        {
          question: "How can I donate to TerraDrop?",
          answer:
            "You can donate directly through our website's 'Donate Now' page. We accept various payment methods, including credit cards and PayPal.",
        },
        {
          question: "Where does my donation go?",
          answer:
            "100% of your donation goes directly to our reforestation projects, covering costs for seed procurement, drone operations, local community engagement, and monitoring.",
        },
        {
          question: "Can I volunteer with TerraDrop?",
          answer:
            "We welcome volunteers! Please visit our 'Contact Us' page and select 'Volunteer Information' in the subject to inquire about current opportunities.",
        },
        {
          question: "Do you offer corporate partnerships?",
          answer:
            "Yes, we partner with corporations for large-scale reforestation initiatives, carbon offsetting programs, and sustainability collaborations. Please contact us for more details.",
        },
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
   
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=720&width=1280&text=FAQ+Hero"
            alt="Forest with question marks"
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
            Frequently Asked
            <span className="text-emerald-300"> Questions</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed text-emerald-50"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Find answers to common questions about TerraDrop, our mission, projects, and how you can get involved.
          </motion.p>
        </div>
      </section>

      {/* FAQ Content Section */}
      <section className="w-full py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 max-w-5xl">
          {faqCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              className="mb-16 last:mb-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 flex items-center gap-4">
                <category.icon className="w-8 h-8 text-emerald-600" />
                {category.category}
              </h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {category.faqs.map((faq, faqIndex) => (
                  <motion.div
                    key={faqIndex}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.5 }}
                    custom={faqIndex}
                  >
                    <AccordionItem
                      value={`item-${catIndex}-${faqIndex}`}
                      className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                    >
                      <AccordionTrigger className="px-6 py-4 text-lg font-semibold text-gray-900 hover:no-underline data-[state=open]:text-emerald-700">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 text-gray-700 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          ))}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-xl mb-10 text-emerald-100 leading-relaxed">
              If you couldn't find the answer you were looking for, please don't hesitate to reach out to our team.
              We're here to help!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-emerald-600 hover:bg-emerald-50 px-10 py-4 text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold"
              >
                <Link href="/contact">
                  Contact Our Team <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg rounded-full bg-transparent"
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
