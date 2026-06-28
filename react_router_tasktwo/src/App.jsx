import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
      </Routes>
    </>
  )
}

export default App
