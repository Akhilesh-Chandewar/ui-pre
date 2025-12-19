import { createContext, useContext, useState } from "react"

type Theme = "light" | "dark"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark")

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === "dark" ? "dark" : ""}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider")
  }
  return context
}

function ThemeToggler() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="flex items-center justify-between">
      <p className="text-gray-300">
        Current theme: <span className="font-semibold">{theme}</span>
      </p>

      <button
        onClick={toggleTheme}
        className="
          px-4 py-2 rounded-lg font-medium
          bg-blue-600 text-white
          hover:bg-blue-500 transition
        "
      >
        Toggle Theme
      </button>
    </div>
  )
}

export default ThemeToggler
