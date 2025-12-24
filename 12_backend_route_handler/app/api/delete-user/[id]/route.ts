import { NextResponse } from "next/server";
import { users } from "../../hello/route";

type Params = {
    params: Promise<{ id: string }>;
};


export async function DELETE(request: Request, { params }: Params) {
    const { id } = await params;
    const userId = Number(id);

    if (isNaN(userId)) {
        return NextResponse.json(
            { success: false, message: "Invalid user id" },
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

    const deletedUser = users.splice(index, 1)[0];

    return NextResponse.json({
        success: true,
        data: deletedUser,
    });
}
