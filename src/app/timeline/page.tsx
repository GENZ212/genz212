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
    date: "September 27–28, 2025",
    title: "Nationwide Protests Begin",
    description: "GenZ212 and Moroccan Youth Voice organize coordinated demonstrations across major cities via Discord and TikTok. Protesters demand improved healthcare and education, criticizing government spending on World Cup stadiums over essential services.",
    type: "protest",
    locations: ["Rabat", "Casablanca", "Marrakesh", "Agadir", "Tangier"],
    impact: "Key slogans: 'We want hospitals, not stadiums' and 'We don't want the World Cup; we want healthcare'"
  },
  {
    date: "September 27–28, 2025",
    title: "Heavy Police Response & Arrests",
    description: "Protests met with heavy police presence across all cities. Dozens of protesters arrested, with many later released. Security forces reportedly deleted protest videos from participants' phones.",
    type: "detention",
    locations: ["Rabat", "Casablanca", "Marrakesh", "Agadir", "Tangier"],
    impact: "Suppression of documentation and evidence of peaceful protests"
  },
  {
    date: "September 29, 2025",
    title: "Movement Declares Continued Mobilization",
    description: "Despite arrests, GenZ212 declares intentions to continue nationwide demonstrations. Movement emphasizes its peaceful and leaderless nature while maintaining pressure for reforms.",
    type: "development",
    impact: "Demonstrates resilience and commitment to sustained activism"
  },
  {
    date: "September 29, 2025",
    title: "International Media Coverage",
    description: "The movement gains international attention, with coverage from major news outlets highlighting youth frustration over limited economic opportunities and deteriorating public services.",
    type: "development",
    impact: "Global awareness of Morocco's youth movement and their demands for government priority reforms"
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
      return 'bg-red-100 text-red-800 border-red-200'
    case 'announcement':
      return 'bg-green-100 text-green-800 border-green-200'
    case 'detention':
      return 'bg-black text-white border-black'
    case 'development':
      return 'bg-green-100 text-green-800 border-green-200'
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200'
  }
}

export default function TimelinePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* CNN-style Header */}
      <div className="bg-black text-white py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-1 w-12 bg-red-600"></div>
            <span className="text-red-600 font-semibold text-sm tracking-wider uppercase">Breaking News Timeline</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            GenZ212 Morocco Protests
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl">
            Nationwide demonstrations demand healthcare and education funding over World Cup infrastructure spending
          </p>
        </div>
      </div>

      {/* Timeline Content */}
      <div className="container mx-auto px-4 max-w-6xl py-12">
        <div className="space-y-0">
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative">
              {/* Timeline connector line */}
              {index < timelineEvents.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-full bg-gray-200 z-0"></div>
              )}
              
              {/* Event container */}
              <div className="relative z-10 flex gap-8 pb-12">
                {/* Date and icon */}
                <div className="flex-shrink-0 w-24">
                  <div className="sticky top-8">
                    {/* Timeline dot */}
                    <div className={`w-4 h-4 rounded-full border-4 border-white shadow-lg mb-3 ${
                      event.type === 'protest' ? 'bg-red-600' : 
                      event.type === 'detention' ? 'bg-black' : 'bg-green-600'
                    }`}></div>
                    <div className="text-sm font-semibold text-gray-600 leading-tight">
                      {event.date}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    {/* Event type badge */}
                    <div className="px-6 pt-6 pb-2">
                      <div className="flex items-center justify-between mb-4">
                        <Badge className={`text-xs font-semibold px-3 py-1 ${
                          event.type === 'protest' ? 'bg-red-100 text-red-800 border-red-200' :
                          event.type === 'detention' ? 'bg-black text-white' :
                          'bg-green-100 text-green-800 border-green-200'
                        }`}>
                          {getEventIcon(event.type)} {event.type.toUpperCase()}
                        </Badge>
                      </div>
                      
                      {/* Title */}
                      <h2 className="text-2xl font-bold text-black mb-4 leading-tight">
                        {event.title}
                      </h2>
                    </div>

                    {/* Description */}
                    <div className="px-6 pb-6">
                      <p className="text-gray-800 text-lg leading-relaxed mb-6">
                        {event.description}
                      </p>

                      {/* Locations */}
                      {event.locations && (
                        <div className="mb-6">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-lg">📍</span>
                            <span className="font-semibold text-gray-700 text-sm uppercase tracking-wide">Affected Cities</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {event.locations.map((location, locIndex) => (
                              <span key={locIndex} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                                {location}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Impact/Quote */}
                      {event.impact && (
                        <div className={`p-4 rounded-lg border-l-4 ${
                          event.type === 'protest' ? 'bg-red-50 border-red-400' :
                          event.type === 'detention' ? 'bg-gray-50 border-black' :
                          'bg-green-50 border-green-400'
                        }`}>
                          <div className="flex items-start gap-3">
                            <span className="text-2xl">💬</span>
                            <div>
                              <p className="font-semibold text-sm text-gray-600 mb-1">KEY IMPACT</p>
                              <p className={`text-sm font-medium italic ${
                                event.type === 'protest' ? 'text-red-800' :
                                event.type === 'detention' ? 'text-black' :
                                'text-green-800'
                              }`}>
                                "{event.impact}"
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ongoing coverage section */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-black text-white rounded-lg overflow-hidden">
          <div className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-1 w-12 bg-red-600"></div>
              <span className="text-red-400 font-semibold text-sm tracking-wider uppercase">Live Coverage</span>
            </div>
            <h3 className="text-3xl font-bold mb-4">Movement Continues</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              The GenZ212 movement maintains its peaceful resistance despite government crackdowns. 
              Digital organizing through Discord and TikTok continues as youth activists demand 
              healthcare and education funding over World Cup infrastructure spending.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-400">Updated in real-time</span>
              </div>
              <div className="text-sm text-gray-500">
                Follow @GenZ212Morocco for latest updates
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
