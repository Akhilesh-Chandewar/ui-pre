"use client"

import { useEffect, useState } from "react"

type GitHubUser = {
    name: string
    login: string
    avatar_url: string
}

export default function Client() {
    const [data, setData] = useState<GitHubUser | null>(null)
    const [count, setCount] = useState(0)

    function handleClick() {
        setCount((prev) => prev + 1)
    }

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(
                "https://api.github.com/users/akhilesh-chandewar",
                {
                    headers: {
                        "User-Agent": "Next.js App",
                    },
                }
            )
            const result = await res.json()
            setData(result)
        }

        fetchData()
    }, [count])

    if (!data) {
        return <p className="text-center mt-10">Loading...</p>
    }

    return (
        <div className="min-h-screen grid place-items-center p-8">
            <div className="max-w-xl text-center space-y-4">
                <h1 className="text-2xl font-bold">{data.name}</h1>
                <p className="text-gray-600">@{data.login}</p>

                <img
                    src={data.avatar_url}
                    alt={data.name}
                    className="w-32 h-32 rounded-full mx-auto"
                />

                <pre className="p-4 rounded text-left text-sm overflow-auto">
                    {JSON.stringify(data, null, 2)}
                </pre>

                <button
                    onClick={handleClick}
                    className="px-4 py-2 bg-black text-white rounded"
                >
                    Clicked {count} times
                </button>
            </div>
        </div>
    )
}
