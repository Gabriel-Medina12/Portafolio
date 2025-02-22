import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import Navbar from './components/Navbar'
import Home from '../pages/home'
function App() {


  return (
    <>
    <Navbar/>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth/login' element={<Login/>}/>
        <Route path='/auth/Register' element={<Register/>}/>
      </Routes>
    </>
  )
}

export default App
