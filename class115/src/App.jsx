import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/home'
import Login from './components/login'
import About from './components/about'
import User from './components/user'
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:  <><Navbar/><Home /></>
    },
    {
      path: "/login",
      element: <><Navbar/><Login/></>
    },
    {
      path: "/about",
      element: <><Navbar/><About/></>
    },
    {
      path: "/user:username",
      element: <><Navbar/><User/></>
    },
  ])

  return (
    <>
    <div>hell </div>
      
      <RouterProvider router={router} />
    </>
  )
}

export default App
