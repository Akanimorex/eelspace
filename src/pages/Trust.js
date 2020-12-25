import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../assets/css/trust.css";

const Trust = () => {
  return (
    <div>
      <header>
        <Navigation />
        <div className="banner banner-pic">
          <div className="text-center trust-head">
            <h1>Trust and Safety</h1>
            <p>
              We’ve got millions of Gigs and Millions of users but your trust
              and safety is out top priority #1
            </p>
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <p>
            Have questions or issues, we’re here to always help you out. Holla
            at us using the contact page
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Trust;
