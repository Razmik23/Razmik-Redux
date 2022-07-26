import React, {useState,useEffect} from "react";

const LoginUser = () => {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  })
  const [state, setState] = useState({});

useEffect(() => {
  const item = JSON.parse(localStorage.getItem('state'));
  if (item) {
   setState(item);
  }
}, []);
  const handleChange = (e) => {
    setLoginForm({...loginForm, [e.target.name]: e.target.value})
  }

  const handleClick = () => {
    localStorage.setItem('token_admin', loginForm.email + loginForm.password)
    window.location.reload()
  }


  return (<div className='P-login-image' style = {{backgroundImage:`url('${state.image}')`}}>
    <div className="section">
      <h1  style={{fontSize:state.TitleSize+'px', color:state.TitleColor}}>{state.Title}</h1>
      <p style = {{fontSize:state.DescriptionSize+'px',color:state.DescriptionColor}}>{state.Description}</p>
      <label>
      <input onChange={handleChange} name='email' type="text" placeholder={'Email'}/> 
      </label>
      <label>
      <input onChange={handleChange} name='password' type="text" placeholder={'Password'}/>
       </label>
      
      <button onClick={handleClick}>Login</button>
      
    </div>
     
    </div>
  )}
export default LoginUser