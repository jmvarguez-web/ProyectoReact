import React from "react";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Header from "./components/themplate/Header";
import Navbar from "./components/themplate/Navbar";
import Main from "./components/Main";
import Productos from "./components/Productos";
import Nosotros from "./components/Nosotros";
import Calculadora from "./components/Calculadora";
import Footer from "./components/themplate/Footer";
import Blog from "./components/Blog";
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
         <Route path="/blog" element={<Blog />}/> 
      </Routes>
      
      <Footer/>
    </Router>
  );
}

export default App;
