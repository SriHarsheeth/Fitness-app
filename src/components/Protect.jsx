import React from 'react'
import {  useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Protect = ({child}) => {
   let user= useSelector((state)=>{return state})
 
  return (
    <div>
     {user!=null ?(child)  : (<Navigate to="/login" replace/>)}
    
    </div>
  )
}

export default Protect