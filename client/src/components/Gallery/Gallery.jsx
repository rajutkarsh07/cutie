import React from "react";
import "./Gallery.scss";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Gallery = () => {
  const Navigate = useNavigate();
  const back = (e) => {
    e.preventDefault();
    Navigate(-1);
  };
  return (
    <div className="gallery">
      <div className="btn" onClick={back}>
        <BiArrowBack />
      </div>
      <h1>Gallery</h1>
      <div className="gallery-photos">
        <img src={img1} alt="photos" data-aos="fade-up" />
        <img src={img2} alt="photos" data-aos="fade-up" />
        <img src={img3} alt="photos" data-aos="fade-up" />
        <img src={img4} alt="photos" data-aos="fade-up" />
        <img src={img5} alt="photos" data-aos="fade-up" />
        <img src={img6} alt="photos" data-aos="fade-up" />
        <img src={img7} alt="photos" data-aos="fade-up" />
        <img src={img8} alt="photos" data-aos="fade-up" />
      </div>
      <Link to="/photos" className="btn-primary">
        Add new photos
      </Link>
    </div>
  );
};

export default Gallery;
