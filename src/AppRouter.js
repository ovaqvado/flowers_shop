import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./commponents/About/About";
import Basket from "./commponents/Basket/Basket";
import Catalog from "./commponents/Catalog/Catalog";
import Delivery from "./commponents/Delivery/Delivery";
import Main from "./commponents/Main/Main";
// import Auth from "./commponents/Auth/Auth";
import RegisterPage from "./commponents/Auth/RegisterPage";
import LoginPage from "./commponents/Auth/LoginPage";
import Style from "./App.scss";
import Flower from "./commponents/Flower/Flower";

function AppRouter() {
  return (
    <Routes className={Style.app}>
      <Route exact path="/" element={<Main />} />
      <Route path="/Catalog" element={<Catalog />} />
      <Route path="/Delivery" element={<Delivery />} />
      <Route path="/About" element={<About />} />
      <Route path="/Basket" element={<Basket />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/Register" element={<RegisterPage />} />
      <Route path="/Flower" element={<Flower />} />
      <Route path="/Flower/:id" element={<Flower />} />
    </Routes>
  );
}

export default AppRouter;
