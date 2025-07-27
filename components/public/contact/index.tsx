"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Globe,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  MessageSquare,
  HelpCircle,
  Leaf,
} from "lucide-react"


export default function ContactPageComponent() {
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

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=720&width=1280&text=Contact+Us+Hero"
            alt="Green forest with light rays"
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
            Get In Touch
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed text-emerald-50"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Have questions about our reforestation projects? Want to partner with us? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-6 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    placeholder="First Name"
                    type="text"
                    className="h-12 px-4 rounded-xl border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                  <Input
                    placeholder="Last Name"
                    type="text"
                    className="h-12 px-4 rounded-xl border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>
                <Input
                  placeholder="Email Address"
                  type="email"
                  className="h-12 px-4 rounded-xl border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                />
                <Select>
                  <SelectTrigger className="w-full h-12 px-4 rounded-xl border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 text-gray-500">
                    <SelectValue placeholder="Select Subject" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-gray-200 bg-white shadow-lg">
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                    <SelectItem value="volunteer">Volunteer Information</SelectItem>
                    <SelectItem value="donation">Donation Question</SelectItem>
                    <SelectItem value="media">Media Request</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea
                  placeholder="Tell us how we can help you..."
                  rows={6}
                  className="px-4 py-3 rounded-xl border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 resize-y"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Send Message <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Contact Information</h2>
              <div className="space-y-8">
                {/* General Inquiries Card */}
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <MessageSquare className="w-6 h-6 text-emerald-600" />
                    General Inquiries
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Email</div>
                        <a
                          href="mailto:hello@terradrop.org"
                          className="text-gray-600 hover:text-emerald-600 transition-colors"
                        >
                          hello@terradrop.org
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Phone</div>
                        <a href="tel:+15551234567" className="text-gray-600 hover:text-emerald-600 transition-colors">
                          +1 (555) 123-4567
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Address</div>
                        <address className="not-italic text-gray-600">
                          123 Forest Drive
                          <br />
                          San Francisco, CA 94105
                          <br />
                          United States
                        </address>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Office Hours Card */}
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Clock className="w-6 h-6 text-emerald-600" />
                    Office Hours
                  </h3>
                  <div className="space-y-4 text-gray-700">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM PST</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Saturday</span>
                      <span>10:00 AM - 4:00 PM PST</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>

                {/* Follow Us Card */}
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Globe className="w-6 h-6 text-emerald-600" />
                    Follow Our Progress
                  </h3>
                  <div className="flex justify-center gap-6">
                    <a
                      href="#"
                      aria-label="Twitter"
                      className="w-12 h-12 bg-emerald-100 hover:bg-emerald-200 rounded-full flex items-center justify-center transition-colors group"
                    >
                      <Twitter className="w-6 h-6 text-emerald-600 group-hover:scale-110 transition-transform" />
                    </a>
                    <a
                      href="#"
                      aria-label="LinkedIn"
                      className="w-12 h-12 bg-emerald-100 hover:bg-emerald-200 rounded-full flex items-center justify-center transition-colors group"
                    >
                      <Linkedin className="w-6 h-6 text-emerald-600 group-hover:scale-110 transition-transform" />
                    </a>
                    <a
                      href="#"
                      aria-label="Facebook"
                      className="w-12 h-12 bg-emerald-100 hover:bg-emerald-200 rounded-full flex items-center justify-center transition-colors group"
                    >
                      <Facebook className="w-6 h-6 text-emerald-600 group-hover:scale-110 transition-transform" />
                    </a>
                    <a
                      href="#"
                      aria-label="Instagram"
                      className="w-12 h-12 bg-emerald-100 hover:bg-emerald-200 rounded-full flex items-center justify-center transition-colors group"
                    >
                      <Instagram className="w-6 h-6 text-emerald-600 group-hover:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 px-6 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Can't find what you're looking for? Check out our comprehensive FAQ section.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            {[
              {
                question: "How do you track the trees?",
                answer: "Every tree is planted with GPS coordinates and monitored through regular drone surveys.",
              },
              {
                question: "What species do you plant?",
                answer: "We plant native species specific to each region, ensuring ecological compatibility.",
              },
              {
                question: "Can I volunteer with TerraDrop?",
                answer: "Yes! We offer various volunteer opportunities both in the field and remotely.",
              },
              {
                question: "How can my company partner with you?",
                answer:
                  "We offer corporate partnerships for large-scale reforestation projects and sustainability initiatives.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.5 }}
                custom={index}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
          <Button
            asChild
            size="lg"
            className="mt-12 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="/faq">
              View All FAQs <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

    </div>
  )
}
