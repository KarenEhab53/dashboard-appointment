import React from 'react'
import './dashboard.css'
import { assets, doctors, Appointments, patients } from '../../assets_admin/assets'
const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <div className='box'>
        <div className='data'>
          <img src={assets.doctor_icon} alt="" />
          <p>{doctors.length}<br /><span>Doctors</span></p>
        </div>
        <div className='data'>
          <img src={assets.appointments_icon} alt="" />
          <p>{Appointments.length}<br /><span>Appointments</span></p>
        </div>
        <div className='data'>
          <img src={assets.patients_icon} alt="" />
          <p>{patients.length} <br /> <span>Patients</span></p>
        </div>
      </div>
      {/* Appointment of users */}
      <div className='table'>
        <div className='title'>
          <img src={assets.list_icon} alt="" />
          <p>Latest Appointment</p>
        </div>
        <hr />
        <div className='appoin-data'>
          {Appointments.map((item, index) => (
            <div className='record' key={index}>
              <div className='user-appoin'>
                <img src={item.patient.image} alt="" />
                <div className='appoin-info'>
                  <p className='name'>{item.doctor.name}</p>
                  <p className='date'>Booking on : {item.date}</p>
                </div>
              </div>
              <div className='cancel'>
                <img src={assets.cancel_icon} alt="" />
              </div>
            </div>

          ))}

        </div>
      </div>
    </div>
  )
}

export default Dashboard