import AppRouter from "./AppRouter";
import { Header } from "./commponents/Header/Header";
import Footer from "./commponents/Footer/Footer"

function App() {
  return (
    <div>
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;