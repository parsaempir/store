import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";  
import Color from './ColorCircles';
const ClothingList = () => {
  const [clothes, setClothes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=20")
      .then((response) => {
        const filteredClothes = response.data.filter(item =>
          item.category.toLowerCase().includes("clothing")
        );
        setClothes(filteredClothes);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching clothes:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>

      <h1 className="head-h">Clothing List</h1>
      <div className="clothing-list">
        {clothes.length === 0 ? (
          <p>No clothing items available.</p>
        ) : (
          clothes.map((item) => (
            <div key={item.id} className="clothing-item">
             
             <img src={item.image} alt={item.title} height='300px' className="img"/>
             <Color/>
              <span className="font-span">{item.title}</span>
              <p className="font">Price: ${item.price}</p> 
              { }
              <Link to={`/product/${item.id}`} className="more-info-button">
              Click for more information
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ClothingList;
