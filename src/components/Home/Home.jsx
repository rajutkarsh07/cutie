import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Cuties</h1>
      <div className="hero">
        <h2>Site for keeping your mermory forever</h2>

        <div className="pages-link">
          <Link exact="true" to="/gallery" className="btn-page">
            Gallery
          </Link>
          <Link exact="true" to="/memory" className="btn-page">
            Memory
          </Link>
          <Link exact="true" to="/bucketlist" className="btn-page">
            Bucket List
          </Link>
          <Link exact="true" to="/budgettracker" className="btn-page">
            Budget Tracker
          </Link>
          <Link exact="true" to="/bucketlist" className="btn-page">
            Bucket List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
