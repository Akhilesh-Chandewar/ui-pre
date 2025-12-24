import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET(request: NextRequest) {
    const requestHeaders = new Headers(request.headers);
    const authorization = requestHeaders.get("authorization");
    console.log(authorization);

    const headersList = await headers();
    const token = headersList.get("authorization");
    console.log(token);

    // return NextResponse.json({ success: true, data: "Profile" });

    // return new Response("<h1>Hello from profile</h1>" , {
    //     headers: {
    //         "Content-Type": "text/html"
    //     }
    // })

    const response = NextResponse.json({ success: true, data: "Profile" });
    response.headers.set("X-Powered-By", "Next.js 16");
    response.headers.set("Cache-Control", "no-cache");
    return response;
}