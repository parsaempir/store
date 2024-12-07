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
import poster from './gonde.jpeg';
import Fother from "./Fother";
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
      <div className="image-container">
      <img src={poster}  className="img1" />
      <div className="overlay-content">
        <h1 className="overlay-text">OUTERWEAR FOR EVERY SEASON</h1>
        <div className="button-group">
          <button className="image-button">SHOP 30% OFF</button>
       
        </div>
      </div>
    </div>
     <div className="clothing-list" id="padid">
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
<div className="img-try1"><img src={img3} ></img>
<div className="head-btn">
<span className="leb">BOTTOMS</span>

          <button className="image-button1">SHOP 30% OFF</button>
       
        </div>
</div>

<div className="img-try1"><img src={img4}></img>
<div className="head-btn">
<span className="leb">TOPS</span>
          <button className="image-button1">SHOP 30% OFF</button>
       
        </div>
</div>

<div className="img-try1"><img src={img5} ></img>
<div className="head-btn">
<span className="leb">ACCESSORIES</span>
          <button className="image-button1">SHOP 30% OFF</button>
       
        </div>
</div>


    </div>
    <div className="clothing-list" id="padid">
        {clothes.length === 0 ? (
          <p>No clothing items available.</p>
        ) : (
          clothes.map((item) => (
            <Link key={item.id} to={`/product/${item.id}`} className="clothing-item">
              <div className="clothing-item-inner">
                <img src={item.image} alt={item.title} height="300px" className="img" />
             <br/>   <span className="font-span">  {item.title
    .split(/\s+/) 
    .slice(0, 3) 
    .join(" ")    
    + (item.title.split(/\s+/).length > 3 ? "..." : "")}</span>
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
      <div className="gallery-item medium" id="img-medium">
        <img src={imgtow} alt="Item 2" />
      </div>
      <div className="gallery-item medium">
        <img src={imgtri}alt="Item 3" />
      </div>
    
    </div>
    <div className="fotr"></div>
    <Fother/>
    </div>
    
  
    
    </>
  );
};

export default ClothingList;
