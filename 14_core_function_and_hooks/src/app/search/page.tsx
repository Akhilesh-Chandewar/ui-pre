"use client"

import { useSearchParams } from "next/navigation"

function Search() {
    const searchParams = useSearchParams()
    console.log(searchParams);
    return (
        <div className="flex flex-col min-h-screen items-center justify-center text-3xl">
            <h1>Search</h1>
        </div> 
    )
}

export default Search