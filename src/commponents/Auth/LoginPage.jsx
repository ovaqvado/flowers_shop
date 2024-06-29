import { React, useState } from "react";
import Style from "./Auth.module.scss";
import lock from "./image/lock.svg";
import profile from "./image/profile.svg";
import { Link } from "react-router-dom";

function LoginPage(props) {
  // // RESTART PAGE
  // const noRestart = async (e) => {
  //   e.preventDefault();
  // };
  // // Password & Email
  // const [showPassword, setShowPassword] = useState(false);
  // const { setPassword, setEmail } = props;

  // const handleShowPassword = () => {
  //   setShowPassword(!showPassword);
  // };

  // const [emailDirty, setEmailDirty] = useState(false);
  // const [passwordDirty, setPasswordDirty] = useState(false);

  // const [emailError, setEmailError] = useState("email не может быть пустым");
  // const [passwordError, setPasswordError] = useState(
  //   "пароль не может быть пустым"
  // );

  // const blurHandler = (e) => {
  //   switch (e.target.name) {
  //     case "email":
  //       setEmailDirty(true);
  //       break;
  //     case "password":
  //       setPasswordDirty(true);
  //       break;
  //     default:
  //   }
  // };

  return (
    <div>
      <div className={Style.container_auth}>
        <form className={Style.login_box}>
          <h1 className={Style.title}>Вход</h1>

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
                Нет учетной записи?
                <Link to="/register" className={Style.link_login}>
                  Регистрация
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
