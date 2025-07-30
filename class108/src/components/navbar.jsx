import React, {useEffect}from 'react'

const navbar = ({color}) => {
  // case1:Run on every render
  useEffect(() => {
  alert("Run on every render")  }
  )
  // case 2:Run only on first render
useEffect(() => {
  alert("Welcome to my page")
}, [])

useEffect(() => {
  alert("Welcome to my page")

}, [])
  useEffect(() => {
    alert("the color has Changed")
  }, [color])
  // another type of useeffect
  // example of cleanup function
  useEffect(() => {
    alert("Hello ")
    return () => {
      alert("The component was unmounted")
    }
  }, [])
  
  return (
    <div>
      <nav>
        <ul>
            <li>Home{color}</li>
            <li>Contact</li>
            <li>About</li>
        </ul>
      </nav>
    </div>
  )
}

export default navbar
