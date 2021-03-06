import React from "react";
import freelancer from "../assets/images/freelancer-two.svg";
import "../assets/css/auth.css";
import Logo from "../assets/images/logo.svg";

const Login = () => {
  return (
    <div>
      <div className="auth-flex">
        <div className="left-side">
          <div
            id="carouselExampleIndicators"
            class="carousel slide auth-carousel"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class=""
                  src={freelancer}
                  alt="First slide"
                  width="500"
                  height="300"
                />
                <div class="carousel-caption d-none d-md-block">
                  <p className="text-dark">
                    Using the bento platform paying all our staff{" "}
                    <figcaption>
                      their salaries has been very much easier. We{" "}
                    </figcaption>
                    highly recommend
                  </p>
                  <h5 className="font-weight-bold caption-name">
                    Mary Timberland, USA
                  </h5>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  class=""
                  src={freelancer}
                  alt="Second slide"
                  width="500"
                  height="300"
                />
                <div class="carousel-caption d-none d-md-block">
                  <p className="text-dark">
                    Using the bento platform paying all our staff{" "}
                    <figcaption>
                      their salaries has been very much easier. We{" "}
                    </figcaption>
                    highly recommend
                  </p>
                  <h5 className="font-weight-bold caption-name">
                    Mary Timberland, USA
                  </h5>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  class=""
                  src={freelancer}
                  alt="Third slide"
                  width="500"
                  height="300"
                />
                <div class="carousel-caption d-none d-md-block">
                  <p className="text-dark">
                    Using the bento platform paying all our staff{" "}
                    <figcaption>
                      their salaries has been very much easier. We{" "}
                    </figcaption>
                    highly recommend
                  </p>
                  <h5 className="font-weight-bold caption-name">
                    Mary Timberland, USA
                  </h5>
                </div>
              </div>
            </div>
            <ol class="carousel-indicators auth-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
          </div>
        </div>
        <div className="right-side">
          <div className=" form-container">
            <div className="auth-logo">
              <img src={Logo} alt="logo" />
              <span className="font-weight-bold text-white">eelspace</span>
            </div>
            <div className="pt">
              <h4>Welcome back, Login</h4>
              <p>
                Fill in your details below to login to the eelspace marketplace.
              </p>
            </div>
            <form className="form-group auth-form">
              <div className="row">
                <div className="col-md-12">
                  <label htmlFor="name">UserName</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Enter your username"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6"></div>
                <div className="col-md-6">
                  <p>Forgot Password</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <button type="submit" className="btn submit-btn">
                    Login
                  </button>
                  <p className="text-center">Dont have an account? Sign in</p>
                </div>
              </div>
            </form>
            <div className="legal-statements">
              <p>Privacy Policy . Terms of Use</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
