import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function DemandsPage() {

  return (
    <div className="min-h-screen bg-white">
      {/* CNN-Style Header */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-red-600 px-4 py-2 rounded">
              <span className="font-bold text-sm tracking-wider">DEMANDS</span>
            </div>
            <div className="h-0.5 w-16 bg-red-600"></div>
            <span className="text-red-400 font-semibold text-sm tracking-wider uppercase">Policy Platform</span>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Our Detailed Demands
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl leading-relaxed">
              Core demands prioritizing healthcare and education over sports infrastructure. We want hospitals, not stadiums.
            </p>
            
            {/* Key Stats */}
            <div className="flex items-center gap-4 bg-red-600/20 border border-red-600/30 rounded-lg p-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-red-400 font-semibold text-sm">URGENT</span>
              </div>
              <p className="text-white text-sm">
                Nationwide movement demanding government reallocate World Cup spending to essential services
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto py-16 px-4 max-w-7xl">

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Social Demands Column */}
        <div className="space-y-8">
          {/* Section Header */}
          <div className="text-center lg:text-left">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-1 w-12 bg-green-600"></div>
              <h2 className="text-3xl font-bold text-green-800 uppercase tracking-wide">Social Demands</h2>
            </div>
            <p className="text-gray-600 text-lg">
              Essential services that directly impact citizens' daily lives and well-being
            </p>
          </div>

          {/* Education Section */}
          <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-green-500 to-green-600"></div>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-3">
                <Badge className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1">
                  PRIORITY 1
                </Badge>
                <span className="text-xs text-gray-500">Education Reform</span>
              </div>
              <CardTitle className="text-2xl font-bold text-green-800 flex items-center gap-3">
                <span className="text-3xl">🎓</span>
                Education System Overhaul
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-green-50 transition-colors">
                  <span className="text-green-600 mt-1 font-bold">•</span>
                  <span className="leading-relaxed">Free and high-quality education for all citizens</span>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-green-50 transition-colors">
                  <span className="text-green-600 mt-1 font-bold">•</span>
                  <span className="leading-relaxed">Hiring enough teachers to reduce overcrowding in classrooms</span>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-green-50 transition-colors">
                  <span className="text-green-600 mt-1 font-bold">•</span>
                  <span className="leading-relaxed">Modernizing curricula to match the times and digitizing education</span>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-green-50 transition-colors">
                  <span className="text-green-600 mt-1 font-bold">•</span>
                  <span className="leading-relaxed">Building and equipping schools, especially in rural/remote areas</span>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-green-50 transition-colors">
                  <span className="text-green-600 mt-1 font-bold">•</span>
                  <span className="leading-relaxed">Supporting school transportation infrastructure</span>
                </li>
                <li className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 mt-4">
                  <div className="flex items-start gap-3">
                    <span className="text-red-600 mt-1 font-bold">🔥</span>
                    <div>
                      <div className="font-bold text-red-800 mb-1">CRITICAL REFORM</div>
                      <span className="text-red-800 leading-relaxed">
                        Adopting <strong>English</strong> as the second language instead of French to prepare youth for global opportunities
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Public Health Section */}
          <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-red-500 to-red-600"></div>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-3">
                <Badge className="bg-red-100 text-red-800 text-xs font-semibold px-3 py-1">
                  PRIORITY 1
                </Badge>
                <span className="text-xs text-gray-500">Healthcare Crisis</span>
              </div>
              <CardTitle className="text-2xl font-bold text-red-800 flex items-center gap-3">
                <span className="text-3xl">🏥</span>
                Public Health Emergency
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-red-50 transition-colors">
                  <span className="text-red-600 mt-1 font-bold">•</span>
                  <span className="leading-relaxed">Increase the number of doctors per 1000 citizens to international standards</span>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-red-50 transition-colors">
                  <span className="text-red-600 mt-1 font-bold">•</span>
                  <span className="leading-relaxed">Provide essential medical supplies to all healthcare facilities</span>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-red-50 transition-colors">
                  <span className="text-red-600 mt-1 font-bold">•</span>
                  <span className="leading-relaxed">Support local pharmaceutical production to reduce medicine prices</span>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-red-50 transition-colors">
                  <span className="text-red-600 mt-1 font-bold">•</span>
                  <span className="leading-relaxed">Improve ambulance and rural medical transport services</span>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-red-50 transition-colors">
                  <span className="text-red-600 mt-1 font-bold">•</span>
                  <span className="leading-relaxed">Digitize medical appointments to reduce waiting times</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Dignified Living & Human Rights Section */}
          <Card className="shadow-sm border-black">
            <CardHeader>
              <CardTitle className="text-xl text-black flex items-center gap-2">
                <span className="text-2xl">🏠</span>
                Dignified Living & Human Rights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <span>Affordable, decent housing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <span>Improve public transport</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <span>Reduce marginalization of rural/semi-rural areas and break isolation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <span>Provide safe drinking water that meets international standards across the kingdom</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <span>Prioritize repairing and maintaining infrastructure</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Economic Demands Column */}
        <div className="space-y-8">
          {/* Section Header */}
          <div className="text-center lg:text-left">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-1 w-12 bg-red-600"></div>
              <h2 className="text-3xl font-bold text-red-800 uppercase tracking-wide">Economic Demands</h2>
            </div>
            <p className="text-gray-600 text-lg">
              Economic reforms to create opportunities and improve living standards for all Moroccans
            </p>
          </div>

          {/* Economic Demands Section */}
          <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-red-500 to-red-600"></div>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-3">
                <Badge className="bg-red-100 text-red-800 text-xs font-semibold px-3 py-1">
                  PRIORITY 1
                </Badge>
                <span className="text-xs text-gray-500">Economic Justice</span>
              </div>
              <CardTitle className="text-2xl font-bold text-red-800 flex items-center gap-3">
                <span className="text-3xl">📈</span>
                Economic Reform & Justice
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-red-50 transition-colors">
                  <span className="text-red-600 mt-1 font-bold">•</span>
                  <span className="leading-relaxed">Reduce prices and support essential goods for families</span>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-red-50 transition-colors">
                  <span className="text-red-600 mt-1 font-bold">•</span>
                  <span className="leading-relaxed">Provide jobs for youth and reduce unemployment rates</span>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-red-50 transition-colors">
                  <span className="text-red-600 mt-1 font-bold">•</span>
                  <span className="leading-relaxed">Improve salaries and pensions to match living costs</span>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-red-50 transition-colors">
                  <span className="text-red-600 mt-1 font-bold">•</span>
                  <span className="leading-relaxed">Fight monopolies and encourage fair competition</span>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-red-50 transition-colors">
                  <span className="text-red-600 mt-1 font-bold">•</span>
                  <span className="leading-relaxed">Facilitate small and medium enterprises (SMEs)</span>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-red-50 transition-colors">
                  <span className="text-red-600 mt-1 font-bold">•</span>
                  <span className="leading-relaxed">Strengthen oversight of large/multinational corporations</span>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-red-50 transition-colors">
                  <span className="text-red-600 mt-1 font-bold">•</span>
                  <span className="leading-relaxed">Limit excessive privatization of public services</span>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-red-50 transition-colors">
                  <span className="text-red-600 mt-1 font-bold">•</span>
                  <span className="leading-relaxed">Invest in Moroccan companies and local economy</span>
                </li>
                <li className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 mt-4">
                  <div className="flex items-start gap-3">
                    <span className="text-red-600 mt-1 font-bold">🏟️</span>
                    <div>
                      <div className="font-bold text-red-800 mb-1">URGENT PRIORITY</div>
                      <span className="text-red-800 leading-relaxed">
                        Stop spending billions on World Cup stadiums while hospitals lack basic supplies
                      </span>
                    </div>
                  </div>
                </li>
                <li className="bg-black p-4 rounded-lg border-l-4 border-black mt-4">
                  <div className="flex items-start gap-3">
                    <span className="text-white mt-1 font-bold">💰</span>
                    <div>
                      <div className="font-bold text-white mb-1">DEBT CRISIS</div>
                      <span className="text-white leading-relaxed">
                        Prioritize repayment of World Bank loans to reduce national debt burden
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Human Rights Section */}
          <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-black to-gray-800"></div>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-3">
                <Badge className="bg-gray-100 text-black text-xs font-semibold px-3 py-1">
                  ESSENTIAL
                </Badge>
                <span className="text-xs text-gray-500">Human Dignity</span>
              </div>
              <CardTitle className="text-2xl font-bold text-black flex items-center gap-3">
                <span className="text-3xl">🏠</span>
                Dignified Living & Human Rights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-black mt-1 font-bold">•</span>
                  <span className="leading-relaxed">Affordable, decent housing for all families</span>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-black mt-1 font-bold">•</span>
                  <span className="leading-relaxed">Improve public transport infrastructure nationwide</span>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-black mt-1 font-bold">•</span>
                  <span className="leading-relaxed">Reduce marginalization of rural/semi-rural areas and break isolation</span>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-black mt-1 font-bold">•</span>
                  <span className="leading-relaxed">Provide safe drinking water meeting international standards across the kingdom</span>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-black mt-1 font-bold">•</span>
                  <span className="leading-relaxed">Prioritize repairing and maintaining critical infrastructure</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

          {/* Call to Action - CNN Style */}
          <div className="mt-20">
            <Card className="bg-gradient-to-r from-black to-gray-900 text-white shadow-2xl border-0 overflow-hidden">
              <CardContent className="p-12 text-center">
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="h-1 w-16 bg-red-600"></div>
                  <span className="text-red-400 font-semibold text-sm tracking-wider uppercase">Take Action</span>
                  <div className="h-1 w-16 bg-red-600"></div>
                </div>
                
                <h2 className="text-4xl font-bold mb-6">
                  Support These Demands
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  These demands represent the collective voice of the Moroccan people for a more just,
                  equitable, and prosperous society. Join us in advocating for positive change.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-400">8+</div>
                    <div className="text-sm text-gray-400">Cities Involved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">15+</div>
                    <div className="text-sm text-gray-400">Key Demands</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">100%</div>
                    <div className="text-sm text-gray-400">Peaceful</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button variant="default" size="xl" className="flex items-center gap-3">
                    <span className="text-2xl">✊</span>
                    <div className="text-left">
                      <div className="font-bold text-lg">Sign the Petition</div>
                      <div className="text-sm opacity-90">Support our movement</div>
                    </div>
                  </Button>
                  <Button variant="success" size="xl" className="flex items-center gap-3">
                    <span className="text-2xl">📢</span>
                    <div className="text-left">
                      <div className="font-bold text-lg">Share These Demands</div>
                      <div className="text-sm opacity-90">Spread awareness</div>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
  )
}
