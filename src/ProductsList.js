import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "./ProductContext";
import "./App.css";

const ProductsList = () => {
  const { products } = useContext(ProductContext);  // استفاده از Context برای گرفتن محصولات
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="products-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
          <p className="product-price">${product.price}</p>
          <button
            className="product-details-button"
            onClick={() => handleProductClick(product.id)}
          >
            Click for more details and purchase
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
