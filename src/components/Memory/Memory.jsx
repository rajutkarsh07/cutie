import React from "react";
import "./Memory.scss";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import dash from "../assets/dash.png";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const MemoryCard = ({ heading, img, date, dash }) => {
  return (
    <div className="memorycard">
      <h3 className="heading">{heading}</h3>
      <div>
        <img src={img} alt="img" data-aos="fade-right" />
        <p>{date}</p>
      </div>
      <img src={dash} alt="dash" />
    </div>
  );
};

const Memory = () => {
  const Navigate = useNavigate();
  const back = (e) => {
    e.preventDefault();
    Navigate(-1);
  };
  return (
    <div className="memory">
      <div className="btn" onClick={back}>
        <BiArrowBack />
      </div>
      <h1>Memories</h1>
      <div className="memory-container">
        <MemoryCard
          heading="Saw each other"
          img={img1}
          date="23 Jan, 2023"
          dash={dash}
        />
        <MemoryCard
          heading="Talked first time"
          img={img2}
          date="24 Jan, 2023"
          dash={dash}
        />
        <MemoryCard
          heading="First date"
          img={img3}
          date="31 Jan, 2023"
          dash={dash}
        />
        <MemoryCard
          heading="Confessed"
          img={img4}
          date="14 Feb, 2023"
          dash={dash}
        />
        <MemoryCard
          heading="First Hug"
          img={img5}
          date="24 Feb, 2023"
          dash={dash}
        />
        <MemoryCard
          heading="First Kiss"
          img={img6}
          date="26 Feb, 2023"
          dash={dash}
        />
        <MemoryCard
          heading="Make Love"
          img={img7}
          date="13 June, 2023"
          dash={dash}
        />
        <MemoryCard heading="Happy" img={img8} date="Forever" dash={dash} />
        <Link exact="true" to="/" className="btn-primary">
          Add new memory
        </Link>
      </div>
    </div>
  );
};

export default Memory;
