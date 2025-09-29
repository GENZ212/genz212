import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { z } from "zod"

const createReportSchema = z.object({
  title: z.string().min(1).max(200),
  description: z.string().min(10).max(5000),
  location: z.string().optional(),
  isAnonymous: z.boolean().default(false),
  priority: z.enum(["LOW", "MEDIUM", "HIGH", "URGENT"]).default("MEDIUM"),
  tags: z.array(z.string()).default([]),
  contactId: z.string().optional(),
})

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    const { searchParams } = new URL(request.url)

    const status = searchParams.get("status")
    const priority = searchParams.get("priority")
    const assignedTo = searchParams.get("assignedTo")
    const limit = parseInt(searchParams.get("limit") || "20")
    const offset = parseInt(searchParams.get("offset") || "0")

    // Users can only see their own reports unless they're moderators/admins
    const where: any = {}

    if (session?.user) {
      const user = await prisma.user.findUnique({
        where: { id: session.user.id }
      })

      if (user?.role === "USER") {
        where.OR = [
          { createdBy: session.user.id },
          { isAnonymous: true }
        ]
      } else if (user?.role === "MODERATOR" || user?.role === "ADMIN") {
        // Moderators and admins can see all reports
        if (status && status !== "all") {
          where.status = status
        }
        if (priority && priority !== "all") {
          where.priority = priority
        }
        if (assignedTo) {
          where.assignedTo = assignedTo
        }
      }
    } else {
      // Non-authenticated users can only see public/anonymous reports
      where.isAnonymous = true
    }

    const reports = await prisma.report.findMany({
      where,
      include: {
        creator: {
          select: { id: true, name: true, email: true }
        },
        assignee: {
          select: { id: true, name: true, email: true }
        },
        contact: {
          select: {
            id: true,
            name: true,
            category: { select: { name: true } },
            location: { select: { name: true } }
          }
        },
        media: true
      },
      orderBy: [
        { priority: "desc" },
        { createdAt: "desc" }
      ],
      take: limit,
      skip: offset,
    })

    const total = await prisma.report.count({ where })

    return NextResponse.json({
      reports,
      total,
      hasMore: offset + limit < total
    })
  } catch (error) {
    console.error("Error fetching reports:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    const body = await request.json()
    const validatedData = createReportSchema.parse(body)

    const report = await prisma.report.create({
      data: {
        ...validatedData,
        createdBy: session?.user?.id || null,
      },
      include: {
        creator: {
          select: { id: true, name: true, email: true }
        },
        contact: {
          select: {
            id: true,
            name: true,
            category: { select: { name: true } },
            location: { select: { name: true } }
          }
        }
      }
    })

    return NextResponse.json(report, { status: 201 })
  } catch (error) {
    console.error("Error creating report:", error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation error", details: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
