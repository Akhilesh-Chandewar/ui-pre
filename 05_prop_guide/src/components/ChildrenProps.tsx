import React from "react"

interface CardProps {
  children: React.ReactNode
  title: string
  color?: "blue" | "green" | "red"
}

interface ContainerProps {
  children: React.ReactNode
  layout?: "vertical" | "horizontal" | "grid"
}

function Card({ children, title, color = "blue" }: CardProps) {
  const colorClasses = {
    blue: "border-blue-600 bg-blue-900/40",
    green: "border-green-600 bg-green-900/40",
    red: "border-red-600 bg-red-900/40",
  }

  return (
    <div
      className={`
        p-5 rounded-xl border-2
        ${colorClasses[color]}
        text-gray-100 space-y-2
      `}
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="text-gray-300">{children}</div>
    </div>
  )
}

function Container({ children, layout = "grid" }: ContainerProps) {
  const layoutClasses = {
    vertical: "flex flex-col space-y-4",
    horizontal: "flex flex-row flex-wrap gap-4",
    grid: "grid grid-cols-1 md:grid-cols-3 gap-4",
  }

  return <div className={layoutClasses[layout]}>{children}</div>
}

function ChildrenProps() {
  return (
    <section className="p-8 rounded-xl bg-gray-800 shadow-2xl space-y-6">
      <h2 className="text-2xl font-bold text-gray-100">
        Children Props
      </h2>

      <Container layout="grid">
        <Card title="Blue Card" color="blue">
          <p>This content is passed as children.</p>
        </Card>

        <Card title="Green Card" color="green">
          <ul className="list-disc list-inside">
            <li>Reusable</li>
            <li>Flexible</li>
            <li>Composable</li>
          </ul>
        </Card>

        <Card title="Red Card" color="red">
          <button className="px-3 py-1 bg-red-600 rounded-md">
            Action Button
          </button>
        </Card>
      </Container>

      <Container layout="horizontal">
        <Card title="Blue Card" color="blue">
          <p>This content is passed as children.</p>
        </Card>

        <Card title="Green Card" color="green">
          <ul className="list-disc list-inside">
            <li>Reusable</li>
            <li>Flexible</li>
            <li>Composable</li>
          </ul>
        </Card>

        <Card title="Red Card" color="red">
          <button className="px-3 py-1 bg-red-600 rounded-md">
            Action Button
          </button>
        </Card>
      </Container>

      <Container layout="vertical">
        <Card title="Blue Card" color="blue">
          <p>This content is passed as children.</p>
        </Card>

        <Card title="Green Card" color="green">
          <ul className="list-disc list-inside">
            <li>Reusable</li>
            <li>Flexible</li>
            <li>Composable</li>
          </ul>
        </Card>

        <Card title="Red Card" color="red">
          <button className="px-3 py-1 bg-red-600 rounded-md">
            Action Button
          </button>
        </Card>
      </Container>
    </section>
  )
}

export default ChildrenProps
