import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
    /* ---------------- READ (WAY 1) ---------------- */
    const themeFromRequest = request.cookies.get("theme");

    /* ---------------- READ (WAY 2) ---------------- */
    const cookieStore  =await cookies();
    const themeFromHeaders = cookieStore.get("theme");

    console.log("request.cookies:", themeFromRequest?.value);
    console.log("cookies():", themeFromHeaders?.value);

    /* ---------------- RESPONSE ---------------- */
    const response = NextResponse.json({
        success: true,
        requestCookie: themeFromRequest?.value ?? null,
        headerCookie: themeFromHeaders?.value ?? null,
    });

    /* ---------------- SET (ONE WAY ONLY) ---------------- */
    response.cookies.set("theme", "dark", {
        path: "/",
        httpOnly: false,
        secure: process.env.NODE_ENV === "production",
    });

    return response;
}
