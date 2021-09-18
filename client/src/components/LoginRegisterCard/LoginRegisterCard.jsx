import React, { useState } from "react";
import RegisterForm from "../Register/RegisterForm";
import LoginForm from "../Login/LoginForm";
import "./LoginRegisterCardStyle.css";

function LoginRegisterCard({ setUser }) {
  const [status, setStatus] = useState({ error: "", success: "" });

  // Switch between register and login form
  const [registerToggle, setRegisterToggle] = useState(false);
  const flip = () => {
    const card = document.querySelector(".card__inner");
    card.classList.toggle("is-flipped");
    setRegisterToggle(!registerToggle);
  };

  return (
    <div className="card">
      <div className={status.error ? "error" : "success"}>
        {status.error ? status.error : ""}
        {status.success ? status.success : ""}
      </div>
      <div className="card__inner">
        <LoginForm setUser={setUser} flip={flip} />
        <RegisterForm setStatus={setStatus} flip={flip} />
      </div>
    </div>
  );
}

export default LoginRegisterCard;
