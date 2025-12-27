"use server"

import connectToDatabase from "@/lib/database"
import { Contact } from "@/models/Contact"
import { revalidateTag, unstable_cache } from "next/cache"

// types/contact.ts
export type ContactDTO = {
    _id: string
    name: string
    email: string
    subject: string
    message: string
    createdAt: string
    updatedAt: string
    status: "new" | "read" | "replied"   
}


type GetContactsResult =
    | { success: true; data: ContactDTO[] }
    | { success: false; message: string }

type ContactStatus = "new" | "read" | "replied"

export async function createContact(formData: FormData) {
    try {
        await connectToDatabase()

        const name = formData.get("name") as string
        const email = formData.get("email") as string
        const subject = formData.get("subject") as string
        const message = formData.get("message") as string

        if (!name || !email || !subject || !message) {
            return {
                success: false,
                message: "All fields are required",
            }
        }

        const contact = await Contact.create({
            name: name.trim(),
            email: email.trim(),
            subject: subject.trim(),
            message: message.trim(),
        })

        if (!contact) {
            return {
                success: false,
                message: "Something went wrong",
            }
        }

        return {
            success: true,
            message: "Message sent successfully",
            contact: contact._id.toString(),
        }
    } catch (error) {
        console.error("Error creating contact:", error)
        return {
            success: false,
            message: "Something went wrong",
        }
    }
}

export async function getContacts(): Promise<GetContactsResult> {
    try {
        await connectToDatabase()

        const contacts = await Contact.find({})
            .sort({ createdAt: -1 })
            .lean()

        const data: ContactDTO[] = contacts.map((contact) => ({
            ...contact,
            _id: contact._id.toString(),
            createdAt: contact.createdAt.toISOString(),
            updatedAt: contact.updatedAt.toISOString(),
        }))

        return {
            success: true,
            data,
        }
    } catch (error) {
        console.error("Error fetching contacts:", error)
        return {
            success: false,
            message: "Something went wrong",
        }
    }
}

export async function updateContact(
    contactId: string,
    status: ContactStatus
) {
    try {
        await connectToDatabase()

        await Contact.findByIdAndUpdate(contactId, { status })

        revalidateTag("contact-stats", {})

        return { success: true }
    } catch (error) {
        console.error("Error updating contact status:", error)
        return { success: false, error: "Failed to update status" }
    }
}

export async function getContactStats() {
    const getCachedStats = unstable_cache(
        async () => {
            await connectToDatabase()

            const total = await Contact.countDocuments()
            const newCount = await Contact.countDocuments({ status: "new" })
            const readCount = await Contact.countDocuments({ status: "read" })
            const repliedCount = await Contact.countDocuments({ status: "replied" })

            return { total, newCount, readCount, repliedCount }
        },
        ["contact-stats"],
        { tags: ["contact-stats"] }
    )

    return getCachedStats()
}
