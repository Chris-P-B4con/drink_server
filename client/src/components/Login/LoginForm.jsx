import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function LoginForm({ setUser, flip }) {
  const Login = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    })
      .then((response) => response.json())
      .then((data) => {
        data.length > 0
          ? setUser({ username: data[0].username })
          : setUser({ username: "" });
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
