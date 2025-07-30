import React from 'react'
import { Link } from 'react-router-dom'
const navbar = () => {
  return (
    <div>
      <nav>
        <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/about'><li>About</li></Link>
            <Link to='/login'><li>Contact us</li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default navbar
