import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {ROUTER_NAMES} from "../../routers";
import {GetAccountsList, GetMyAccount} from "../../platform/api/auth";

const LoginUser = () => {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  })
  const [state, setState] = useState({});
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem('state'));
    if (item) {
      setState(item);
    }
  }, []);
  const handleChange = (e) => {
    setLoginForm({...loginForm, [e.target.name]: e.target.value})
  }

  const handleClick = async () => {
    setIsLoading(true)
    const result = await GetAccountsList()
    if (result.data.length) {
      result.data.forEach(item => {
        if (loginForm.email === item.email && loginForm.password === item.password) {
          localStorage.setItem('token_admin', item._id)
          window.location.reload()
        }
      })
    }
    setIsLoading(false)
  }




  return (<div className='P-login-image' style={{backgroundImage: `url('${state.image}')`}}>
      <div className="section">
        <h1 style={{fontSize: state.TitleSize + 'px', color: state.TitleColor}}>{state.Title}</h1>
        <p style={{fontSize: state.DescriptionSize + 'px', color: state.DescriptionColor}}>{state.Description}</p>
        <label>
          <input onChange={handleChange} name='email' type="text" placeholder={'Email'}/>
        </label>
        <label>
          <input onChange={handleChange} name='password' type="password" placeholder={'Password'}/>
        </label>

        <button onClick={handleClick}>{isLoading ? 'loading...' : 'Login'}</button>
        <Link to={ROUTER_NAMES.REGISTRATION}>Registration</Link>

      </div>

    </div>
  )
}
export default LoginUser