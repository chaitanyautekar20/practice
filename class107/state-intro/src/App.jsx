import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="counter">
        <p>This is count{count}</p>
        <button onClick={()=>{
          setCount(count+1)
        }}>Clickme</button>
        <button onClick={()=>{
          setCount(0)
        }
        }>reset</button>
      </div>
      {/* hooks in the react from react website*/}
    </>
  )
}

export default App
