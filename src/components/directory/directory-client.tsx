"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactCard } from "./contact-card"
import { FilterBar } from "./filter-bar"
import { Search, MapPin, Phone, Mail, ExternalLink, Clock, Shield } from "lucide-react"

interface Contact {
  id: string
  name: string
  nameAr?: string
  nameFr?: string
  role: string
  category: {
    id: string
    name: string
    nameAr?: string
    nameFr?: string
    color?: string
  }
  location: {
    id: string
    name: string
    nameAr?: string
    nameFr?: string
    region?: string
  }
  organization?: string
  phone?: string
  email?: string
  website?: string
  languages: string[]
  description?: string
  notes?: string
  isVerified: boolean
  isAvailable: boolean
  emergency: boolean
}

export function DirectoryClient() {
  const searchParams = useSearchParams()
  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState(searchParams?.get("q") || "")
  const [selectedCategory, setSelectedCategory] = useState(searchParams?.get("category") || "all")
  const [selectedLocation, setSelectedLocation] = useState(searchParams?.get("location") || "all")
  const [selectedLanguage, setSelectedLanguage] = useState(searchParams?.get("language") || "all")

  // Mock data for development - replace with API call
  useEffect(() => {
    const fetchContacts = async () => {
      // Simulate API call
      setTimeout(() => {
        setContacts([
          {
            id: "1",
            name: "Moroccan Association for Human Rights",
            nameAr: "الجمعية المغربية لحقوق الإنسان",
            nameFr: "Association Marocaine des Droits Humains",
            role: "NGO",
            category: {
              id: "ngo",
              name: "NGO",
              nameAr: "منظمة غير حكومية",
              nameFr: "ONG",
              color: "#3b82f6"
            },
            location: {
              id: "rabat",
              name: "Rabat",
              nameAr: "الرباط",
              nameFr: "Rabat",
              region: "Rabat-Salé-Kénitra"
            },
            organization: "AMDH",
            phone: "+212-537-262-626",
            email: "contact@amdh.org.ma",
            website: "https://amdh.org.ma",
            languages: ["ar", "fr"],
            description: "Leading human rights organization in Morocco",
            notes: "Provides legal aid for protesters and human rights violations",
            isVerified: true,
            isAvailable: true,
            emergency: false
          },
          {
            id: "2",
            name: "Dr. Sarah Benali",
            nameAr: "د. سارة بن علي",
            role: "LAWYER",
            category: {
              id: "lawyer",
              name: "Lawyer",
              nameAr: "محامي",
              nameFr: "Avocat",
              color: "#10b981"
            },
            location: {
              id: "casablanca",
              name: "Casablanca",
              nameAr: "الدار البيضاء",
              nameFr: "Casablanca",
              region: "Casablanca-Settat"
            },
            organization: "Benali Law Firm",
            phone: "+212-522-123-456",
            email: "sarah@benalilaw.ma",
            languages: ["ar", "fr", "en"],
            description: "Specialized in human rights and protest law",
            notes: "Offers free consultations for human rights cases",
            isVerified: true,
            isAvailable: true,
            emergency: true
          },
          {
            id: "3",
            name: "Casablanca General Hospital",
            nameAr: "مستشفى الدار البيضاء العام",
            nameFr: "Hôpital Général de Casablanca",
            role: "MEDICAL_CENTER",
            category: {
              id: "medical",
              name: "Medical Center",
              nameAr: "مركز طبي",
              nameFr: "Centre Médical",
              color: "#ef4444"
            },
            location: {
              id: "casablanca",
              name: "Casablanca",
              nameAr: "الدار البيضاء",
              nameFr: "Casablanca",
              region: "Casablanca-Settat"
            },
            phone: "+212-522-911",
            email: "emergency@chuc.ma",
            website: "https://chuc.ma",
            languages: ["ar", "fr"],
            description: "Emergency medical services and trauma care",
            notes: "24/7 emergency room for protesters and injured persons",
            isVerified: true,
            isAvailable: true,
            emergency: true
          }
        ])
        setLoading(false)
      }, 1000)
    }

    fetchContacts()
  }, [])

  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = searchQuery === "" ||
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.nameAr?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.nameFr?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.organization?.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = selectedCategory === "all" || contact.category.id === selectedCategory
    const matchesLocation = selectedLocation === "all" || contact.location.id === selectedLocation
    const matchesLanguage = selectedLanguage === "all" || contact.languages.includes(selectedLanguage)

    return matchesSearch && matchesCategory && matchesLocation && matchesLanguage
  })

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Human Rights Directory</h1>
          <p className="text-muted-foreground">
            Find trusted organizations, lawyers, medical support, and government contacts
          </p>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Find Help
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Search by name, organization, or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="ngo">NGOs</SelectItem>
                  <SelectItem value="lawyer">Lawyers</SelectItem>
                  <SelectItem value="doctor">Doctors</SelectItem>
                  <SelectItem value="medical">Medical Centers</SelectItem>
                  <SelectItem value="institution">Government</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="rabat">Rabat</SelectItem>
                  <SelectItem value="casablanca">Casablanca</SelectItem>
                  <SelectItem value="fes">Fes</SelectItem>
                  <SelectItem value="tangier">Tangier</SelectItem>
                  <SelectItem value="marrakech">Marrakech</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Languages</SelectItem>
                  <SelectItem value="ar">Arabic</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">
              {loading ? "Loading..." : `${filteredContacts.length} contacts found`}
            </p>
            <Button variant="outline" size="sm">
              Export Results
            </Button>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <CardHeader>
                    <div className="h-4 bg-muted rounded w-3/4"></div>
                    <div className="h-3 bg-muted rounded w-1/2"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="h-3 bg-muted rounded"></div>
                      <div className="h-3 bg-muted rounded w-2/3"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredContacts.map((contact) => (
                <ContactCard key={contact.id} contact={contact} />
              ))}
            </div>
          )}

          {filteredContacts.length === 0 && !loading && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No contacts found matching your criteria.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("all")
                  setSelectedLocation("all")
                  setSelectedLanguage("all")
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
