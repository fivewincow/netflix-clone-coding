import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import "./Row.css";

const Row = ({ isLargeRow, title, fetchUrl, id }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMoiveData();
  }, []);

  const fetchMoiveData = async () => {
    const request = await axios.get(fetchUrl);
    console.log("requests", request);
    setMovies(request.data.results);
  };

  return (
    <section className="row">
      <h2>{title}</h2>
      <div className="slide">
        <div className="slider__arrow-left">
          <span className="arrow">{"<"}</span>
        </div>

        <div id={id} className="row__posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`https://image.tmdb.org/t/p/original/${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))}
          <div className="slider__arrow_right">
            <span className="arrow">{">"}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Row;
