import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ClothingList from "./components/ClothingList.js";
import ProductDetail from "./components/ProductDetails.js";
import Nav from './components/Nav'

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
