"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Info, Menu } from "lucide-react"
import GDGCPage from "@/app/event/event"
export default function HomePage() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const createDots = () => [
      { x: canvas.width * 0.5, y: -canvas.height * 0.1, radius: 180, color: "#7CB9E8" },
      { x: canvas.width * 0.1, y: canvas.height * 0.5, radius: 50, color: "#4285F4" },
      { x: canvas.width * 0.15, y: canvas.height * 0.85, radius: 60, color: "#F4B400" },
      { x: canvas.width * 0.85, y: 80, radius: 40, color: "#0F9D58" },
    ]

    let dots = createDots()

    const render = () => {
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, '#000000')
      gradient.addColorStop(1, '#1a1a1a')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.strokeStyle = 'black'
      ctx.lineWidth = 0.5
      const gridSize = 40
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      dots.forEach((dot) => {
        const gradient = ctx.createRadialGradient(dot.x, dot.y, 0, dot.x, dot.y, dot.radius * 1.5)
        gradient.addColorStop(0, dot.color + '40')
        gradient.addColorStop(1, 'transparent')
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.radius * 1.5, 0, Math.PI * 2)
        ctx.fill()

        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2)
        ctx.fillStyle = dot.color
        ctx.fill()
      })
    }

    render()

    const handleResize = () => {
      resizeCanvas()
      dots = createDots()
      render()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="absolute top-6 right-6 z-10">
        <button className="text-white p-3 hover:bg-white/10 rounded-full transition-colors duration-300">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
          {/* <svg width="96" height="52" viewBox="0 0 96 52" fill="none"> */}
            {/* <path d="M32 26L48 42L64 26L48 10L32 26Z" fill="#4285F4" /> */}
            {/* <path d="M48 42L64 26L80 42L64 58L48 42Z" fill="#0F9D58" /> */}
            {/* <path d="M16 26L32 42L48 26L32 10L16 26Z" fill="#DB4437" /> */}
          {/* </svg> */}
        </div>

        {/* Image Section */}
        {/* <div className="w-32 h-32 mb-4 rounded-full overflow-hidden">
          <Image
            src="/logo.png"
            alt="Profile"
            width={128}
            height={128}
            className="object-cover"
          />
        </div> */}

        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          Google Developer Groups
        </h1>
        <div className="flex items-center gap-3 text-xl md:text-2xl font-medium">
          <span className="text-[#4285F4]">On Campus</span>
          <span className="text-white/80">•</span>
          <span className="text-white">D. Y. Patil College Of Engineering-Pune</span>
        </div>
      </div>
      <GDGCPage />
    </div>
  )
}