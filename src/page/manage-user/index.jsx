import React, { useEffect, useState} from "react";
import {useDispatch, } from "react-redux";
import {profileActions} from "../../state/profile/actions";
import {useNavigate} from "react-router-dom";
import {ROUTER_NAMES} from "../../routers";
import { useSelector } from "react-redux";
import { EditUser } from "../../platform/api/auth";

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
  const profile = useSelector(state => state.profileReducer.profile)
  useEffect(() =>{
      setUserData(profile)

  },[profile])
  
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
  const manageUser = async ()=>{
    const result = await EditUser(profile._id, user)
    if(result){
    navigate(ROUTER_NAMES.DASHBOARD)
    }

  }
  const handleChange = (e) => {
    setUserData({...user, [e.target.name]: e.target.value})
  }
  const handleRadio =(e)=>{
    setUserData({...user,[e.target.name]:e.target.value})
  }
  const saveChanges = ()=>{
    manageUser()
  }
  return <div className='P-manage-user'>

    <div className="P-manage-user-box">
      <div className='P-manage-form'>
        <p>First Name</p>
        <label>
          <input value = {user.firstName} onChange={handleChange} name={'firstName'} className='P-input' type="text" placeholder='First Name'/>
        </label>
      </div>
      <div className='P-manage-form'>
        <p>Last Name</p>
        <label>
          <input value = {user.lastName} onChange={handleChange} name={'lastName'} className='P-input' type="text" placeholder='Last Name'/>
        </label>
      </div>
      <div className='P-manage-form'>
        <p>Age</p>
        <label>
          <input value = {user.age} onChange={handleChange} name={'age'} className='P-input' type="number" placeholder='Age'/>
        </label>
      </div>
      <div className='P-manage-form'>
        <p>Gender</p>
        <div className='P-gender-form'>
          <label>
            <input onChange={handleChange} type="radio" name='gender' value = 'Male' checked={user.gender==='Male'}/>
            <p>Male</p>
          </label>
          <label>
            <input onChange={handleChange} type="radio" name='gender' value = 'Female' checked={user.gender==='Female'}/>
            <p>Female</p>
          </label>
        </div>
      </div>
    </div>
    <div className="P-manage-user-box">
      <div className='P-manage-form'>
        <p>Position</p>
        <label>
          <input value={user.position} onChange={handleChange} name={'position'} className='P-input' type="text" placeholder='Position'/>
        </label>
      </div>
      <div className='P-manage-form'>
        <p>Email</p>
        <label>
          <input value={user.email} onChange={handleChange} name='email' className='P-input' type="text" placeholder='Email'/>
        </label>
      </div>
      <div className='P-manage-form'>
        <p>Phone Number</p>
        <label>
          <input value={user.phoneNumber} onChange={handleChange} name={'phoneNumber'} className='P-input' type="number" placeholder='Phone Number'/>
        </label>
      </div>
      <div className='P-manage-form'>
        <p>Date of Birth</p>
        <label>
          <input value={user.dateOfBirth} onChange={handleChange} className='P-input' type="date" placeholder='Date of Birth' name = {'dateOfBirth'}/>
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