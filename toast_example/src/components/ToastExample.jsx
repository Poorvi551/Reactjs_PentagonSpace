import React from 'react'
import ReactDOM from 'react-dom'

const ToastExample = (props) => {
  return ReactDOM.createPortal(
    <div style={{
        position:'fixed',
        right:"20px",
        top:"10px",
        backgroundColor:"black",
        color:"white",
        borderRadius:"10px",
        padding:"10px"
    }}>
        <h1>{props.a}</h1>
      
    </div>,
    document.getElementById("toast")
  )
}

export default ToastExample
