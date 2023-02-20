import { useState } from 'react'
import './App.css'
import WaterRising from './Games/WaterRising'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <WaterRising />
    </div>
  )
}

export default App
