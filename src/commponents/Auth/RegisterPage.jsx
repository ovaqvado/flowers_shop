import { React, useState } from "react";
import Style from "./Auth.module.scss";
import lock from "./image/lock.svg";
import profile from "./image/profile.svg";
import { Link } from "react-router-dom";

function RegisterPage() {
  // // RESTART PAGE
  // const noRestart = async (e) => {
  //   e.preventDefault();
  // };
  // // Email
  // const [email, setEmail] = useState("");

  // // Password
  // const [showPassword, setShowPassword] = useState(false);
  // const [password, setPassword] = useState("");

  // const handleShowPassword = () => {
  //   setShowPassword(!showPassword);
  // };
  // // Auth form
  // const [login, setLogin] = useState(true);
  // const [register, setRegister] = useState(false);

  // const hideWindowLogin = () => {
  //   setLogin(false);
  //   setRegister(true);
  // };
  // const hideWindowRegister = () => {
  //   setLogin(true);
  //   setRegister(false);
  // };
  return (
    <div>
      <div className={Style.container_auth}>
        <form className={Style.login_box}>
          <h1 className={Style.title}>Регистрация</h1>

          <div className={Style.input_box} action="">
            <div className={Style.input_wrapper}>
              <input className={Style.input} type="text" placeholder="Логин" />
              <img className={Style.icon} src={profile} alt="" />
            </div>

            <div className={Style.input_wrapper}>
              <input
                type="password"
                className={Style.input}
                placeholder="Пароль"
              />
              {/* <input type="checkbox" /> */}
              {/* <label for="lock"> */}
              {/* <button> */}
              <img className={Style.icon} src={lock} alt="" />
              {/* </button> */}
              {/* </label> */}
            </div>
          </div>
          <div className={Style.submit_container}>
            <button type="submit" className={Style.login}>
              Войти
            </button>
            <div className={Style.form_reg_log}>
              <p className={Style.subtitle}>
                Есть учетная запись?
                <Link to="/login" className={Style.link_login}>
                  Войти
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
