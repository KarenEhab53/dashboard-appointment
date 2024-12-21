import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Navbar dashboard/Navbar';
import DoctorDash from './Pages/Doctor page/DoctorDash';
import SideBar from './Components/SideBar/SideBar';
import Appointment from './Components/Appointment/Appointment'
import Dashboard from './Components/Dashboard/Dashboard.jsx'
import AddDoctors from './Components/AddDoctors/AddDoctors'
import AllDoctors from './Components/All Doctors/AllDoctors'
function App() {
  return (
    <div className="App">
      
      <Navbar />
      <div className='content'>
      <SideBar />
      <Routes>
        <Route path='/doctor' element={<DoctorDash />} />
          <Route path='/' element={<Dashboard />} />
          <Route path='appointment' element={<Appointment />} />
          <Route path='adddoctor' element={<AddDoctors />} />
          <Route path='alldoctors' element={<AllDoctors />} />
        
      </Routes>
      </div>
    </div>
  );
}

export default App;
