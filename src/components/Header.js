import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import ModalContent from "./ModalContent";
import "../assets/css/modal.css";
import "react-simple-hook-modal/dist/styles.css";
import {
  ModalProvider,
  Modal,
  useModal,
  ModalTransition,
} from "react-simple-hook-modal";

const Header = () => {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <header className="header">
      <nav className="navbar custom-navbar navbar-expand-lg navbar-light bg-light">
        <Modal
          id="any-unique-identifier"
          isOpen={isModalOpen}
          transition={ModalTransition.BOTTOM_UP}
        >
          <ModalContent close={closeModal} />
        </Modal>
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
          </form>
        </div>
      </nav>

      <div className="landing-text text-left pl-4">
        <h1>Connect globally, communicate globally</h1>

        <p>Find answers, support and inspiration from other eelspace users</p>
        <button className="btn comm-btn" onClick={openModal}>
          <span className="">
            Ask the community <i className="fa fa-plus-circle"></i>
          </span>
        </button>
      </div>

      {/* <ModalContent /> */}
    </header>
  );
};

export default Header;
