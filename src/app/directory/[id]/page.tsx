import { ContactProfileClient } from "@/components/directory/contact-profile-client"

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function ContactProfilePage({ params }: PageProps) {
  const { id } = await params

  return <ContactProfileClient id={id} />
}
