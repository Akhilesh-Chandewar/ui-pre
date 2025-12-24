import connectToDatabase from "@/lib/database";
import Note from "@/models/notes";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        await connectToDatabase();

        const notes = await Note.find({}).sort({ createdAt: -1 });

        return NextResponse.json(
            { notes },
            { status: 200 }
        );

    } catch (error) {
        console.error("Error fetching notes:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        await connectToDatabase();

        const { title, content } = await request.json();

        if (!title || !content) {
            return NextResponse.json(
                { error: "Title and content are required" },
                { status: 400 }
            );
        }

        const newNote = new Note({
            title: title.trim(),
            content: content.trim()
        });

        const savedNote = await newNote.save();

        return NextResponse.json(
            { message: "Note created successfully", note: savedNote },
            { status: 201 }
        );

    } catch (error) {
        console.error("Error creating note:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}