import React from "react";
import logo from "../assets/images/logo.svg";
import "../assets/css/virtual.css";
import Header from "../components/Header";
import userImage from "../assets/images/avatar-image.svg";
import "../assets/css/blog.css";
import avatar from "../assets/images/avatar.svg";

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
            <select className="form-control">
              <option>
                <i className="fa fa-sliders"></i>Filter Options
              </option>
              <option>1</option>
              <option>1</option>
            </select>
          </div>
          <div>
            <span>
              {" "}
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
              Back to Questions
            </span>
          </div>
          <div>
            <h1>
              How can I preserve user accounts in Jira issue history while
              import data to Jira Cloud?
            </h1>
            <div className="d-flex questioneer pb-4">
              <img src={userImage} alt="" />
              <div className="right-side">
                <p>
                  <span className="font-weight-bold">Mfonobong Umondia</span>
                  <figcaption>
                    <span>Dec 09, 2020</span>
                  </figcaption>
                </p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <ul className="list-unstyled d-flex comm-reactions">
              <li id="first-react">0 views</li>
              <li>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.75 7.62502C14.7526 8.61492 14.5213 9.59144 14.075 10.475C13.5458 11.5338 12.7323 12.4244 11.7256 13.047C10.7189 13.6696 9.55868 13.9996 8.375 14C7.3851 14.0026 6.40859 13.7713 5.525 13.325L1.25 14.75L2.675 10.475C2.2287 9.59144 1.99742 8.61492 2 7.62502C2.00046 6.44134 2.33046 5.28116 2.95304 4.27443C3.57562 3.26771 4.46619 2.4542 5.525 1.92502C6.40859 1.47872 7.3851 1.24744 8.375 1.25002H8.75C10.3133 1.33627 11.7898 1.99609 12.8969 3.10317C14.0039 4.21024 14.6638 5.68676 14.75 7.25002V7.62502Z"
                    stroke="#464855"
                    strokeOpacity="0.7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                0
              </li>
              <li>
                <Icon icon={thumbsUp} />
              </li>
              <li>
                <Icon icon={thumbsDown} />
              </li>

              <li>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.25 7.25H8.75V4.25C8.75 4.05109 8.67099 3.86032 8.53033 3.71967C8.38968 3.57902 8.19892 3.5 8 3.5C7.80109 3.5 7.61033 3.57902 7.46967 3.71967C7.32902 3.86032 7.25 4.05109 7.25 4.25V8C7.25 8.19891 7.32902 8.38968 7.46967 8.53033C7.61033 8.67098 7.80109 8.75 8 8.75H10.25C10.4489 8.75 10.6397 8.67098 10.7803 8.53033C10.921 8.38968 11 8.19891 11 8C11 7.80109 10.921 7.61032 10.7803 7.46967C10.6397 7.32902 10.4489 7.25 10.25 7.25ZM8 0.5C6.51664 0.5 5.0666 0.939867 3.83323 1.76398C2.59986 2.58809 1.63856 3.75943 1.07091 5.12987C0.50325 6.50032 0.354725 8.00832 0.644114 9.46318C0.933503 10.918 1.64781 12.2544 2.6967 13.3033C3.7456 14.3522 5.08197 15.0665 6.53683 15.3559C7.99168 15.6453 9.49968 15.4968 10.8701 14.9291C12.2406 14.3614 13.4119 13.4001 14.236 12.1668C15.0601 10.9334 15.5 9.48336 15.5 8C15.5 7.01509 15.306 6.03982 14.9291 5.12987C14.5522 4.21993 13.9997 3.39314 13.3033 2.6967C12.6069 2.00026 11.7801 1.44781 10.8701 1.0709C9.96019 0.693993 8.98492 0.5 8 0.5ZM8 14C6.81332 14 5.65328 13.6481 4.66658 12.9888C3.67989 12.3295 2.91085 11.3925 2.45673 10.2961C2.0026 9.19974 1.88378 7.99334 2.11529 6.82946C2.3468 5.66557 2.91825 4.59647 3.75736 3.75736C4.59648 2.91824 5.66558 2.3468 6.82946 2.11529C7.99335 1.88378 9.19975 2.0026 10.2961 2.45672C11.3925 2.91085 12.3295 3.67988 12.9888 4.66658C13.6481 5.65327 14 6.81331 14 8C14 9.5913 13.3679 11.1174 12.2426 12.2426C11.1174 13.3679 9.5913 14 8 14Z"
                    fill="#464855"
                    fillOpacity="0.7"
                  />
                </svg>
                5m ago
              </li>
            </ul>
          </div>
          <div className="blog-comment-section">
            <div className="row justify-content-between blue-color m-1">
              <p>Responses</p>
              <p>Write Responses</p>
            </div>
            <div className="response-card">
              <div className="d-flex">
                <div>
                  <img src={avatar} className="img-fluid" />
                </div>
                <div className="pl-1" style={{ alignSelf: "center" }}>
                  <p>
                    <span className="font-weight-bold blue-color d-block">
                      Mfonobong Umondia
                    </span>

                    <span>September 14th</span>
                  </p>
                </div>
              </div>

              <p>
                Since 2007 the beer is sold again in the traditional bottles
                with flip top closure. The beer which is with 5,8% alcohol the
                lightest one, is offered at the Oktoberfest in the Hacker-Zelt
                and the Pschorr-Bräurosl.
              </p>
              <ul className="list-unstyled d-flex reactions">
                <li>
                  <Icon icon={thumbsUp} />
                </li>
                <li>
                  <Icon icon={thumbsDown} />
                </li>
              </ul>
            </div>
            <div className="reply-card">
              <div className="d-flex">
                <div>
                  <img src={avatar} className="img-fluid" />
                </div>
                <div className="pl-1" style={{ alignSelf: "center" }}>
                  <p>
                    <span className="font-weight-bold blue-color d-block">
                      Mfonobong Umondia
                    </span>

                    <span>September 14th</span>
                  </p>
                </div>
              </div>
              <div>
                <textarea
                  className="form-control"
                  cols="10"
                  rows="6"
                ></textarea>
              </div>
              <div className="answer-btn-div">
                <button className="btn btn-primary">Answer</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ViewQuestion;
