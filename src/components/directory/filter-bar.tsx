"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, Filter } from "lucide-react"

interface FilterBarProps {
  filters: {
    search: string
    category: string
    location: string
    language: string
  }
  onFilterChange: (key: string, value: string) => void
  onClearAll: () => void
}

export function FilterBar({ filters, onFilterChange, onClearAll }: FilterBarProps) {
  const activeFilters = Object.entries(filters).filter(([key, value]) =>
    value !== "all" && value !== ""
  )

  if (activeFilters.length === 0) {
    return null
  }

  const getFilterLabel = (key: string, value: string) => {
    switch (key) {
      case 'search':
        return `Search: "${value}"`
      case 'category':
        return `Category: ${value}`
      case 'location':
        return `Location: ${value}`
      case 'language':
        const languages: { [key: string]: string } = {
          'ar': 'Arabic',
          'fr': 'French',
          'en': 'English'
        }
        return `Language: ${languages[value] || value}`
      default:
        return `${key}: ${value}`
    }
  }

  return (
    <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
      <Filter className="h-4 w-4 text-muted-foreground" />
      <div className="flex flex-wrap gap-2 flex-1">
        {activeFilters.map(([key, value]) => (
          <Badge key={key} variant="secondary" className="flex items-center gap-1">
            {getFilterLabel(key, value)}
            <button
              onClick={() => onFilterChange(key, key === 'search' ? '' : 'all')}
              className="ml-1 hover:bg-muted-foreground/20 rounded-full p-0.5"
            >
              <X className="h-3 w-3" />
            </button>
          </Badge>
        ))}
      </div>
      <Button variant="ghost" size="sm" onClick={onClearAll}>
        Clear All
      </Button>
    </div>
  )
}
