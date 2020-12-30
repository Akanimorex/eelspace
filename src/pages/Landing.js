import React from "react";
import logo from "../assets/images/logo.svg";
import Footer from "../components/Footer";
import "../assets/css/sell.css";
import "../assets/css/help.css";
import "../assets/css/land.css";
import Ecobank from "../assets/images/ecobank.svg";
import Decagon from "../assets/images/decagon.svg";
import Ehealth from "../assets/images/ehealth.svg";
import Andela from "../assets/images/andela.svg";
import Abeg from "../assets/images/abeg.svg";
import gridOne from "../assets/images/grid-one.svg";
import gridTwo from "../assets/images/grid-two.svg";
import gridThree from "../assets/images/grid-three.svg";
import gridFour from "../assets/images/grid-four.svg";
import freelancers from "../assets/images/freelancers.svg";
import customer from "../assets/images/customer.svg";
import TrendCard from "../components/TrendCard";
import ArticleCard from "../components/ArticleCard";

const Landing = () => {
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
          <h1>eelspace is an online marketplace for freelance</h1>
          <h1> services beginning at a cost price of $5 per job</h1>
          <p>Remote services and onsite service providers are online to work</p>
          <p>on your project at affordable rates. </p>
        </div>
      </header>

      <main>
        <div className="container">
          <h3>Trusted by:</h3>
          <p>We’ve been trusted by over 4,000+ businesses across Africa.</p>
          <div className="trusted-brands">
            <div className="">
              <img src={Ecobank} alt="bank" />
            </div>
            <div className="">
              <img src={Andela} alt="bank" />
            </div>
            <div className="">
              <img src={Decagon} alt="bank" />
            </div>
            <div className="">
              <img src={Ehealth} alt="bank" />
            </div>
            <div className="">
              <img src={Abeg} alt="bank" />
            </div>
          </div>

          <div className="about-section">
            <div className="row">
              <div className="col-md-6 col-sm-12 left-side">
                <h2>About eelspace</h2>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="grid-display">
                  <div className="first-boxes">
                    <div className="box-1">
                      <img src={gridOne} alt="grid" />
                    </div>

                    <div className="box-4">
                      <img src={gridFour} alt="grid" />
                    </div>
                  </div>
                  <div>
                    <div className="box-2">
                      <img src={gridTwo} alt="grid" />
                    </div>
                    <div className="box-3">
                      <img src={gridThree} alt="grid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3>How it Works</h3>
            <hr className="test-line line-dark"></hr>
            <p>
              Over 4,000+ companies trust us..l;md lmdl; salaries, something
              magical happens. The richness of the Bento Employee App kicks in
              to open a world of possibilites and safety.
            </p>
          </div>

          <div className="how">
            <div className="row how-flex">
              <div className="col-md-6 col-sm-12 left-side">
                <h1 className="steps">O1</h1>
                <h2>Send Payments Instantly</h2>
                <p>
                  Bento is the fastest, simplest way to start sending online
                  payments in Nigeria. From signup to receiving real payments
                  can take under 15 minutes. Seriously.
                </p>
              </div>

              <div className="col-md-6 col-sm-12">
                <img src={freelancers} className="img-fluid" alt="freelance" />
              </div>
            </div>

            <div className="row how-flex">
              <div className="col-md-6 col-sm-12">
                <img src={freelancers} className="img-fluid" alt="freelance" />
              </div>

              <div className="col-md-6 col-sm-12 left-side">
                <h1 className="steps">O2</h1>
                <h2>Send Payments Instantly</h2>
                <p>
                  Bento is the fastest, simplest way to start sending online
                  payments in Nigeria. From signup to receiving real payments
                  can take under 15 minutes. Seriously.
                </p>
              </div>
            </div>

            <div className="row how-flex">
              <div className="col-md-6 col-sm-12 left-side">
                <h1 className="steps">O3</h1>
                <h2>Send Payments Instantly</h2>
                <p>
                  Bento is the fastest, simplest way to start sending online
                  payments in Nigeria. From signup to receiving real payments
                  can take under 15 minutes. Seriously.
                </p>
              </div>

              <div className="col-md-6 col-sm-12">
                <img src={freelancers} className="img-fluid" alt="freelance" />
              </div>
            </div>
          </div>

          <div className="pt-5 mt-5">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <svg
                  viewBox="0 0 663 540"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="largest-svg"
                >
                  <path
                    d="M495.339 382.373L443.617 352.01L402.99 412.47C426.725 432.278 466.599 446.682 487.203 442.284C529.487 433.257 614.936 313.199 626.792 304.059C667.154 272.942 680.275 261.133 629.769 285.312C581.616 308.364 607.12 285.312 595.323 285.312C581.15 286.302 585.846 298.881 591.107 307.895L495.339 382.373Z"
                    fill="url(#paint0_linear)"
                  />
                  <path
                    d="M201.867 336.377C216.46 326.244 274.119 307.991 299.442 300.131L326.234 303.054C343.113 307.238 379.32 314.373 395.975 321.125C412.63 327.877 442.855 349.409 471.051 367.366L464.394 390.423C458.415 411.13 442.602 427.553 422.136 434.312C416.87 467.804 412.328 522.255 413.078 539.134L217.13 538.983L208.159 456.107L167.809 460.429L133.725 434.312C176.403 360.491 183.627 349.044 201.867 336.377Z"
                    fill="url(#paint1_linear)"
                  />
                  <path
                    d="M145.812 526.815C83.727 518.943 124.107 456.019 135.114 435.238C148.428 446.446 164.868 453.284 182.203 454.823L203.598 456.724L194.837 476.935L289.421 499.078L302.69 535.889C293.239 534.28 223.017 536.604 145.812 526.815Z"
                    fill="url(#paint2_linear)"
                  />
                  <path
                    d="M306.047 134.928C309.102 129.403 317.865 121.667 328.475 134.928H306.047Z"
                    fill="#30235B"
                  />
                  <ellipse
                    cx="311.141"
                    cy="324.23"
                    rx="33.8188"
                    ry="24.0995"
                    fill="#CF0606"
                  />
                  <path
                    d="M283.432 322.935L288.159 275.866H334.182L339.468 322.935C337.621 328.478 328.897 339.723 312.742 339.723C292.152 339.723 284.751 328.478 283.432 322.935Z"
                    fill="url(#paint3_linear)"
                  />
                  <mask
                    id="mask0"
                    mask-type="alpha"
                    maskUnits="userSpaceOnUse"
                    x="283"
                    y="275"
                    width="57"
                    height="65"
                  >
                    <path
                      d="M283.432 322.935L288.159 275.866H334.182L339.478 323.03C337.63 328.574 328.877 339.725 312.722 339.725C292.132 339.725 284.751 328.478 283.432 322.935Z"
                      fill="url(#paint4_linear)"
                    />
                  </mask>
                  <g mask="url(#mask0)">
                    <path
                      opacity="0.1"
                      d="M350.767 277.667C309.153 329.156 285.899 287.757 273.887 281.546L282.141 246.738L331.414 240.855L350.767 277.667Z"
                      fill="black"
                    />
                  </g>
                  <path
                    d="M310.343 294.761C260.71 294.761 252.175 223.518 267.51 190.931C302.014 148.76 345.144 173.36 362.396 190.931C366.549 218.087 371.129 294.761 310.343 294.761Z"
                    fill="url(#paint5_linear)"
                  />
                  <path
                    d="M363.243 240.259L353.519 233.095L355.023 227.763L366.13 235.086L363.243 240.259Z"
                    fill="#111111"
                  />
                  <path
                    d="M261.935 238.182L271.658 231.018L270.154 225.686L259.048 233.009L261.935 238.182Z"
                    fill="#111111"
                  />
                  <path
                    d="M270.832 195.213C306.02 218.138 345.028 204.765 360.134 195.213C356.954 205.244 361.459 224.526 364.11 232.913C387.006 203.097 379.521 186.997 372.916 182.673C371.815 167.813 358.306 130.659 312.955 132.42C267.604 134.181 258.804 166.345 260.088 178.27C242.917 201.606 253.133 224.422 261.415 232.913C270.832 214.632 270.617 201.807 270.832 195.213Z"
                    fill="#30235B"
                  />
                  <g filter="url(#filter0_d)">
                    <path
                      d="M316.56 155.363C264.028 153.605 252.328 188.151 250.757 208.212C250.632 209.818 249.318 211.083 247.707 211.083C245.988 211.083 244.618 209.65 244.77 207.938C247.063 182.216 260.776 137.269 316.56 140.368C372.883 143.497 383.901 188.335 382.173 213.33C382.081 214.667 380.951 215.679 379.61 215.679C378.148 215.679 376.974 214.492 376.916 213.031C376.088 192.292 362.3 156.689 316.56 155.363Z"
                      fill="white"
                    />
                  </g>
                  <g filter="url(#filter1_d)">
                    <rect
                      x="383.225"
                      y="223.882"
                      width="7.12991"
                      height="27.3611"
                      rx="3.56496"
                      transform="rotate(10.0542 383.225 223.882)"
                      fill="#24C28A"
                    />
                  </g>
                  <g filter="url(#filter2_d)">
                    <rect
                      x="367.904"
                      y="206.144"
                      width="21.9622"
                      height="56.9973"
                      rx="10.9811"
                      transform="rotate(10.0542 367.904 206.144)"
                      fill="white"
                    />
                  </g>
                  <g filter="url(#filter3_d)">
                    <rect
                      width="7.12991"
                      height="27.3611"
                      rx="3.56496"
                      transform="matrix(-0.984643 0.17458 0.17458 0.984643 241.414 223.882)"
                      fill="#24C28A"
                    />
                  </g>
                  <g filter="url(#filter4_d)">
                    <rect
                      width="21.9622"
                      height="56.9973"
                      rx="10.9811"
                      transform="matrix(-0.984643 0.17458 0.17458 0.984643 256.533 206.144)"
                      fill="white"
                    />
                  </g>
                  <mask
                    id="mask1"
                    mask-type="alpha"
                    maskUnits="userSpaceOnUse"
                    x="236"
                    y="207"
                    width="29"
                    height="58"
                  >
                    <rect
                      width="21.9622"
                      height="56.9973"
                      rx="10.9811"
                      transform="matrix(-0.984643 0.17458 0.17458 0.984643 256.529 206.144)"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask1)">
                    <rect
                      x="246.186"
                      y="206.144"
                      width="28.5679"
                      height="61.8716"
                      transform="rotate(-10.0977 246.186 206.144)"
                      fill="#E8E8E8"
                    />
                  </g>
                  <mask
                    id="mask2"
                    mask-type="alpha"
                    maskUnits="userSpaceOnUse"
                    x="359"
                    y="207"
                    width="29"
                    height="58"
                  >
                    <rect
                      x="367.908"
                      y="206.144"
                      width="21.9622"
                      height="56.9973"
                      rx="10.9811"
                      transform="rotate(10.0542 367.908 206.144)"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask2)">
                    <rect
                      width="28.5679"
                      height="61.8716"
                      transform="matrix(-0.98451 -0.175326 -0.175326 0.98451 379.58 206.144)"
                      fill="#E8E8E8"
                    />
                  </g>
                  <path
                    opacity="0.5"
                    d="M288.958 248.581C281.936 248.581 278.4 243.047 277.502 240.576C276.468 238.509 275.652 233.125 278.099 228.849C281.21 223.411 295.832 221.894 300.953 229.577C306.075 237.259 300.953 248.581 288.958 248.581Z"
                    fill="#E6FCFF"
                  />
                  <path
                    opacity="0.5"
                    d="M335.483 248.581C342.505 248.581 346.041 243.047 346.94 240.576C347.973 238.509 348.789 233.125 346.342 228.849C343.232 223.411 328.61 221.894 323.488 229.577C318.366 237.259 323.488 248.581 335.483 248.581Z"
                    fill="#E6FCFF"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M304.581 227.881C293.13 217.825 282.786 222.08 276.657 224.601C275.975 224.882 275.346 225.14 274.773 225.356L270.631 225.364C270.076 225.365 269.628 225.817 269.633 226.372L269.667 230.202C269.672 230.751 270.118 231.193 270.667 231.193L273.741 231.193C271.731 248.447 284.455 253.065 294.631 249.955C303.704 247.182 306.133 239.336 306.618 234.415C308.559 230.115 317.067 232.101 317.404 234.319C317.411 234.371 317.42 234.429 317.43 234.493L317.43 234.493C317.829 237.194 319.841 250.799 335.158 250.818C347.703 250.833 351.106 239.625 351.239 234.019L354.789 233.988C355.341 233.983 355.785 233.531 355.78 232.979L355.739 228.428C355.735 227.876 355.283 227.432 354.731 227.437L351.181 227.468C343.009 219.189 325.454 219.965 319.271 227.751C312.449 226.178 306.635 227.182 304.581 227.881ZM288.957 248.581C281.935 248.581 278.4 243.047 277.501 240.576C276.468 238.509 275.652 233.125 278.098 228.849C281.209 223.411 295.831 221.894 300.953 229.577C306.074 237.259 300.953 248.581 288.957 248.581ZM346.941 240.576C346.043 243.047 342.507 248.581 335.485 248.581C323.49 248.581 318.368 237.259 323.49 229.577C328.611 221.894 343.233 223.411 346.344 228.849C348.79 233.125 347.974 238.509 346.941 240.576Z"
                    fill="#111111"
                  />
                  <path
                    d="M212.98 532.151C212.98 531.429 213.566 530.843 214.289 530.843H415.322C416.586 530.843 417.611 531.868 417.611 533.132C417.611 536.925 414.537 540 410.744 540H220.829C216.494 540 212.98 536.486 212.98 532.151Z"
                    fill="#B4B4B4"
                  />
                  <rect
                    x="212.98"
                    y="397.333"
                    width="204.631"
                    height="136.911"
                    rx="2.94666"
                    fill="url(#paint6_linear)"
                  />
                  <circle cx="315.295" cy="465.788" r="14.5529" fill="white" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M169.903 221.195C170.163 216.757 171.048 213.041 171.785 210.976C173.234 214.598 173.951 218.076 174.193 221.248C177.364 221.49 180.841 222.206 184.463 223.655C182.398 224.392 178.683 225.277 174.245 225.537C173.997 230.249 172.786 233.91 171.785 235.785C170.569 232.378 170.013 228.873 169.868 225.572C166.567 225.427 163.062 224.872 159.654 223.655C161.529 222.655 165.191 221.443 169.903 221.195Z"
                    fill="url(#paint7_linear)"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M134.892 191.993C135.064 189.039 135.653 186.566 136.144 185.191C137.109 187.602 137.585 189.917 137.747 192.028C139.858 192.189 142.173 192.666 144.584 193.631C143.209 194.121 140.736 194.711 137.781 194.883C137.617 198.02 136.81 200.457 136.144 201.705C135.334 199.437 134.965 197.104 134.868 194.907C132.671 194.81 130.338 194.44 128.07 193.631C129.319 192.965 131.755 192.158 134.892 191.993Z"
                    fill="url(#paint8_linear)"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M78.4796 171.189C78.7391 166.75 79.624 163.035 80.3616 160.97C81.8105 164.592 82.5267 168.07 82.7688 171.241C85.9399 171.484 89.4172 172.2 93.0391 173.648C90.9741 174.386 87.259 175.271 82.821 175.53C82.5734 180.242 81.3617 183.903 80.3616 185.779C79.1447 182.371 78.5893 178.867 78.4445 175.566C75.1431 175.421 71.6378 174.866 68.2301 173.648C70.1054 172.648 73.767 171.436 78.4796 171.189Z"
                    fill="url(#paint9_linear)"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M83.3119 273.197C83.6937 266.667 84.9956 261.2 86.0807 258.162C88.2124 263.491 89.2661 268.608 89.6223 273.274C94.2878 273.63 99.4037 274.684 104.732 276.815C101.694 277.9 96.2285 279.202 89.6991 279.584C89.3349 286.517 87.5521 291.903 86.0807 294.662C84.2903 289.649 83.4733 284.492 83.2602 279.636C78.4032 279.423 73.2462 278.606 68.2326 276.815C70.9917 275.344 76.3786 273.561 83.3119 273.197Z"
                    fill="url(#paint10_linear)"
                  />
                  <circle
                    cx="122.984"
                    cy="234.583"
                    r="2.39769"
                    fill="#2F235A"
                  />
                  <circle
                    cx="178.007"
                    cy="165.836"
                    r="2.39769"
                    fill="#FE9076"
                  />
                  <circle
                    cx="57.4075"
                    cy="225.064"
                    r="2.39769"
                    fill="#FFA400"
                  />
                  <circle
                    cx="164.864"
                    cy="271.563"
                    r="2.39769"
                    fill="#23BB86"
                  />
                  <path
                    d="M172.133 155.829C166.712 148.384 151.442 132.481 133.729 128.433"
                    stroke="#FE9076"
                    strokeWidth="1.60277"
                    strokeLinecap="round"
                  />
                  <path
                    d="M47.2908 218.637C39.2787 214.096 18.8036 205.921 0.999679 209.551"
                    stroke="#FFA400"
                    strokeWidth="1.60277"
                    strokeLinecap="round"
                  />
                  <path
                    d="M156.635 278.528C152.529 282.151 142.652 292.439 135.986 304.611"
                    stroke="#23BB86"
                    strokeWidth="1.60277"
                    strokeLinecap="round"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M452.909 221.195C452.65 216.757 451.765 213.041 451.027 210.976C449.578 214.598 448.862 218.076 448.62 221.248C445.449 221.49 441.971 222.206 438.35 223.655C440.415 224.392 444.13 225.277 448.568 225.537C448.815 230.249 450.027 233.91 451.027 235.785C452.244 232.378 452.799 228.873 452.944 225.572C456.246 225.427 459.751 224.872 463.159 223.655C461.283 222.655 457.622 221.443 452.909 221.195Z"
                    fill="url(#paint11_linear)"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M487.921 191.993C487.748 189.039 487.159 186.566 486.668 185.191C485.704 187.602 485.227 189.917 485.066 192.028C482.955 192.189 480.64 192.666 478.229 193.631C479.603 194.121 482.077 194.711 485.031 194.883C485.196 198.02 486.003 200.457 486.668 201.705C487.478 199.437 487.848 197.104 487.944 194.907C490.141 194.81 492.474 194.44 494.742 193.631C493.494 192.965 491.057 192.158 487.921 191.993Z"
                    fill="url(#paint12_linear)"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M544.331 171.189C544.071 166.75 543.187 163.035 542.449 160.97C541 164.592 540.284 168.07 540.042 171.241C536.871 171.484 533.393 172.2 529.771 173.648C531.836 174.386 535.552 175.271 539.99 175.53C540.237 180.242 541.449 183.903 542.449 185.779C543.666 182.371 544.221 178.867 544.366 175.566C547.667 175.421 551.173 174.866 554.58 173.648C552.705 172.648 549.044 171.436 544.331 171.189Z"
                    fill="url(#paint13_linear)"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M539.501 273.197C539.119 266.667 537.817 261.2 536.732 258.162C534.6 263.491 533.546 268.608 533.19 273.274C528.525 273.63 523.409 274.684 518.08 276.815C521.118 277.9 526.584 279.202 533.113 279.584C533.478 286.517 535.26 291.903 536.732 294.662C538.522 289.649 539.339 284.492 539.552 279.636C544.409 279.423 549.566 278.606 554.58 276.815C551.821 275.344 546.434 273.561 539.501 273.197Z"
                    fill="url(#paint14_linear)"
                  />
                  <circle
                    r="2.39769"
                    transform="matrix(-1 0 0 1 499.829 234.583)"
                    fill="#2F235A"
                  />
                  <circle
                    r="2.39769"
                    transform="matrix(-1 0 0 1 444.805 165.836)"
                    fill="#FE9076"
                  />
                  <circle
                    r="2.39769"
                    transform="matrix(-1 0 0 1 565.405 225.064)"
                    fill="#FFA400"
                  />
                  <circle
                    r="2.39769"
                    transform="matrix(-1 0 0 1 457.948 271.563)"
                    fill="#23BB86"
                  />
                  <path
                    d="M450.68 155.829C456.101 148.384 471.371 132.481 489.084 128.433"
                    stroke="#FE9076"
                    strokeWidth="1.60277"
                    strokeLinecap="round"
                  />
                  <path
                    d="M575.522 218.637C583.534 214.096 604.009 205.921 621.813 209.551"
                    stroke="#FFA400"
                    strokeWidth="1.60277"
                    strokeLinecap="round"
                  />
                  <path
                    d="M466.178 278.528C470.283 282.151 480.161 292.439 486.826 304.611"
                    stroke="#23BB86"
                    strokeWidth="1.60277"
                    strokeLinecap="round"
                  />
                  <path
                    d="M350.515 73.1432C347.796 68.9435 342.293 71.2314 342.293 75.8063C342.293 79.2417 349.837 84.6156 350.515 85.3144C351.197 84.6156 358.366 79.2417 358.366 75.8063C358.366 71.2661 353.239 68.9435 350.515 73.1432Z"
                    fill="#FFBCBC"
                  />
                  <circle
                    cx="350.329"
                    cy="78.1242"
                    r="18.0669"
                    stroke="#F7F7F7"
                    strokeWidth="0.649684"
                  />
                  <path
                    d="M286.031 48.0996C283.624 44.3827 278.754 46.4075 278.754 50.4565C278.754 53.497 285.431 58.2532 286.031 58.8716C286.634 58.2532 292.979 53.497 292.979 50.4565C292.979 46.4382 288.441 44.3827 286.031 48.0996Z"
                    fill="#FFBCBC"
                  />
                  <circle
                    cx="285.867"
                    cy="52.508"
                    r="15.99"
                    stroke="#F7F7F7"
                    strokeWidth="0.574998"
                  />
                  <path
                    d="M328.588 20.7885C326.942 18.2464 323.611 19.6312 323.611 22.4005C323.611 24.4799 328.178 27.7328 328.588 28.1558C329.001 27.7328 333.341 24.4799 333.341 22.4005C333.341 19.6522 330.237 18.2464 328.588 20.7885Z"
                    fill="#FFBCBC"
                  />
                  <circle
                    cx="328.474"
                    cy="23.8036"
                    r="10.9361"
                    stroke="#F7F7F7"
                    strokeWidth="0.393259"
                  />
                  <path
                    d="M253.418 6.64249C252.071 4.56242 249.346 5.69558 249.346 7.96147C249.346 9.66298 253.082 12.3246 253.418 12.6707C253.756 12.3246 257.306 9.66298 257.306 7.96147C257.306 5.71276 254.767 4.56242 253.418 6.64249Z"
                    fill="#FFBCBC"
                  />
                  <circle
                    cx="253.326"
                    cy="9.10919"
                    r="8.9483"
                    stroke="#F7F7F7"
                    strokeWidth="0.321779"
                  />
                  <path
                    d="M246.795 104.152C243.855 99.6102 237.904 102.084 237.904 107.031C237.904 110.746 246.062 116.557 246.795 117.313C247.533 116.557 255.285 110.746 255.285 107.031C255.285 102.122 249.741 99.6102 246.795 104.152Z"
                    fill="#FFBCBC"
                  />
                  <circle
                    cx="246.595"
                    cy="109.537"
                    r="19.5368"
                    stroke="#F7F7F7"
                    strokeWidth="0.702541"
                  />
                  <defs>
                    <filter
                      id="filter0_d"
                      x="210.758"
                      y="110.216"
                      width="205.581"
                      height="143.463"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="17" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0386285 0 0 0 0 0.0648437 0 0 0 0 0.104167 0 0 0 0.13 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow"
                        result="shape"
                      />
                    </filter>
                    <filter
                      id="filter1_d"
                      x="345.016"
                      y="194.449"
                      width="78.6631"
                      height="95.0516"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="17" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0386285 0 0 0 0 0.0648437 0 0 0 0 0.104167 0 0 0 0.13 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow"
                        result="shape"
                      />
                    </filter>
                    <filter
                      id="filter2_d"
                      x="325.701"
                      y="177.89"
                      width="96.0823"
                      height="124.463"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="17" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0386285 0 0 0 0 0.0648437 0 0 0 0 0.104167 0 0 0 0.13 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow"
                        result="shape"
                      />
                    </filter>
                    <filter
                      id="filter3_d"
                      x="200.961"
                      y="194.449"
                      width="78.6631"
                      height="95.0516"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="17" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0386285 0 0 0 0 0.0648437 0 0 0 0 0.104167 0 0 0 0.13 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow"
                        result="shape"
                      />
                    </filter>
                    <filter
                      id="filter4_d"
                      x="202.654"
                      y="177.89"
                      width="96.0823"
                      height="124.463"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="17" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0386285 0 0 0 0 0.0648437 0 0 0 0 0.104167 0 0 0 0.13 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow"
                        result="shape"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear"
                      x1="508.532"
                      y1="206.15"
                      x2="511.978"
                      y2="435.147"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFEFE0" />
                      <stop offset="1" stopColor="#FFBE99" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear"
                      x1="315.16"
                      y1="260.691"
                      x2="299.014"
                      y2="584.051"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FF9F81" />
                      <stop offset="1" stopColor="#F53838" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear"
                      x1="295.545"
                      y1="374.332"
                      x2="141.023"
                      y2="448.389"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.0677966" stopColor="#FFEFE0" />
                      <stop offset="1" stopColor="#FFBE99" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear"
                      x1="309.863"
                      y1="225.231"
                      x2="312.571"
                      y2="311.672"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFEFE0" />
                      <stop offset="1" stopColor="#FFBE99" />
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear"
                      x1="309.863"
                      y1="225.231"
                      x2="306.068"
                      y2="323.709"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFEFE0" />
                      <stop offset="1" stopColor="#FFBE99" />
                    </linearGradient>
                    <linearGradient
                      id="paint5_linear"
                      x1="314.363"
                      y1="179.147"
                      x2="314.363"
                      y2="282.949"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFEFE0" />
                      <stop offset="1" stopColor="#FFBE99" />
                    </linearGradient>
                    <linearGradient
                      id="paint6_linear"
                      x1="357.55"
                      y1="294.58"
                      x2="281.891"
                      y2="566.06"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.0171777" stopColor="white" />
                      <stop offset="1" stopColor="#D7D7D7" />
                    </linearGradient>
                    <linearGradient
                      id="paint7_linear"
                      x1="172.058"
                      y1="213.617"
                      x2="172.058"
                      y2="236.911"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFE89E" />
                      <stop offset="1" stopColor="#FFBF1A" />
                    </linearGradient>
                    <linearGradient
                      id="paint8_linear"
                      x1="136.327"
                      y1="186.949"
                      x2="136.327"
                      y2="202.454"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFE89E" />
                      <stop offset="1" stopColor="#FFBF1A" />
                    </linearGradient>
                    <linearGradient
                      id="paint9_linear"
                      x1="80.6346"
                      y1="163.61"
                      x2="80.6346"
                      y2="186.904"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFE89E" />
                      <stop offset="1" stopColor="#FFBF1A" />
                    </linearGradient>
                    <linearGradient
                      id="paint10_linear"
                      x1="86.4825"
                      y1="262.047"
                      x2="86.4825"
                      y2="296.318"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFE89E" />
                      <stop offset="1" stopColor="#FFBF1A" />
                    </linearGradient>
                    <linearGradient
                      id="paint11_linear"
                      x1="450.754"
                      y1="213.617"
                      x2="450.754"
                      y2="236.911"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFE89E" />
                      <stop offset="1" stopColor="#FFBF1A" />
                    </linearGradient>
                    <linearGradient
                      id="paint12_linear"
                      x1="486.485"
                      y1="186.949"
                      x2="486.485"
                      y2="202.454"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFE89E" />
                      <stop offset="1" stopColor="#FFBF1A" />
                    </linearGradient>
                    <linearGradient
                      id="paint13_linear"
                      x1="542.176"
                      y1="163.61"
                      x2="542.176"
                      y2="186.904"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFE89E" />
                      <stop offset="1" stopColor="#FFBF1A" />
                    </linearGradient>
                    <linearGradient
                      id="paint14_linear"
                      x1="536.33"
                      y1="262.047"
                      x2="536.33"
                      y2="296.318"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFE89E" />
                      <stop offset="1" stopColor="#FFBF1A" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="col-md-6 col-sm-12">
                <h2>Why Choose Us?</h2>
                <p>
                  You can explore the features that we provide with fun and have
                  their own functions each feature.
                </p>
                <ul className="list-unstyled choose-list">
                  <li>
                    <svg
                      width="22"
                      height="23"
                      viewBox="0 0 22 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9993 0.338379C5.02585 0.338379 0.166016 5.19821 0.166016 11.1717C0.166016 17.1452 5.02585 22.005 10.9993 22.005C16.9728 22.005 21.8327 17.1452 21.8327 11.1717C21.8327 5.19821 16.9728 0.338379 10.9993 0.338379ZM8.83377 15.9525L5.57775 12.7035C5.15444 12.2811 5.15358 11.5955 5.57585 11.1721C5.99837 10.7483 6.68445 10.7475 7.10794 11.1703L8.8316 12.891L13.8008 7.92171C14.2239 7.49871 14.9097 7.49871 15.3327 7.92171C15.7557 8.34472 15.7557 9.03054 15.3327 9.45355L8.83377 15.9525Z"
                        fill="#2FAB73"
                      />
                    </svg>
                    Powerful online presentation
                  </li>
                  <li>
                    <svg
                      width="22"
                      height="23"
                      viewBox="0 0 22 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9993 0.338379C5.02585 0.338379 0.166016 5.19821 0.166016 11.1717C0.166016 17.1452 5.02585 22.005 10.9993 22.005C16.9728 22.005 21.8327 17.1452 21.8327 11.1717C21.8327 5.19821 16.9728 0.338379 10.9993 0.338379ZM8.83377 15.9525L5.57775 12.7035C5.15444 12.2811 5.15358 11.5955 5.57585 11.1721C5.99837 10.7483 6.68445 10.7475 7.10794 11.1703L8.8316 12.891L13.8008 7.92171C14.2239 7.49871 14.9097 7.49871 15.3327 7.92171C15.7557 8.34472 15.7557 9.03054 15.3327 9.45355L8.83377 15.9525Z"
                        fill="#2FAB73"
                      />
                    </svg>
                    Internet without borders.
                  </li>
                  <li>
                    <svg
                      width="22"
                      height="23"
                      viewBox="0 0 22 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9993 0.338379C5.02585 0.338379 0.166016 5.19821 0.166016 11.1717C0.166016 17.1452 5.02585 22.005 10.9993 22.005C16.9728 22.005 21.8327 17.1452 21.8327 11.1717C21.8327 5.19821 16.9728 0.338379 10.9993 0.338379ZM8.83377 15.9525L5.57775 12.7035C5.15444 12.2811 5.15358 11.5955 5.57585 11.1721C5.99837 10.7483 6.68445 10.7475 7.10794 11.1703L8.8316 12.891L13.8008 7.92171C14.2239 7.49871 14.9097 7.49871 15.3327 7.92171C15.7557 8.34472 15.7557 9.03054 15.3327 9.45355L8.83377 15.9525Z"
                        fill="#2FAB73"
                      />
                    </svg>
                    Supercharged VPN
                  </li>
                  <li>
                    <svg
                      width="22"
                      height="23"
                      viewBox="0 0 22 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9993 0.338379C5.02585 0.338379 0.166016 5.19821 0.166016 11.1717C0.166016 17.1452 5.02585 22.005 10.9993 22.005C16.9728 22.005 21.8327 17.1452 21.8327 11.1717C21.8327 5.19821 16.9728 0.338379 10.9993 0.338379ZM8.83377 15.9525L5.57775 12.7035C5.15444 12.2811 5.15358 11.5955 5.57585 11.1721C5.99837 10.7483 6.68445 10.7475 7.10794 11.1703L8.8316 12.891L13.8008 7.92171C14.2239 7.49871 14.9097 7.49871 15.3327 7.92171C15.7557 8.34472 15.7557 9.03054 15.3327 9.45355L8.83377 15.9525Z"
                        fill="#2FAB73"
                      />
                    </svg>
                    No specific time limits.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="testimonial">
            <div className="testimonial-card">
              <div className="text-white pt-3">
                <h4 className="text-center">What our customers are saying</h4>
                <hr className="test-line"></hr>
                <div>
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide auth-carousel"
                    data-ride="carousel"
                  >
                    <div className="carousel-inner ">
                      <div className="carousel-item active  ">
                        <div className="row">
                          <div className="col-md-6 col-sm-12">
                            <div className="d-flex">
                              <div className="">
                                <img
                                  className="testimonial-image"
                                  src={customer}
                                  alt="First slide"
                                />
                              </div>
                              <div className="" style={{ alignSelf: "center" }}>
                                <p>
                                  <span className="font-weight-bold">
                                    Mfonobong Umondia
                                  </span>
                                  <figcaption>
                                    <span>Writer,Helzeco yidi yadda</span>
                                  </figcaption>
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6 col-sm-12">
                            <div className="carousel-caption  d-md-block">
                              <p className="text-white">
                                Using the bento platform paying all our staff{" "}
                                <figcaption>
                                  their salaries has been very much easier. We{" "}
                                </figcaption>
                                highly recommend
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-md-6 col-sm-12">
                            <div className="d-flex">
                              <div className="">
                                <img
                                  className="testimonial-image"
                                  src={customer}
                                  alt="First slide"
                                />
                              </div>
                              <div className="" style={{ alignSelf: "center" }}>
                                <p>
                                  <span className="font-weight-bold">
                                    Mfonobong Umondia
                                  </span>
                                  <figcaption>
                                    <span>Writer,Helzeco yidi yadda</span>
                                  </figcaption>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="carousel-caption  d-md-block">
                              <p className="text-white">
                                Using the bento platform paying all our staff{" "}
                                <figcaption>
                                  their salaries has been very much easier. We{" "}
                                </figcaption>
                                highly recommend
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-md-6 col-sm-12">
                            <div className="d-flex">
                              <div className="">
                                <img
                                  className="testimonial-image"
                                  src={customer}
                                  alt="First slide"
                                />
                              </div>
                              <div className="" style={{ alignSelf: "center" }}>
                                <p>
                                  <span className="font-weight-bold">
                                    Mfonobong Umondia
                                  </span>
                                  <figcaption>
                                    <span>Writer,Helzeco yidi yadda</span>
                                  </figcaption>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="carousel-caption  d-md-block">
                              <p className="text-white">
                                Using the bento platform paying all our staff{" "}
                                <figcaption>
                                  their salaries has been very much easier. We{" "}
                                </figcaption>
                                highly recommend
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <ol className="carousel-indicators auth-indicators test-indicators">
                        <li
                          data-target="#carouselExampleIndicators"
                          data-slide-to="0"
                          className="active"
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
                </div>
              </div>
            </div>
          </div>

          <div className="trending-section pt-5 mt-5">
            <div className="row justify-content-between">
              <div>
                <h4 className="font-weight-bold">Trending services</h4>
              </div>
              <div>
                <p>See more {">>"}</p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 col-sm-12">
                <TrendCard />
              </div>
              <div className="col-md-4 col-sm-12">
                <TrendCard />
              </div>
              <div className="col-md-4 col-sm-12">
                <TrendCard />
              </div>
            </div>
          </div>

          <div className="pt-5 mt-5">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <h2>
                  Subscribe to get more Updates from{" "}
                  <span className="font-weight-bold">eelspace</span>{" "}
                </h2>
                <p>Let's subscribe with us and find the fun.</p>
              </div>
              <div
                className="col-md-6 col-sm-12"
                style={{ alignSelf: "center" }}
              >
                <form className="form-inline">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Type Email Address Here"
                  />
                  <button className="btn btn-primary ml-3">Submit</button>
                </form>
              </div>
            </div>
          </div>

          <div className="pt-5">
            <div className="row justify-content-between">
              <div>
                <h4 className="font-weight-bold">Most Read Articles</h4>
              </div>
              <div>
                <p>See more {">>"}</p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <ArticleCard />
              </div>
              <div className="col-md-4">
                <ArticleCard />
              </div>
              <div className="col-md-4">
                <ArticleCard />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Landing;
