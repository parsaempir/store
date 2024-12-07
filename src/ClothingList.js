import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Color from './ColorCircles';
import imgon from './tg_image_2218913166.jpeg';
import imgtow from './tg_image_2324303306.jpeg';
import imgtri from './tg_image_2677247921.jpeg';
import img1 from './tg_image_2192820976.jpeg';
import img2 from './tg_image_2691972851.jpeg';
import img3 from './tg_image_3313305930.jpeg';
import img4 from './tg_image_3946022786.jpeg';
import img5 from './tg_image_719113443.jpeg';
import poster from './gonde.jpeg'
const ClothingList = () => {
  const [clothes, setClothes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=18")
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

  return (<>
    <div>
      <div className="clothing-list">
        {clothes.length === 0 ? (
          <p>No clothing items available.</p>
        ) : (
          clothes.map((item) => (
            <Link key={item.id} to={`/product/${item.id}`} className="clothing-item">
              <div className="clothing-item-inner">
                <img src={item.image} alt={item.title} height="300px" className="img" />
             <br/>   <span className="font-span">{item.title}</span>
                <p className="font"> ${item.price}</p>
                <Color />

              </div>
            </Link>
          ))
        )}

      </div>
     <img src={poster}  className="img1"></img>
     <div className="clothing-list">
        {clothes.length === 0 ? (
          <p>No clothing items available.</p>
        ) : (
          clothes.map((item) => (
            <Link key={item.id} to={`/product/${item.id}`} className="clothing-item">
              <div className="clothing-item-inner">
                <img src={item.image} alt={item.title} height="300px" className="img" />
             <br/>   <span className="font-span">{item.title}</span>
                <p className="font"> ${item.price}</p>
                <Color />

              </div>
            </Link>
          ))
        )}

      </div>
      <div className="img-try">

<img src={img3} height='610px'></img>
<img src={img4} height='610px'></img>
<img src={img5} height='610px'></img>

    </div>
    <div className="clothing-list">
        {clothes.length === 0 ? (
          <p>No clothing items available.</p>
        ) : (
          clothes.map((item) => (
            <Link key={item.id} to={`/product/${item.id}`} className="clothing-item">
              <div className="clothing-item-inner">
                <img src={item.image} alt={item.title} height="300px" className="img" />
             <br/>   <span className="font-span">{item.title}</span>
                <p className="font"> ${item.price}</p>
                <Color />

              </div>
            </Link>
          ))
        )}

      </div>

      <div className="gallery">
      <div className="gallery-item large">
        <img src={imgon} alt="Item 1" />
      </div>
      <div className="gallery-item medium">
        <img src={imgtow} alt="Item 2" />
      </div>
      <div className="gallery-item medium">
        <img src={imgtri}alt="Item 3" />
      </div>
    
    </div>
    </div>
    
  
    
    </>
  );
};

export default ClothingList;
