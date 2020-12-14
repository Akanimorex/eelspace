import React from "react";
import "../assets/css/main.css";
import "../assets/css/careers.css"
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Careers = () => {
  return (
    <div>
      <Navigation />
      <main>
        <div className="web-container container">
          <div className="text-center pt-5 pb-5">
            <h1>Careers</h1>
            <p>
              Good news, we’re hiring!
              <figcaption> eelspace is looking for new talent all
              across the country. Have</figcaption> what it takes to be a part of something
              special? Let’s talk.
            </p>
          </div>
          <div className="">
            <div className="row">
              <div className="col-md-6">
                <div className="">
                  <h5>What we offer</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididu.
                  </p>
                </div>
                <div className="pt-5">
                  <h5>Explore Our Current Job Opportunities</h5>
                  <p>
                    Be the next member of our amazing team. If you are driven by
                    intergrity, honesty and humility, please email your cover
                    letter and resume to jobs@apexnetwork.ng
                  </p>
                </div>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-5 jobs-list-card">
                <div className="p-4">
                  <h5>Job Openings</h5>
                  <ul className="list-unstyled jobs-list">
                    <li><a href="#">Business Development</a></li>
                    <li><a href="#">Business Analyst</a></li>
                    <li><a href="#">Business Developer Mananger</a></li>
                    <li><a href="#">Digital Marketer</a></li>
                    <li><a href="#">Software Engineer</a></li>
                    <li><a href="#">Sales Associate</a></li>
                    <li><a href="#">Sales Executive</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
