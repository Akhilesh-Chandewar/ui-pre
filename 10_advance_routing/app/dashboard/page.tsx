import Link from "next/link"

function Dashboard() {
    return (
        <>
            <div>Dashboard</div>
            <Link href="/dashboard/report">View Report</Link>
            <br />
            <Link href="/profile">Go to Profile</Link>
        </>
    )
}

export default Dashboard