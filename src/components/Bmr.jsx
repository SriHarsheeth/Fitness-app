import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '../style/bmr.css'
import Navbar from './Navbar'

const Bmr = () => {
  let user=useSelector((state)=>{return state.user})
 let age= useRef()
 let height= useRef()
 let weight= useRef()
 let[calc,setCalc]=useState(false)
 let[healthdata,setHealthdata]=useState(null)
 let dispatch=useDispatch()
 let navigate=useNavigate()

 let handleUpdateHealth=()=>{
  dispatch({type:"updatehealth",
            payload:{bmi:healthdata.bmi,health:healthdata.health}})
            fetch("http://localhost:4000/user/" + user.id , 
            {
                method : "PUT" ,
                headers : { "Content-Type" : "application/json" } ,
                body : JSON.stringify( {...user , bmi : healthdata.bmi , health : healthdata.health} )
                
            })
            navigate("/")
            

}
 const handleCalculate=(e)=>{
  e.preventDefault()
  setCalc(true)

 
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b9d5cbba4amsh3cf7fd896444022p1662acjsn494128db6fe9',
		'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
	}
};

 fetch(`https://fitness-calculator.p.rapidapi.com/bmi?age=${age.current.value}&weight=${weight.current.value}&height=${height.current.value}`, options)

.then(response => response.json())
	.then(data => {setHealthdata(data.data); setCalc(false)})
	.catch(err => console.error(err));

 }
  return (
    
    <div className='main-page'>
    <Navbar/>
  <form onSubmit={handleCalculate}>
  <div className='main-container'>
    <div className='bmr-container'>
    <h1>BMR Calculator</h1>
    <hr></hr> 
    <input type="number" placeholder='Age' ref={age} step={1}  required />
    {/* <fieldset>
        <legend >Gender</legend>
        <label htmlFor='male' ><input type='radio'  id='male' name="gender" value="male" onClick={()=>{setGender("male")}} /> Male</label>
        <label htmlFor='female'><input type='radio' id='female' name="gender" value="male" onClick={()=>{setGender("female")}} />Female</label>
    </fieldset> */}
    <input type="number" placeholder='Height' ref={height} min="130" max="230"  required/>
    <input type="number" placeholder='Weight' ref={weight} min="40" max="160" required/>
    
    

    </div>
    </div>
    <input type="submit" value={calc ? "Calculate.....":
 "calculate"
}/>
  </form>

 
  {healthdata && <div className="health">

<h1>BMI Rating : {healthdata.bmi} </h1>

<h1>Health : {healthdata.health} </h1>

<button onClick={handleUpdateHealth}>Save health details</button>

</div>}
    </div>
   
  )
}

export default Bmr;