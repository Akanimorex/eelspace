import React from "react";
import "../assets/css/main.css";
import logo from "../assets/images/logo.svg";

const Navigation = () => {
  return (
    <header>
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
          <div className="navbar-nav mr-auto">
            <form className="form-inline">
              <input
                className=" form-control nav-input"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
          <div className="d-lg-flex d-sm-block">
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
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
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
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
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
              <button className="btn auth-btns my-2 my-sm-0 mr-2" type="submit">
                Login
              </button>
              <button className="btn auth-btns my-2 my-sm-0 " type="submit">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
