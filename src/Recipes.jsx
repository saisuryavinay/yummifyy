import React, { useEffect, useRef } from "react";
import "./Recipes.css";
import Noodles from "./Food-imgs/Noodles.png";
import Veggstart from "./Food-imgs/Veg Starters.png";
import NonVegg from "./Food-imgs/Non-veg Starters.png";
import MainCo from "./Food-imgs/Main Course.png";
import seaFood from "./Food-imgs/sea-food.png";
import IceCream from "./Food-imgs/Desserts.png";
import Soups from "./Food-imgs/Soups.png";
import Salad from "./Food-imgs/Salads.png";
import mandhi from "./Food-imgs/non-vegg.jpg";
import vegThali from "./Food-imgs/thali.jpg";

function Recipes() {
  const alertShown = useRef(false);

  useEffect(() => {
    if (!alertShown.current) {
      window.alert("🍴 Order your food now!");
      alertShown.current = true;
    }
  }, []);

  const menuItems = [
    { title: "Non-Veg Starters", img: NonVegg },
    { title: "Veg Starters", img: Veggstart },
    { title: "Soups", img: Soups },
    { title: "Fish & Sea Food", img: seaFood },
    { title: "Main Course", img: MainCo },
    { title: "Mandhi", img: mandhi },
    { title: "Veg Thali", img: vegThali },
    { title: "Noodles", img: Noodles },
    { title: "Salads", img: Salad },
    { title: "Desserts", img: IceCream },
  ];

  return (
    <section className="menu-section">
      <h1 className="menu-title">Explore Our Menu</h1>

      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-card">
            <img src={item.img} alt={item.title} className="menu-image" />
            <h2 className="menu-item-title">{item.title}</h2>
            <a href="/Categories" className="menu-link">
              View All
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Recipes;
