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
              🛡️ Human Rights Protection Hub
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Your Rights,
              <span className="text-primary"> Protected</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find trusted human rights organizations, lawyers, medical support, and government contacts
              across Morocco. Get help when you need it most.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/directory">
                Find Help Now
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8">
              <Link href="/reports">
                Report an Issue
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Everything You Need</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive directory of verified contacts and resources for human rights protection in Morocco
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⚖️</span>
                </div>
                <CardTitle>Legal Support</CardTitle>
                <CardDescription>
                  Verified lawyers specializing in human rights and protest law
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Free legal consultations</li>
                  <li>• Emergency legal aid</li>
                  <li>• Court representation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🏥</span>
                </div>
                <CardTitle>Medical & Mental Health</CardTitle>
                <CardDescription>
                  Medical professionals and organizations offering support
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Emergency medical care</li>
                  <li>• Trauma counseling</li>
                  <li>• 24/7 support hotlines</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🏛️</span>
                </div>
                <CardTitle>Government & NGOs</CardTitle>
                <CardDescription>
                  Official institutions and human rights organizations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• CNDH contact points</li>
                  <li>• Ministry of Justice</li>
                  <li>• International NGOs</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <CardTitle>Emergency Access</CardTitle>
                <CardDescription>
                  Quick access to emergency contacts and resources
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• One-tap calling</li>
                  <li>• Offline contact lists</li>
                  <li>• Export to PDF/CSV</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <CardTitle>Smart Search</CardTitle>
                <CardDescription>
                  Find exactly what you need with advanced filtering
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Filter by location</li>
                  <li>• Filter by language</li>
                  <li>• Filter by availability</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <CardTitle>Report & Track</CardTitle>
                <CardDescription>
                  Submit reports and track their progress
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Anonymous reporting</li>
                  <li>• Media attachments</li>
                  <li>• Status tracking</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">Ready to Get Help?</h2>
            <p className="text-muted-foreground">
              Join thousands of people who have found the support they need through our platform.
            </p>
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/directory">
                Browse Directory
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
