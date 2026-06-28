import React from 'react'
import {toast,ToastContainer} from 'react-toastify'

const App = () => {
    function toastExample(){
        toast.success("Login Success...")
    }
  return (
    <>
    <button onClick={toastExample}>Click</button>
    <ToastContainer theme='colored' autoClose={3000}/> 
    </>
  )
}

export default App
