import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Phone, Mail, MapPin, Shield, Heart } from "lucide-react"

interface Resource {
  id: string
  name: string
  type: 'organization' | 'legal' | 'media' | 'guide'
  description: string
  contact?: {
    phone?: string
    email?: string
    website?: string
    address?: string
  }
  tags: string[]
  emergency?: boolean
}

const resources: Resource[] = [
  {
    id: "amdh",
    name: "Moroccan Association for Human Rights (AMDH)",
    type: "organization",
    description: "Leading human rights organization providing legal aid, monitoring, and advocacy for protesters and human rights violations.",
    contact: {
      phone: "+212-537-262-626",
      email: "contact@amdh.org.ma",
      website: "https://amdh.org.ma",
      address: "Rabat, Morocco"
    },
    tags: ["Legal Aid", "Monitoring", "Advocacy"],
    emergency: true
  },
  {
    id: "cndh",
    name: "National Human Rights Council (CNDH)",
    type: "organization",
    description: "Official Moroccan institution for the protection and promotion of human rights, with regional offices nationwide.",
    contact: {
      phone: "+212-537-681-600",
      website: "https://cndh.org.ma",
      address: "Rabat, Morocco"
    },
    tags: ["Government", "Protection", "Regional Offices"]
  },
  {
    id: "amnesty",
    name: "Amnesty International Morocco",
    type: "organization",
    description: "International human rights organization with a strong presence in Morocco, focusing on prisoners of conscience and freedom of expression.",
    contact: {
      website: "https://www.amnesty.org/en/countries/middle-east-and-north-africa/morocco/",
      address: "Rabat, Morocco"
    },
    tags: ["International", "Prisoners", "Expression"]
  },
  {
    id: "hrw",
    name: "Human Rights Watch (MENA)",
    type: "organization",
    description: "International organization monitoring and reporting on human rights violations in Morocco and the region.",
    contact: {
      website: "https://www.hrw.org/middle-east/north-africa/morocco/western-sahara"
    },
    tags: ["International", "Monitoring", "Reports"]
  },
  {
    id: "benali-law",
    name: "Dr. Sarah Benali - Human Rights Lawyer",
    type: "legal",
    description: "Specialized in human rights law, protest rights, and provides free consultations for protesters and activists.",
    contact: {
      phone: "+212-522-123-456",
      email: "sarah@benalilaw.ma",
      address: "Casablanca, Morocco"
    },
    tags: ["Legal Aid", "Free Consultation", "Protests"],
    emergency: true
  },
  {
    id: "rabat-law-clinic",
    name: "Rabat Legal Aid Clinic",
    type: "legal",
    description: "Free legal services for protesters, detainees, and those facing human rights violations.",
    contact: {
      phone: "+212-537-777-888",
      email: "info@rabatlegal.ma",
      address: "Rabat, Morocco"
    },
    tags: ["Free Legal Aid", "Detainees", "Protests"]
  },
  {
    id: "morocco-news",
    name: "Independent Moroccan Media Outlets",
    type: "media",
    description: "Collection of independent news sources covering protests, human rights, and social movements in Morocco.",
    contact: {
      website: "https://www.moroccoworldnews.com",
      address: "Morocco"
    },
    tags: ["News", "Independent", "Social Media"]
  },
  {
    id: "protest-guide",
    name: "Peaceful Protest Guide",
    type: "guide",
    description: "Comprehensive guide on organizing and participating in peaceful protests, understanding your rights, and staying safe.",
    contact: {
      website: "#"
    },
    tags: ["Guide", "Peaceful", "Rights", "Safety"]
  },
  {
    id: "civic-rights",
    name: "Know Your Civic Rights",
    type: "guide",
    description: "Essential information about freedom of assembly, expression, and other fundamental rights in Morocco.",
    contact: {
      website: "#"
    },
    tags: ["Rights", "Assembly", "Expression", "Legal"]
  },
  {
    id: "emergency-contacts",
    name: "Emergency Contact Sheet",
    type: "guide",
    description: "Printable emergency contact list with lawyers, organizations, and hotlines for protesters.",
    contact: {
      website: "#"
    },
    tags: ["Emergency", "Contacts", "Printable", "Offline"]
  }
]

const getResourceIcon = (type: string) => {
  switch (type) {
    case 'organization':
      return '🏛️'
    case 'legal':
      return '⚖️'
    case 'media':
      return '📰'
    case 'guide':
      return '📖'
    default:
      return '📍'
  }
}

const getTypeColor = (type: string) => {
  switch (type) {
    case 'organization':
      return 'bg-blue-100 text-blue-800'
    case 'legal':
      return 'bg-green-100 text-green-800'
    case 'media':
      return 'bg-purple-100 text-purple-800'
    case 'guide':
      return 'bg-orange-100 text-orange-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

export default function ResourcesPage() {
  const organizations = resources.filter(r => r.type === 'organization')
  const legal = resources.filter(r => r.type === 'legal')
  const media = resources.filter(r => r.type === 'media')
  const guides = resources.filter(r => r.type === 'guide')

  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Resources & Support
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Essential resources for protesters, activists, and anyone exercising their civic rights.
          All information promotes peaceful, lawful action and human rights protection.
        </p>
      </div>

      {/* Emergency Notice */}
      <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">🚨</span>
          <h3 className="text-lg font-semibold text-red-800">Emergency Contacts</h3>
        </div>
        <p className="text-red-700 text-sm">
          If you're in immediate danger or need urgent legal assistance, contact these organizations immediately.
          Keep this information accessible during protests.
        </p>
      </div>

      {/* Resources Sections */}
      <div className="space-y-12">

        {/* Human Rights Organizations */}
        <section>
          <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">🏛️</span>
            Human Rights Organizations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {organizations.map((resource) => (
              <Card key={resource.id} className={`shadow-sm ${resource.emergency ? 'ring-2 ring-red-200' : ''}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{getResourceIcon(resource.type)}</span>
                      <div>
                        <CardTitle className="text-lg">{resource.name}</CardTitle>
                        <Badge className={`text-xs mt-1 ${getTypeColor(resource.type)}`}>
                          {resource.type}
                        </Badge>
                      </div>
                    </div>
                    {resource.emergency && (
                      <Badge variant="destructive" className="text-xs">
                        Emergency
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    {resource.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex flex-wrap gap-1">
                      {resource.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {resource.contact && (
                    <div className="space-y-2 text-sm">
                      {resource.contact.phone && (
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-gray-500" />
                          <a href={`tel:${resource.contact.phone}`} className="text-blue-600 hover:underline">
                            {resource.contact.phone}
                          </a>
                        </div>
                      )}
                      {resource.contact.email && (
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-gray-500" />
                          <a href={`mailto:${resource.contact.email}`} className="text-blue-600 hover:underline">
                            {resource.contact.email}
                          </a>
                        </div>
                      )}
                      {resource.contact.website && (
                        <div className="flex items-center gap-2">
                          <ExternalLink className="h-4 w-4 text-gray-500" />
                          <a
                            href={resource.contact.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            Visit Website
                          </a>
                        </div>
                      )}
                      {resource.contact.address && (
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-600">{resource.contact.address}</span>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Legal Aid */}
        <section>
          <h2 className="text-2xl font-bold text-red-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">⚖️</span>
            Legal Aid & Lawyers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {legal.map((resource) => (
              <Card key={resource.id} className={`shadow-sm ${resource.emergency ? 'ring-2 ring-red-200' : ''}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{getResourceIcon(resource.type)}</span>
                      <div>
                        <CardTitle className="text-lg">{resource.name}</CardTitle>
                        <Badge className={`text-xs mt-1 ${getTypeColor(resource.type)}`}>
                          {resource.type}
                        </Badge>
                      </div>
                    </div>
                    {resource.emergency && (
                      <Badge variant="destructive" className="text-xs">
                        Emergency
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    {resource.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex flex-wrap gap-1">
                      {resource.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {resource.contact && (
                    <div className="space-y-2 text-sm">
                      {resource.contact.phone && (
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-gray-500" />
                          <a href={`tel:${resource.contact.phone}`} className="text-blue-600 hover:underline">
                            {resource.contact.phone}
                          </a>
                        </div>
                      )}
                      {resource.contact.email && (
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-gray-500" />
                          <a href={`mailto:${resource.contact.email}`} className="text-blue-600 hover:underline">
                            {resource.contact.email}
                          </a>
                        </div>
                      )}
                      {resource.contact.website && (
                        <div className="flex items-center gap-2">
                          <ExternalLink className="h-4 w-4 text-gray-500" />
                          <a
                            href={resource.contact.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            Visit Website
                          </a>
                        </div>
                      )}
                      {resource.contact.address && (
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-600">{resource.contact.address}</span>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Media & References */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
            <span className="text-3xl">📰</span>
            Media References
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {media.map((resource) => (
              <Card key={resource.id} className="shadow-sm">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{getResourceIcon(resource.type)}</span>
                    <div>
                      <CardTitle className="text-lg">{resource.name}</CardTitle>
                      <Badge className={`text-xs mt-1 ${getTypeColor(resource.type)}`}>
                        {resource.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    {resource.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex flex-wrap gap-1">
                      {resource.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {resource.contact && (
                    <div className="space-y-2 text-sm">
                      {resource.contact.website && (
                        <div className="flex items-center gap-2">
                          <ExternalLink className="h-4 w-4 text-gray-500" />
                          <a
                            href={resource.contact.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            Visit Website
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Guides */}
        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
            <span className="text-3xl">📖</span>
            Guides & Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guides.map((resource) => (
              <Card key={resource.id} className="shadow-sm">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{getResourceIcon(resource.type)}</span>
                    <div>
                      <CardTitle className="text-lg">{resource.name}</CardTitle>
                      <Badge className={`text-xs mt-1 ${getTypeColor(resource.type)}`}>
                        {resource.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    {resource.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex flex-wrap gap-1">
                      {resource.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Access Guide
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* Important Notice */}
      <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex items-start gap-3">
          <Shield className="h-6 w-6 text-blue-600 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Important Notice</h3>
            <p className="text-blue-800 text-sm leading-relaxed">
              All information provided here promotes <strong>peaceful, lawful action</strong> and respect for human rights.
              We encourage protesters to know their rights, document incidents peacefully, and seek legal counsel when needed.
              Violence and unlawful behavior harm our cause and the community.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
