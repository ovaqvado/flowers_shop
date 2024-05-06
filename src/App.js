import AppRouter from "./AppRouter";
import { Header } from "./commponents/Header/Header";
import Footer from "./commponents/Footer/Footer";
import Style from './App.css';

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