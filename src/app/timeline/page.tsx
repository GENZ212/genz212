import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface TimelineEvent {
  date: string
  title: string
  description: string
  type: 'protest' | 'announcement' | 'detention' | 'development'
  locations?: string[]
  impact?: string
}

const timelineEvents: TimelineEvent[] = [
  {
    date: "September 2025",
    title: "Movement Launch",
    description: "First national protests announced through Discord and TikTok channels, marking the beginning of the GenZ212 movement.",
    type: "announcement",
    impact: "Digital organizing begins across social platforms"
  },
  {
    date: "September 27–28, 2025",
    title: "National Protests Begin",
    description: "Peaceful demonstrations erupt across major Moroccan cities including Casablanca, Rabat, Marrakech, Fez, Meknes, El Jadida, Agadir, and Tanger.",
    type: "protest",
    locations: ["Casablanca", "Rabat", "Marrakech", "Fez", "Meknes", "El Jadida", "Agadir", "Tanger"],
    impact: "Thousands participate in coordinated nationwide action"
  },
  {
    date: "September 27, 2025",
    title: "Police Response in Casablanca",
    description: "Initial police intervention during Casablanca protests, with reports of detentions and use of force against peaceful demonstrators.",
    type: "detention",
    locations: ["Casablanca"],
    impact: "First major confrontation with authorities"
  },
  {
    date: "September 28, 2025",
    title: "Continued Protests & Government Response",
    description: "Protests continue in multiple cities with increased police presence. Government officials issue statements acknowledging youth concerns.",
    type: "development",
    locations: ["Rabat", "Marrakech", "Agadir"],
    impact: "Movement gains national attention and government acknowledgment"
  },
  {
    date: "October 2025",
    title: "Digital Campaign Expansion",
    description: "Movement expands online presence with coordinated social media campaigns, educational content, and international outreach.",
    type: "development",
    impact: "Global awareness and solidarity increases"
  },
  {
    date: "November 2025",
    title: "First Policy Discussions",
    description: "Initial meetings between movement representatives and government officials to discuss demands and potential reforms.",
    type: "development",
    impact: "Formal dialogue begins between youth and authorities"
  }
]

const getEventIcon = (type: string) => {
  switch (type) {
    case 'protest':
      return '✊'
    case 'announcement':
      return '📢'
    case 'detention':
      return '🚔'
    case 'development':
      return '📈'
    default:
      return '📅'
  }
}

const getEventColor = (type: string) => {
  switch (type) {
    case 'protest':
      return 'bg-blue-100 text-blue-800 border-blue-200'
    case 'announcement':
      return 'bg-green-100 text-green-800 border-green-200'
    case 'detention':
      return 'bg-red-100 text-red-800 border-red-200'
    case 'development':
      return 'bg-purple-100 text-purple-800 border-purple-200'
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200'
  }
}

export default function TimelinePage() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Timeline of Protests & Actions
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Track the evolution of the GenZ212 movement from its digital origins to nationwide action and beyond
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform md:-translate-x-0.5"></div>

        <div className="space-y-8">
          {timelineEvents.map((event, index) => (
            <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Timeline dot */}
              <div className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-white transform md:-translate-x-2 ${getEventColor(event.type).split(' ')[0]}`}></div>

              {/* Content card */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <Card className="shadow-md">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={`${getEventColor(event.type)} text-xs`}>
                        {getEventIcon(event.type)} {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </Badge>
                      <span className="text-sm font-semibold text-gray-600">{event.date}</span>
                    </div>
                    <CardTitle className="text-xl text-blue-900">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {event.description}
                    </p>

                    {event.locations && (
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-gray-600 mb-2">Locations:</p>
                        <div className="flex flex-wrap gap-2">
                          {event.locations.map((location, locIndex) => (
                            <Badge key={locIndex} variant="outline" className="text-xs">
                              {location}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {event.impact && (
                      <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-blue-400">
                        <p className="text-sm font-semibold text-blue-800 mb-1">Impact:</p>
                        <p className="text-sm text-blue-700">{event.impact}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Future events placeholder */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
            <CardContent className="p-8">
              <div className="text-6xl mb-4">📅</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Future Events</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                The GenZ212 movement continues to evolve. Stay tuned for upcoming protests, digital campaigns,
                and community actions. Check back regularly for updates.
              </p>
              <div className="text-sm text-gray-500">
                This timeline will be updated as the movement progresses
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
