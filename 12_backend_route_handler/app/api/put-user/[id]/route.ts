import { NextResponse } from "next/server";
import { users } from "../../hello/route";

type Params = {
    params: Promise<{ id: string }>;
};

export async function PUT(request: Request, { params }: Params) {
    const { id } = await params;
    const userId = Number(id);

    if (isNaN(userId)) {
        return NextResponse.json(
            { success: false, message: "Invalid user id" },
            { status: 400 }
        );
    }

    const body = await request.json();
    const { name, email, age } = body;

    if (!name || !email || typeof age !== "number") {
        return NextResponse.json(
            { success: false, message: "name, email and age are required" },
            { status: 400 }
        );
    }

    const index = users.findIndex((u) => u.id === userId);
    if (index === -1) {
        return NextResponse.json(
            { success: false, message: "User not found" },
            { status: 404 }
        );
    }

    users[index] = {
        id: userId,
        name: name.trim(),
        email: email.toLowerCase(),
        age,
    };

    return NextResponse.json({
        success: true,
        data: users[index],
    });
}
