import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import tmdbApi, { category } from "./../../api/tmdbApi";
import MovieCard from "./../movie-card/MovieCard";
import { MovieListCont } from "./list-style";

const MovieList = ({ cat, type, id }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      let response = null;
      const params = {};
      if (type !== "similar") {
        switch (cat) {
          case category.movie:
            response = await tmdbApi.getMoviesList(type, { params });
            break;
          default:
            response = await tmdbApi.getTvList(type, { params });
            break;
        }
      } else response = await tmdbApi.similar(cat, id);
      setItems(response.results);
    };
    getMovies();
  }, []);

  return (
    <MovieListCont className="movie-list">
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
        {items?.map((item, index) => (
          <SwiperSlide className="swiper-slide" key={index}>
            <MovieCard category={cat} item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </MovieListCont>
  );
};

MovieList.propTypes = {
  cat: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.number,
};

export default MovieList;
