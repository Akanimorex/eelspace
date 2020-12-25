import React from "react";
import logo from "../assets/images/logo.svg";
import Footer from "../components/Footer";

const Buy = () => {
  return (
    <div>
      <header className="header">
        <nav className="navbar custom-navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" />{" "}
            <span className="text-white font-weight-bold">eelspace</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <form className="form-inline my-2 my-lg-0">
                <input
                  className=" mr-sm-2 nav-input"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown pr-5">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    $USD
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>

                <li className="nav-item dropdown pr-5">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Services
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>
                <li className="nav-item pr-5">
                  <a className="nav-link" href="#">
                    How It Works
                  </a>
                </li>
              </ul>
              <div className="btn-group" role="group">
                <button
                  className="btn auth-btns my-2 my-sm-0 mr-2"
                  type="submit"
                >
                  Login
                </button>
                <button className="btn auth-btns my-2 my-sm-0 " type="submit">
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </nav>

        <div className="landing-text">
          <h1>Buying on eelspace</h1>
          <p>
            Learn more about how eelspace collects and uses data and your rights
            as an eelspace user.
          </p>
        </div>
      </header>

      <main>
        <div className="sell-container">
          <h1 className="font-weight-bold">How to Suceed On eelspace </h1>
          <figcaption>
            {" "}
            <h1 className="font-weight-bold">A guide for Buyers </h1>
          </figcaption>
          <p>
            You can send us a message either via the following contact
            information or using the form below.
          </p>
          <div className="">
            <button className="btn sell-contact-btn">Download Ebook</button>
          </div>
        </div>
        <div className="sell-container">
          <div className="row pt-5">
            <div className="col-md-6 col-sm-12">
              <h3>Steps to finding a seller</h3>
              <p className="pt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <p className="pt-3">
                You can create your seller account{" "}
                <span className="blue-color">here</span>
              </p>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="video-back">
                <span className="play-button">
                  <svg
                    width="30"
                    height="32"
                    viewBox="0 0 30 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.4454 10.75L9.54038 1.05498C8.62562 0.526764 7.58737 0.250051 6.53106 0.252952C5.47476 0.255854 4.43803 0.538265 3.5262 1.0715C2.61436 1.60474 1.85989 2.36981 1.33943 3.289C0.818963 4.20818 0.551041 5.24874 0.562876 6.30498V25.765C0.562876 27.3523 1.19344 28.8746 2.31584 29.997C3.43825 31.1194 4.96056 31.75 6.54788 31.75C7.59864 31.7482 8.63053 31.4706 9.54038 30.945L26.4454 21.25C27.3537 20.7243 28.1079 19.9689 28.6321 19.0597C29.1564 18.1506 29.4324 17.1195 29.4324 16.07C29.4324 15.0205 29.1564 13.9894 28.6321 13.0802C28.1079 12.171 27.3537 11.4157 26.4454 10.89V10.75ZM24.6954 18.0825L7.79038 27.9175C7.41148 28.1322 6.98339 28.2451 6.54788 28.2451C6.11236 28.2451 5.68428 28.1322 5.30538 27.9175C4.92755 27.6993 4.6138 27.3856 4.3957 27.0077C4.17759 26.6299 4.0628 26.2013 4.06288 25.765V6.23498C4.0628 5.7987 4.17759 5.37009 4.3957 4.99224C4.6138 4.61439 4.92755 4.30062 5.30538 4.08248C5.68584 3.87101 6.11265 3.75679 6.54788 3.74998C6.98281 3.75891 7.40912 3.87299 7.79038 4.08248L24.6954 13.8475C25.0733 14.0655 25.3872 14.3793 25.6055 14.7571C25.8237 15.135 25.9386 15.5636 25.9386 16C25.9386 16.4363 25.8237 16.865 25.6055 17.2429C25.3872 17.6207 25.0733 17.9344 24.6954 18.1525V18.0825Z"
                      fill="white"
                      fillOpacity="0.8"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="row pt-5 mt-5">
            <div className="col-md-6 col-sm-12">
              <h3>Steps to finding a seller</h3>
              <p className="pt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <p className="pt-3">
                You can create your seller account{" "}
                <span className="blue-color">here</span>
              </p>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="video-back">
                <span className="play-button">
                  <svg
                    width="30"
                    height="32"
                    viewBox="0 0 30 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.4454 10.75L9.54038 1.05498C8.62562 0.526764 7.58737 0.250051 6.53106 0.252952C5.47476 0.255854 4.43803 0.538265 3.5262 1.0715C2.61436 1.60474 1.85989 2.36981 1.33943 3.289C0.818963 4.20818 0.551041 5.24874 0.562876 6.30498V25.765C0.562876 27.3523 1.19344 28.8746 2.31584 29.997C3.43825 31.1194 4.96056 31.75 6.54788 31.75C7.59864 31.7482 8.63053 31.4706 9.54038 30.945L26.4454 21.25C27.3537 20.7243 28.1079 19.9689 28.6321 19.0597C29.1564 18.1506 29.4324 17.1195 29.4324 16.07C29.4324 15.0205 29.1564 13.9894 28.6321 13.0802C28.1079 12.171 27.3537 11.4157 26.4454 10.89V10.75ZM24.6954 18.0825L7.79038 27.9175C7.41148 28.1322 6.98339 28.2451 6.54788 28.2451C6.11236 28.2451 5.68428 28.1322 5.30538 27.9175C4.92755 27.6993 4.6138 27.3856 4.3957 27.0077C4.17759 26.6299 4.0628 26.2013 4.06288 25.765V6.23498C4.0628 5.7987 4.17759 5.37009 4.3957 4.99224C4.6138 4.61439 4.92755 4.30062 5.30538 4.08248C5.68584 3.87101 6.11265 3.75679 6.54788 3.74998C6.98281 3.75891 7.40912 3.87299 7.79038 4.08248L24.6954 13.8475C25.0733 14.0655 25.3872 14.3793 25.6055 14.7571C25.8237 15.135 25.9386 15.5636 25.9386 16C25.9386 16.4363 25.8237 16.865 25.6055 17.2429C25.3872 17.6207 25.0733 17.9344 24.6954 18.1525V18.0825Z"
                      fill="white"
                      fillOpacity="0.8"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="row pt-5 mt-5">
            <div className="col-md-6 col-sm-12">
              <h3>Steps to finding a seller</h3>
              <p className="pt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <p className="pt-3">
                You can create your seller account{" "}
                <span className="blue-color">here</span>
              </p>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="video-back">
                <span className="play-button">
                  <svg
                    width="30"
                    height="32"
                    viewBox="0 0 30 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.4454 10.75L9.54038 1.05498C8.62562 0.526764 7.58737 0.250051 6.53106 0.252952C5.47476 0.255854 4.43803 0.538265 3.5262 1.0715C2.61436 1.60474 1.85989 2.36981 1.33943 3.289C0.818963 4.20818 0.551041 5.24874 0.562876 6.30498V25.765C0.562876 27.3523 1.19344 28.8746 2.31584 29.997C3.43825 31.1194 4.96056 31.75 6.54788 31.75C7.59864 31.7482 8.63053 31.4706 9.54038 30.945L26.4454 21.25C27.3537 20.7243 28.1079 19.9689 28.6321 19.0597C29.1564 18.1506 29.4324 17.1195 29.4324 16.07C29.4324 15.0205 29.1564 13.9894 28.6321 13.0802C28.1079 12.171 27.3537 11.4157 26.4454 10.89V10.75ZM24.6954 18.0825L7.79038 27.9175C7.41148 28.1322 6.98339 28.2451 6.54788 28.2451C6.11236 28.2451 5.68428 28.1322 5.30538 27.9175C4.92755 27.6993 4.6138 27.3856 4.3957 27.0077C4.17759 26.6299 4.0628 26.2013 4.06288 25.765V6.23498C4.0628 5.7987 4.17759 5.37009 4.3957 4.99224C4.6138 4.61439 4.92755 4.30062 5.30538 4.08248C5.68584 3.87101 6.11265 3.75679 6.54788 3.74998C6.98281 3.75891 7.40912 3.87299 7.79038 4.08248L24.6954 13.8475C25.0733 14.0655 25.3872 14.3793 25.6055 14.7571C25.8237 15.135 25.9386 15.5636 25.9386 16C25.9386 16.4363 25.8237 16.865 25.6055 17.2429C25.3872 17.6207 25.0733 17.9344 24.6954 18.1525V18.0825Z"
                      fill="white"
                      fillOpacity="0.8"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grey-questions">
          <div className="text-center">
            <h2 className="font-weight-bold">Have more questions?</h2>
            <p>We’re here to help</p>
            <div>
              <button className="btn sell-contact-btn">Contact Us</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Buy;
