import React from "react";
import { NavLink } from "react-router-dom";
import cartIcon from "./Food-imgs/cart.png";
import signinIcon from "./Food-imgs/sign-in.png";
import { Link } from "react-router-dom";
import loginIcon from "./Food-imgs/login.png";
import Categories from "./Categories";
import "./index.css";

function Navbar() {
  return (
    <header>
      <div className="logo">YummiFy</div>

      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/categories">Categories</NavLink>
        <NavLink to="/recipes">Recipes</NavLink>

        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <div className="header-right">
        <div className="cart">
          <Link to="/Categories">
          <img src={cartIcon} alt="Cart" />
          <span className="badge">2</span>
          </Link>
        </div>
        {/* <button className="btn-sginin">
          <img src={signinIcon} alt="Sign In" className="imge-si"/>
          Sign In
        </button> */}

        <button className="btn-login">
          {/* <img src={loginIcon} alt="Login" className="imge-li"/> */}
          Login
        </button>
      </div>
    </header>
  );
}

export default Navbar;
