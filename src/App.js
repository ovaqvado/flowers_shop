// import Header from "./commponents/Header/Header";
// import Card from "./commponents/Card/Card";
// import './App.css';
// import Footer from "./commponents/Footer/Footer";
// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Card />
//       <Footer />
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './commponents/Home';
import About from './commponents/AboutMe';
// import Contact from './Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;