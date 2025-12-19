import { useState } from "react"

interface ButtonProps {
  text: string
  color?: "blue" | "green" | "red"
  size?: "sm" | "md" | "lg"
  onClick?: () => void
  disabled?: boolean
}

function Button({
  text,
  color = "blue",
  size = "md",
  onClick,
  disabled = false,
}: ButtonProps) {
  const colorClasses = {
    blue: "bg-blue-600 hover:bg-blue-500",
    green: "bg-green-600 hover:bg-green-500",
    red: "bg-red-600 hover:bg-red-500",
  }

  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`
        ${colorClasses[color]}
        ${sizeClasses[size]}
        text-white rounded-lg font-medium
        transition
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
    >
      {text}
    </button>
  )
}

function BasicProps() {
  const [clickCount, setClickCount] = useState(0)

  return (
    <section className="p-8 rounded-xl bg-gray-800 text-gray-100 shadow-2xl space-y-8">
      <header>
        <h2 className="text-2xl font-bold">Basic Props</h2>
        <p className="text-gray-300">
          Button variations using different prop combinations
        </p>
      </header>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Colors</h3>
        <div className="flex flex-wrap gap-3">
          <Button text="Blue" color="blue" onClick={() => setClickCount((c) => c + 1)} />
          <Button text="Green" color="green" onClick={() => setClickCount((c) => c + 1)} />
          <Button text="Red" color="red" onClick={() => setClickCount((c) => c + 1)} />
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Sizes</h3>
        <div className="flex flex-wrap gap-3 items-center">
          <Button text="Small" size="sm" onClick={() => setClickCount((c) => c + 1)} />
          <Button text="Medium" size="md" onClick={() => setClickCount((c) => c + 1)} />
          <Button text="Large" size="lg" onClick={() => setClickCount((c) => c + 1)} />
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Disabled State</h3>
        <div className="flex flex-wrap gap-3">
          <Button text="Disabled Blue" disabled />
          <Button text="Disabled Green" color="green" disabled />
          <Button text="Disabled Red" color="red" disabled />
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Mixed Combinations</h3>
        <div className="flex flex-wrap gap-3 items-center">
          <Button text="Small Green" size="sm" color="green" onClick={() => setClickCount((c) => c + 1)} />
          <Button text="Large Red" size="lg" color="red" onClick={() => setClickCount((c) => c + 1)} />
          <Button
            text="Clickable Blue"
            onClick={() => setClickCount((c) => c + 1)}
          />
          <Button text="Disabled Large" size="lg" disabled />
        </div>

        <p className="text-sm text-gray-400">
          Click count: <span className="font-semibold">{clickCount}</span>
        </p>
      </div>
    </section>
  )
}

export default BasicProps
