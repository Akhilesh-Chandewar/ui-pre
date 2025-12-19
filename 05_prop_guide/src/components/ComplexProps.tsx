import { useState } from "react"

interface User {
  name: string
  email: string
  avatar: string
  role: string
  status: string
  stats?: Record<string, number>
}

interface Theme {
  backgroundColor: string
  textColor: string
  avatarBg: string
  badgeBg: string
}

interface ActionButton {
  label: string
  onClick: () => void
  className: string
}

interface Actions {
  primary?: ActionButton
  secondary?: ActionButton
}

interface UserProfileCardProps {
  user: User
  theme: Theme
  actions?: Actions
}

function UserProfileCard({ user, theme, actions }: UserProfileCardProps) {
  return (
    <div
      className={`
        p-6 rounded-xl shadow-xl border border-gray-700
        ${theme.backgroundColor} ${theme.textColor}
      `}
    >
      <div className="flex items-start gap-4">
        <div
          className={`w-16 h-16 rounded-full ${theme.avatarBg}
          flex items-center justify-center text-2xl`}
        >
          {user.avatar}
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-bold">{user.name}</h3>
          <p className="text-sm text-gray-300">{user.email}</p>

          <div className="flex gap-2 mt-2 text-sm">
            <span className={`px-3 py-1 rounded-full ${theme.badgeBg}`}>
              {user.role}
            </span>
            <span className={`px-3 py-1 rounded-full ${theme.badgeBg}`}>
              {user.status}
            </span>
          </div>
        </div>
      </div>

      {user.stats && (
        <div className="mt-4 pt-4 border-t border-gray-600 grid grid-cols-3 gap-4">
          {Object.entries(user.stats).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="text-xl font-bold">{value}</div>
              <div className="text-xs text-gray-300 capitalize">{key}</div>
            </div>
          ))}
        </div>
      )}

      {actions && (
        <div className="mt-4 flex gap-3">
          {actions.primary && (
            <button
              onClick={actions.primary.onClick}
              className={`flex-1 py-2 rounded-lg font-medium transition ${actions.primary.className}`}
            >
              {actions.primary.label}
            </button>
          )}

          {actions.secondary && (
            <button
              onClick={actions.secondary.onClick}
              className={`flex-1 py-2 rounded-lg font-medium transition ${actions.secondary.className}`}
            >
              {actions.secondary.label}
            </button>
          )}
        </div>
      )}
    </div>
  )
}

function ComplexProps() {
  const [message, setMessage] = useState("")

  const users: UserProfileCardProps[] = [
    {
      user: {
        name: "Alice Johnson",
        email: "alice@example.com",
        avatar: "👩‍💼",
        role: "Admin",
        status: "Active",
        stats: {
          posts: 145,
          followers: 2834,
          following: 421,
        },
      },
      theme: {
        backgroundColor: "bg-gray-800",
        textColor: "text-gray-100",
        avatarBg: "bg-purple-600",
        badgeBg: "bg-purple-700 text-white",
      },
      actions: {
        primary: {
          label: "View Profile",
          onClick: () => setMessage("Viewing Alice's profile"),
          className: "bg-purple-600 text-white hover:bg-purple-500",
        },
        secondary: {
          label: "Message",
          onClick: () => setMessage("Opening message to Alice"),
          className: "bg-gray-700 text-white hover:bg-gray-600",
        },
      },
    },
    {
      user: {
        name: "Bob Smith",
        email: "bob@example.com",
        avatar: "👨‍💻",
        role: "Developer",
        status: "Online",
        stats: {
          projects: 28,
          commits: 1523,
          reviews: 89,
        },
      },
      theme: {
        backgroundColor: "bg-gray-800",
        textColor: "text-gray-100",
        avatarBg: "bg-green-600",
        badgeBg: "bg-green-700 text-white",
      },
      actions: {
        primary: {
          label: "View Profile",
          onClick: () => setMessage("Viewing Bob's profile"),
          className: "bg-green-600 text-white hover:bg-green-500",
        },
        secondary: {
          label: "Collaborate",
          onClick: () => setMessage("Starting collaboration with Bob"),
          className: "bg-gray-700 text-white hover:bg-gray-600",
        },
      },
    },
  ]

  return (
    <section className="p-8 rounded-xl bg-gray-800 shadow-2xl space-y-6">
      <h2 className="text-2xl font-bold text-gray-100">
        Complex / Nested Props
      </h2>
      <p className="text-gray-300">
        This example shows deeply nested props including objects, functions,
        optional fields, and dynamic rendering.
      </p>

      {message && (
        <div className="p-4 bg-blue-900/40 border-l-4 border-blue-500 rounded text-blue-200">
          {message}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {users.map((userData, index) => (
          <UserProfileCard key={index} {...userData} />
        ))}
      </div>
    </section>
  )
}

export default ComplexProps
