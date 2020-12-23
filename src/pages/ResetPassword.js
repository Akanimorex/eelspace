import React from "react";
import Navigation from "../components/Navigation";
import "../assets/css/forget.css";

const ResetPassword = () => {
  return (
    <div>
      <Navigation />
      <main>
        <div className="forget-content">
          <div className="text-center">
            <h4 className="font-weight-bold">Reset Password</h4>
            <p>Input a new secure password below</p>
          </div>
          <form className="forget-form">
            <label htmlFor="email" className="text-left">
              New Password
            </label>
            <input
              className="form-control request-input"
              placeholder="Enter your new password"
              type="password"
            />

            <label htmlFor="email" className="text-left mt-3">
              Repeat Password
            </label>
            <input
              className="form-control request-input"
              placeholder="Repeat new password"
              type="password"
            />
            <button className="btn request-btn">Request Password Reset</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ResetPassword;
