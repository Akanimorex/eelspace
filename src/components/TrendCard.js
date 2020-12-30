import React from "react";
import imageSlide from "../assets/images/img-slide.png";
import trendUser from "../assets/images/trend-user.svg";

const TrendCard = () => {
  return (
    <div>
      <div className="trend-card">
        <div>
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
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
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src={imageSlide}
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={imageSlide}
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={imageSlide}
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="d-flex trend-flex justify-content-around">
          <img src={trendUser} className="trend-user-image" alt="trend-user" />
          <div>
            <p>
              <figcaption>
                <span className="font-weight-bold">Mfonobong Umondia</span>
              </figcaption>
              <figcaption>
                <span>Product Designer</span>
              </figcaption>
              <figcaption>
                <span>
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.97385 3.62089C9.90801 3.41841 9.72841 3.27505 9.51677 3.2559L6.63006 2.99382L5.48922 0.322881C5.40499 0.12665 5.21333 0 5.00001 0C4.78669 0 4.59496 0.12665 4.51127 0.322881L3.37042 2.99382L0.48326 3.2559C0.271617 3.27543 0.0923996 3.41879 0.0261753 3.62089C-0.0396675 3.82338 0.0211398 4.04548 0.181207 4.18586L2.36333 6.09927L1.71993 8.93302C1.67286 9.14139 1.75373 9.35684 1.92661 9.48182C2.01954 9.54934 2.12872 9.58306 2.23828 9.58306C2.33243 9.58306 2.42665 9.55803 2.51081 9.50768L5.00001 8.01931L7.48876 9.50768C7.67134 9.61678 7.90091 9.60679 8.07341 9.48182C8.2463 9.35684 8.32717 9.14139 8.2801 8.93302L7.6367 6.09927L9.81882 4.18586C9.97881 4.04548 10.0397 3.82384 9.97385 3.62089Z"
                      fill="#5146D9"
                    />
                  </svg>
                  5.0(1k+)
                </span>
              </figcaption>
            </p>
          </div>
        </div>
        <ul className="trend-golden list-unstyled">
          <li>Research</li>
          <li>UI Design</li>
          <li>Research</li>
        </ul>

        <div className="m-3">
          <p>I will design user interface for your websites and mobile apps.</p>
          <ul className="list-unstyled d-flex justify-content-between">
            <li>
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.6306 2.45692C15.2475 2.07367 14.7927 1.76965 14.2921 1.56223C13.7915 1.35481 13.2549 1.24805 12.7131 1.24805C12.1712 1.24805 11.6347 1.35481 11.1341 1.56223C10.6335 1.76965 10.1786 2.07367 9.79558 2.45692L9.00058 3.25192L8.20558 2.45692C7.43181 1.68315 6.38235 1.24845 5.28808 1.24845C4.1938 1.24845 3.14435 1.68315 2.37058 2.45692C1.59681 3.23069 1.16211 4.28014 1.16211 5.37442C1.16211 6.46869 1.59681 7.51815 2.37058 8.29192L3.16558 9.08692L9.00058 14.9219L14.8356 9.08692L15.6306 8.29192C16.0138 7.90885 16.3178 7.45403 16.5253 6.95343C16.7327 6.45284 16.8394 5.91628 16.8394 5.37442C16.8394 4.83255 16.7327 4.29599 16.5253 3.7954C16.3178 3.29481 16.0138 2.83998 15.6306 2.45692V2.45692Z"
                  stroke="#464855"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </li>
            <li>Starting $4,000</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TrendCard;
