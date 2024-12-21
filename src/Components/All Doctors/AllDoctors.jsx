import React from 'react'
import './alldoctors.css'
import { doctors } from '../../assets_admin/assets'
const AllDoctors = () => {
  return (
    <div className='all-doctors'>
      <p className='header'>All Doctors</p>
      <div className='boxs'>
        {
          doctors.map((item, index) => (
            <div className='singledoc' key={index}>
              <img src={item.image} alt="" />
              <div className='data'>
                <h3>{item.name}</h3>
                <p>{item.speciality}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default AllDoctors