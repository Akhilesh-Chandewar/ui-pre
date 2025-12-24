import { notFound } from "next/navigation"

interface Params {
    params: Promise<{
        id: string
    }>
}
async function Reviews({params}: Params) {
    const { id } = await params

    if (isNaN(Number(id)) || Number(id) <= 0 || Number(id) > 10) {
        return notFound()
    }

    return (
        <div className="flex flex-col min-h-screen items-center justify-center text-3xl">
            <h1>Review {id}</h1>
        </div>
    )
}

export default Reviews