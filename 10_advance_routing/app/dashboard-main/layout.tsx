import Link from "next/link"

type DashBoardLayoutProps = {
    feed: React.ReactNode
    stats: React.ReactNode
    tab: React.ReactNode
    children: React.ReactNode
}

export default function DashBoardLayout({
    feed,
    stats,
    tab,
    children,
}: DashBoardLayoutProps) {
    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-bold">Dashboard Layout</h1>

            <div className="flex gap-6">
                {stats}
                {feed}
            </div>

            <nav className="flex gap-4 border-b pb-2">
                <Link href="/dashboard-main/tab1">Tab 1</Link>
                <Link href="/dashboard-main/tab2">Tab 2</Link>
            </nav>

            {/* Active tab changes by URL */}
            <div className="mt-4">{tab}</div>

            <div>{children}</div>
        </div>
    )
}
