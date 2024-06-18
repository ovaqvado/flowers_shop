import { React, useState } from "react";
import Style from "./Auth.module.scss";
import lock from "./image/lock.svg";
import profile from "./image/profile.svg";

function Auth() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={Style.container_auth}>
      <div className={Style.login_box}>
        <h1 className={Style.title}>Регистрация</h1>

        <form className={Style.input_box} action="">
          <div className={Style.input_wrapper}>
            <input className={Style.input} type="text" placeholder="Логин" />

            <img className={Style.icon} src={profile} alt="" />
          </div>

          <div className={Style.input_wrapper}>
            <input
              className={Style.input}
              placeholder="Пароль"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              type="checkbox"
              className={Style.icon}
              checked={showPassword}
              onChange={handleShowPassword}
            />
            <label for="lock">
              <img src={lock} alt="" />
            </label>
          </div>
        </form>
        <div className={Style.submit_container}>
          <button type="submit" className={Style.login}>
            Войти
          </button>
          <p className={Style.subtitle}>
            Если есть учетная запись?
            <a className={Style.link_login}>Войти</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Auth;

{
  /* <input
            
type={showPassword ? "text" : "password"}
value={password}
onChange={(e) => setPassword(e.target.value)}
/>

<input
type="checkbox"
checked={showPassword}
onChange={handleShowPassword}
className={Style.icon}
// src={lock}
alt=""
/> */
}
