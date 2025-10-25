import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // React Router for navigation
import HeroImage from "./Food-imgs/Soups.png";
import Main from "./Food-imgs/Main-Course.png";
import nonVeg from "./Food-imgs/non-vegg.jpg";
import Vegg from "./Food-imgs/vegg.jpg";
import IceCreams from "./Food-imgs/Desserts.png";
import "./Home.css";

const heroImages = [
  { img: HeroImage, title: "Soup", description: "Delicious and warm" },
  { img: Main, title: "Main Course", description: "Filling and tasty" },
  { img: nonVeg, title: "Non-Veg Dish", description: "Rich in flavor" },
  { img: Vegg, title: "Veg Dish", description: "Healthy and fresh" },
  { img: IceCreams, title: "Dessert", description: "Sweet treats" },
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [zipCode, setZipCode] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleGoRecipes = () => {
    if (zipCode.length !== 6) {
      alert("Please enter exactly 6 digits!");
      return;
    }
    navigate("/recipes");
  };

  return (
    <div className="home-hero">
      {/* LEFT: Rotating images */}
      <div className="hero-images-section">
        <div className="food-image">
          <div className="foodie">
            <img
              src={heroImages[currentImage].img}
              alt={heroImages[currentImage].title}
            />
            <div className="tag">
              <h3>{heroImages[currentImage].title}</h3>
              <p>{heroImages[currentImage].description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT: Text content */}
      <div className="hero-content">
        <h1>
          Welcome to <span>Foodie's Paradise</span>
        </h1>
        <p>
          Good food is the foundation of <br /> genuine happiness.
          <br />
          Bringing flavors to life!
        </p>
        <h4>Your comfort food, just a click away.</h4>

        <div className="zip-input">
          <input
            type="number"
            placeholder="Enter 6-digit Zip Code"
            value={zipCode}
            onChange={(e) => {
              const value = e.target.value;
    
              if (/^\d*$/.test(value) && value.length <= 6) setZipCode(value);
            }}
          />
          <button onClick={handleGoRecipes}>➜</button>
        </div>
      </div>
    </div>
  );
}
