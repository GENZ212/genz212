import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Clock,
  Shield,
  Heart,
  AlertTriangle
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
  languages: string[]
  description?: string
  notes?: string
  isVerified: boolean
  isAvailable: boolean
  emergency: boolean
}

interface ContactCardProps {
  contact: Contact
}

export function ContactCard({ contact }: ContactCardProps) {
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
  }

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`
  }

  const handleEmail = (email: string) => {
    window.location.href = `mailto:${email}`
  }

  const handleVisit = (website: string) => {
    window.open(website, '_blank')
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
      'ar': 'العربية',
      'fr': 'Français',
      'en': 'English'
    }
    return codes.map(code => languages[code] || code)
  }

  return (
    <Card className={`h-full ${contact.emergency ? 'ring-2 ring-red-500' : ''}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarFallback
                className="text-white text-sm font-semibold"
                style={{ backgroundColor: contact.category.color || '#6b7280' }}
              >
                {getInitials(contact.name)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <CardTitle className="text-lg leading-tight truncate">
                {contact.name}
              </CardTitle>
              <div className="flex items-center gap-2 mt-1">
                <Badge
                  variant="secondary"
                  className="text-xs"
                  style={{
                    backgroundColor: contact.category.color + '20',
                    color: contact.category.color,
                    borderColor: contact.category.color + '40'
                  }}
                >
                  {getRoleIcon(contact.role)} {contact.category.name}
                </Badge>
                {contact.isVerified && (
                  <Badge variant="outline" className="text-xs">
                    <Shield className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                )}
              </div>
            </div>
          </div>
          {contact.emergency && (
            <Badge variant="destructive" className="text-xs">
              <AlertTriangle className="h-3 w-3 mr-1" />
              Emergency
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {contact.organization && (
          <div>
            <p className="text-sm text-muted-foreground mb-1">Organization</p>
            <p className="font-medium">{contact.organization}</p>
          </div>
        )}

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{contact.location.name}</span>
          {contact.location.region && (
            <span className="text-xs">• {contact.location.region}</span>
          )}
        </div>

        {contact.description && (
          <div>
            <p className="text-sm text-muted-foreground mb-1">Description</p>
            <p className="text-sm">{contact.description}</p>
          </div>
        )}

        {contact.languages.length > 0 && (
          <div>
            <p className="text-sm text-muted-foreground mb-1">Languages</p>
            <div className="flex flex-wrap gap-1">
              {getLanguageNames(contact.languages).map((lang, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {lang}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {contact.notes && (
          <div>
            <p className="text-sm text-muted-foreground mb-1">Notes</p>
            <p className="text-sm text-amber-700 bg-amber-50 p-2 rounded border">
              {contact.notes}
            </p>
          </div>
        )}

        <div className="flex flex-col gap-2 pt-2 border-t">
          <div className="flex flex-wrap gap-2">
            {contact.phone && (
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleCall(contact.phone!)}
                className="flex-1 min-w-0"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call
              </Button>
            )}
            {contact.email && (
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleEmail(contact.email!)}
                className="flex-1 min-w-0"
              >
                <Mail className="h-4 w-4 mr-2" />
                Email
              </Button>
            )}
          </div>

          {contact.website && (
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleVisit(contact.website!)}
              className="w-full"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Visit Website
            </Button>
          )}
        </div>

        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{contact.isAvailable ? 'Available' : 'Unavailable'}</span>
          </div>
          <Link
            href={`/directory/${contact.id}`}
            className="text-primary hover:underline"
          >
            View Details →
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
