import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductProvider } from "./ProductContext";  // وارد کردن ProductProvider
import ProductsList from "./ProductsList";
import ProductDetail from "./ProductDetails";
import Nav from './Nav'

const App = () => {
  return (
    <ProductProvider>
      <Nav/>
      <Router>
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </Router>
    </ProductProvider>
  );
};

export default App;
