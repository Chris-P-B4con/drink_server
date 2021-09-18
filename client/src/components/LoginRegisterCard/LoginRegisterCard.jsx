import React, { useState } from "react";
import RegisterForm from "../Register/RegisterForm";
import LoginForm from "../Login/LoginForm";
import "./LoginRegisterCardStyle.css";

function LoginRegisterCard({ setUser }) {
  const [status, setStatus] = useState({ error: "", success: "" });

  // Switch between register and login form
  const [registerToggle, setRegisterToggle] = useState(false);
  const flip = () => {
    setRegisterToggle(!registerToggle);
    setStatus({ error: "", success: "" });
  };

  return (
    <div className="card">
      <div
        className={` ${status.success ? "success" : ""} ${
          status.error ? "error" : ""
        } ${status.success || status.error ? "alert-shown" : "alert-hidden"}`}
      >
        {status.error ? status.error : status.success}
      </div>
      <div className={` card__inner ${registerToggle ? "is-flipped" : ""}`}>
        <LoginForm setUser={setUser} flip={flip} />
        <RegisterForm setStatus={setStatus} flip={flip} />
      </div>
    </div>
  );
}

export default LoginRegisterCard;
