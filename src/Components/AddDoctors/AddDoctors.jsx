import React from 'react'
import './addDoctor.css'
import { assets } from '../../assets_admin/assets'
const AddDoctors = () => {
  return (
    <div className='add-doc'>

      <p className='header'>Add Doctor</p>
      <form action="">
      <div className='add-container'>
        <div className='upload-pic'>
          <label for="doc-img">
            <img src={assets.upload_area} alt="" />
          </label>
          <input type="file" id='doc-img' hidden />
          <p>Upload doctor <br /> picture</p>
        </div>
        <div className='info'>
        <div className='data'>
          <div>
            <p>Doctor name</p>
            <input type="text" />
          </div>
          <div><p>Doctor Email</p> <input type="email" /></div>
          <div><p>Doctor Password</p> <input type="password" /></div>
          <div><p>Experience</p>
            <select name="" id=""><option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
              <option value="">7</option>
              <option value="">8</option>
              <option value="">9</option>
              <option value="">10</option></select>
          </div>
          <div>
            <p>Fees</p>
             <input type="number" /></div>
        </div>
        <div className='data'>
          <div><p>Speciality</p>
            <select name="" id=""><option value="">General physician</option>
              <option value="">Gynecologist</option>
              <option value="">Dermatologist</option>
              <option value="">Pediatricians</option>
              <option value="">Neurologist</option>
              <option value="">Pediatricians</option></select>
          </div>
          <div><p>Education</p> <input type="text" /></div>
          <div><p>Address</p> <input className='address' type="text" /> <input type="text" /></div>
        </div>
        </div>
        <div className='data'>
          <p>About Doctor</p>
          <textarea name="" id="" rows="4"></textarea>
        </div>
        </div>
        <button type='submit'>Add Doctor</button>
      </form>

      </div>
  )
}

export default AddDoctors