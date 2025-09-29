import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Mission */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 bg-red-600 rounded flex items-center justify-center">
                <span className="text-white font-bold">G</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white">GenZ212</span>
                <span className="text-xs text-red-400 font-semibold tracking-wider">MOROCCO NEWS</span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Youth-led movement demanding healthcare and education over World Cup stadiums. 
              Peaceful, digital-first organizing for systemic change across Morocco.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-red-400 font-semibold">LIVE COVERAGE</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-0.5 w-8 bg-red-600"></div>
              <h3 className="font-bold text-lg uppercase tracking-wide">Sections</h3>
            </div>
            <nav className="space-y-3">
              <Link href="/" className="block text-gray-300 hover:text-red-400 transition-colors font-medium">
                Breaking News
              </Link>
              <Link href="/demands" className="block text-gray-300 hover:text-red-400 transition-colors font-medium">
                Policy Demands
              </Link>
              <Link href="/timeline" className="block text-gray-300 hover:text-red-400 transition-colors font-medium">
                Live Timeline
              </Link>
              <Link href="/resources" className="block text-gray-300 hover:text-red-400 transition-colors font-medium">
                Resources & Support
              </Link>
            </nav>
          </div>

          {/* Movement Stats */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-0.5 w-8 bg-green-600"></div>
              <h3 className="font-bold text-lg uppercase tracking-wide">Movement</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Cities Involved</span>
                <span className="font-bold text-red-400">8+</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Key Demands</span>
                <span className="font-bold text-green-400">15+</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Approach</span>
                <span className="font-bold text-white">Peaceful</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Platform</span>
                <span className="font-bold text-blue-400">Digital-First</span>
              </div>
            </div>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-0.5 w-8 bg-red-600"></div>
              <h3 className="font-bold text-lg uppercase tracking-wide">Stay Updated</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Get breaking news and updates on Morocco's youth movement fighting for healthcare and education reform.
            </p>
            <div className="space-y-4">
              <Button variant="default" size="sm" className="w-full">
                Subscribe to Updates
              </Button>
              <div className="flex items-center gap-4">
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                  <span className="text-xl">📘</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                  <span className="text-xl">🐦</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                  <span className="text-xl">📷</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                  <span className="text-xl">📱</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                  <span className="text-xl">💬</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breaking News Ticker */}
      <div className="bg-red-600 py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <span className="font-bold text-sm text-white tracking-wider">BREAKING</span>
            <div className="flex-1 overflow-hidden">
              <div className="animate-scroll whitespace-nowrap text-sm text-white">
                🏥 Hospitals lack basic supplies while billions spent on stadiums • 
                🎓 Students demand education funding over sports infrastructure • 
                ✊ Peaceful protests continue across 8+ Moroccan cities • 
                📱 Youth organize through Discord and TikTok platforms
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="bg-gray-900 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>© 2025 GenZ212</span>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>Moroccan Youth Voice</span>
              <span>•</span>
              <span>Peaceful Movement</span>
              <span>•</span>
              <span className="text-green-400">Digital-First</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
