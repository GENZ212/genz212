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
    date: "September 27, 2025",
    title: "Nationwide Protests Begin Across 11 Cities",
    description: "GenZ212 and Moroccan Youth Voice organize coordinated demonstrations across at least 11 major cities via Discord, TikTok, and Instagram. Protesters demand urgent reforms in healthcare and education, criticizing government spending on World Cup infrastructure while public services deteriorate. The movement, largely leaderless and organized through social media, marks some of Morocco's largest antigovernment rallies in years.",
    type: "protest",
    locations: ["Rabat", "Casablanca", "Marrakesh", "Agadir", "Tangier", "Oujda", "Fes", "Meknes", "Kenitra", "Tetouan", "Safi"],
    impact: "Key slogans: 'We want hospitals, not stadiums' and 'We don't want the World Cup; we want healthcare' – Demonstrates widespread youth frustration with government priorities"
  },
  {
    date: "September 28, 2025",
    title: "Heavy Police Response & Mass Arrests",
    description: "Protests continue for a second day, met with heavy security presence across all cities. Authorities report nearly 200 arrests nationwide. Security forces delete protest videos from participants' phones and prevent media coverage. In Rabat, plainclothes officers detain individuals attempting to speak to journalists.",
    type: "detention",
    locations: ["Rabat", "Casablanca", "Marrakesh", "Agadir", "Tangier", "Oujda", "Fes", "Meknes", "Kenitra", "Tetouan", "Safi"],
    impact: "Suppression of documentation and evidence of peaceful protests – Nearly 200 arrests reported by authorities"
  },
  {
    date: "September 29, 2025",
    title: "Protests Escalate with Violence in Oujda",
    description: "Demonstrations persist for a third consecutive day, turning violent in Oujda where protesters throw stones at security forces. The movement gains momentum as youth unemployment reaches 35.8%. Child protection advocate Najat Anouar is briefly arrested while investigating claims of detained minors. International media coverage intensifies.",
    type: "protest",
    locations: ["Oujda", "Rabat", "Casablanca", "Marrakesh", "Agadir", "Tangier"],
    impact: "First reported violence highlights growing frustration – International attention focuses on youth economic challenges and deteriorating public services"
  },
  {
    date: "September 29, 2025",
    title: "Healthcare Crisis Sparks Outrage",
    description: "Recent maternal health crisis in Agadir, where eight women died during childbirth due to understaffing and lack of hospital resources, intensifies public outrage. Protesters highlight the deteriorating state of public hospitals, overcrowded conditions, and outdated medical equipment as symbols of government neglect.",
    type: "development",
    locations: ["Agadir"],
    impact: "Maternal deaths become rallying point for healthcare reform demands – Exposes critical failures in public health system"
  },
  {
    date: "September 30, 2025",
    title: "GenZ212 Announces Continued Mobilization",
    description: "Despite government crackdowns and arrests, GenZ212 declares intentions to continue protests indefinitely. The movement emphasizes its peaceful nature while maintaining pressure for systemic reforms. Leaders vow that 'protesting is the only way to win our rights' as the movement signals no end in sight.",
    type: "announcement",
    impact: "Demonstrates resilience and long-term commitment to sustained activism – Movement evolves into broader challenge to government priorities"
  },
  {
    date: "September 30, 2025",
    title: "Education System Under Fire",
    description: "Demonstrators demand comprehensive education reforms addressing overcrowded classrooms, outdated curricula, and lack of resources. Students and young professionals highlight how poor education quality contributes to high unemployment and limited economic opportunities for Moroccan youth.",
    type: "development",
    impact: "Education emerges as core demand alongside healthcare – Links poor schooling to broader economic challenges facing young Moroccans"
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
            Youth-led protests across 11+ cities demand urgent healthcare and education reforms amid deteriorating public services and government spending on World Cup infrastructure
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
              The GenZ212 movement maintains its peaceful resistance despite government crackdowns and nearly 200 arrests.
              Digital organizing through Discord, TikTok, and Instagram continues as youth activists demand
              urgent healthcare and education reforms. With youth unemployment at 35.8% and recent maternal health
              crises exposing critical failures in public hospitals, protesters vow continued mobilization,
              declaring &quot;protesting is the only way to win our rights.&quot;
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
