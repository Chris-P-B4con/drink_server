import React, { useState } from "react";

//Components
import Status from "../../components/Status/Status";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";
import RegisterForm from "../../components/Forms/RegisterForm/RegisterForm";

//Style Components
import { Wrapper } from "./LoginRegisterStyles";
import { CardBody, CardHeader } from "../../components/Card/CardStyles";
import { LoginButton } from "../../components/Forms/FormStyles";

function LoginRegister({ setUser }) {
  const [status, setStatus] = useState({ success: "", error: "" });
  const [registerToggle, setRegisterToggle] = useState(false);
  const [loginToggle, setLoginToggle] = useState(true);

  const flip = () => {
    if (registerToggle) {
      setRegisterToggle(!registerToggle);
      setTimeout(() => {
        setLoginToggle(!loginToggle);
      }, 750);
    } else {
      setLoginToggle(!loginToggle);
      setTimeout(() => {
        setRegisterToggle(!registerToggle);
      }, 750);
    }
    setStatus({ error: "", success: "" });
  };

  return (
    <Wrapper>
      <Status status={status} />
      <CardHeader>
        <h2>{registerToggle ? "Register" : "Login"}</h2>
      </CardHeader>
      <CardBody
        className={loginToggle ? "active" : "inactive"}
        style={{ "--height": "400px" }}
      >
        <LoginForm setStatus={setStatus} setUser={setUser} />
      </CardBody>
      <CardBody
        className={registerToggle ? "active" : "inactive"}
        style={{ "--height": "400px" }}
      >
        <RegisterForm setStatus={setStatus} />
      </CardBody>
      <LoginButton
        onClick={flip}
        id="loginBtn"
        style={{ "margin-top": "10px" }}
      >
        {!registerToggle ? "Register" : "Login"}
      </LoginButton>
    </Wrapper>
  );
}

export default LoginRegister;
