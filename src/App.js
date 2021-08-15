import React, { useState } from 'react';
import Home from "./components/Home";
import LoginForm  from './components/LoginForm';
import { useCookies } from "react-cookie";
import './App.css';

function App ()  {
  
  const [user, setUser] = useState({username:"", email:""})
  const [error, setError] = useState("")
  const [cookies, setCookie] = useCookies(["session"])

  const admin = { email:"admin@admin.com", username: "admin", password:"root"}
  const Login = details => {
    console.log(details)
    if (details.email === admin.email && details.password === admin.password){
      setUser({username:"admin"})
      setCookie("session", "admin", { 
        path: '/'
      });
      //window.location.reload()

    } else{
      console.log("Something is wrong")
    }
  }

  const Register = details => {
    console.log(details)
  }

  // HTML Portion
  return ( 
    <div className="wrapper">
      {(cookies.session !== undefined) ? (
        // THIS WILL BE DEFAULT PAGE
        
        <Home />
        
      ) : (
        // THIS IS LOGIN/REGISTER PAGE
        <LoginForm Login={Login} Register={Register} error={error} />
      )}
    </div>
  )
} 
export default App;
