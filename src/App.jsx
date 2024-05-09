import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Login from './components/Login'
import { createBrowserRouter ,RouterProvider,Link} from 'react-router-dom'
import Signup from './components/Signup'
import Payment from './components/Payment'


const App = () => {
  const [isLogin,setIsLogin]= useState(false)
const[username,setUsername]= useState('')
  const router = createBrowserRouter([
    {path: '/',
    element :  <><Navbar isLogin={isLogin} username={username} setIsLogin={setIsLogin}/><Hero isLogin={isLogin}/></>},
    {path: '/about',
    element : <><Navbar isLogin={isLogin}username={username} setIsLogin={setIsLogin} /><About/></>},
    {path: '/contact',
    element :<><Navbar isLogin={isLogin}username={username} setIsLogin={setIsLogin}/><Contact/></>},
    {path: '/services',
    element : <><Navbar isLogin={isLogin} username={username} setIsLogin={setIsLogin}/><Services/></>},
    {path: '/login',
    element : <><Navbar isLogin={isLogin} username={username} setIsLogin={setIsLogin}/><Login setName={setUsername} setLogin={setIsLogin} /></>},
    {path: '/signup',
    element : <><Navbar /><Signup isLogin={setIsLogin}/></>},
    {path: '/payment',
    element : <Payment/>},
  ])
  return (
    <div className=' w-full h-fit overflow-x-hidden bg-black text-white'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App