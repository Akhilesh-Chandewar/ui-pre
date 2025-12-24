import connectToDatabase from "@/lib/database";
import Note from "@/models/notes";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await connectToDatabase();

        const { id } = await params;

        const note = await Note.findById(id);

        if (!note) {
            return NextResponse.json(
                { error: "Note not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { note },
            { status: 200 }
        );

    } catch (error) {
        console.error("Error fetching note:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await connectToDatabase();

        const { id } = await params;

        const { title, content } = await request.json();

        if (!title || !content) {
            return NextResponse.json(
                { error: "Title and content are required" },
                { status: 400 }
            );
        }

        const updatedNote = await Note.findByIdAndUpdate(
            id,
            {
                title: title.trim(),
                content: content.trim()
            },
            { new: true, runValidators: true }
        );

        if (!updatedNote) {
            return NextResponse.json(
                { error: "Note not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { message: "Note updated successfully", note: updatedNote },
            { status: 200 }
        );

    } catch (error) {
        console.error("Error updating note:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await connectToDatabase();

        const { id } = await params;

        const deletedNote = await Note.findByIdAndDelete(id);

        if (!deletedNote) {
            return NextResponse.json(
                { error: "Note not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { message: "Note deleted successfully" },
            { status: 200 }
        );

    } catch (error) {
        console.error("Error deleting note:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
