import './App.css';
import { useEffect,useState } from 'react';
import Sidebar from "./components/sidebar";
import HeaderComponent from "./components/header-component";
import { Route, Routes, useNavigate} from "react-router-dom";
import Dashboard from "./page/dashboard";
import Products from "./page/products";
import {ROUTER_NAMES} from "./routers";
import './assets/index.scss'
import AddProducts from "./page/add-products";
import ManageUser from "./page/manage-user";
import LoginUser from './page/login-user'
import LoginSettings from './page/login-settings';

function App() {
  const navigate = useNavigate()

  const [token, setToken] = useState('')

  useEffect(() => {
   const login =  localStorage.getItem('token_admin')
    if(login && login === 'Razmik123'){
      setToken(login)
    }else{
      navigate(ROUTER_NAMES.LOGIN)
    }
  }, [])
  return (
    <div className="App">
       {token ? <div className='P-admin-section'>
        <Sidebar/>
        <div className='P-admin-pages'>
          <HeaderComponent/>
          <div className='P-pages'>
            <Routes>
              <Route path={ROUTER_NAMES.DASHBOARD} element={<Dashboard/>}></Route>
              <Route path={ROUTER_NAMES.PRODUCTS} element={<Products/>}></Route>
              <Route path={ROUTER_NAMES.LOGIN_SETTINGS} element={<LoginSettings/>}></Route>
              <Route path={ROUTER_NAMES.ADD_PRODUCT} element={<AddProducts/>}></Route>
              <Route path={ROUTER_NAMES.MANAGE_USER} element={<ManageUser/>}></Route>
            </Routes>
          </div>
        </div>
      </div> : <div>
        <Routes>
          <Route path={ROUTER_NAMES.LOGIN} element={<LoginUser/>}></Route>
        </Routes>
      </div>

      }

    </div>
  );
}

export default App;
