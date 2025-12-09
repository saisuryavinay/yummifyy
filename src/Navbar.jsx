import React from "react";
import { NavLink, Link } from "react-router-dom";
import cartIcon from "./Food-imgs/cart.png";
import Login from "./LoginSignup";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
    <>
      <header>
        <div className="logo">YummiFy</div>

        <nav>
          <NavLink to="/" end style={{ fontSize: 18 }}>
            Home
          </NavLink>
          <NavLink to="/Recipes" style={{ fontSize: 18 }}>
            Recipes
          </NavLink>
          <NavLink to="/Categories" style={{ fontSize: 18 }}>
            Categories
          </NavLink>
          <NavLink to="/Contact" style={{ fontSize: 18 }}>
            Contact
          </NavLink>
        </nav>

        <div className="header-right">
          <div className="cart">
            <Link to="/Cart">
              <img src={cartIcon} alt="Cart" />
              <span className="badge">2</span>
            </Link>
          </div>
          <button
            className="btn-login"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#loginPopup"
            style={{ fontSize: 16 }}
            aria-label="Open login popup"
          >
            Login
          </button>

          <ToastContainer />
        </div>
      </header>

      <div
        className="modal fade"
        id="loginPopup"
        tabIndex="-1"
        aria-labelledby="loginPopupLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div
            className="modal-content p-0"
            style={{ borderRadius: 18, overflow: "hidden" }}
          >
            <div className="modal-body p-0">
              <Login />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
