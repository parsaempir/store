import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "./ProductContext";
import "./App.css";

const ProductDetail = () => {
  const { productId } = useParams();
  const { products } = useContext(ProductContext);  // استفاده از Context برای گرفتن محصولات
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find((prod) => prod.id === parseInt(productId));
    setProduct(foundProduct);
  }, [productId, products]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="product-detail">
      <img
        src={product.image}
        alt={product.title}
        className="product-detail-image"
      />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p className="product-price">${product.price}</p>
      <button className="buy-now-button">Buy Now</button>
    </div>
  );
};

export default ProductDetail;
