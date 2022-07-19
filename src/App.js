import './App.css';

import Sidebar from "./components/sidebar";
import HeaderComponent from "./components/header-component";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./page/dashboard";
import Products from "./page/products";
import {ROUTER_NAMES} from "./routers";
import './assets/index.scss'
import AddProducts from "./page/add-products";
import ManageUser from "./page/manage-user";

function App() {
  return (
    <div className="App">
      <div className='P-admin-section'>
        <Sidebar/>
        <div className='P-admin-pages'>
          <HeaderComponent/>
          <div className='P-pages'>
            <Routes>
              <Route path={ROUTER_NAMES.DASHBOARD} element={<Dashboard/>}></Route>
              <Route path={ROUTER_NAMES.PRODUCTS} element={<Products/>}></Route>
              <Route path={ROUTER_NAMES.ADD_PRODUCT} element={<AddProducts/>}></Route>
              <Route path={ROUTER_NAMES.MANAGE_USER} element={<ManageUser/>}></Route>
            </Routes>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
