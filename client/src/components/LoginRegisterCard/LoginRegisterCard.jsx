import React, { useState } from "react";
import RegisterForm from "../Register/RegisterForm";
import LoginForm from "../Login/LoginForm";
import "./LoginRegisterCardStyle.css";
import Status from "../Status/Status";
import Card from "../Card/Card"


function LoginRegisterCard({ setUser }) {
  const [status, setStatus] = useState({ error: "", success: "" });

  // Switch between register and login form
  const [registerToggle, setRegisterToggle] = useState(false);
  const flip = () => {
    setRegisterToggle(!registerToggle);
    setStatus({ error: "", success: "" });
  };

  return (
    <Card className="card__small">
      <Status status={status} />
      <div className={` card__inner ${registerToggle ? "is-flipped" : ""}`}>
        <LoginForm setUser={setUser} setStatus={setStatus} flip={flip} />
        <RegisterForm setStatus={setStatus} flip={flip} />
      </div>
    </Card>
  );
}

export default LoginRegisterCard;
