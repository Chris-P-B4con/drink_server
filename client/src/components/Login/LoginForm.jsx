import React, { useState} from "react";
import {  useCookies } from "react-cookie"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function LoginForm({ setUser, setStatus, flip }) {
  const [cookies, setCookie, removeCookie] = useCookies(["Session"]);
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
      if (response.status === 422) {
        response.json().then((data) => {setStatus({ error: data.error, success: data.success });})
      } else {
        response.json().then((data) => {setUser({userID: data})});
      }
    });
  };
  const [login, setLogin] = useState({
    email: "",
    username: "",
    password: "",
    remember: true,
  });
  const [RevealPwd, setRevealPwd] = useState(false);

  const toggleRevealPwd = () => {
    setRevealPwd(RevealPwd ? false : true);
  };
  return (
    <div className="card__face card__face--front">
      <div className="card__content">
        <div className="card__header">
          <h2>Login</h2>
        </div>
        <div className="card__body">
          <form id="loginform" onSubmit={Login}>
            <div className="form-inner">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={(e) => setLogin({ ...login, email: e.target.value })}
                value={login.email}
              />
              <div className="pass">
                <input
                  type={RevealPwd ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  id="password"
                  onChange={(e) =>
                    setLogin({ ...login, password: e.target.value })
                  }
                  value={login.password}
                />
                <span>
                  <i onClick={toggleRevealPwd}>
                    {RevealPwd ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                  </i>
                </span>
              </div>
            </div>
            <div className="checkBox">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                checked={login.remember}
                onChange={(e) =>
                  setLogin({ ...login, remember: !login.remember })
                }
              />
              <label htmlFor="remember">Remember me</label>
            </div>
            <input className="submit" type="submit" value="Submit" />
          </form>
        </div>
      </div>
      <div className="nav-buttons">
        <button onClick={flip} id="loginBtn">
          Register
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
