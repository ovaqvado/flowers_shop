import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./commponents/About/About";
import Basket from "./commponents/Basket/Basket";
import Catalog from "./commponents/Catalog/Catalog";
import Delivery from "./commponents/Delivery/Delivery";
import Main from "./commponents/Main/Main";
import Auth from "./commponents/Auth/Auth";
import Style from "./App.scss";

function AppRouter() {
  return (
    <Routes className={Style.app}>
      <Route exact path="/" element={<Main />} />
      <Route path="/Catalog" element={<Catalog />} />
      <Route path="/Delivery" element={<Delivery />} />
      <Route path="/About" element={<About />} />
      <Route path="/Basket" element={<Basket />} />
      <Route path="/Auth" element={<Auth />} />
    </Routes>
  );
}

export default AppRouter;
