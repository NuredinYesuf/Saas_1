"use client"

import { useState, useEffect } from "react"

const headlines = [
  "Simplify Your Workflow with StreamLine",
  "Boost Productivity with StreamLine",
  "Streamline Your Business with StreamLine",
  "Optimize Your Processes with StreamLine",
]

export default function HeroSlideshow() {
  const [currentHeadline, setCurrentHeadline] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length)
    }, 3000) // Change headline every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-24 mb-4 relative">
      {" "}
      {/* Fixed height container for headlines */}
      {headlines.map((headline, index) => (
        <h1
          key={index}
          className={`text-4xl md:text-5xl font-bold transition-opacity duration-500 absolute left-0 right-0 ${
            index === currentHeadline ? "opacity-100" : "opacity-0"
          }`}
        >
          {headline}
        </h1>
      ))}
    </div>
  )
}

