import React, { useState} from "react";
import {useDispatch, } from "react-redux";
import {profileActions} from "../../state/profile/actions";
import {useNavigate} from "react-router-dom";
import {ROUTER_NAMES} from "../../routers";

const ManageUser = () => {
 
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [user, setUserData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender:null,
    position: '',
    email: '',
    phoneNumber: '',
    profileImage: '',
    dateOfBirth: null
  })


  const uploadImage = (e) => {
    const element = e.currentTarget
    const fileList = element.files;
    console.log(element.files)
    if (fileList && fileList?.length) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        console.log(reader)
     
        setUserData({...user,profileImage:reader.result})
      });
      reader.readAsDataURL(fileList[0]);
    }
  }

  const handleChange = (e) => {
    setUserData({...user, [e.target.name]: e.target.value})
    
  }
  const handleRadio =(e)=>{

    setUserData({...user,[e.target.name]:e.target.value})

  }
  

  const saveChanges = ()=>{

    dispatch({type:profileActions.MANAGE_USER_INFO, payload:user})
    
    navigate(ROUTER_NAMES.DASHBOARD)
  }
  return <div className='P-manage-user'>

    <div className="P-manage-user-box">
      <div className='P-manage-form'>
        <p>First Name</p>
        <label>
          <input onChange={handleChange} name={'firstName'} className='P-input' type="text" placeholder='First Name'/>
        </label>
      </div>
      <div className='P-manage-form'>
        <p>Last Name</p>
        <label>
          <input onChange={handleChange} name={'lastName'} className='P-input' type="text" placeholder='Last Name'/>
        </label>
      </div>
      <div className='P-manage-form'>
        <p>Age</p>
        <label>
          <input onChange={handleChange} name={'age'} className='P-input' type="number" placeholder='Age'/>
        </label>
      </div>
      <div className='P-manage-form'>
        <p>Gender</p>
        <div className='P-gender-form'>
          <label>
            <input onChange={handleRadio} type="radio" name='gender' value = 'Male'/>
            <p>Male</p>
          </label>
          <label>
            <input onChange={handleRadio} type="radio" name='gender' value = 'Female'/>
            <p>Female</p>
          </label>
        </div>
      </div>
    </div>
    <div className="P-manage-user-box">
      <div className='P-manage-form'>
        <p>Position</p>
        <label>
          <input onChange={handleChange} name={'position'} className='P-input' type="text" placeholder='Position'/>
        </label>
      </div>
      <div className='P-manage-form'>
        <p>Email</p>
        <label>
          <input onChange={handleChange} name='email' className='P-input' type="text" placeholder='Email'/>
        </label>
      </div>
      <div className='P-manage-form'>
        <p>Phone Number</p>
        <label>
          <input onChange={handleChange} name={'phoneNumber'} className='P-input' type="number"
                 placeholder='Phone Number'/>
        </label>
      </div>
      <div className='P-manage-form'>
        <p>Date of Birth</p>
        <label>
          <input onChange={handleChange} className='P-input' type="date" placeholder='Date of Birth' name = {'dateOfBirth'}/>
        </label>
      </div>
      <div className='P-manage-form'>
        <p>Profile Image</p>
        <label>
          <input onChange={uploadImage} type="file"/>
        </label>
      </div>
      <button onClick={saveChanges} className='P-save-changes'> Save Changes</button>

    </div>

  </div>
}

export default ManageUser