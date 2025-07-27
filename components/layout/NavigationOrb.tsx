"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Home, Info, Settings, Leaf, DollarSign, Mail } from "lucide-react"
import Logo from "@/components/logo"

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About Us", href: "/about", icon: Info },
    { name: "Projects", href: "/projects", icon: Leaf },
    { name: "Donate", href: "/donate", icon: DollarSign },
    { name: "Contact", href: "/contact", icon: Mail },
  ]

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      variants={{
        open: { width: "200px" },
        closed: { width: "64px" },
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed left-0 top-0 h-full bg-math border-r-8 border-r-[#ffffff2f] z-50 flex flex-col items-start py-4  border-math"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="px-4 mb-8 flex items-center justify-center w-full">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-8 w-8 text-earthy-green dark:text-sky-blue" />
          <motion.span
            variants={{
              closed: { opacity: 0, display: "none" },
              open: { opacity: 1, display: "block" },
            }}
            transition={{ duration: 0.2 }}
            className="text-xl font-bold text-gray-800 dark:text-white whitespace-nowrap overflow-hidden font-inter"
          >
            TerraDrop
          </motion.span>
        </Link>
      </div>
      <ul className="flex flex-col gap-2 w-full px-2">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="flex items-center gap-3 p-3 rounded-lg  hover:bg-[#fff] transition-colors group dark:hover:bg-[#e3e4e6] text-[#1f1d1a] group-hover:text-earthy-green dark:text-[#1f1d1a] dark:group-hover:text-neon-green"
            >
              <item.icon className="h-6 w-6 text-[#1f1d1a] group-hover:text-earthy-green dark:text-[#1f1d1a] dark:group-hover:text-neon-green" />
              <motion.span
                variants={{
                  closed: { opacity: 0, display: "none" },
                  open: { opacity: 1, display: "block" },
                }}
                transition={{ duration: 0.2 }}
                className="text-base font-medium whitespace-nowrap overflow-hidden font-roboto"
              >
                {item.name}
              </motion.span>
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}
