import type React from "react"

interface LogoProps {
  className?: string
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Circular background - Sky Blue */}
      <circle cx="12" cy="12" r="11" fill="#C8E8F4" />
      {/* Drone (simple cross) - Soil Brown */}
      <rect x="11" y="8" width="2" height="8" rx="1" fill="#3E2C2C" /> {/* Vertical arm */}
      <rect x="8" y="11" width="8" height="2" rx="1" fill="#3E2C2C" /> {/* Horizontal arm */}
      {/* Seed/Leaf (simple drop) - Earthy Green */}
      <path
        d="M12 16.5C12 17.5 11.5 18 11 18C10.5 18 10 17.5 10 16.5C10 15.5 12 13 12 13C12 13 14 15.5 14 16.5C14 17.5 13.5 18 13 18C12.5 18 12 17.5 12 16.5Z"
        fill="#557C55"
      />
    </svg>
  )
}

export default Logo
