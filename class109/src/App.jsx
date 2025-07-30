import { useState,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  // can use it as the ref also
  const btnref = useRef()
  // let a=0;  // so we will not be able to use this variale
  // so react give us this functionality
  const a = useRef(0)
  useEffect(() => {
    a.current =a.current+1
    // when ever the state variable changes then rerendering takes pace
    // so that It can persist the variable value after rerender
    console.log(`rerendering the a value${a.current}`)
    // ref.current.style.backgroundColor="red"
  })
    
   useEffect(() => {
// we can set the style
    btnref.current.style.backgroundColor="red"
  },[])
  
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={btnref} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={()=>{
        btnref.current.style.display="none"
      }}>change me</button>
    </>
  )
}

export default App
