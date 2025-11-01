import React from "react";
import { Link } from "react-router-dom";
import "./Recipes.css";

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
import prawanFry from './Food-imgs/PrawnsFry.jpg';
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

function Categories() {
  const categories = [
    {
      title: "Breakfast",
      items: [
        { img: Idli, name: "Idli", price: "₹40" },
        { img: Dosa, name: "Dosa", price: "₹50" },
        { img: Puri, name: "Puri", price: "₹40" },
        { img: Upma, name: "Upma", price: "₹45" },
        { img: Vada, name: "Vada", price: "₹35" },
        { img: Bajji, name: "Bajji", price: "₹30" },
      ],
    },
    {
      title: "Desserts & Drinks",
      items: [
        { img: Buttersoc, name: "Butterscotch", price: "₹80" },
        { img: vanilea, name: "Vanilla", price: "₹70" },
        { img: straberry, name: "Strawberry Delight", price: "₹90" },
        { img: coc, name: "Coca Cola", price: "₹40" },
        { img: Rose, name: "Rose Milk", price: "₹50" },
        { img: thumbs, name: "Sprite", price: "₹40" },
      ],
    },
    {
      title: "Non-Veg Starters & Main Course",
      items: [
        { img: chicken65, name: "Chicken 65", price: "₹160" },
        { img: lolipop, name: "Chicken Lolipop", price: "₹180" },
        { img: keb, name: "Chicken Kebab", price: "₹190" },
        { img: prawanFry, name: "Prawn Fry", price: "₹220" },
        { img: Butternan, name: "Butter Chicken", price: "₹200" },
        { img: prawanbri, name: "Prawn Biryani", price: "₹240" },
        { img: chibri, name: "Chicken Biryani", price: "₹180" },
        { img: chimubri, name: "Chicken Mughlai", price: "₹210" },
        { img: muttonbri, name: "Mutton Biryani", price: "₹260" },
      ],
    },
    {
      title: "Veg Starters & Main Course",
      items: [
        { img: panner65, name: "Paneer 65", price: "₹120" },
        { img: pannertik, name: "Paneer Tikka", price: "₹130" },
        { img: gobi, name: "Gobi Manchurian", price: "₹100" },
        { img: vegbri, name: "Veg Biryani", price: "₹110" },
        { img: vegfririce, name: "Veg Fried Rice", price: "₹100" },
        { img: pannerbut, name: "Paneer Butter Masala", price: "₹140" },
      ],
    },
    {
      title: "Veg & Non-Veg Thalis",
      items: [
        { img: minivegThali, name: "Mini Veg Thali", price: "₹190" },
        { img: vegThali, name: "Veg Thali", price: "₹200" },
        { img: chickenThali, name: "Chicken Thali", price: "₹250" },
        { img: NonVeg, name: "Non-Veg Thali", price: "₹400" },
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
                <h3 className="item-name">{item.name}</h3>
                <p className="item-price">{item.price}</p>

                <div className="item-buttons">
                  <button className="btn minus">-</button>
                  <Link className="btn buy" to="/Cart" style={{ textDecoration: "none" }}>
                    Buy Now
                  </Link>
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
