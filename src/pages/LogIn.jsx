import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';

function LogIn() {
    const [username,setUsername]=useState("");
    const {login}=useContext(AuthContext);
    const navigate = useNavigate();
    const HandleLogin=()=>{
        login(username);
        navigate("/home");
    }
  return (
    <div>
      <h1>Log In</h1>
      <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />
      <button onClick={HandleLogin}>Login</button>
    </div>
  )
}

export default LogIn
