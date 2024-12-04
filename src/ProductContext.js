import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// ایجاد کانتکست
export const ProductContext = createContext();

// کامپوننت Provider برای استفاده از کانتکست
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // استفاده از axios برای گرفتن محصولات از API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
