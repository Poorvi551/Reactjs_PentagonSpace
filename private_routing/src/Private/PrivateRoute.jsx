import React from 'react'
import { Navigate } from 'react-router-dom'
import {toast} from 'react-toastify'
const PrivateRoute = (props) => {
    let isLoggedIn=localStorage.getItem("loggedIn")
    console.log(typeof isLoggedIn);//local storage returns string
    if(isLoggedIn){
        return props.children
    }else{
        toast.warn("Please Login")
        return <Navigate to={'/'}/>
    }
}

export default PrivateRoute
