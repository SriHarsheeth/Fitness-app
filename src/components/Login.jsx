import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import '../style/signup.css'



const Login = () => {
  let userstate=useSelector((state)=>{return state.user})
  let dispatch=useDispatch() 
let [email,setEmail]=useState("")
let [password,setPassword]=useState("")
let[userkind,setUserkind]=useState("")
let navigate=useNavigate()

let handlelogin=(e)=>{
  e.preventDefault();
  let api=userkind==="user"? "http://localhost:4000/user":
  "http://localhost:4000/trainer"
  fetch(api)
  .then((res)=>{ return res.json()})
  .then((data)=>{ 
    let userdetails=data.find((user)=>{return email=== user.email})
    if(userdetails===undefined)
    {
      alert("invalid email !!!")
    }
    else if(password!==userdetails.password)
    {
       alert("invalid password")
    }
    else{
      dispatch({type:"add_user",payload:userdetails})
   navigate(userkind==="user"?"/dashboard":"/trainerdashboard")
    }
  })
}


  return (
    <div className=' signup-mainpage'>
    <div className='signup-page'>
    <div className='signup-container'>
    <h1>Sign In</h1>
           <hr></hr>
      <form onSubmit={handlelogin}>
             
              <input type="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} ></input>
               <input type="password" placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}  ></input>
            
       <fieldset>
                   <legend>Signup as</legend>
                <label htmlFor='user'>  <input type="radio" id="user" name='kind' value={"user"} onClick={()=>{setUserkind("user")}}  /> User</label>
                    <label htmlFor='trainer'>  <input type="radio" id="trainer" name='kind' value={"trainer"} onClick={()=>{setUserkind("trainer")}} /> trainer</label>
   
               </fieldset>
               <input type={'submit'} value={"Login"} />
           </form>
    </div>
    <div className='signup-bottom'>
              Don't have an account ?  
               <Link to={"/"}><button><b>Signup here</b></button></Link> 
           </div>
   
    </div>
       </div> 
   
   
  )
}



export default Login