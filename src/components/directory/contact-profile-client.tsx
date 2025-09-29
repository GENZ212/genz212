"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  ArrowLeft,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Clock,
  Shield,
  Heart,
  AlertTriangle,
  Calendar,
  Globe,
  Users,
  FileText,
  Download
} from "lucide-react"

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
  address?: string
  languages: string[]
  description?: string
  notes?: string
  isVerified: boolean
  isAvailable: boolean
  availableHours?: string
  emergency: boolean
  socialMedia?: {
    facebook?: string
    twitter?: string
    instagram?: string
    linkedin?: string
  }
  createdAt: string
  updatedAt: string
}

interface ContactProfileClientProps {
  id: string
}

export function ContactProfileClient({ id }: ContactProfileClientProps) {
  const router = useRouter()
  const [contact, setContact] = useState<Contact | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchContact = async () => {
      // Simulate API call - replace with actual API
      setTimeout(() => {
        setContact({
          id,
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
          address: "123 Human Rights Street, Rabat, Morocco",
          languages: ["ar", "fr", "en"],
          description: "The Moroccan Association for Human Rights (AMDH) is a leading non-governmental organization dedicated to the promotion and protection of human rights in Morocco. Founded in 1979, AMDH works to defend civil, political, economic, social, and cultural rights through advocacy, monitoring, and legal assistance.",
          notes: "Provides free legal aid for protesters and human rights violations. Available 24/7 for emergency cases.",
          isVerified: true,
          isAvailable: true,
          availableHours: JSON.stringify({
            monday: "9:00-17:00",
            tuesday: "9:00-17:00",
            wednesday: "9:00-17:00",
            thursday: "9:00-17:00",
            friday: "9:00-16:00",
            saturday: "Closed",
            sunday: "Emergency only"
          }),
          emergency: true,
          socialMedia: {
            facebook: "https://facebook.com/amdhmaroc",
            twitter: "https://twitter.com/amdhmaroc",
            instagram: "https://instagram.com/amdhmaroc"
          },
          createdAt: "2024-01-15T10:00:00Z",
          updatedAt: "2024-09-15T14:30:00Z"
        })
        setLoading(false)
      }, 1000)
    }

    fetchContact()
  }, [id])

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`
  }

  const handleEmail = (email: string) => {
    window.location.href = `mailto:${email}`
  }

  const handleVisit = (website: string) => {
    window.open(website, '_blank')
  }

  const handleSocialMedia = (url: string) => {
    window.open(url, '_blank')
  }

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
  }

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'NGO':
        return '🏛️'
      case 'LAWYER':
        return '⚖️'
      case 'DOCTOR':
        return '👨‍⚕️'
      case 'MEDICAL_CENTER':
        return '🏥'
      case 'INSTITUTION':
        return '🏛️'
      case 'HOTLINE':
        return '📞'
      default:
        return '📍'
    }
  }

  const getLanguageNames = (codes: string[]) => {
    const languages: { [key: string]: string } = {
      'ar': 'العربية (Arabic)',
      'fr': 'Français (French)',
      'en': 'English'
    }
    return codes.map(code => languages[code] || code)
  }

  const formatAvailability = (hoursJson: string) => {
    try {
      const hours = JSON.parse(hoursJson)
      return Object.entries(hours).map(([day, time]) => (
        <div key={day} className="flex justify-between text-sm">
          <span className="capitalize">{day}:</span>
          <span>{time}</span>
        </div>
      ))
    } catch {
      return <p className="text-sm">Hours information not available</p>
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-muted rounded w-1/4"></div>
          <Card>
            <CardHeader>
              <div className="h-6 bg-muted rounded w-1/2"></div>
              <div className="h-4 bg-muted rounded w-1/3"></div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="h-4 bg-muted rounded"></div>
                <div className="h-4 bg-muted rounded w-3/4"></div>
                <div className="h-4 bg-muted rounded w-2/3"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (!contact) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Contact Not Found</h1>
          <p className="text-muted-foreground">The requested contact could not be found.</p>
          <Button asChild>
            <Link href="/directory">Back to Directory</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Button variant="outline" size="sm" asChild>
          <Link href="/directory">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Directory
          </Link>
        </Button>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{contact.name}</h1>
          <div className="flex items-center gap-2 mt-1">
            <Badge
              variant="secondary"
              style={{
                backgroundColor: contact.category.color + '20',
                color: contact.category.color,
                borderColor: contact.category.color + '40'
              }}
            >
              {getRoleIcon(contact.role)} {contact.category.name}
            </Badge>
            {contact.isVerified && (
              <Badge variant="outline">
                <Shield className="h-3 w-3 mr-1" />
                Verified
              </Badge>
            )}
            {contact.emergency && (
              <Badge variant="destructive">
                <AlertTriangle className="h-3 w-3 mr-1" />
                Emergency
              </Badge>
            )}
          </div>
        </div>
        <Button>
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Organization Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Organization</label>
                  <p className="font-semibold">{contact.organization || 'N/A'}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Location</label>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{contact.location.name}</span>
                  </div>
                  {contact.location.region && (
                    <p className="text-sm text-muted-foreground ml-6">{contact.location.region}</p>
                  )}
                </div>
              </div>

              {contact.address && (
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Address</label>
                  <p>{contact.address}</p>
                </div>
              )}

              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">Languages</label>
                <div className="flex flex-wrap gap-2">
                  {getLanguageNames(contact.languages).map((lang, index) => (
                    <Badge key={index} variant="outline">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Description */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Description
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {contact.description || 'No description available.'}
              </p>
            </CardContent>
          </Card>

          {/* Special Notes */}
          {contact.notes && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-amber-500" />
                  Special Notes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-amber-800">{contact.notes}</p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Availability */}
          {contact.availableHours && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Availability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {formatAvailability(contact.availableHours)}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Social Media */}
          {contact.socialMedia && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Social Media
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {contact.socialMedia.facebook && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleSocialMedia(contact.socialMedia!.facebook!)}
                    >
                      Facebook
                    </Button>
                  )}
                  {contact.socialMedia.twitter && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleSocialMedia(contact.socialMedia!.twitter!)}
                    >
                      Twitter
                    </Button>
                  )}
                  {contact.socialMedia.instagram && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleSocialMedia(contact.socialMedia!.instagram!)}
                    >
                      Instagram
                    </Button>
                  )}
                  {contact.socialMedia.linkedin && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleSocialMedia(contact.socialMedia!.linkedin!)}
                    >
                      LinkedIn
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Contact Actions */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {contact.phone && (
                <Button
                  className="w-full"
                  size="lg"
                  onClick={() => handleCall(contact.phone!)}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
              )}
              {contact.email && (
                <Button
                  variant="outline"
                  className="w-full"
                  size="lg"
                  onClick={() => handleEmail(contact.email!)}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </Button>
              )}
              {contact.website && (
                <Button
                  variant="outline"
                  className="w-full"
                  size="lg"
                  onClick={() => handleVisit(contact.website!)}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Visit Website
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Contact Details */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {contact.phone && (
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{contact.phone}</p>
                    <p className="text-sm text-muted-foreground">Phone</p>
                  </div>
                </div>
              )}
              {contact.email && (
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{contact.email}</p>
                    <p className="text-sm text-muted-foreground">Email</p>
                  </div>
                </div>
              )}
              {contact.website && (
                <div className="flex items-center gap-3">
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{contact.website}</p>
                    <p className="text-sm text-muted-foreground">Website</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Metadata */}
          <Card>
            <CardHeader>
              <CardTitle>Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Added:</span>
                <span>{new Date(contact.createdAt).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Last Updated:</span>
                <span>{new Date(contact.updatedAt).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status:</span>
                <Badge variant={contact.isAvailable ? "default" : "secondary"}>
                  {contact.isAvailable ? "Available" : "Unavailable"}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
