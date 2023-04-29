import {BrowserRouter,Routes,Route} from'react-router-dom'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Profile from './components/Profile';

import Signin from './components/Signin';
import Navbar from './components/Navbar';
import Protect from './components/Protect';
import Bmr from './components/Bmr';
import TrainerDashboard from './components/TrainerDashboard';
import Workout from './components/Workout';
import Myworkouts from './components/Myworkouts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signin/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={ <Protect child={<Dashboard/>}/>}/>
          <Route path='/profile' element={<Protect child={<Profile/>}/>}/>
          <Route path='/navbar' element={<Protect child={<Navbar/>}/>}/>
          <Route path='/bmr' element={<Protect child={<Bmr/>}/>}/>
          <Route path='/trainerdashboard' element={<Protect child={<TrainerDashboard/>}/>}/>
          <Route path='/workout' element={<Protect child={<Workout/>}/>}/>
          <Route path='/myworkouts' element={<Protect child={<Myworkouts/>}/>}/>
   
          <Route path="/protect" element={<Protect/>} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
