import React from "react";
import "./Login.css";

function SignIn() {
  return (
    <div className="container">
      <div className="card">
        <h2>Sign In</h2>
        <p className="subtext">
          New user? <a href="#">Create an account</a>
        </p>
        <form>
          <input type="email" placeholder="Email address" className="input" required />
          <input type="password" placeholder="Password" className="input" minLength={6} maxLength={8} required />

          <div className="forgot">
            <a href="#">Forgot Password</a>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <div className="divider">
          <span>or</span>
        </div>

        <button className="social-btn google">
          <img src="https://img.icons8.com/color/48/google-logo.png" alt="" />
          Sign in with Google
        </button>

        <button className="social-btn facebook">
          <img src="https://img.icons8.com/fluency/48/facebook-new.png" alt="" />
          Sign in with Facebook
        </button>

        <button className="social-btn apple">
          <img src="https://img.icons8.com/ios-filled/50/mac-os.png" alt="" />
          Sign in with Apple
        </button>
      </div>
    </div>
  );
}

export default SignIn;
