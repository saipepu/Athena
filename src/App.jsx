import { useState } from 'react'
import './App.css'
// import WaterRising from './Games/WaterRising'
import StoryBased from './Games/StoryBased'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <WaterRising /> */}
      <StoryBased />
    </div>
  )
}

export default App
