import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../assets/css/home.css";
import coSpace from "../assets/images/co-space.svg";
import imgOne from "../assets/images/imgOne.svg";
import lorem from "../assets/images/lorem.svg";

const Home = () => {
  return (
    <div>
      <header>
        <Navigation />
        <div className="banner">
          <div className="banner-text text-white">
            <h1>
              One of Saturn’s largest rings
              <figcaption>may be newer than anyone</figcaption>
            </h1>
            <ul className="list-unstyled d-flex justify-content-between blog-info">
              <li>November 28th</li>
              <li>Mfonobong Umondia</li>
              <li>4 comments</li>
            </ul>
          </div>
        </div>
      </header>
      <main>
        <div className="web-container container pt-5">
          <div className="cospace-card">
            <div className="left-side">
              <div className="space-card-left m-4">
                <h4 className="font-weight-bold">eelspace Co-working Space</h4>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that....
                </p>
                <div className="d-flex justify-content-between mt-2">
                  <p>May 20th 2020</p>
                  <p>Read More</p>
                </div>
              </div>
            </div>
            <img src={coSpace} />
          </div>
        </div>

        <div className="web-container container pt-5">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="card blog-card">
                <img
                  className="card-img-top"
                  src={imgOne}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title font-weight-bold">
                    Long Established
                  </h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content...
                  </p>
                  <div className="d-flex justify-content-between">
                    <p>May 20th, 2020</p>
                    <p className="text-primary">Read more</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="card blog-card">
                <img
                  className="card-img-top"
                  src={imgOne}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title font-weight-bold">
                    Long Established
                  </h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content...
                  </p>
                  <div className="d-flex justify-content-between">
                    <p>May 20th, 2020</p>
                    <p className="text-primary">Read more</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="card blog-card">
                <img
                  className="card-img-top"
                  src={imgOne}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title font-weight-bold">
                    Long Established
                  </h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content...
                  </p>
                  <div className="d-flex justify-content-between">
                    <p>May 20th, 2020</p>
                    <p className="text-primary">Read more</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p>
              1 - 12 of 50 <span>{`<  >`}</span>
            </p>
          </div>
        </div>

        <div className="web-container  container pt-5">
          <div className="third-mother-flex">
            <div className="left-side p-3">
              <h1 className="weight-700">What is Lorem Ipsum?</h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution...
              </p>
              <div className="row justify-content-between m-2 mt-3">
                <p>May 2020</p>
                <p className="blue-color">Read More</p>
              </div>
            </div>
            <div>
              <img src={lorem} alt="pic-right" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
