import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Recipes.css";
import { ToastContainer, toast, Bounce, Slide } from "react-toastify";

import Idli from "./Food-imgs/idli.webp";
import Dosa from "./Food-imgs/Dosa.jpg";
import masaladosa from "./Food-imgs/masaladosa.jpg";
import Puri from "./Food-imgs/puri.webp";
import Upma from "./Food-imgs/upma.png";
import Vada from "./Food-imgs/vada.jpg";
import Bajji from "./Food-imgs/bajji.webp";

import Buttersoc from "./Food-imgs/Butterscotch.webp";
import vanilea from "./Food-imgs/Vanilla.webp";
import straberry from "./Food-imgs/Strawberry-Delight.jpg";
import coc from "./Food-imgs/Coca-Cola.png";
import Rose from "./Food-imgs/Rose-Milk.jpg";
import thumbs from "./Food-imgs/sprite.webp";

import chicken65 from "./Food-imgs/chicken65.webp";
import lolipop from "./Food-imgs/chicken-lolipop.jpg";
import keb from "./Food-imgs/Chicken-Kebab.jpg";
import prawanFry from "./Food-imgs/PrawnsFry.jpg";
import egg from "./Food-imgs/eggbri.jpg";
import eggchill from "./Food-imgs/eggchilli.jpg";
import fishtika from "./Food-imgs/Fish-Tikka.jpg";
import prawantan from "./Food-imgs/prawntan.jpg";
import Butternan from "./Food-imgs/butterchicken&nan.jpg";
import prawanbri from "./Food-imgs/prawan-bri.jpg";
import chibri from "./Food-imgs/ChickenBiryani.webp";
import muttonbri from "./Food-imgs/Mutton-Biryani.jpg";
import chimubri from "./Food-imgs/chicken-bir-mu.webp";

import panner65 from "./Food-imgs/Paneer65.webp";
import babycorn from "./Food-imgs/babycorn.jpg";
import pannertik from "./Food-imgs/panner-tika.webp";
import gobi from "./Food-imgs/Gobi-Manchi.webp";
import pannerbut from "./Food-imgs/pannerbutmas.jpg";
import vegbri from "./Food-imgs/vegbri.jpg";
import vegfrirrice from "./Food-imgs/vegfirrice.jpg";
import crudrice from "./Food-imgs/curdrice.jpg";
import vegpulao from "./Food-imgs/vegpulao.webp";
import vegspring from "./Food-imgs/vegspring.webp";
import pulihora from "./Food-imgs/pulihora.jpg";

import NonVeg from "./Food-imgs/non-vegg.jpg";
import chickenThali from "./Food-imgs/chickenthali.webp";
import minivegThali from "./Food-imgs/minivegthali.jpg";
import vegThali from "./Food-imgs/vegthali.webp";

import guava from "./Food-imgs/guava.webp";
import grapes from "./Food-imgs/grapes.jpg";
import apples from "./Food-imgs/apples.webp";
import pineapple from "./Food-imgs/pineapple.webp";
import commingsoon from "./Food-imgs/commingsoon.jpg";

import nonvegicon from "./Food-imgs/non-vegIcon.png";
import vegicon from "./Food-imgs/veg-icon.png";
import Allitems from "./Food-imgs/Allitems.png";

import searchIcon from "./Food-imgs/searchIcon.png";  
import closeIcon from "./Food-imgs/closeIcon.png";     

function Categories() {

  const [filterType, setFilterType] = useState("all");

  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");

  const notify = () => {
    toast.success("Item Added to Cart!", {
      position: "top-right",
      autoClose: 2000,
      theme: "light",
      transition: Bounce,
    });
  };

   const notifyy = () => {
    toast.info("Filter applied successfully!", {
      position: "top-right",
      autoClose: 2000,
      theme: "light",
      transition: Slide,
    });
  };

  const allCategories = [
        {
      title: "Breakfast",
      type: "veg",
      items: [
        { img: Idli, name: "Idli", price: "₹20" },
        { img: Dosa, name: "Dosa", price: "₹30" },
        { img: masaladosa, name: "Masala Dosa", price: "₹50" },
        { img: Puri, name: "Puri", price: "₹30" },
        { img: Upma, name: "Upma", price: "₹25" },
        { img: Vada, name: "Vada", price: "₹35" },
        { img: Bajji, name: "Bajji", price: "₹30" },
      ],
    },

    {
      title: "Non-Veg Starters",
      type: "nonveg",
      items: [
        { img: chicken65, name: "Chicken 65", price: "₹160" },
        { img: lolipop, name: "Chicken Lolipop", price: "₹180" },
        { img: keb, name: "Chicken Kebab", price: "₹190" },
        { img: prawanFry, name: "Prawn Fry", price: "₹220" },
        { img: eggchill, name: "Egg chilli", price: "₹80" },
        { img: fishtika, name: "Fish Tikka", price: "₹140" },
        { img: prawantan, name: "Prawn Tandoori", price: "₹140" },
      ],
    },

    {
      title: "Non-Veg Main Course",
      type: "nonveg",
      items: [
        { img: Butternan, name: "Butter Chicken", price: "₹200" },
        { img: prawanbri, name: "Prawn Biryani", price: "₹240" },
        { img: chibri, name: "Chicken Biryani", price: "₹180" },
        { img: chimubri, name: "Chicken Mughlai", price: "₹210" },
        { img: muttonbri, name: "Mutton Biryani", price: "₹260" },
        { img: egg, name: "Egg Biryani", price: "₹180" },
      ],
    },

    {
      title: "Veg Starters",
      type: "veg",
      items: [
        { img: panner65, name: "Paneer 65", price: "₹120" },
        { img: pannertik, name: "Paneer Tikka", price: "₹130" },
        { img: gobi, name: "Gobi Manchurian", price: "₹100" },
        { img: babycorn, name: "Baby Corn Crispy", price: "₹60" },
        { img: vegspring, name: "Veg Spring Rolls", price: "₹60" },
      ],
    },

    {
      title: "Veg Main Course",
      type: "veg",
      items: [
        { img: vegbri, name: "Veg Biryani", price: "₹110" },
        { img: vegfrirrice, name: "Veg Fried Rice", price: "₹100" },
        { img: pannerbut, name: "Paneer Butter Masala", price: "₹140" },
        { img: crudrice, name: "Crud Rice", price: "₹100" },
        { img: vegpulao, name: "Veg Pulao", price: "₹110" },
        { img: pulihora, name: "Pulihora", price: "₹80" },
      ],
    },

    {
      title: "Veg & Non-Veg Thalis",
      type: "mixed",
      items: [
        { img: minivegThali, name: "Mini Veg Thali", price: "₹150" },
        { img: vegThali, name: "Veg Thali", price: "₹240" },
        { img: chickenThali, name: "Chicken Thali", price: "₹350" },
        { img: NonVeg, name: "Non-Veg Thali", price: "₹500" },
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
      title: "Fruits",
      items: [
        { img: apples, name: "Apples", price: "₹150 Dozen" },
        { img: grapes, name: "Grapes", price: "₹150 /Kg" },
        { img: guava, name: "Guava", price: "₹150 /Kg" },
        { img: pineapple, name: "Pine Apple", price: "₹40" },
        { img: commingsoon, name: "Comming Soon" },
      ],
    },
  ];
  const filtered = allCategories.filter(cat => {
    if (filterType === "veg") return cat.type === "veg";
    if (filterType === "nonveg") return cat.type === "nonveg";
    return true;
  });
// search applies
  const searched = filtered
    .map(cat => ({
      ...cat,
      items: cat.items.filter(item =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      ),
    }))
    .filter(cat => cat.items.length > 0);

  return (
    <div className="all-caties">

      {!showSearch && (
        <div className="icon-row">

          <div className="icon-box"  onClick={() => setFilterType("veg")}>
            <img src={vegicon} className="vegicon"  onClick={notifyy}/>
            <p className="icon-label-veg" onClick={notifyy}>Veg</p>
          </div>

          <div className="icon-box" onClick={() => setFilterType("nonveg")}>
            <img src={nonvegicon} className="nonvegicon" onClick={notifyy}/>
            <p className="icon-label-non" onClick={notifyy}>Non Veg</p>
          </div>

          <div className="icon-box" onClick={() => setFilterType("all")}>
            <img src={Allitems} className="Allitems"  onClick={notifyy}/>
            <p className="icon-label-all" onClick={notifyy}>All Items</p>
          </div>
          
          <div className="icon-box search-box" onClick={() => setShowSearch(true)}>
            <img src={searchIcon} className="search-icon" />
          </div>
        </div>
      )}

      {showSearch && (
        <div className="search-bar-wrap">
          <input
            type="text"
            className="search-input"
            placeholder="Search food..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <img
            src={closeIcon}
            className="close-icon"
            onClick={() => {
              setShowSearch(false);
              setSearchText("");
            }}
          />
        </div>
      )}
      {searched.map((cat, index) => (
        <div key={index} className="category-section">
          <div className="categories">
            <h2>{cat.title}</h2>
          </div>

          <div className="items">
            {cat.items.map((item, i) => (
              <div className="item-card" key={i}>
                <img src={item.img} className="item-img" />

                <h3 className="item-name">{item.name}</h3>

                <div className="price-qty-row">
                  <p className="item-price">{item.price ?? ""}</p>

                  <select className="qty-dropdown">
                    {[...Array(10)].map((_, n) => (
                      <option key={n} value={n + 1}>
                        {n + 1}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="item-buttons">
                  <Link className="btn buy" onClick={notify} style={{textDecoration:"none"}}>
                    Add Item
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <ToastContainer />
    </div>
  );
}

export default Categories;
