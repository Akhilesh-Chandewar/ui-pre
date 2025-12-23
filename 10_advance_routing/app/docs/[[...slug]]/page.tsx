interface DocsProps {
    params: Promise<{
        slug?: string[]
    }>
}

export default async function Docs({ params }: DocsProps) {
    const { slug } = await params

    return (
        <div>
            <h1>Wellcome to Docs</h1>
            <pre>{JSON.stringify(slug ?? [], null, 2)}</pre>
        </div>
    )
}
