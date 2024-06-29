import AppRouter from "./AppRouter";
import { Header } from "./commponents/Header/Header";
import Footer from "./commponents/Footer/Footer";
import Style from "./App.scss";
// import Basket from "./commponents/Basket/Basket";
import { useState } from "react";

function App() {
  // const [basketActive, setBasketActive] = useState(true);
  return (
    <div className={Style.app}>
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
