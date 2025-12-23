interface Props {
    params: Promise<{
        reviewid: string
        id: string
    }>
}

export default async function Page({ params }: Props) {
    const { reviewid, id } = await params

    return (
        <div>
            <h1>Product ID: {id}</h1>
            <h2>Review ID: {reviewid}</h2>
        </div>
    )
}
