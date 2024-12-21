import React from 'react';
import './appointment.css';
import { Appointments, assets } from '../../assets_admin/assets';

const Appointment = () => {
  return (
    <div className="appointment">
      <h1>All Appointments</h1>
      <div className="table">
        {/* Headers */}
        <div className="headers">
          <p>#</p>
          <p>Patient</p>
          <p>Department</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Doctor</p>
          <p>Fees</p>
        </div>

        {/* Appointment Rows */}
        <div>
          {Appointments.map((item, index) => (
            <div className="headers" key={index}>
              <p>{item.appointmentId}</p>
              <div className="user">
                <img src={item.patient.image} alt={`${item.patient.fullName}`} />
                <p>{item.patient.fullName}</p>
              </div>
              <p>{item.doctor.speciality}</p>
              <p>{item.patient.age}</p>
              <p>{item.time}</p>
              <div className="doctor">
                <img src={item.doctor.image} alt={`${item.doctor.name}`} />
                <p>{item.doctor.name}</p>
              </div>
              <p>$50</p>
              <img src={assets.cancel_icon} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appointment;
