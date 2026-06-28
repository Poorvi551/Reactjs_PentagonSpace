import React from 'react';
import {useState} from 'react';

const App = () =>{
  const [state, setState]=useState(false)
  let message;
  if(state){
    message=<h1>Welcome to home page</h1>
  }else{
    message=<h1>Please Login</h1>
  }
  function toggle(){
    setState(!state)
  }
  return (
    <>
    <h1>{message}</h1>
    <button onClick={toggle}>Click</button>
    </>
  )
}
export default App;