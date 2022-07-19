import React from "react";
import {NavLink} from "react-router-dom";
import {ROUTER_NAMES} from "../../routers";

const Sidebar = () => {
  return <div className='P-sidebar-block'>
    <ul>
      <li><NavLink to={ROUTER_NAMES.DASHBOARD}> Dashboard</NavLink></li>
      <li><NavLink to={ROUTER_NAMES.PRODUCTS}> Products</NavLink></li>
    </ul>
  </div>
}
export default Sidebar