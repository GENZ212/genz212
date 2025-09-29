"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ReportForm } from "./report-form"
import {
  FileText,
  Plus,
  AlertTriangle,
  CheckCircle,
  Clock,
  Eye
} from "lucide-react"

interface Report {
  id: string
  title: string
  description: string
  status: "PENDING" | "UNDER_REVIEW" | "VERIFIED" | "RESOLVED" | "DISMISSED"
  priority: "LOW" | "MEDIUM" | "HIGH" | "URGENT"
  createdAt: string
  isAnonymous: boolean
  location?: string
  contact?: {
    name: string
    category: { name: string }
  }
}

export function ReportsClient() {
  const { data: session } = useSession()
  const [reports, setReports] = useState<Report[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [activeTab, setActiveTab] = useState("all")

  useEffect(() => {
    fetchReports()
  }, [session])

  const fetchReports = async () => {
    try {
      // Mock data - replace with actual API call
      setTimeout(() => {
        setReports([
          {
            id: "1",
            title: "Police misconduct during protest",
            description: "Officers used excessive force against peaceful protesters...",
            status: "UNDER_REVIEW",
            priority: "HIGH",
            createdAt: "2024-09-15T10:30:00Z",
            isAnonymous: false,
            location: "Casablanca",
            contact: {
              name: "Casablanca Police Station",
              category: { name: "Institution" }
            }
          },
          {
            id: "2",
            title: "Human rights violation in detention",
            description: "Detainee was denied access to legal representation...",
            status: "VERIFIED",
            priority: "URGENT",
            createdAt: "2024-09-14T14:20:00Z",
            isAnonymous: true,
            location: "Rabat"
          },
          {
            id: "3",
            title: "Medical emergency during demonstration",
            description: "Protester injured and needs immediate medical attention...",
            status: "RESOLVED",
            priority: "HIGH",
            createdAt: "2024-09-13T09:15:00Z",
            isAnonymous: false,
            location: "Marrakech",
            contact: {
              name: "Marrakech General Hospital",
              category: { name: "Medical Center" }
            }
          }
        ])
        setLoading(false)
      }, 1000)
    } catch (error) {
      console.error("Error fetching reports:", error)
      setLoading(false)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "PENDING":
        return "bg-gray-100 text-gray-800"
      case "UNDER_REVIEW":
        return "bg-blue-100 text-blue-800"
      case "VERIFIED":
        return "bg-green-100 text-green-800"
      case "RESOLVED":
        return "bg-emerald-100 text-emerald-800"
      case "DISMISSED":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "LOW":
        return "bg-gray-100 text-gray-800"
      case "MEDIUM":
        return "bg-blue-100 text-blue-800"
      case "HIGH":
        return "bg-amber-100 text-amber-800"
      case "URGENT":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const filteredReports = reports.filter(report => {
    if (activeTab === "all") return true
    if (activeTab === "my") return !report.isAnonymous && session?.user
    if (activeTab === "pending") return report.status === "PENDING" || report.status === "UNDER_REVIEW"
    if (activeTab === "resolved") return report.status === "RESOLVED" || report.status === "VERIFIED"
    return true
  })

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Reports</h1>
            <p className="text-muted-foreground">
              Submit and track human rights reports and incidents
            </p>
          </div>
          <Button onClick={() => setShowForm(!showForm)}>
            <Plus className="h-4 w-4 mr-2" />
            Submit Report
          </Button>
        </div>

        {/* Report Form */}
        {showForm && (
          <Card>
            <CardHeader>
              <CardTitle>Submit New Report</CardTitle>
            </CardHeader>
            <CardContent>
              <ReportForm onSuccess={() => {
                setShowForm(false)
                fetchReports()
              }} />
            </CardContent>
          </Card>
        )}

        {/* Reports Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="all">All Reports</TabsTrigger>
            {session?.user && <TabsTrigger value="my">My Reports</TabsTrigger>}
            <TabsTrigger value="pending">Pending Review</TabsTrigger>
            <TabsTrigger value="resolved">Resolved</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="space-y-4">
            {loading ? (
              <div className="grid gap-4">
                {[...Array(3)].map((_, i) => (
                  <Card key={i} className="animate-pulse">
                    <CardContent className="p-6">
                      <div className="h-4 bg-muted rounded w-1/4 mb-2"></div>
                      <div className="h-6 bg-muted rounded w-3/4 mb-4"></div>
                      <div className="h-4 bg-muted rounded w-full mb-2"></div>
                      <div className="h-4 bg-muted rounded w-2/3"></div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : filteredReports.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No reports found</h3>
                  <p className="text-muted-foreground mb-4">
                    {activeTab === "my"
                      ? "You haven't submitted any reports yet."
                      : "No reports match the current filter."
                    }
                  </p>
                  {activeTab === "my" && (
                    <Button onClick={() => setShowForm(true)}>
                      Submit Your First Report
                    </Button>
                  )}
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4">
                {filteredReports.map((report) => (
                  <Card key={report.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-semibold">{report.title}</h3>
                            <Badge className={getStatusColor(report.status)}>
                              {report.status.replace("_", " ")}
                            </Badge>
                            <Badge variant="outline" className={getPriorityColor(report.priority)}>
                              {report.priority} PRIORITY
                            </Badge>
                          </div>
                          <p className="text-muted-foreground text-sm mb-2">
                            {report.description.length > 200
                              ? `${report.description.substring(0, 200)}...`
                              : report.description
                            }
                          </p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>📍 {report.location || "Location not specified"}</span>
                            <span>📅 {new Date(report.createdAt).toLocaleDateString()}</span>
                            {report.isAnonymous && (
                              <Badge variant="outline" className="text-xs">
                                Anonymous
                              </Badge>
                            )}
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      </div>

                      {report.contact && (
                        <div className="border-t pt-4">
                          <p className="text-sm text-muted-foreground mb-1">Related Contact:</p>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{report.contact.name}</span>
                            <Badge variant="outline" className="text-xs">
                              {report.contact.category.name}
                            </Badge>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
