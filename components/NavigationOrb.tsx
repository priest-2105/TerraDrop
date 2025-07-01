'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavigationOrb = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'About', path: '/about', icon: '🌿' },
    { name: 'How It Works', path: '/how-it-works', icon: '🚁' },
    { name: 'Projects', path: '/projects', icon: '🌍' },
    { name: 'Donate', path: '/donate', icon: '💚' },
    { name: 'Contact', path: '/contact', icon: '📞' },
  ]

  const isActive = (path: string) => pathname === path

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Navigation Orb */}
      <div className="relative">
        {/* Radial Menu */}
        {isExpanded && (
          <div className="absolute bottom-0 right-0 mb-20 mr-20">
            {navItems.map((item, index) => {
              const angle = (index * 60) - 90 // Start from top (-90 degrees)
              const radius = 120 // Distance from center
              const x = Math.cos((angle * Math.PI) / 180) * radius
              const y = Math.sin((angle * Math.PI) / 180) * radius

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`absolute w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 ${
                    isActive(item.path)
                      ? 'bg-neon text-soil shadow-lg'
                      : 'bg-earth text-white shadow-lg hover:bg-soil'
                  }`}
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                  onClick={() => setIsExpanded(false)}
                >
                  {item.icon}
                </Link>
              )
            })}
          </div>
        )}

        {/* Main Orb Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-lg transition-all duration-300 hover:scale-110 ${
            isExpanded
              ? 'bg-neon text-soil rotate-45'
              : 'bg-gradient-to-br from-earth to-soil text-white'
          }`}
        >
          {isExpanded ? '✕' : '🌱'}
        </button>

        {/* Tooltip */}
        {!isExpanded && (
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-soil text-white text-sm font-body rounded-lg whitespace-nowrap">
            Navigation
          </div>
        )}
      </div>

      {/* Background Overlay */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </div>
  )
}

export default NavigationOrb 