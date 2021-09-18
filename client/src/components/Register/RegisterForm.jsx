import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function RegisterForm({ setStatus, flip }) {
  const Register = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/users/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(register),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        data.status === 403
          ? setStatus({ error: data.error, success: data.success })
          : setStatus({ success: data.success, error: data.error });
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
    <div className="card__face card__face--back">
      <div className="card__content">
        <div className="card__header">
          <h2>Register</h2>
        </div>
        <div className="card__body">
          <form action="" id="registerform" onSubmit={Register}>
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
                    {RevealPwd ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
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
                    {RevealPwd ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
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
  );
}

export default RegisterForm;
