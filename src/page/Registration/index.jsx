import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {ROUTER_NAMES} from "../../routers";
import {DeleteUser, RegistrationUser} from "../../platform/api/auth";

const Registration = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUserData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: null,
    position: '',
    email: '',
    phoneNumber: '',
    profileImage: '',
    dateOfBirth: null,
    password:''
  })


  const uploadImage = (e) => {
    const element = e.currentTarget
    const fileList = element.files;
    if (fileList && fileList?.length) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setUserData({...user, profileImage: reader.result})
      });
      reader.readAsDataURL(fileList[0]);
    }
  }

  const handleChange = (e) => {
    setUserData({...user, [e.target.name]: e.target.value})

  }

  const saveChanges = async () => {
    const result = await RegistrationUser(user)
    // const result = await DeleteUser('62e2c2796f047803e8aee6cf')
    console.log(result)
    if(result.data._id){
      navigate(ROUTER_NAMES.LOGIN)
    }
  }


  return <div className='P-login-image P-registration-page'>
    <div className='P-registration-form'>
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
            <input onChange={handleChange} type="radio" name='gender' value='Male'/>
            <p>Male</p>
          </label>
          <label>
            <input onChange={handleChange} type="radio" name='gender' value='Female'/>
            <p>Female</p>
          </label>
        </div>
      </div>
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
          <input onChange={handleChange} className='P-input' type="date" placeholder='Date of Birth'
                 name={'dateOfBirth'}/>
        </label>
      </div>
      <div className='P-manage-form'>
        <p>Profile Image</p>
        <label>
          <input onChange={uploadImage} type="file"/>
        </label>
      </div>
      <div className='P-manage-form'>
        <p>Password</p>
        <label>
          <input onChange={handleChange} name={'password'} className='P-input' type="password" placeholder='Password'/>
        </label>
      </div>
      <button onClick={saveChanges} className='P-save-changes'> {isLoading? 'Loading...':'Register'}</button>
    </div>
  </div>
}
export default Registration