import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router";
import MovieCard from "./../movie-card/MovieCard";
import { Button, OutlineButton } from "../shared/Button";
import Input from "../shared/Input";

import tmdbApi, {
  category as cate,
  movieType,
  tvType,
} from "../../api/tmdbApi";

import { MovieGridCont, MGloadmore, MovieSearchCont } from "./grid-style";
import { Section } from "./../shared/Section";

const MovieGrid = ({ category }) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [returnedItemsPgs, setRetrunedItemsPgs] = useState(0);
  const { keyword } = useParams();
  useEffect(() => {
    const getList = async () => {
      let response = null;
      if (keyword === undefined) {
        const params = {};
        switch (category) {
          case cate.movie:
            response = await tmdbApi.getMoviesList(movieType.upcoming, {
              params,
            });
            break;
          default:
            response = await tmdbApi.getTvList(tvType.popular, { params });
        }
      } else {
        const params = { query: keyword };
        response = await tmdbApi.search(category, { params });
      }
      setItems(response.results);
      setRetrunedItemsPgs(response.total_pages);
    };
    getList();
  }, [category, keyword]);

  const loadMore = async () => {
    let response = null;
    if (keyword === undefined) {
      const params = {
        page: page + 1,
      };
      switch (category) {
        case category.movie:
          response = await tmdbApi.getMoviesList(movieType.upcoming, {
            params,
          });
          break;
        default:
          response = await tmdbApi.getTvList(tvType.popular, { params });
      }
    } else {
      const params = {
        page: page + 1,
        query: keyword,
      };
      response = await tmdbApi.search(category, { params });
    }
    setItems([...items, ...response.results]);
    setPage(page + 1);
  };

  return (
    <>
      <Section className="mb-3">
        <MovieSearch category={category} keyword={keyword} />
      </Section>
      <MovieGridCont>
        {items.map((item, i) => (
          <MovieCard category={category} item={item} key={i} />
        ))}
      </MovieGridCont>
      {page < returnedItemsPgs ? (
        <MGloadmore>
          <OutlineButton className="small" onClick={loadMore}>
            Load more
          </OutlineButton>
        </MGloadmore>
      ) : null}
    </>
  );
};

const MovieSearch = ({ category, keyword }) => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState(keyword ? keyword : "");

  const goToSearchRoute = useCallback(() => {
    if (searchValue.trim().length > 0)
      navigate(`/${category}/search/${searchValue}`);
  }, [searchValue, category, navigate]);

  //add enter keypress event listener in useEffect
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        goToSearchRoute();
      }
    };
    window.addEventListener("keypress", handleKeyPress);
    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [searchValue, goToSearchRoute]);

  return (
    <MovieSearchCont>
      <Input
        type="text"
        placholder="Enter keyword"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Button className="small" onClick={goToSearchRoute}>
        Search
      </Button>
    </MovieSearchCont>
  );
};

export default MovieGrid;
