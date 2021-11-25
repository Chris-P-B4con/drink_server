import React, { useState } from "react";

//Style components
import {
  Action,
  Button,
  Input,
  Password,
  PasswordIcon,
} from "../FormStyles";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";


function RegisterForm({ setStatus, flip, registerToggle }) {
  const Register = (e) => {
    e.preventDefault();
    fetch("/users/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(register),
    })
      .then((data) => data.json())
      .then((data) => {
        setStatus({ error: data.error, success: data.success });
      });
  };

  const [register, setRegister] = useState({
    email: "",
    username: "",
    password: "",
    confirm_password: "",
  });
  const [RevealPwd, setRevealPwd] = useState(false);

  const toggleRevealPwd = () => {
    setRevealPwd(RevealPwd ? false : true);
  };

  return (
    <form action="" id="registerform" onSubmit={Register}>
      <Input
        type="text"
        name="username"
        id="username"
        placeholder="Username"
        onChange={(e) => setRegister({ ...register, username: e.target.value })}
        value={register.username}
      />
      <Input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        onChange={(e) => setRegister({ ...register, email: e.target.value })}
        value={register.email}
      />
      <Password>
        <Input
          type={RevealPwd ? "text" : "password"}
          placeholder="Password"
          name="password"
          id="password"
          onChange={(e) =>
            setRegister({ ...register, password: e.target.value })
          }
          value={register.password}
        />
        <span>
          <PasswordIcon onClick={toggleRevealPwd}>
            {RevealPwd ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </PasswordIcon>
        </span>
      </Password>
      <Password>
        <Input
          type={RevealPwd ? "text" : "password"}
          placeholder="Confirm Password"
          name="password"
          id="password"
          onChange={(e) =>
            setRegister({
              ...register,
              confirm_password: e.target.value,
            })
          }
          value={register.confirm_password}
        />
        <span>
          <PasswordIcon onClick={toggleRevealPwd}>
            {RevealPwd ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </PasswordIcon>
        </span>
      </Password>
      <br></br>
      <Action>
        <Button className="submit" type="submit" value="Submit" />
        <Button
          className="cancel"
          type="reset"
          value="Reset"
          onClick={() => {
            setRegister({
              email: "",
              username: "",
              password: "",
              confirm_password: "",
              remember: true,
            });
          }}
        />
      </Action>
    </form>
  );
}

export default RegisterForm;
