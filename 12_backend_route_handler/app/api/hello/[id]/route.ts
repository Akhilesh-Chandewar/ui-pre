import { NextResponse } from "next/server";
import { users } from "../route";

type Params = {
    params: Promise<{
        id: string;
    }>;
};

export async function GET(
    request: Request,
    { params }: Params
) {
    const { id } = await params;

    const userId = Number(id);

    if (isNaN(userId)) {
        return NextResponse.json(
            { success: false, message: "Invalid user id" },
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

    return NextResponse.json({
        success: true,
        data: user,
    });
}
