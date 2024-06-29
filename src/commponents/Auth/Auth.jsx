// import { React, useState } from "react";
// import { useLocation } from "react-router-dom";
// import LoginPage from "./LoginPage";
// import RegisterPage from "./RegisterPage";

// function Auth() {
//   const location = useLocation();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {location.pathname === "/login" ? (
//         <LoginPage setEmail={setEmail} setPassword={setPassword} />
//       ) : location.pathname === "/register" ? (
//         <RegisterPage />
//       ) : null}
//     </form>
//   );
// }

// export default Auth;

// /* <input

// type={showPassword ? "text" : "password"}
// value={password}
// onChange={(e) => setPassword(e.target.value)}
// />

// <input
// type="checkbox"
// checked={showPassword}
// onChange={handleShowPassword}
// className={Style.icon}
// // src={lock}
// alt=""
// /> */
