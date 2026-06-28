import React,{useState} from 'react'
import ToastExample from './components/ToastExample'

const App = () => {
  const[toast,setToast]=useState("")
  function changeData(){
    setToast("Item added to cart")
    setTimeout(()=>{
      setToast("")
    },2000)

  }
  return (
    <>
      <button onClick={changeData}>Add Item</button>
      {toast && <ToastExample a={toast}/>}
    </>
  )
}

export default App
