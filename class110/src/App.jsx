import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
const [showbtn, setshowbtn] = useState(false)
const [todos, settodos] = useState([
  {
    title:"hey this first todo",
    desc:"This is the desc"
  },
  {
    title:"hey this is the second title",
    desc:"This the desc of second"
  },
  {
    title:"hey this is the third todo",
    desc:"this is the third desc"
  }
])
const Todo=({todo})=>{return (<>
    <div className="todo">{todo.title}</div>
    <div className="todo">{todo.desc}</div>

</>)}

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
      {showbtn?<button>This is the btn</button>:"dont show btn"}
      {/* anothee way to shwobtn */
      // showbtn && <button>this is the second btn</button>
      }
      {/* <Todo/> */}
      {/* for dispalying lis their is method */}
      {
        todos.map(todo=>{
          return <Todo todo={todo}/>
        })
      }
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={()=>{
          setshowbtn(!showbtn)
        }}>click me to show the sec btn</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
