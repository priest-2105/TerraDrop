"use client"

import Link from "next/link"
import { Leaf } from "lucide-react"

export default function FooterComponent() {
  return (
    <footer className="w-full py-12 bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="w-6 h-6 text-emerald-400" />
            <span className="text-xl font-bold text-white">TerraDrop</span>
          </div>
          <p className="mb-4">&copy; {new Date().getFullYear()} TerraDrop. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <Link href="/privacy" className="hover:text-emerald-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-emerald-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-emerald-400 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
