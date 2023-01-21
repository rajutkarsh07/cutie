import React from "react";
import "./Gallery.scss";
import img1 from "../assets/img1.png";
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
        <img src={img1} alt="img1" data-aos="fade-up" />
        <img src={img1} alt="img1" data-aos="fade-up" />
        <img src={img1} alt="img1" data-aos="fade-up" />
        <img src={img1} alt="img1" data-aos="fade-up" />
        <img src={img1} alt="img1" data-aos="fade-up" />
        <img src={img1} alt="img1" data-aos="fade-up" />
        <img src={img1} alt="img1" data-aos="fade-up" />
        <img src={img1} alt="img1" data-aos="fade-up" />
        <img src={img1} alt="img1" data-aos="fade-up" />
        <img src={img1} alt="img1" data-aos="fade-up" />
        <img src={img1} alt="img1" data-aos="fade-up" />
        <img src={img1} alt="img1" data-aos="fade-up" />
        <img src={img1} alt="img1" data-aos="fade-up" />
      </div>
      <Link to="/photos" className="btn-primary">
        Add new photos
      </Link>
    </div>
  );
};

export default Gallery;
