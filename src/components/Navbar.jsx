import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../style/nav.css'
import '../style/dashboard.css'
import { useDispatch, useSelector } from 'react-redux'

const Navbar = () => {
    let[menu,setMenu]=useState(false)
    let user=useSelector((state)=>{return state.user})
    let dispatch=useDispatch()
   let {pathname:path}=useLocation();
  return (
   
        <nav>
      <Link to="/">  <div className='logo'>
            <h2>Fit-Bit</h2>
            <i className='bx bx-dumbbell'></i>
        </div>
        </Link>

        <div className='nav-links'>
       {  path!=="/trainerdashboard" &&  
       <>   <Link to={""}>Trainers</Link>
        <Link to={"/workout"} >Workouts</Link>
        <Link to={"/myworkouts"} >My Workouts</Link>
        <Link to={"/bmr"} >BMR calculator</Link>
        <Link to={""} >Profile</Link> </>
        }
        {  path==="/trainerdashboard" &&  
       
        <Link to={"/workout"} >Workouts</Link>
        
        }
        
        
        </div>

        <div className='logout'>
        <button onClick={()=>{dispatch({type:"logout",payload:null})}}>Logout</button>
        </div>
        <div className='hambergs' onClick={()=>{setMenu(!menu)}}>
        
        <i className='bx bx-menu' ></i>

        </div> 

       { menu &&<div className='menu' data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" >
        <Link to={""} >Trainers</Link>
        <Link to={"/workout"} >Workouts</Link>
        <Link to={""} >My Workouts</Link>
        <Link to={"/bmr"} >BMR calculator</Link>
        <Link to={""} >Profile</Link>
        <Link to={""}  onClick={()=>{dispatch({type:"logout",payload:null})}} >Logout</Link>
        </div>}
       
 
        </nav>
    
  )
}

export default Navbar





