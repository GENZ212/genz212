import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { z } from "zod"

const updateContactSchema = z.object({
  name: z.string().min(1).optional(),
  nameAr: z.string().optional(),
  nameFr: z.string().optional(),
  role: z.enum(["NGO", "LAWYER", "DOCTOR", "JOURNALIST", "INSTITUTION", "MEDICAL_CENTER", "HOTLINE"]).optional(),
  categoryId: z.string().optional(),
  locationId: z.string().optional(),
  organization: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email().optional(),
  website: z.string().url().optional(),
  address: z.string().optional(),
  languages: z.array(z.string()).optional(),
  description: z.string().optional(),
  notes: z.string().optional(),
  isVerified: z.boolean().optional(),
  isAvailable: z.boolean().optional(),
  emergency: z.boolean().optional(),
  availableHours: z.string().optional(),
  socialMedia: z.object({
    facebook: z.string().url().optional(),
    twitter: z.string().url().optional(),
    instagram: z.string().url().optional(),
    linkedin: z.string().url().optional(),
  }).optional(),
})

interface RouteParams {
  params: Promise<{ id: string }>
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params

    const contact = await prisma.contact.findUnique({
      where: { id },
      include: {
        category: true,
        location: true,
        creator: {
          select: { id: true, name: true, email: true }
        },
        updater: {
          select: { id: true, name: true }
        },
        media: true,
        reports: {
          take: 5,
          orderBy: { createdAt: "desc" },
          include: {
            creator: {
              select: { id: true, name: true }
            }
          }
        }
      }
    })

    if (!contact) {
      return NextResponse.json(
        { error: "Contact not found" },
        { status: 404 }
      )
    }

    return NextResponse.json(contact)
  } catch (error) {
    console.error("Error fetching contact:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    const { id } = await params
    const body = await request.json()
    const validatedData = updateContactSchema.parse(body)

    // Check if contact exists
    const existingContact = await prisma.contact.findUnique({
      where: { id }
    })

    if (!existingContact) {
      return NextResponse.json(
        { error: "Contact not found" },
        { status: 404 }
      )
    }

    // Check if user has permission to update
    const user = await prisma.user.findUnique({
      where: { id: session.user.id }
    })

    if (!user ||
        (user.role !== "ADMIN" &&
         user.role !== "MODERATOR" &&
         user.id !== existingContact.createdBy)) {
      return NextResponse.json(
        { error: "Insufficient permissions" },
        { status: 403 }
      )
    }

    const contact = await prisma.contact.update({
      where: { id },
      data: {
        ...validatedData,
        updatedBy: session.user.id,
      },
      include: {
        category: true,
        location: true,
        creator: {
          select: { id: true, name: true, email: true }
        },
        updater: {
          select: { id: true, name: true }
        }
      }
    })

    return NextResponse.json(contact)
  } catch (error) {
    console.error("Error updating contact:", error)

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

export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    const { id } = await params

    // Check if contact exists
    const existingContact = await prisma.contact.findUnique({
      where: { id }
    })

    if (!existingContact) {
      return NextResponse.json(
        { error: "Contact not found" },
        { status: 404 }
      )
    }

    // Check if user has permission to delete
    const user = await prisma.user.findUnique({
      where: { id: session.user.id }
    })

    if (!user ||
        (user.role !== "ADMIN" &&
         user.role !== "MODERATOR" &&
         user.id !== existingContact.createdBy)) {
      return NextResponse.json(
        { error: "Insufficient permissions" },
        { status: 403 }
      )
    }

    await prisma.contact.delete({
      where: { id }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting contact:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
