import React from "react";
import Idli from './Food-imgs/idli.webp';
import Dosa from './Food-imgs/Dosa.jpg';
import Puri from './Food-imgs/puri.webp';
import Upma from './Food-imgs/upma.png';
import Vada from './Food-imgs/vada.jpg';
import Bajji from './Food-imgs/bajji.webp';
import Buttersoc from './Food-imgs/Butterscotch.webp';
import vanilea from './Food-imgs/Vanilla.webp';
import straberry from './Food-imgs/Strawberry-Delight.jpg';
import coc from './Food-imgs/Coca-Cola.png';
import Rose from './Food-imgs/Rose-Milk.jpg';
import thumbs from './Food-imgs/sprite.webp';
import chicken65 from './Food-imgs/chicken65.webp';
import lolipop from './Food-imgs/chicken-lolipop.jpg';
import keb from './Food-imgs/Chicken-Kebab.jpg';
import prawanFry  from './Food-imgs/PrawnsFry.jpg';
import Butternan from './Food-imgs/butterchicken&nan.jpg';
import prawanbri from './Food-imgs/prawan-bri.jpg';
import chibri from './Food-imgs/ChickenBiryani.webp';
import muttonbri from './Food-imgs/Mutton-Biryani.jpg';
import chimubri from './Food-imgs/chicken-bir-mu.webp';
import panner65 from './Food-imgs/Paneer65.webp';
import pannertik from './Food-imgs/panner-tika.webp';
import gobi from './Food-imgs/Gobi-Manchi.webp';
import pannerbut from './Food-imgs/pannerbutmas.jpg';
import vegbri from './Food-imgs/vegbri.jpg';
import vegfririce from './Food-imgs/vegfirrice.jpg';
import NonVeg from './Food-imgs/non-vegg.jpg';
import chickenThali from './Food-imgs/chickenthali.webp';
import minivegThali from './Food-imgs/minivegthali.jpg';
import vegThali from './Food-imgs/vegthali.webp';
import VegIcon from './Food-imgs/veg-icon.png';
import nonVegIcon from './Food-imgs/non-vegIcon.png';
import { Link } from "react-router-dom";
import Cart from './Cart.jsx';

import "./Recipes.css";

function Categories() {
  const categories = [
    {
      title: "Breakfast",
      items: [
        { img: Idli, name: "Idli" },
        { img: Dosa, name: "Dosa" },
        { img: Puri, name: "Puri" },
        { img: Upma, name: "Upma" },
        { img: Vada, name: "Vada" },
        { img: Bajji, name: "Bajji" },
      ],
    },
    {
      title: "Desserts & Drinks",
      items: [
        { img: Buttersoc, name: "Butterscotch" },
        { img: vanilea, name: "Vanilla" },
        { img: straberry, name: "Strawberry Delight" },
        { img: coc, name: "Coca Cola" },
        { img: Rose, name: "Rose Milk" },
        { img: thumbs, name: "Thumbs Up" },
      ],
    },
    // 9 items --- Nonveg and main course
    {
      title : "Non-Veg Startes & Main Course",
      items: [
        {img:chicken65,name:"chicken65"},
        {img:lolipop, name: "Chicken Lolipop"},
        {img:keb,name:"Chicken Kebab"},
        {img:prawanFry,name:"prawanFry"},
        {img:Butternan,name:"ButterChicken"},
        {img:prawanbri,name:"prawanbiryani"},
        {img:chibri,name:"Chicken Biryani"},
        {img:chimubri,name:"Chicken Mugali"},
        {img:muttonbri,name:"mutton"}
      ],
    },
    {
      title: "Veg Startes & Main Course",
      items: [
        {img:panner65,name:"Panner65"},
        {img:pannertik,name:"Paneer-Tikka"},
        {img:gobi,name:"Gobi Manchurian"},
        {img:vegbri,name:"Veg-Biryani"},
        {img:vegfririce,name:"Veg Fried Rice"},
        {img:pannerbut,name:"Paneer ButterMasala"},
      ],
    },
    {
      title: "Veg & Non-Veg Thalli's",
      items: [
          {img: minivegThali, name:"MiniVeg-Thali"},
          {img:vegThali, name:"Veg-Thali"},
          {img:chickenThali,name:"Chicken-thali"},
          {img: NonVeg, name:"Non-vegg-Thalli"},
      ],
    },
  ];

  return (
    <div className="all-caties">
      {categories.map((cat, index) => (
        <div key={index} className="category-section">
          <div className="categories">
            <h2>{cat.title}</h2>
          </div>

          <div className="items">
            {cat.items.map((item, i) => (
              <div className="item-card" key={i}>
                <img src={item.img} alt={item.name} className="item-img" />
                <h3>{item.name}</h3>
                <div className="item-buttons">
                  <button className="btn minus">-</button>
                  
                  <Link className="btn buy" to="/Cart">Buy Now</Link>
                  
                  <button className="btn plus">+</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Categories;
