// import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import About from './commponents/About/About';
import Basket from './commponents/Basket/Basket';
import Catalog from './commponents/Catalog/Catalog';
import Delivery from './commponents/Delivery/Delivery';
import Glavnaya from './commponents/Glavnaya/Glavnaya'
import Style from "./App.css";
// import Contacts from './commponents/Contacts/Contacts';


function AppRouter() {
    return (
<>
        <Routes className={Style.app}>

            <Route path="/" element={<Glavnaya />} />
            <Route path='/Catalog' element={<Catalog />} />
            <Route  path='/Delivery' element={<Delivery />} />
            <Route path="/About" element={<About />} />
            <Route path="/Basket" element={<Basket />} />
            
        </Routes>
        
        </>
    );
}

export default AppRouter;