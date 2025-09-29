import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { z } from "zod"

const createContactSchema = z.object({
  name: z.string().min(1),
  nameAr: z.string().optional(),
  nameFr: z.string().optional(),
  role: z.enum(["NGO", "LAWYER", "DOCTOR", "JOURNALIST", "INSTITUTION", "MEDICAL_CENTER", "HOTLINE"]),
  categoryId: z.string(),
  locationId: z.string(),
  organization: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email().optional(),
  website: z.string().url().optional(),
  address: z.string().optional(),
  languages: z.array(z.string()),
  description: z.string().optional(),
  notes: z.string().optional(),
  isVerified: z.boolean().default(false),
  isAvailable: z.boolean().default(true),
  emergency: z.boolean().default(false),
  availableHours: z.string().optional(),
  socialMedia: z.object({
    facebook: z.string().url().optional(),
    twitter: z.string().url().optional(),
    instagram: z.string().url().optional(),
    linkedin: z.string().url().optional(),
  }).optional(),
})

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const search = searchParams.get("search")
    const category = searchParams.get("category")
    const location = searchParams.get("location")
    const language = searchParams.get("language")
    const verified = searchParams.get("verified")
    const emergency = searchParams.get("emergency")
    const limit = parseInt(searchParams.get("limit") || "50")
    const offset = parseInt(searchParams.get("offset") || "0")

    const where: any = {}

    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { nameAr: { contains: search, mode: "insensitive" } },
        { nameFr: { contains: search, mode: "insensitive" } },
        { organization: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
      ]
    }

    if (category && category !== "all") {
      where.categoryId = category
    }

    if (location && location !== "all") {
      where.locationId = location
    }

    if (language && language !== "all") {
      where.languages = { has: language }
    }

    if (verified === "true") {
      where.isVerified = true
    }

    if (emergency === "true") {
      where.emergency = true
    }

    const contacts = await prisma.contact.findMany({
      where,
      include: {
        category: true,
        location: true,
        creator: {
          select: { id: true, name: true, email: true }
        },
        updater: {
          select: { id: true, name: true }
        }
      },
      orderBy: [
        { isVerified: "desc" },
        { emergency: "desc" },
        { createdAt: "desc" }
      ],
      take: limit,
      skip: offset,
    })

    const total = await prisma.contact.count({ where })

    return NextResponse.json({
      contacts,
      total,
      hasMore: offset + limit < total
    })
  } catch (error) {
    console.error("Error fetching contacts:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    const body = await request.json()
    const validatedData = createContactSchema.parse(body)

    // Check if user has permission to create contacts
    const user = await prisma.user.findUnique({
      where: { id: session.user.id }
    })

    if (!user || (user.role !== "ADMIN" && user.role !== "MODERATOR" && user.role !== "NGO")) {
      return NextResponse.json(
        { error: "Insufficient permissions" },
        { status: 403 }
      )
    }

    const contact = await prisma.contact.create({
      data: {
        ...validatedData,
        createdBy: session.user.id,
        updatedBy: session.user.id,
      },
      include: {
        category: true,
        location: true,
        creator: {
          select: { id: true, name: true, email: true }
        }
      }
    })

    return NextResponse.json(contact, { status: 201 })
  } catch (error) {
    console.error("Error creating contact:", error)

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
