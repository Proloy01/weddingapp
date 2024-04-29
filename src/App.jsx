import React from 'react'
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
  const router = createBrowserRouter([
    {path: '/',
    element :  <><Navbar/><Hero/></>},
    {path: '/about',
    element : <><Navbar/><About/></>},
    {path: '/contact',
    element :<><Navbar/><Contact/></>},
    {path: '/services',
    element : <><Navbar/><Services/></>},
    {path: '/login',
    element : <><Navbar/><Login/></>},
    {path: '/signup',
    element : <><Navbar/><Signup/></>},
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