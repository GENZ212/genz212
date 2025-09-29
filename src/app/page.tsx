import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center bg-gradient-to-b from-background to-muted/20 px-4">
        <div className="container mx-auto text-center space-y-8 max-w-4xl">
          <div className="space-y-4">
            <Badge variant="outline" className="text-sm">
              🇲🇦 GenZ212 Movement
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-blue-900">
              GenZ212 – Moroccan Youth Voice
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              GenZ212 is a youth-led, independent movement in Morocco. We stand for education, healthcare, dignity, jobs, and a future of fairness and opportunity. Our mission is peaceful, digital-first, and collective.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 bg-blue-600 hover:bg-blue-700">
              <Link href="/demands">
                Our Demands
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8">
              <Link href="/timeline">
                Timeline
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8">
              <Link href="/resources">
                Resources
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center space-y-8 mb-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are the voice of Moroccan youth fighting for a better future. Through peaceful protest,
              digital organizing, and collective action, we demand systemic change across education,
              healthcare, economy, and social justice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎓</span>
                </div>
                <CardTitle className="text-blue-800">Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Free, quality education for all Moroccans with modern curricula and adequate resources
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🏥</span>
                </div>
                <CardTitle className="text-green-800">Healthcare</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Accessible healthcare with more doctors, better facilities, and affordable medicine
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💼</span>
                </div>
                <CardTitle className="text-purple-800">Jobs & Economy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Fair wages, job creation for youth, and economic policies that benefit all Moroccans
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="h-16 w-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🏛️</span>
                </div>
                <CardTitle className="text-orange-800">Dignity & Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Human rights, dignity, and equal opportunities for all citizens regardless of background
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-blue-900">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="h-20 w-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-4xl">✌️</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-800">Peaceful</h3>
                <p className="text-gray-600">
                  We believe in non-violent protest and peaceful dialogue as the path to change
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-4xl">📱</span>
                </div>
                <h3 className="text-xl font-semibold text-green-800">Digital-First</h3>
                <p className="text-gray-600">
                  We use technology and social media to organize, communicate, and mobilize
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="h-20 w-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-4xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-purple-800">Collective</h3>
                <p className="text-gray-600">
                  We work together across regions, backgrounds, and communities for shared goals
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-blue-900">Join the Movement</h2>
            <p className="text-gray-600">
              Be part of the change. Support our demands, participate in our actions, and help build a better Morocco for all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Link href="/demands">
                  Read Our Demands
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <Link href="/timeline">
                  See Our Timeline
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
