import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function DemandsPage() {

  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Our Detailed Demands
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our core demands prioritize healthcare and education over sports infrastructure. We want hospitals, not stadiums.
            </p>
            <div className="mt-6">
              <Badge variant="outline" className="text-sm px-4 py-2 border-green-600 text-green-700">
                🇲🇦 Moroccan People's Movement
              </Badge>
            </div>
          </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Social Demands Column */}
        <div className="space-y-6">
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="text-2xl text-green-800 flex items-center gap-2">
                <span className="text-3xl">👥</span>
                Social Demands
              </CardTitle>
            </CardHeader>
          </Card>

          {/* Education Section */}
          <Card className="shadow-sm border-green-200">
            <CardHeader>
              <CardTitle className="text-xl text-green-700 flex items-center gap-2">
                <span className="text-2xl">🎓</span>
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Free and high-quality education for all</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Hiring enough teachers to reduce overcrowding in classrooms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Modernizing curricula to match the times and digitizing education</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Building and equipping schools, especially in rural/remote areas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Supporting school transportation</span>
                </li>
                <li className="flex items-start gap-3 bg-red-50 p-2 rounded border-l-4 border-red-400">
                  <span className="text-red-600 mt-1">•</span>
                  <span className="font-semibold text-red-800">
                    Adopting <strong>English</strong> as the second language instead of French
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Public Health Section */}
          <Card className="shadow-sm border-red-200">
            <CardHeader>
              <CardTitle className="text-xl text-red-700 flex items-center gap-2">
                <span className="text-2xl">🏥</span>
                Public Health
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Increase the number of doctors per 1000 citizens</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Provide essential medical supplies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Support local pharmaceutical production to reduce prices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Improve ambulance and rural medical transport services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Digitize medical appointments to reduce waiting times</span>
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
        <div className="space-y-6">
          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="text-2xl text-red-800 flex items-center gap-2">
                <span className="text-3xl">💰</span>
                Economic Demands
              </CardTitle>
            </CardHeader>
          </Card>

          {/* Economic Demands Section */}
          <Card className="shadow-sm border-red-200">
            <CardHeader>
              <CardTitle className="text-xl text-red-700 flex items-center gap-2">
                <span className="text-2xl">📈</span>
                Economic Reform
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Reduce prices and support essential goods</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Provide jobs for youth and reduce unemployment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Improve salaries and pensions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Fight monopolies and encourage fair competition</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Facilitate small and medium enterprises (SMEs)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Strengthen oversight of large/multinational corporations (holdings)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Limit excessive privatization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Invest in Moroccan companies</span>
                </li>
                <li className="flex items-start gap-3 bg-red-50 p-2 rounded border-l-4 border-red-400">
                  <span className="text-red-600 mt-1">•</span>
                  <span className="font-semibold text-red-800">
                    Stop spending billions on World Cup stadiums while hospitals lack basic supplies
                  </span>
                </li>
                <li className="flex items-start gap-3 bg-black p-2 rounded border-l-4 border-black">
                  <span className="text-white mt-1">•</span>
                  <span className="font-semibold text-white">
                    Prioritize repayment of World Bank loans
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-green-50 to-red-50 border-green-200">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-black mb-4">
                  Support These Demands
                </h2>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  These demands represent the collective voice of the Moroccan people for a more just,
                  equitable, and prosperous society. Join us in advocating for positive change.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Sign the Petition
                  </Button>
                  <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Share These Demands
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
    </div>
  )
}
