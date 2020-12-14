import React from "react";
import '../assets/css/main.css';
import logo from '../assets/images/logo.svg';
import Footer from '../components/Footer';

const Tos = () => {
  return (
    <div>
      <header className="header">
        <nav className="navbar custom-navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
           <img src={logo} alt="logo" /> <span className="text-white font-weight-bold">eelspace</span>
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

              <button
                className="btn auth-btns my-2 my-sm-0 mr-2"
                type="submit"
              >
                Login
              </button>
              <button
                className="btn auth-btns my-2 my-sm-0 " 
                type="submit"
              >
                Sign up
              </button>
            </div>
            </form>
          </div>
        </nav>

        <div className="landing-text">
          <h1>Terms of Use</h1>
          <p>
            <span>Learn more about how eelspace collects and uses data and your rights as an eelspace user.</span>
            <span className="bottom-p">Updated November, 28th, 2020</span>
            <span></span>
          </p>
        </div>
      </header>

      <main>
        <div className="web-container container ">
            <div className="t-component">
              <h5 className="tos-head">Introduction</h5>
              <p className='tos-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                 tempor incididunt ut labore et dolore magna aliqua. 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu.</p>
            </div>
            <div className="t-component">
              <h5 className="tos-head">Your Consent to use Electronic Signatures and Communications</h5>
              <p className='tos-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei.</p>
            </div>
            <div className="t-component">
              <h5 className="tos-head">What are the requirements to use the service?</h5>
              <p className='tos-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei.</p>
              <p className='tos-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei.</p>
              <p className='tos-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei.</p>
              <p className='tos-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei.</p>
              <p className='tos-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei.</p>
              <p className='tos-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei.</p>
              <p className='tos-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei.</p>
              <p className='tos-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei.</p>
            </div>
            <div className="t-component">
              <h5 className="tos-head">How do I use the services?</h5>
              <p className='tos-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei.</p>
              <p className='tos-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei.</p>
              <p className='tos-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei.</p>
            </div>
            <div className="t-component">
              <h5 className="tos-head">Your Consent to use Electronic Signatures and Communications</h5>
              <p className='tos-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei.</p>
            </div>
        </div>
      </main>

     <Footer/>
    </div>
  );
};

export default Tos;
