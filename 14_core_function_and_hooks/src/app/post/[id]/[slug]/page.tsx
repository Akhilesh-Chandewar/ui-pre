"use client"

import { useParams } from "next/navigation"



function PostIdSlug() {
    const params = useParams()
    const id = params.id
    const slug = params.slug

    return (
        <div className="flex flex-col min-h-screen items-center justify-center text-3xl">
            <h1>Post ID: {id}</h1>
            <h2>Slug: {slug}</h2>
        </div>
    )
}

export default PostIdSlug