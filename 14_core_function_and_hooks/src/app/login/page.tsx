"use client"

import { useRouter } from "next/navigation"

function Login() {
    const router = useRouter()
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center">
            <h1 className="text-5xl font-bold">useRouter Demo</h1>
            <p className="text-xl text-gray-600">
                Demonstrating push, replace, back, and refresh
            </p>

            <div className="flex flex-col gap-4 text-xl">
                {/* push */}
                <button
                    onClick={() => router.push("/")}
                    className="rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800"
                >
                    router.push("/") → Go to Home
                </button>

                {/* replace */}
                <button
                    onClick={() => router.replace("/")}
                    className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-500"
                >
                    router.replace("/") → Redirect (no back)
                </button>

                {/* back */}
                <button
                    onClick={() => router.back()}
                    className="rounded-lg bg-gray-700 px-6 py-3 text-white hover:bg-gray-600"
                >
                    router.back() → Go Back
                </button>

                {/* refresh */}
                <button
                    onClick={() => router.refresh()}
                    className="rounded-lg bg-green-600 px-6 py-3 text-white hover:bg-green-500"
                >
                    router.refresh() → Re-fetch Data
                </button>
            </div>
        </div>
    )
}

export default Login
