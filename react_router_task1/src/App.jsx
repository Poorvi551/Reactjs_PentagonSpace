import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Profilepage from './pages/Profilepage'
import Settingspage from './pages/Settingspage'
import Error from './pages/Error'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/profile' element={<Profilepage/>}/>
        <Route path='/settings' element={<Settingspage/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </>
  )
}

export default App
