import React from "react";
import Axios from "axios";

const Movie = () => {
  const login = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5000/predict", {
      movie: "Avatar",
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <button onClick={login}>click here</button>
    </div>
  );
};

export default Movie;
