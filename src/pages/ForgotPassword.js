import React from "react";
import Navigation from "../components/Navigation";
import "../assets/css/forget.css";

const ForgotPassword = () => {
  return (
    <div>
      <Navigation />
      <main>
        <div className="forget-content">
          <div className="text-center">
            <h4 className="font-weight-bold">Forgot Password</h4>
            <p>
              Want to retrieve your password? Please enter{" "}
              <figcaption> the your email address</figcaption>
            </p>
          </div>
          <form className="forget-form">
            <label htmlFor="email" className="text-left">
              Email Address
            </label>
            <input
              className="form-control request-input"
              placeholder="Enter your  email address"
              type="email"
            />
            <button className="btn request-btn">Request Password Reset</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ForgotPassword;
