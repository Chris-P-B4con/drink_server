import React, { useState } from 'react';
import LoginForm  from './components/LoginForm';
import { useTransition, useSpring, animated } from "react-spring";
import './App.css';

function App ()  {
  
  const [user, setUser] = useState({username:"", email:""})
  const [error, setError] = useState("")

  const admin = { email:"admin@admin.com", username: "admin", password:"root"}
  const Login = details => {
    console.log(details)
    if (details.email === admin.email && details.password === admin.password){
      setUser({username:"admin"})

    } else{
      console.log("Something is wrong")
    }
  }

  const Register = details => {
    console.log(details)
  }

  const Logout = () => {
    setUser({username: ""})
  }
  

  // HTML Portion
  return ( 
  <div className="wrapper">
    {(user.username !== "") ? (
      // THIS WILL BE DEFAULT PAGE
      <div className="welcome">
        <h2>Welcome, <span>{user.name}</span></h2>
        <button onClick={Logout}>Logout</button>
      </div>
    ) : (
      // THIS IS LOGIN/REGISTER PAGE
        <LoginForm Login={Login} Register={Register} error={error} />
    )}
  </div>
  )
} 
export default App;
