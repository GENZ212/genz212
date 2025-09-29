"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-black text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo - CNN Style */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-red-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white leading-none">GenZ212</span>
                <span className="text-xs text-red-400 font-semibold tracking-wider">MOROCCO NEWS</span>
              </div>
            </div>
          </Link>

          {/* Breaking News Ticker */}
          <div className="hidden lg:flex items-center bg-red-600 px-3 py-1 rounded">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse mr-2"></div>
            <span className="text-xs font-semibold text-white tracking-wide">
              LIVE: Protests Continue Nationwide
            </span>
          </div>

          {/* Navigation Links - CNN Style */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-1">
              <Link
                href="/"
                className={`px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors border-b-2 ${
                  pathname === '/' 
                    ? 'text-white border-red-600' 
                    : 'text-gray-300 border-transparent hover:text-white hover:border-red-400'
                }`}
              >
                Home
              </Link>
              <Link
                href="/demands"
                className={`px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors border-b-2 ${
                  pathname === '/demands' 
                    ? 'text-white border-red-600' 
                    : 'text-gray-300 border-transparent hover:text-white hover:border-red-400'
                }`}
              >
                Demands
              </Link>
              <Link
                href="/timeline"
                className={`px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors border-b-2 ${
                  pathname === '/timeline' 
                    ? 'text-white border-red-600' 
                    : 'text-gray-300 border-transparent hover:text-white hover:border-red-400'
                }`}
              >
                Timeline
              </Link>
              <Link
                href="/resources"
                className={`px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors border-b-2 ${
                  pathname === '/resources' 
                    ? 'text-white border-red-600' 
                    : 'text-gray-300 border-transparent hover:text-white hover:border-red-400'
                }`}
              >
                Resources
              </Link>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              className="text-white hover:bg-gray-800 text-sm font-semibold"
              size="sm"
              asChild
            >
              <a href="https://discord.gg/genz212" target="_blank" rel="noopener noreferrer">
                <span className="text-lg">💬</span>
                Join Discord
              </a>
            </Button>
            <Button
              variant="default"
              size="sm"
              className="font-semibold"
              asChild
            >
              <Link href="/timeline">
                Live Updates
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
