import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();  
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (<>
    <div className="product-detail">
      <img src={product.image} alt={product.title} width="300" className="img" />

    </div>
    <div className="product-detail">
          <h2>{product.title}</h2>
          <p><strong>Price: ${product.price}</strong></p>
          <p><strong>Description:</strong>{product.description}</p>
        </div></>
  );
};

export default ProductDetail;
