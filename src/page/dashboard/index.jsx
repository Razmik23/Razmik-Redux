import React from "react";
import {useNavigate} from "react-router-dom";
import {ROUTER_NAMES} from "../../routers";
const Dashboard = ()=>{

  const router = useNavigate()

  const editUserPage = ()=>{
    router(ROUTER_NAMES.MANAGE_USER)
  }


  return <div className='P-dashboard'>
    <p>dashboards</p>
    <button onClick={editUserPage}> Edit user</button>

  </div>
}
export default Dashboard