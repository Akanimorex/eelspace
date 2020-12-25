import React from "react";
import logo from "../assets/images/logo.svg";
import "../assets/css/virtual.css";
import Header from "../components/Header";

import { Icon, InlineIcon } from "@iconify/react";

import thumbsUp from "@iconify-icons/carbon/thumbs-up";
import thumbsDown from "@iconify-icons/carbon/thumbs-down";
import userOutlined from "@iconify-icons/ant-design/user-outlined";
import Footer from "../components/Footer";

const ViewQuestion = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="container">
          <div className="text-right">
            <span className>
              <i className="fa fa-sliders"></i>Filter Options
            </span>
            <select className="form-control">
              <option>1</option>
              <option>1</option>
              <option>1</option>
            </select>
          </div>
          <div>
            <svg
              width="9"
              height="15"
              viewBox="0 0 9 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.33625 2.33625L6.75 0.75L0 7.5L6.75 14.25L8.33625 12.6637L3.18375 7.5L8.33625 2.33625Z"
                fill="#464855"
              />
            </svg>
            <p>Go Back to Questions</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ViewQuestion;
