import { useRef, forwardRef } from "react"

interface CustomInputProps {
  label: string
  placeholder?: string
  className?: string
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ label, placeholder, className }, ref) => {
    return (
      <div className="mb-4">
        <label className="block text-gray-300 font-medium mb-2">
          {label}
        </label>
        <input
          ref={ref}
          type="text"
          placeholder={placeholder}
          className={`
            w-full px-4 py-2 rounded-lg
            bg-gray-700 text-gray-100
            border border-gray-600
            focus:outline-none focus:ring-2 focus:ring-blue-500
            ${className ?? ""}
          `}
        />
      </div>
    )
  }
)

CustomInput.displayName = "CustomInput"

function RefProps() {
  const inputRef = useRef<HTMLInputElement>(null)
  const secondInputRef = useRef<HTMLInputElement>(null)

  const focusInput = () => {
    inputRef.current?.focus()
  }

  const getInputValue = () => {
    if (inputRef.current) {
      alert(`Input value: ${inputRef.current.value}`)
    }
  }

  const getSecondInputValue = () => {
    if (secondInputRef.current) {
      alert(`Second input value: ${secondInputRef.current.value}`)
    }
  }

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = ""
      inputRef.current.focus()
    }
  }

  const clearSecondInput = () => {
    if (secondInputRef.current) {
      secondInputRef.current.value = ""
      secondInputRef.current.focus()
    }
  }

  const focusSecondInput = () => {
    secondInputRef.current?.focus()
  }

  return (
    <section className="p-8 rounded-xl bg-gray-800 shadow-2xl space-y-6">
      <h2 className="text-2xl font-bold text-gray-100">
        Ref Props
      </h2>

      <p className="text-gray-300">
        Refs provide a way to access DOM nodes or React elements directly. Use{" "}
        <code className="bg-gray-700 px-2 py-1 rounded text-sm text-blue-300">
          forwardRef
        </code>{" "}
        to pass refs to child components.
      </p>

      <div className="space-y-6">
        <div className="bg-gray-700 p-6 rounded-xl border border-gray-600">
          <h3 className="text-xl font-semibold mb-4 text-gray-100">
            Try it out:
          </h3>

          <CustomInput
            ref={inputRef}
            label="First Input (with ref)"
            placeholder="Type something..."
          />

          <CustomInput
            ref={secondInputRef}
            label="Second Input (with ref)"
            placeholder="Type something else..."
          />

          <div className="flex flex-wrap gap-3 mt-4">
            <button
              onClick={focusInput}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
            >
              Focus First Input
            </button>

            <button
              onClick={focusSecondInput}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition"
            >
              Focus Second Input
            </button>

            <button
              onClick={getInputValue}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition"
            >
              Get First Input Value
            </button>

            <button
              onClick={getSecondInputValue}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition"
            >
              Get Second Input Value
            </button>

            <button
              onClick={clearInput}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition"
            >
              Clear First Input
            </button>

            <button
              onClick={clearSecondInput}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition"
            >
              Clear Second Input
            </button>
          </div>
        </div>

        <div className="bg-yellow-900/30 p-4 rounded-lg border-l-4 border-yellow-500">
          <h4 className="font-semibold text-yellow-300 mb-2">
            When to use refs:
          </h4>
          <ul className="list-disc list-inside text-gray-200 space-y-1">
            <li>Managing focus, text selection, or media playback</li>
            <li>Triggering imperative animations</li>
            <li>Integrating with third-party DOM libraries</li>
            <li>Accessing DOM measurements</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default RefProps
