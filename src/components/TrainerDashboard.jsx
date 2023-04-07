import React, { useRef } from 'react'

import Navbar from './Navbar'

const TrainerDashboard = () => {
    let wname=useRef()
   let muscle= useRef()
   let part= useRef()
   let eqip= useRef()
    let url=useRef()

  

    let handleaddworkout=(e)=>{
        e.preventDefault()
        let workout={
          bodyPart:part.current.value,
          equipment:eqip.current.value,
          gifUrl:url.current.value,
          name:wname.current.value,
          target:muscle.current.value
    
        }
        let api="http://localhost:4000/workout"
        let config={
          method:"POST",
          headers:{"content-type":"application/json"},
          body:JSON.stringify(workout)
        }
        fetch(api,config)
        .then(()=>{
          alert("New workout added successfully")

          window.location.reload()
          // part.current.value=""
          // eqip.current.value=""
          // url.current.value=""
          // wname.current.value=""
          // muscle.current.value=""

        })
        
    }
  return (
    <div>
        <Navbar/>

        <div className=' signup-mainpage'>
    <div className='signup-page'>
    <div className='signup-container'>
    <h1>Add new Workouts</h1>
           <hr></hr>
      <form onSubmit={handleaddworkout} >
             
             <input type="text" placeholder='Workout Name' ref={wname} />
             <input type="text" placeholder='Muscle' ref={muscle} />
             <input type="text" placeholder='Body Part' ref={part} />
             <input type="text" placeholder='Equipments' ref={eqip} />
             <input type="url" placeholder='Workouts gif' ref={url} />
             <input type="submit" value="Add Workout" />
           </form>
    </div>  
   
   
    </div>
       </div>
    </div>
  )
}

export default TrainerDashboard