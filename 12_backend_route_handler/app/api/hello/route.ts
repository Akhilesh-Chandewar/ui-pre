import { NextRequest, NextResponse } from "next/server";

export const users = [
    { id: 1, name: "John Doe", email: "john@example.com", age: 25 },
    { id: 2, name: "Jane Smith", email: "jane@example.com", age: 30 },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", age: 28 },
];

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = request.nextUrl;

        const id = searchParams.get("id");
        const name = searchParams.get("name");
        const email = searchParams.get("email");
        const age = searchParams.get("age");

        let filteredUsers = [...users];

        // 🔍 filter by id
        if (id) {
            const userId = Number(id);
            if (isNaN(userId)) {
                return NextResponse.json(
                    { success: false, message: "Invalid id" },
                    { status: 400 }
                );
            }
            filteredUsers = filteredUsers.filter(u => u.id === userId);
        }

        if (name) {
            filteredUsers = filteredUsers.filter(u =>
                u.name.toLowerCase().includes(name.toLowerCase())
            );
        }

        if (email) {
            filteredUsers = filteredUsers.filter(u =>
                u.email.toLowerCase().includes(email.toLowerCase())
            );
        }

        if (age) {
            const userAge = Number(age);
            if (isNaN(userAge)) {
                return NextResponse.json(
                    { success: false, message: "Invalid age" },
                    { status: 400 }
                );
            }
            filteredUsers = filteredUsers.filter(u => u.age === userAge);
        }

        return NextResponse.json({
            success: true,
            data: filteredUsers,
            total: filteredUsers.length,
        });
    } catch {
        return NextResponse.json(
            { success: false, message: "Something went wrong" },
            { status: 500 }
        );
    }
}
