import React, { useState } from "react";

//Components
import Status from "../../components/Status/Status";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";
import RegisterForm from "../../components/Forms/RegisterForm/RegisterForm";

//Style Components
import {
  Wrapper,
  CardBody,
  CardHeader,
  CardHider,
  LoginButton,
} from "./LoginRegisterStyles";

function LoginRegister() {
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
        show={loginToggle}
      >
        <CardHider>
          <LoginForm setStatus={setStatus} />
        </CardHider>
      </CardBody>
      <CardBody
        show={registerToggle}
      >
        <CardHider>
          <RegisterForm setStatus={setStatus} />
        </CardHider>
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
