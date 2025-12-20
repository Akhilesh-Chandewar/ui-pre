import './App.css'
import Counter from './components/Counter'
import CounterButton from './components/CounterButton'
import CounterValue from './components/CounterValue'
import Navbar from './components/Navbar'
import Post from './components/Post'

function App() {
  return (
    <>
      <h1>Zustand</h1>
      <Navbar />
      <Counter />
      <CounterValue />
      <CounterButton />
      <Post />
    </>
  )
}

export default App
