import AppRouter from "./AppRouter";
import { Header } from "./commponents/Header/Header";
import Footer from "./commponents/Footer/Footer";
import Style from './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contacts from "./commponents/Contacts/Contacts";

function App() {
  return (
    <div className={Style.app}>
      <Header />
      <AppRouter />
      <Footer />

    </div>
  );
}

export default App;