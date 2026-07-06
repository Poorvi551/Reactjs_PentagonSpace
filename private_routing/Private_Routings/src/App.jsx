import React from 'react'
import Dashboard from './pages/Dashboard.jsx'
import Profile from"./pages/Profile.jsx"
import {Routes,Route} from 'react-router-dom'
import PrivateRoute from './Private/PrivateRoute.jsx'
import Login from './pages/Login.jsx'
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/dashboard' element={
        <PrivateRoute>
          <Dashboard/>
        </PrivateRoute>}/>
      <Route path='/profile' element={
        <PrivateRoute>
          <Profile/>
        </PrivateRoute>}/>
    </Routes>
      
    </>
  )
}

export default App
