import React from 'react'
import { useNavigate } from 'react-router-dom'
const Dashboard = () => {
  let navigate=useNavigate()
  // function logout(){
  //   localStorage.removeItem("loggedIn")
  //   navigate('/')
  // }
  return (
    <> 
    <center><h2>Welcome to dashboard!</h2></center>
    <button onClick={()=>{
      localStorage.clear() 
      navigate("/")
    }}>Logout</button>
    </>
  )
}

export default Dashboard
