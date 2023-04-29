import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from './Navbar'

const Myworkouts = () => {
    let  user=useSelector((state)=>{return state.user})
  return (
    <>
    <Navbar/>
    {   user && <div className='all-workouts'>
     {
        user.workouts.map((workout)=>{
            return(
                <div className='workout'>
                <img src={workout.gifUrl} alt='gifimage'/> 
                <h3>Workout Name: {workout.name}</h3>
                <p>Body part: {workout.bodyPart}</p>
                <p>Equipment: {workout.equipment}</p>
               
                </div>
                )


        })
     }

     </div>}
     </>
  )
}

export default Myworkouts