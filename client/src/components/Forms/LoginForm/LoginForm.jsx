import React, { useState } from "react";

import { responseHandler, updateStatus } from "../../../lib/helpFunctions";

//Style Components
import { Action, Button, Input, Password, PasswordIcon } from "../FormStyles";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function LoginForm({ setStatus }) {
  const [login, setLogin] = useState({
    email: "",
    password: "",
    remember: true,
  });
  const [RevealPwd, setRevealPwd] = useState(false);

  const Login = (e) => {
    e.preventDefault();
    fetch("users/login", {
      method: "POST",
      credentials: "include",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    }).then((response) => {
      (async () => {
        const message = await responseHandler(response);
        updateStatus(setStatus, message);
        window.location.reload(true);
      })();
    });
  };

  const toggleRevealPwd = () => {
    setRevealPwd(RevealPwd ? false : true);
  };

  return (
    <form id="loginform" onSubmit={Login}>
      <Input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        onChange={(e) => setLogin({ ...login, email: e.target.value })}
        value={login.email}
      />
      <Password>
        <Input
          type={RevealPwd ? "text" : "password"}
          placeholder="Password"
          name="password"
          id="password"
          onChange={(e) => setLogin({ ...login, password: e.target.value })}
          value={login.password}
        />
        <span>
          <PasswordIcon onClick={toggleRevealPwd}>
            {RevealPwd ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </PasswordIcon>
        </span>
      </Password>
      <Action>
        <Button className="submit" type="submit" value="Submit" />
        <Button
          className="cancel"
          type="reset"
          value="Reset"
          onClick={() => {
            setLogin({
              email: "",
              password: "",
              remember: true,
            });
          }}
        />
      </Action>
    </form>
  );
}

export default LoginForm;
