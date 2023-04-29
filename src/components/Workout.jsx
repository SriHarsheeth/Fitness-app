import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import '../style/workouts.css'
import { useDispatch, useSelector } from 'react-redux';
import {PuffLoader} from 'react-spinners'

const Workout = (workout) => {

    let[workouts,setWorkouts]=useState(null)
    let dispatch=useDispatch()
    let user=useSelector((state)=>{ return state.user})
    let userdetails={...user}
    if (userdetails.workouts===undefined){
        userdetails.workouts=[]
    }
   
    useEffect(()=>{
        setTimeout(()=>{
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
        },1000)
    },[])



    let addworkout=(workout)=>{
        userdetails.workouts.push(workout)
        dispatch(
            {
                type:"workout_added",
                payload:userdetails
            }
        )
        fetch("http://localhost:4000/user/"+user.id,{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(userdetails)
        })
        .then(()=>{alert("workout added");})
        console.log(userdetails);

    }

    let handleremoveworkout=(wid)=>{
        let start=userdetails.workouts.findIndex((w)=>{return w.id=wid })
        userdetails.workouts.splice(start ,1)
        dispatch(
            {
                type:"workout_added",
                payload:userdetails
            }
        )
        fetch("http://localhost:4000/user/"+user.id,{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(userdetails)
        })
        .then(()=>{alert("workout removed");})
        console.log(userdetails);

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
                <h3>Workout Name: {workout.name}</h3>
                <p>Body part: {workout.bodyPart}</p>
                <p>Equipment: {workout.equipment}</p>
                {
                    !userdetails.workouts.some((w)=>{ return w.id===workout.id }) &&
                    <button onClick={()=>{addworkout(workout)}}>ADD</button>
                    }
                    
                {userdetails.workouts.some((w)=>{ return w.id===workout.id }) && 
                <button onClick={()=>{handleremoveworkout(workout.id)}}>Remove</button>
                }
                </div>
                )


        })
     }

     </div>}
     {
        !workouts &&  <PuffLoader color="#36d7b7"/> 
        
     }
        

    </div>
  )
}

export default Workout