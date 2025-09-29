import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breaking News Hero - CNN Style */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Breaking News Banner */}
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-red-600 px-4 py-2 rounded">
                <span className="font-bold text-sm tracking-wider">BREAKING</span>
              </div>
              <div className="h-0.5 w-16 bg-red-600"></div>
              <span className="text-red-400 font-semibold text-sm tracking-wider uppercase">Live Coverage</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Morocco Youth Demand Healthcare Over World Cup Stadiums
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl leading-relaxed">
                GenZ212 movement organizes nationwide protests calling for government to prioritize hospitals and education over sports infrastructure spending
              </p>
              
            {/* Live Ticker */}
            <div className="flex items-center gap-4 bg-red-600/20 border border-red-600/30 rounded-lg p-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-red-400 font-semibold text-sm">LIVE</span>
              </div>
              <p className="text-white text-sm">
                Protests continue in Casablanca, Rabat, and Marrakesh as youth activists maintain peaceful demonstrations
              </p>
            </div>

            {/* Discord CTA */}
            <div className="flex items-center gap-4 bg-blue-600/20 border border-blue-600/30 rounded-lg p-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">💬</span>
                <span className="text-blue-400 font-semibold">JOIN US ON DISCORD</span>
              </div>
              <p className="text-white text-sm">
                Connect with the GenZ212 community for real-time updates and coordination
              </p>
              <Button variant="outline" size="sm" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white ml-auto">
                <a href="https://discord.gg/genz212" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <span className="text-lg">🔗</span>
                  Join Discord
                </a>
              </Button>
            </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild size="xl" variant="default">
                <Link href="/timeline" className="flex items-center gap-3">
                  <span className="text-xl">📺</span>
                  <div className="text-left">
                    <div className="font-bold">Watch Timeline</div>
                    <div className="text-xs opacity-90">Live coverage of protests</div>
                  </div>
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="border-white text-gray-700 hover:bg-white hover:text-black">
                <Link href="/demands" className="flex items-center gap-3">
                  <span className="text-xl">📋</span>
                  <div className="text-left">
                    <div className="font-bold ">Read Demands</div>
                    <div className="text-xs opacity-90">Healthcare over stadiums</div>
                  </div>
                </Link>
              </Button>
              <Button asChild variant="secondary" size="xl" className="bg-gray-700 text-white hover:bg-gray-600">
                <Link href="/resources" className="flex items-center gap-3">
                  <span className="text-xl">🔗</span>
                  <div className="text-left">
                    <div className="font-bold">Resources</div>
                    <div className="text-xs opacity-90">Support & contacts</div>
                  </div>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Top Stories Section - Enhanced CNN Style */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-1 w-16 bg-red-600"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-black uppercase tracking-wide">Top Stories</h2>
              <div className="h-1 w-16 bg-red-600"></div>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Latest developments in Morocco's youth movement demanding healthcare and education reforms
            </p>
          </div>

          {/* Featured Story */}
          <div className="mb-12">
            <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-gradient-to-br from-red-600 to-red-800 p-8 text-white flex items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className="bg-white/20 text-white border-white/30 text-sm px-3 py-1">
                        🔥 BREAKING
                      </Badge>
                      <span className="text-sm opacity-90">Updated 30 minutes ago</span>
                    </div>
                    <h3 className="text-3xl font-bold leading-tight mb-4">
                      GenZ212 Protests Spread to 8+ Cities Across Morocco
                    </h3>
                    <p className="text-lg opacity-90 leading-relaxed">
                      Youth activists coordinate nationwide demonstrations demanding government prioritize healthcare and education over World Cup stadium construction.
                    </p>
                  </div>
                </div>
                <div className="p-8 flex items-center">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">📍</span>
                      <div>
                        <div className="font-semibold text-gray-900">Cities Involved</div>
                        <div className="text-gray-600 text-sm">Casablanca, Rabat, Marrakesh, Tangier, Agadir</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">👥</span>
                      <div>
                        <div className="font-semibold text-gray-900">Movement Type</div>
                        <div className="text-gray-600 text-sm">Peaceful, digital-first organizing</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">📱</span>
                      <div>
                        <div className="font-semibold text-gray-900">Platforms Used</div>
                        <div className="text-gray-600 text-sm">Discord, TikTok, social media</div>
                      </div>
                    </div>
                    <Button asChild variant="outline" size="sm" className="mt-4">
                      <Link href="/timeline">
                        Read Full Coverage →
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Story Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Story 1 - Education */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 overflow-hidden group cursor-pointer">
              <div className="h-3 bg-gradient-to-r from-green-500 to-green-600"></div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1">
                    EDUCATION
                  </Badge>
                  <span className="text-xs text-gray-500">2 hours ago</span>
                </div>
                <CardTitle className="text-xl font-bold text-black leading-tight group-hover:text-green-700 transition-colors">
                  Schools Lack Basic Supplies While Stadium Construction Continues
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Students across Morocco face overcrowded classrooms and insufficient resources as billions are allocated to World Cup infrastructure.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-lg">🎓</span>
                  <span>Education Crisis</span>
                </div>
              </CardContent>
            </Card>

            {/* Story 2 - Healthcare */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 overflow-hidden group cursor-pointer">
              <div className="h-3 bg-gradient-to-r from-red-500 to-red-600"></div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-red-100 text-red-800 text-xs font-semibold px-3 py-1">
                    HEALTH
                  </Badge>
                  <span className="text-xs text-gray-500">3 hours ago</span>
                </div>
                <CardTitle className="text-xl font-bold text-black leading-tight group-hover:text-red-700 transition-colors">
                  Hospitals Report Critical Shortages Amid Stadium Spending
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Medical facilities struggle with equipment shortages while government prioritizes sports infrastructure investments.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-lg">🏥</span>
                  <span>Healthcare Crisis</span>
                </div>
              </CardContent>
            </Card>

            {/* Story 3 - Protests */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 overflow-hidden group cursor-pointer">
              <div className="h-3 bg-gradient-to-r from-black to-gray-800"></div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-gray-100 text-black text-xs font-semibold px-3 py-1">
                    PROTESTS
                  </Badge>
                  <span className="text-xs text-gray-500">1 hour ago</span>
                </div>
                <CardTitle className="text-xl font-bold text-black leading-tight group-hover:text-gray-700 transition-colors">
                  Youth Activists Organize Through Social Media Platforms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  GenZ212 movement uses Discord and TikTok to coordinate peaceful demonstrations across major cities.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-lg">✊</span>
                  <span>Digital Organizing</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-red-600 text-red-600 hover:bg-red-50">
              <Link href="/timeline" className="flex items-center gap-2">
                <span>View All Stories</span>
                <span className="text-lg">→</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Analysis Section - CNN Style */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 w-12 bg-red-600"></div>
            <h2 className="text-2xl font-bold text-black uppercase tracking-wide">Analysis</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card className="bg-white shadow-lg border-0">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-red-600 text-white text-xs px-3 py-1">DEEP DIVE</Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold text-black leading-tight">
                    How Social Media Transformed Morocco's Youth Movement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-800 text-lg leading-relaxed mb-4">
                    The GenZ212 movement represents a new generation of Moroccan activists who have mastered digital organizing. 
                    Through Discord servers and TikTok campaigns, they've bypassed traditional media to mobilize thousands 
                    across the country.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>📱 Digital-First Strategy</span>
                    <span>✌️ Peaceful Resistance</span>
                    <span>🤝 Grassroots Organization</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              {/* Quick Stats */}
              <Card className="bg-gray-900 text-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg font-bold">By The Numbers</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Cities Involved</span>
                    <span className="font-bold text-red-400">5+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Days of Protests</span>
                    <span className="font-bold text-red-400">3+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Social Platforms</span>
                    <span className="font-bold text-red-400">Discord, TikTok</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Movement Type</span>
                    <span className="font-bold text-green-400">Peaceful</span>
                  </div>
                </CardContent>
              </Card>

              {/* Key Demands */}
              <Card className="bg-red-50 border-red-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-red-800">Key Demands</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-red-600">•</span>
                    <span className="text-red-800">Healthcare over stadiums</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-red-600">•</span>
                    <span className="text-red-800">Education funding priority</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-red-600">•</span>
                    <span className="text-red-800">Youth job creation</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-red-600">•</span>
                    <span className="text-red-800">Government transparency</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - News Style */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-1 w-12 bg-red-600"></div>
              <span className="text-red-400 font-semibold text-sm tracking-wider uppercase">Stay Informed</span>
              <div className="h-1 w-12 bg-red-600"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Follow the Story</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get the latest updates on Morocco's youth movement and their fight for healthcare and education reform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button asChild size="lg" variant="default">
                <Link href="/timeline" className="flex items-center gap-2">
                  <span className="text-lg">📺</span>
                  <span>Latest Updates</span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
                <Link href="/demands" className="flex items-center gap-2">
                  <span className="text-lg">📋</span>
                  <span>Full Demands</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
