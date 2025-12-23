import Link from "next/link"

function Section() {
    return (
        <>
            <div>Section</div>
            <Link href="/setting">Go to Settings</Link>
            <br />
            <Link href="/admin">Go to Admin</Link>
        </>
    )
}

export default Section