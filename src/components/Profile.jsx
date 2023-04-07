import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Profile = () => {
  let user=useSelector((state)=>{ return state});
  let dispatch=useDispatch();

  
  return (
   
    (<div>
        <h1>User Profile Page</h1>
        <h1>{user.email}</h1>
        <h1>{user.password}</h1>

       
         <button onClick={()=>{dispatch({type:"logout",payload:null})}}> logout</button>
    </div>)
    
  )
}

export default Profile