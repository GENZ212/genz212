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

      {/* Top Stories Section - CNN Style */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 w-12 bg-red-600"></div>
            <h2 className="text-2xl font-bold text-black uppercase tracking-wide">Top Stories</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Story 1 - Education */}
            <Card className="bg-white border-l-4 border-green-600 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🎓</span>
                  <Badge className="bg-green-100 text-green-800 text-xs">EDUCATION</Badge>
                </div>
                <CardTitle className="text-lg font-bold text-black leading-tight">
                  Schools Lack Basic Supplies While Stadium Construction Continues
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Students across Morocco face overcrowded classrooms and insufficient resources as billions are allocated to World Cup infrastructure.
                </p>
                <div className="mt-3 text-xs text-gray-500">
                  Updated 2 hours ago
                </div>
              </CardContent>
            </Card>

            {/* Story 2 - Healthcare */}
            <Card className="bg-white border-l-4 border-red-600 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🏥</span>
                  <Badge className="bg-red-100 text-red-800 text-xs">HEALTH</Badge>
                </div>
                <CardTitle className="text-lg font-bold text-black leading-tight">
                  Hospitals Report Critical Shortages Amid Stadium Spending
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Medical facilities struggle with equipment shortages while government prioritizes sports infrastructure investments.
                </p>
                <div className="mt-3 text-xs text-gray-500">
                  Updated 3 hours ago
                </div>
              </CardContent>
            </Card>

            {/* Story 3 - Protests */}
            <Card className="bg-white border-l-4 border-black shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">✊</span>
                  <Badge className="bg-gray-100 text-black text-xs">PROTESTS</Badge>
                </div>
                <CardTitle className="text-lg font-bold text-black leading-tight">
                  Youth Activists Organize Through Social Media Platforms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm leading-relaxed">
                  GenZ212 movement uses Discord and TikTok to coordinate peaceful demonstrations across major cities.
                </p>
                <div className="mt-3 text-xs text-gray-500">
                  Updated 1 hour ago
                </div>
              </CardContent>
            </Card>

            {/* Story 4 - Government Response */}
            <Card className="bg-white border-l-4 border-green-600 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🏛️</span>
                  <Badge className="bg-green-100 text-green-800 text-xs">POLITICS</Badge>
                </div>
                <CardTitle className="text-lg font-bold text-black leading-tight">
                  Government Faces Growing Pressure to Reallocate Spending
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Officials acknowledge youth concerns as protests gain international media attention and support.
                </p>
                <div className="mt-3 text-xs text-gray-500">
                  Updated 4 hours ago
                </div>
              </CardContent>
            </Card>
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
