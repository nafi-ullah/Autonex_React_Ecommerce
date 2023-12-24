import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./styles/About";
import Products from "./Products";
import Contact from "./Contact";
import Cart from "./Cart";

const App = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element= {<Home/>}> </Route>
            <Route path="/about" element= {<About/>}> </Route>
            <Route path="/products" element= {<Products/>}> </Route>
            <Route path="/contact" element= {<Contact/>}> </Route>
            <Route path="/cart" element= {<Cart/>}> </Route>
          </Routes>
      </Router>
  );
};

export default App;
