import { NextResponse } from "next/server";
import { users } from "../hello/route";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const { name, email, age } = body;

        // ✅ Basic validations
        if (!name || typeof name !== "string") {
            return NextResponse.json(
                { success: false, message: "Name is required and must be a string" },
                { status: 400 }
            );
        }

        if (!email || typeof email !== "string") {
            return NextResponse.json(
                { success: false, message: "Email is required and must be a string" },
                { status: 400 }
            );
        }

        // ✅ Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { success: false, message: "Invalid email format" },
                { status: 400 }
            );
        }

        if (typeof age !== "number" || age <= 0) {
            return NextResponse.json(
                { success: false, message: "Age must be a positive number" },
                { status: 400 }
            );
        }

        // ✅ Create user
        const newUser = {
            id: users.length + 1,
            name: name.trim(),
            email: email.toLowerCase(),
            age,
        };

        users.push(newUser);

        return NextResponse.json(
            {
                success: true,
                data: users,
                total: users.length,
            },
            { status: 201 }
        );
    } catch (err) {
        return NextResponse.json(
            {
                success: false,
                message: "Invalid request body or server error",
            },
            { status: 500 }
        );
    }
}
