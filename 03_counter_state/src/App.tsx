import { useState } from "react"
import "./App.css"

function App() {
  const [count, setCount] = useState<number>(0)
  const [userInput, setUserInput] = useState<string>("0")

  const numericInput = Number(userInput)

  function increment() {
    setCount((prev) => prev + 1)
  }

  function decrement() {
    setCount((prev) => prev - 1)
  }

  function reset() {
    setCount(0)
  }

  function setValue(value: number) {
    if (Number.isNaN(value)) return
    setCount(value)
  }

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUserInput(e.target.value)
  }

  return (
    <>
      <h1>Counter State Example</h1>

      <div className="card">Count is {count}</div>

      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>

      <div style={{ margin: "10px 0" }}>
        <input
          placeholder="Enter a number"
          onChange={handleOnChange}
          value={userInput}
          type="number"
        />

        <button
          onClick={() => setValue(numericInput)}
          disabled={Number.isNaN(numericInput)}
        >
          Set Value to {userInput}
        </button>
      </div>
    </>
  )
}

export default App
