"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

function Navigation() {
    const pathname = usePathname()

    const linkClass = (path : string) =>
        `px-4 py-2 rounded-md text-lg transition ${pathname === path
            ? "bg-black text-white"
            : "text-gray-700 hover:bg-gray-100"
        }`

    return (
        <nav className="flex w-full items-center justify-center gap-6 border-b px-6 py-4">
            <Link href="/" className={linkClass("/")}>
                Home
            </Link>

            <Link href="/post/3/alug" className={linkClass("/post/3/alug")}>
                Post
            </Link>

            <Link href="/reviews" className={linkClass("/review/5")}>
                Reviews
            </Link>
        </nav>
    )
}

export default Navigation
