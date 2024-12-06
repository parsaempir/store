import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductProvider } from "./ProductContext";  
import ClothingList from "./ClothingList";
import ProductDetail from "./ProductDetails";
import Nav from './Nav'

const App = () => {
  return (
    <Router>
     <Nav/>
    <Routes>
      <Route path="/" element={<ClothingList />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  </Router>
  );
};

export default App;
