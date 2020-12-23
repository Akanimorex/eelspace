import React from "react";
import logo from "../assets/images/logo.svg";
import Footer from "../components/Footer";
import "../assets/css/help.css";
import "../assets/css/contact.css";
import { Icon, InlineIcon } from "@iconify/react";
import instagramOutlined from "@iconify-icons/ant-design/instagram-outlined";

const Help = () => {
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
          <h1>Where are you stuck? Let’s get you through it</h1>
          <div className="">
            <span className="search-icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.3135 18.8877L14.9635 14.5377M17.3135 8.8877C17.3135 13.306 13.7318 16.8877 9.31348 16.8877C4.8952 16.8877 1.31348 13.306 1.31348 8.8877C1.31348 4.46942 4.8952 0.887695 9.31348 0.887695C13.7318 0.887695 17.3135 4.46942 17.3135 8.8877Z"
                  stroke="#C4C4C4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Try “update my profile”"
              className="help-input"
            />
            <button className="help-btn">Search</button>
          </div>
        </div>
      </header>
      <main>
        <div className="help-container">
          <div className="row">
            <div className="col-md-4">
              <ul className="list-unstyled">
                <li>How eelspace Works</li>
                <hr></hr>
                <li>Using Your Inbox</li>
                <hr></hr>
                <li>Using the eelspace Forum</li>
                <hr></hr>
                <li>Working with teams</li>
                <hr></hr>
                <li>Making Payments</li>
                <hr></hr>
                <li>Account Security</li>
                <hr></hr>
                <li>How eelspace works</li>
                <hr></hr>
                <li>Using your Inbox</li>
                <hr></hr>
                <li>Using the eelspace Forum</li>
                <hr></hr>
                <li>Making Payments</li>
                <hr></hr>
                <li>Account Security</li>
                <hr></hr>
                <li>How eelspace works</li>
                <hr></hr>
                <li>Working with teams</li>
                <hr></hr>
              </ul>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-7">
              <nav>
                <div
                  className="nav nav-tabs myNavTab"
                  id="nav-tab"
                  role="tablist"
                >
                  <a
                    className="nav-item nav-link tab-link  active"
                    id="nav-home-tab"
                    data-toggle="tab"
                    href="#nav-home"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    Home
                  </a>
                  <a
                    className="nav-item nav-link tab-link"
                    id="nav-profile-tab"
                    data-toggle="tab"
                    href="#nav-profile"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    Profile
                  </a>
                  <a
                    className="nav-item nav-link tab-link"
                    id="nav-contact-tab"
                    data-toggle="tab"
                    href="#nav-contact"
                    role="tab"
                    aria-controls="nav-contact"
                    aria-selected="false"
                  >
                    Contact
                  </a>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <div>
                    <h2>How eelspace works</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>

                    <h2>Signing Up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <h2>Account and Profile Settings</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <h2>Signing Up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <div>
                    <h2>How eelspace works</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-contact"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
                >
                  ...
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="help-container">
          <div className="text-center">
            <h1 className="text-dark font-weight-bold">
              Can’t find what you are looking for?
            </h1>
            <p>
              You can send us a message either via the following contact
              information or using the form below.
            </p>
          </div>
        </div>
        <div className="help-container">
          <div className="contact-flex">
            <div className="left-side">
              <div className="blue-card">
                <div className="pink-card"></div>
                <div className="p-5">
                  <h3>Contact Information</h3>
                  <p>
                    Fill up the form and our Team will get back to you within 24
                    hours.
                  </p>
                  <ul className="list-unstyled card-top-socials">
                    <li className="d-flex">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.9999 15.9201V18.9201C21.0011 19.1986 20.944 19.4743 20.8324 19.7294C20.7209 19.9846 20.5572 20.2137 20.352 20.402C20.1468 20.5902 19.9045 20.7336 19.6407 20.8228C19.3769 20.912 19.0973 20.9452 18.8199 20.9201C15.7428 20.5857 12.7869 19.5342 10.1899 17.8501C7.77376 16.3148 5.72527 14.2663 4.18993 11.8501C2.49991 9.2413 1.44818 6.27109 1.11993 3.1801C1.09494 2.90356 1.12781 2.62486 1.21643 2.36172C1.30506 2.09859 1.4475 1.85679 1.6347 1.65172C1.82189 1.44665 2.04974 1.28281 2.30372 1.17062C2.55771 1.05843 2.83227 1.00036 3.10993 1.0001H6.10993C6.59524 0.995321 7.06572 1.16718 7.43369 1.48363C7.80166 1.80008 8.04201 2.23954 8.10993 2.7201C8.23656 3.68016 8.47138 4.62282 8.80993 5.5301C8.94448 5.88802 8.9736 6.27701 8.89384 6.65098C8.81408 7.02494 8.6288 7.36821 8.35993 7.6401L7.08993 8.9101C8.51349 11.4136 10.5864 13.4865 13.0899 14.9101L14.3599 13.6401C14.6318 13.3712 14.9751 13.1859 15.3491 13.1062C15.723 13.0264 16.112 13.0556 16.4699 13.1901C17.3772 13.5286 18.3199 13.7635 19.2799 13.8901C19.7657 13.9586 20.2093 14.2033 20.5265 14.5776C20.8436 14.9519 21.0121 15.4297 20.9999 15.9201Z"
                          stroke="#FA949D"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span className="pl-2">+234 814 00 66 666</span>
                    </li>
                    <li className="d-flex">
                      <svg
                        width="22"
                        height="18"
                        viewBox="0 0 22 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 1H19C20.1 1 21 1.9 21 3V15C21 16.1 20.1 17 19 17H3C1.9 17 1 16.1 1 15V3C1 1.9 1.9 1 3 1Z"
                          stroke="#FA949D"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="pl-2">hello@eelspace.com</span>
                    </li>
                    <li>
                      <svg
                        width="18"
                        height="21"
                        viewBox="0 0 18 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.9999 2.48528C13.4086 0.893983 11.2504 -1.67671e-08 8.99993 0C6.74949 1.67671e-08 4.59123 0.893983 2.99993 2.48528C1.40863 4.07658 0.514648 6.23485 0.514648 8.48528C0.514648 10.7357 1.40863 12.894 2.99993 14.4853L8.26993 19.7653C8.36289 19.859 8.47349 19.9334 8.59535 19.9842C8.71721 20.0349 8.84792 20.0611 8.97993 20.0611C9.11194 20.0611 9.24265 20.0349 9.36451 19.9842C9.48637 19.9334 9.59697 19.859 9.68993 19.7653L14.9999 14.4353C16.5846 12.8506 17.4748 10.7013 17.4748 8.46028C17.4748 6.21923 16.5846 4.06996 14.9999 2.48528ZM13.5699 13.0053L8.99993 17.5953L4.42993 13.0053C3.52707 12.1016 2.91241 10.9505 2.66362 9.69757C2.41484 8.44462 2.54312 7.14603 3.03223 5.96596C3.52135 4.7859 4.34935 3.77733 5.41156 3.06776C6.47377 2.35819 7.72251 1.97946 8.99993 1.97946C10.2773 1.97946 11.5261 2.35819 12.5883 3.06776C13.6505 3.77733 14.4785 4.7859 14.9676 5.96596C15.4567 7.14603 15.585 8.44462 15.3362 9.69757C15.0875 10.9505 14.4728 12.1016 13.5699 13.0053ZM5.99993 5.41528C5.19264 6.22505 4.73932 7.32185 4.73932 8.46528C4.73932 9.60872 5.19264 10.7055 5.99993 11.5153C6.59969 12.1161 7.36352 12.5264 8.19558 12.6947C9.02764 12.863 9.89088 12.7819 10.677 12.4614C11.4631 12.141 12.1371 11.5956 12.6144 10.8935C13.0917 10.1915 13.3511 9.36415 13.3599 8.51528C13.3644 7.94849 13.2553 7.38654 13.0388 6.86267C12.8224 6.3388 12.5032 5.86364 12.0999 5.46528C11.7036 5.05986 11.231 4.73682 10.7094 4.51475C10.1877 4.29268 9.62727 4.17596 9.06033 4.17131C8.49339 4.16666 7.93113 4.27418 7.4059 4.48767C6.88067 4.70116 6.40285 5.01641 5.99993 5.41528ZM10.6899 10.0953C10.311 10.48 9.81014 10.7212 9.27306 10.7775C8.73597 10.8339 8.19599 10.7019 7.74544 10.4042C7.29488 10.1065 6.96173 9.66152 6.80294 9.14536C6.64415 8.62921 6.66958 8.07392 6.87489 7.57444C7.0802 7.07495 7.45263 6.6623 7.92851 6.40702C8.4044 6.15174 8.95418 6.06969 9.48387 6.1749C10.0135 6.28011 10.4902 6.56604 10.8324 6.98381C11.1746 7.40158 11.3611 7.92525 11.3599 8.46528C11.3454 9.08255 11.0864 9.66881 10.6399 10.0953H10.6899Z"
                          fill="#FA949D"
                        />
                      </svg>
                      <span className="pl-2">102 Street 271B Uyo</span>
                    </li>
                  </ul>

                  <ul className="list-unstyled d-flex card-bottom-socials">
                    <li>
                      <a>
                        <svg
                          width="24"
                          height="20"
                          viewBox="0 0 24 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M23 1.01006C22.0424 1.68553 20.9821 2.20217 19.86 2.54006C19.2577 1.84757 18.4573 1.35675 17.567 1.13398C16.6767 0.911216 15.7395 0.967251 14.8821 1.29451C14.0247 1.62177 13.2884 2.20446 12.773 2.96377C12.2575 3.72309 11.9877 4.62239 12 5.54006V6.54006C10.2426 6.58562 8.50127 6.19587 6.93101 5.4055C5.36074 4.61513 4.01032 3.44869 3 2.01006C3 2.01006 -1 11.0101 8 15.0101C5.94053 16.408 3.48716 17.109 1 17.0101C10 22.0101 21 17.0101 21 5.51006C20.9991 5.23151 20.9723 4.95365 20.92 4.68006C21.9406 3.67355 22.6608 2.40277 23 1.01006V1.01006Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a>
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a>
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a>
                        <Icon icon={instagramOutlined} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="right-side container">
              <form className="form-group contact-form">
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <label htmlFor="first-name">First Name</label>
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      name="first-name"
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <label htmlFor="last-name">Last Name</label>
                    <input
                      type="text"
                      name="last-name"
                      placeholder="Enter your last name"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <label htmlFor="phone">Mobile Number</label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="Start with your country code"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <figcaption>
                      <label htmlFor="phone">Mobile Number</label>
                    </figcaption>

                    <textarea
                      rows="10"
                      placeholder="Enter Message Here"
                      cols="70"
                      className="form-control"
                    ></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <button className="btn mt-1 btn-primary contact-btn">
                      Send A Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Help;
