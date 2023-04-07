import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../style/signup.css'

const Signin = () => {
  let [userkind,setUserkind]=useState("")
  let [username,setUsername]=useState("");
  let [email,setEmail]=useState("");
  let [password,setPassword]=useState("")
  let [confirm_password,setConfirm_password]=useState("")
  let [age,setAge]=useState("")
  let [gender,setGender]=useState("")
  let navigate=useNavigate()


  let handlesignup=(e)=>{
    e.preventDefault();

    let accountDetails={
      username,email,password,age,gender
    }
   
    let config={
      method:"POST",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify(accountDetails)
    }
    let api=userkind==="user"? "http://localhost:4000/user":
                               "http://localhost:4000/trainer"
    fetch(api,config)
    
    .then(()=>{
      alert("signin successfull")
      navigate("/login")
    })
  }
  
    
  return (
    

     <div className=' signup-mainpage'>
 <div className='signup-page'>
 <div className='signup-container'>
 <h1>Register</h1>
        <hr></hr>
   <form onSubmit={handlesignup}>
           <input type="text" placeholder='Username' value={username} onChange={(e)=>{setUsername(e.target.value)}} required ></input>
           <input type="email" placeholder="Email" value={email}  onChange={(e)=>{setEmail(e.target.value)}} required ></input>
            <input type="password" placeholder='Password' value={password}  onChange={(e)=>{setPassword(e.target.value)}} required ></input>
            <input type="text" placeholder='Confirm Password' value={confirm_password}  onChange={(e)=>{setConfirm_password(e.target.value)}} required ></input> 
            <input type="number" placeholder='Age' value={age}  onChange={(e)=>{setAge(e.target.value)}} required ></input>
            <fieldset>
                <legend align="center" >Gender </legend>
             <label htmlFor='Male'>  <input type="radio" id="Male" name='gender' onClick={()=>{setGender("male")}} /> Male</label>
                 <label htmlFor='Female'>  <input type="radio" id="Female" name='gender' onClick={()=>{setGender("female")}}/> Female</label>

            </fieldset>
             <fieldset>
                <legend>Signup as</legend>
               <label htmlFor='user'>  <input type="radio" id="user" name='kind' onClick={()=>{setUserkind("user")}}/> User</label>
                 <label htmlFor='trainer'>  <input type="radio" id="trainer" name='kind' onClick={()=>{setUserkind("trainer")}}/> trainer</label>

            </fieldset>
            
            <input type={'submit'} value={"SignUp"} />
            
        </form>
 </div>
 <div className='signup-bottom'>
           Already have an account ?  
            <button><Link to="/login"> <b>Signin here </b></Link> </button>
        </div>
       

 </div>
    </div> 




  )
}

export default Signin