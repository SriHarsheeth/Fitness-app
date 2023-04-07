import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import '../style/workouts.css'
import { useDispatch, useSelector } from 'react-redux';

const Workout = (workout) => {

    let[workouts,setWorkouts]=useState(null)
    let dispatch=useDispatch()
    let user=useSelector((state)=>{ return state.user})
    let userdetails={...user}
    if (user.workout===undefined){
        userdetails.workout=[]
    }
   
    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b9d5cbba4amsh3cf7fd896444022p1662acjsn494128db6fe9',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };
        
        fetch('https://exercisedb.p.rapidapi.com/exercises', options)
            .then(response => response.json())
            .then(data =>{ console.log(data); setWorkouts(data)})
            .catch(err => console.error(err));
    },[])



    let addworkout=()=>{
        userdetails.workout.push(workout)
        dispatch(
            {
                type:"workoutadded",
                payload:""
            }
        )

    }
  return (
    <div>
        <Navbar/>
     {   workouts && <div className='all-workouts'>
     {
        workouts.map((workout)=>{
            return(
                <div className='workout'>
                <img src={workout.gifUrl} alt='gifimage'/> 
                <h3>Workout Name:{workout.name}</h3>
                <p>Body part:{workout.bodyPart}</p>
                <p>Equipment:{workout.equipment}</p>
                <button onClick={()=>{addworkout(workout)}}>ADD</button>
                <button>Remove</button>
                </div>
                )


        })
     }

     </div>}
        

    </div>
  )
}

export default Workout