export default async function Home() {
  const res = await fetch("http://localhost:3000/api/hello", { cache: "no-store" });
  const result = await res.json();

  const users = result.data;

  return (
    <div className="min-h-screen bg-zinc-50 p-6 dark:bg-black">
      <h1 className="mb-6 text-2xl font-bold text-black dark:text-white">
        Users ({result.total})
      </h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((user: any) => (
          <div
            key={user.id}
            className="rounded-lg border bg-white p-4 shadow dark:border-zinc-800 dark:bg-zinc-900"
          >
            <h2 className="text-lg font-semibold text-black dark:text-white">
              {user.name}
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {user.email}
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Age: {user.age}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
