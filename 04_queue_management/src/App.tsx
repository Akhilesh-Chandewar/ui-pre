import { useState } from "react"
import "./App.css"
import QueueDisplay from "./components/QueueDisplay"
import QueueForm from "./components/QueueForm"

export interface QueueItem {
  id: number
  name: string
  service: string
  status: "waiting" | "processing" | "done"
}

function App() {
  const [queue, setQueue] = useState<QueueItem[]>([])

  function addDataToQueue(data: Omit<QueueItem, "id" | "status">) {
    setQueue((queue) => [
      ...queue,
      {
        ...data,
        id: Date.now(),
        status: "waiting",
      },
    ])
  }

  function updateStatus(id : number , updatedStatus : QueueItem["status"]) {
    setQueue((queue) => {
      return queue.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            status: updatedStatus,
          }
        }
        return item
      })
    })
  }

  function removeDataFromQueue(id : number) {
    setQueue((queue) => {
      return queue.filter((item) => item.id !== id)
    })
    
  }

  return (
    <div className="app">
      <header>
        <h1>Queue Management System</h1>
        <p>Manage your queue with ease.</p>
      </header>
      <main>
        <QueueForm onAdd={addDataToQueue}/>
        <QueueDisplay queue={queue} onUpdateStatus={updateStatus} onRemove={removeDataFromQueue} />
      </main>
    </div>
  )
}

export default App