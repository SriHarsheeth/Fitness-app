import React from 'react'


import '../style/nav.css'
import Navbar from './Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Dashboard = () => {
  return (
    <div className='dashboard'>
    <Navbar/>
    <section className='s1'>
      <div>
        <h1>#1 Fitness App.Work Out Anytime. Anywhere.</h1>
        <p>Unlimited access to the world’s best workouts from celebrity trainers</p>
      </div>
    </section>

    <section className='s2' >
    <div className='header'>
      <h1>Get FitOn. Get Results.</h1>
      <p>Join 13+ million members on the top digital health & wellness platform and stay toned, lose weight, get strong, reduce stress, and reach your goals.</p>
    </div>

    <div className='cards'>

      <div className='card' data-aos="zoom-in-up">
        <img src="https://fitonapp.com/wp-content/themes/fiton-20201105/images/Rectangle-7.png"  alt='img'/>
        <h3>Best Workouts</h3>
        <p>Train your mind and body with personalized fitness programs.</p>
      </div>

      <div className='card' data-aos="zoom-in-up">
        <img src="https://fitonapp.com/wp-content/themes/fiton-20201105/images/FitOn-med-002.jpg" alt='img'  />
        <h3>Best Meditation</h3>
        <p>Reduce stress and be more mindful with soothing video meditations.</p>
      </div>

      <div className='card' data-aos="zoom-in-up">
        <img src='https://fitonapp.com/wp-content/themes/fiton-20201105/images/Rectangle-7-1.png' alt='img'/>
        <h3>Best Trainers</h3>
        <p>Work out with celebrities and world-class trainers.</p>
      </div>

      <div className='card' data-aos="zoom-in-up">
        <img src='https://fitonapp.com/wp-content/themes/fiton-20201105/images/Rectangle-7-2.png' alt='img'/>
        <h3>Always On</h3>
        <p>Anytime, anywhere. No equipment required.</p>
      </div>
    </div>

    </section>



    

      {/* <div className='cards'>
      <div className="card" style={{width: "18rem"}}>
  <img src="	https://fitonapp.com/wp-content/themes/fiton-20201105/images/Rectangle-7.png" className="card-img-top h-75" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Best Workouts</h5>
    <p className="card-text">Train your mind and body with personalized fitness programs.</p>
    
  </div>
       </div>
       <div className="card" style={{width: "18rem"}}>
  <img src="		https://fitonapp.com/wp-content/themes/fiton-20201105/images/FitOn-med-002.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Best Meditation</h5>
    <p className="card-text">Reduce stress and be more mindful with soothing video meditations</p>
    
  </div>
       </div>
       <div className="card" style={{width: "18rem"}}>
  <img src="	https://fitonapp.com/wp-content/themes/fiton-20201105/images/Rectangle-7-1.png" className="card-img-top h-75" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Best Trainers</h5>
    <p className="card-text">Work out with celebrities and world-class trainers.</p>
    
  </div>
       </div>
       <div className="card" style={{width: "18rem"}}>
  <img src="	https://fitonapp.com/wp-content/themes/fiton-20201105/images/Rectangle-7-2.png" className="card-img-top h-75" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Always On</h5>
    <p className="card-text">Anytime, anywhere. No equipment required</p>
    
  </div>
       </div>
     
   </div> */}
   </div>
    
   

  )
}





export default Dashboard