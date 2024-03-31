import React from "react";
import About from "../About/About";
import Catalog from "../Catalog/Catalog";
import Delivery from "../Delivery/Delivery";
import Auth from "../Auth/Auth";
import Basket from "../Basket/Basket";
import Styles from "../Header/Header.module.css";
// import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Link } from "react-router-dom";

export default function Header() {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Routes>
                <Link path="/About" component={About}>
                  Контакты
                </Link>
              </Routes>
            </li>
            <li>
              <Link to="/Auth">Авторизация</Link>
            </li>
          </ul>
        </nav>
      </header>
    </Router>
  );
}

// export default function Header() {
//   return (
//     <div>
//       <div>
//         <img src="" alt="logo" />
//         <p>Название</p>
//       </div>
//       <ul>
//         <li>
//           <a href="./Auth">asda</a>
//         </li>
//         <Router>
//           <header>
//             <nav>
//               <ul>
//                 <li>
//                   <Link to="/Header">Главная</Link>
//                 </li>
//                 <li>
//                   <Link to="/about">Контакты</Link>
//                 </li>
//                 <li>
//                   <Link to="/topics">Темы</Link>
//                 </li>
//               </ul>
//             </nav>
//           </header>
//         </Router>

//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//       </ul>
//       {/* <div className={Styles["links"]}>
//         <About />
//         <Catalog />
//         <Delivery />
//         <Auth />
//         <Basket />
//       </div> */}
//     </div>
//   );
// }
