import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../shared/Button";
import apiConfig from "./../../api/apiConfig";
import { MovieCardCont } from "./card-style";

const MovieCard = ({ category, item }) => {
  const link = "/" + category + "/" + item.id;
  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

  return (
    <>
      <Link to={link}>
        <MovieCardCont style={{ backgroundImage: `url(${bg})` }}>
          <Button>▶</Button>
        </MovieCardCont>
        <h3>{item.title || item.name}</h3>
      </Link>
    </>
  );
};

export default MovieCard;
