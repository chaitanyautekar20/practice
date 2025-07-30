import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setname] = useState("Chaitanya")
  const [form, setform] = useState({name:"",phone:""})
const handleClick=()=>{
  alert("The buton was Click")
}

const handelMouseover=()=>{
  alert("This is the mouse hover")
}

const handelChange=(e)=>{
  // setname(e.target.value)
  setform({...form,[e.target.name]:e.target.value})  
  console.log(form)
}
  return (
    <>
      <div className="button">
        <button onClick={handleClick}>clickme</button>
      </div>
      <div className="red" onMouseOver={handelMouseover}>
        I am a Red
            </div>
      {/* <input type='text' value={name} onChange={handelChange}/> */}
      <input type='text'name="name" value={form.name} onChange={handelChange}/>
      <input type='text'name="phone" value={form.phone} onChange={handelChange}/>

    </>
  )
}

export default App
