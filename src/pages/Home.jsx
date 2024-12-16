import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

function Home() {
  const {user,logout}=useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout =()=>{
    logout();
    navigate("/");
  }
  return (
    
    <div style={{display:"flex",flexDirection:"column",gap:"1vh",padding:"2vw"}}>
      <h1>{user.name} NavBar</h1>
      <Link to="/todolist">Todo List</Link><br />   
      <Link to="/counter">Counter</Link><br />
      <Link to="/card">Card</Link><br />
      <Link to="/FetchData">FetchData</Link><br />
      <Link to="/dashboard">Dashboard</Link><br />
      <Link to="/dashboard/charts">Dashboard/Charts</Link><br />
      <Link to="/dashboard/settings">Dashboard/Settings</Link><br />
      <button style={{padding:"2vw"}} onClick={handleLogout}>Logout</button>

    </div>
  )
}

export default Home
