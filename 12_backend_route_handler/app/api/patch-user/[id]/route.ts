import { NextResponse } from "next/server";
import { users } from "../../hello/route";

type Params = {
    params: Promise<{ id: string }>;
};

export async function PATCH(request: Request, { params }: Params) {
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

    if (!name && !email && age === undefined) {
        return NextResponse.json(
            { success: false, message: "At least one field required" },
            { status: 400 }
        );
    }

    const user = users.find((u) => u.id === userId);
    if (!user) {
        return NextResponse.json(
            { success: false, message: "User not found" },
            { status: 404 }
        );
    }

    if (name) user.name = name.trim();
    if (email) user.email = email.toLowerCase();
    if (age !== undefined) {
        if (typeof age !== "number" || age <= 0) {
            return NextResponse.json(
                { success: false, message: "Invalid age" },
                { status: 400 }
            );
        }
        user.age = age;
    }

    return NextResponse.json({
        success: true,
        data: user,
    });
}
