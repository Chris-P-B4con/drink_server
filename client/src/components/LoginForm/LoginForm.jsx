import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import "./LoginFormStyle.css";

function LoginForm({ Login, Register, error }) {
  const [login, setLogin] = useState({
    email: "",
    username: "",
    password: "",
    remember: true,
  });
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

  // Send Login or Registration information back to App.js
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      register.confirm_password === register.password &&
      register.password !== ""
    ) {
      Register(register);
    } else Login(login);
  };

  // Switch between register and login form
  const [registerToggle, setRegisterToggle] = useState(false);
  const flip = () => {
    const card = document.querySelector(".card__inner");
    card.classList.toggle("is-flipped");
    setRegisterToggle(!registerToggle);
  };

  return (
    <div className="card">
      <div className="card__inner">
        <div className="card__face card__face--front">
          <div className="card__content">
            <div className="card__header">
              <h2>Login</h2>
            </div>
            <div className="card__body">
              <form id="loginform" onSubmit={submitHandler}>
                <div className="form-inner">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={(e) =>
                      setLogin({ ...login, email: e.target.value })
                    }
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
                        {RevealPwd ? (
                          <AiOutlineEye />
                        ) : (
                          <AiOutlineEyeInvisible />
                        )}
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

        {/*REGISTER FORM */}
        <div className="card__face card__face--back">
          <div className="card__content">
            <div className="card__header">
              <h2>Register</h2>
            </div>
            <div className="card__body">
              <form action="" id="registerform" onSubmit={submitHandler}>
                <div className="form-inner">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    onChange={(e) =>
                      setRegister({ ...register, username: e.target.value })
                    }
                    value={register.username}
                  />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={(e) =>
                      setRegister({ ...register, email: e.target.value })
                    }
                    value={register.email}
                  />
                  <div className="pass">
                    <input
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
                      <i onClick={toggleRevealPwd}>
                        {RevealPwd ? (
                          <AiOutlineEye />
                        ) : (
                          <AiOutlineEyeInvisible />
                        )}
                      </i>
                    </span>
                  </div>
                  <div className="pass">
                    <input
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
                      <i onClick={toggleRevealPwd}>
                        {RevealPwd ? (
                          <AiOutlineEye />
                        ) : (
                          <AiOutlineEyeInvisible />
                        )}
                      </i>
                    </span>
                  </div>
                  <br></br>
                </div>

                <input className="submit" type="submit" value="Submit" />
              </form>
            </div>
          </div>
          <div className="nav-buttons">
            <button onClick={flip} id="loginBtn">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
