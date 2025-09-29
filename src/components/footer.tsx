import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="font-bold text-xl">GenZ212</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Moroccan Youth Voice – A movement for education, healthcare, dignity, jobs, and a future of fairness and opportunity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                Home
              </Link>
              <Link href="/demands" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                Our Demands
              </Link>
              <Link href="/timeline" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                Timeline
              </Link>
              <Link href="/resources" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                Resources
              </Link>
            </nav>
          </div>

          {/* Values */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Our Values</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-blue-400">✌️</span>
                <span className="text-gray-300 text-sm">Peaceful Action</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">📱</span>
                <span className="text-gray-300 text-sm">Digital-First</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-purple-400">🤝</span>
                <span className="text-gray-300 text-sm">Collective Power</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Get Involved</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Join the movement for positive change. Follow us on social media and participate in our peaceful actions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <span className="text-lg">📘</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <span className="text-lg">🐦</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <span className="text-lg">📷</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <span className="text-lg">📱</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2025 GenZ212 – Moroccan Youth Voice • Built with ❤️ for a better Morocco
          </p>
        </div>
      </div>
    </footer>
  )
}
