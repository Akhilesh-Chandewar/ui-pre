import BasicProps from "./components/BasicProps"
import ChildrenProps from "./components/ChildrenProps"
import ComplexProps from "./components/ComplexProps"
import RefProps from "./components/RefProps"
import ThemeToggler, { ThemeProvider, useTheme } from "./components/ThemeToggler"

function Navigation() {
  return (
    <nav className="sticky top-0 z-10 bg-gray-800 shadow-lg border-b border-gray-700">
      <ul className="flex justify-center gap-3 p-4 flex-wrap">
        {[
          "basic",
          "children",
          "complex",
          "ref",
          "theme",
        ].map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition shadow"
            >
              {id.toUpperCase()} 🚀
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section
      id={id}
      className="p-10 rounded-xl border border-gray-700 bg-gray-800 text-gray-100"
    >
      {children}
    </section>
  )
}

function AppContent() {
  const { theme } = useTheme()

  return (
    <div
      className={`
        min-h-screen transition-colors
        ${theme === "dark" ? "bg-gray-800" : "bg-gray-100 text-gray-900"}
      `}
    >
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
        <Section id="basic"><BasicProps /></Section>
        <Section id="children"><ChildrenProps /></Section>
        <Section id="complex"><ComplexProps /></Section>
        <Section id="ref"><RefProps /></Section>
        <Section id="theme"><ThemeToggler /></Section>
      </div>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
