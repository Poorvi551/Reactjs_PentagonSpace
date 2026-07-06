import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  let navigate=useNavigate()

  function login(e){
    e.preventDefault()
    if(username==='abc' && password==='123'){
      toast.success("Login success!")
      localStorage.setItem("loggedIn", true)
      navigate('/dashboard')
    }else{
      toast.error("Invalid credentials")
    }
  }
return (
    <>
    <center>
      <h2>Login Page</h2>
      <form onSubmit={login}>
        <input 
        type="text" 
        placeholder='Enter username'
        required 
        value={username}
        onChange={(e)=>{setUsername(e.target.value)}}
         /><br/>
        <input
         type="password" 
         placeholder='Enter password'
         required
         value={password}
         onChange={(e)=>{setPassword(e.target.value)}}
          /><br/>
        <button>Login</button>
      </form>
    </center>
    </>
  )
}

export default Login
