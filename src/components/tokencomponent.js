import React from "react";
import { useSelector} from "react-redux";


const Tokencomponent = ()=>{
  const token = useSelector(state=>state.auth.token)

  return <h1>{token}</h1>
}

export default Tokencomponent