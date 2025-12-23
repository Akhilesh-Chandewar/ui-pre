export default async function Home() {
  const res = await fetch(
    "https://api.github.com/users/akhilesh-chandewar",
    {
      headers: {
        "User-Agent": "Next.js App",
      },
      cache: "no-store", // always fetch fresh data
    }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch GitHub user")
  }

  const data = await res.json()

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
        <pre className=" p-4 rounded text-left text-sm overflow-auto">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </div>
  )
}
