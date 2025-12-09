import React from "react";
import "./Login.css";

import eggbri from "./Food-imgs/Chicken-Kebab.jpg";
import redtom from "./Food-imgs/redtom.png";
import tomatoslice from "./Food-imgs/tomatoslice.png";
import yellowtom from "./Food-imgs/yellowtom.png";
import onionslice from "./Food-imgs/onionslice.png";
import greenchilli from "./Food-imgs/greenchilli.png";
import leaf from "./Food-imgs/leaf.png";

export default function Login() {
  return (
    <div className="page-bg-modal">
      <div className="login-card">
        <div className="top-curve">
          <div className="name">
            <h2 className="title">
              <span className="line1">Welcome to</span>
              <span className="line2">Login page</span>
            </h2>
          </div>
        </div>

        <div className="welcome-back">Welcome back..!!</div>

        <div className="hero-wrap">
          <img src={eggbri} className="hero" alt="chicken kebab" />
        </div>

        <form className="form-body" onSubmit={(e) => e.preventDefault()}>
          <label className="lbl">Your email</label>
          <input
            className="input"
            type="email"
            placeholder="Enter your email"
            required
          />

          <label className="lbl">Your password</label>
          <input
            className="input"
            type="password"
            placeholder="Enter your password"
            required
            minLength={8}
            maxLength={12}
          />

          <p className="forgot" style={{ cursor: "pointer" }}>
            Forgot password?
          </p>

          <div className="action-area">
            <button className="login-btn" type="submit">
              <span className="btn-text">Log in</span>
              <span className="btn-circle" aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 5L16 12L8 19"
                    stroke="#06388f"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </form>

        <div className="footer-pill">
          Don’t have an account? <span className="register-link">Register!</span>
        </div>
      </div>
    </div>
  );
}
