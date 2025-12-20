interface ProductsPageProps {
    params: Promise<{
        id: string
    }>
}

export default async function Products({ params }: ProductsPageProps) {
    const { id } = await params

    return <div>Products {id}</div>
}
