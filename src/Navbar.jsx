import React from "react";
import { NavLink, Link } from "react-router-dom";
import cartIcon from "./Food-imgs/cart.png";
import signinIcon from "./Food-imgs/sign-in.png";
import loginIcon from "./Food-imgs/login.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

import "./index.css";

function Navbar() {
  const notify = () => {
    toast.warn("Please login First!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <header>
      <div className="logo">YummiFy</div>

      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/Recipes">Recipes</NavLink>
        <NavLink to="/Categories">Categories</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <div className="header-right">
        <div className="cart">
          <Link to="/Cart">
            <img src={cartIcon} alt="Cart" />
            <span className="badge">2</span>
          </Link>
        </div>

        <button className="btn-login" onClick={notify}>
          Login
        </button>

        <ToastContainer />
      </div>
    </header>
  );
}

export default Navbar;
