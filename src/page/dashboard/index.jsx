import React from "react";
import {useNavigate} from "react-router-dom";
import {ROUTER_NAMES} from "../../routers";
import { useSelector } from "react-redux";
//import { useEffect } from "react";
const Dashboard = ()=>{

  const router = useNavigate()
  const profile = useSelector(state => state.profileReducer.profile)
  const editUserPage = ()=>{
    router(ROUTER_NAMES.MANAGE_USER)
  }


  return <div className='P-dashboard'>
    <div className="P-image" style={{backgroundImage:`url('${profile.profileImage}')`}}></div>
    <div className = 'P-info'>
      <p>FirstName - {profile.firstName? profile.firstName: ''}</p>
      <p>LastName - {profile.lastName? profile.lastName: ''}</p>
      <p>Age - {profile.age? profile.age+' ': ''}</p>
      <p>Position - {profile.position? profile.position: ''}</p>
      <p>Phone Number - {profile.phoneNumber? profile.phoneNumber: ''}</p>
      <p>Email - {profile.email? profile.email+' ': ''}</p>
      <p>Gender - {profile.gender}</p>
      <p>Date Of Birth - {profile.dateOfBirth? profile.dateOfBirth:''}</p>
      <button onClick={editUserPage}> Edit user</button>

    </div>
    
  </div>
}
export default Dashboard