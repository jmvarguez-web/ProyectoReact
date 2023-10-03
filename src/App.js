import React from "react";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Productos from "./components/Productos";
import Nosotros from "./components/Nosotros";
import Calculadora from "./components/Calculadora";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <Header/>
      <Navbar/>
   
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/nosotros" element={<Nosotros />}/>
        <Route path="/productos" element={<Productos />}/>
        <Route path="/calculadora" element={<Calculadora />}/>
      </Routes>
      
      <Footer/>
    </Router>
  );
}

export default App;
