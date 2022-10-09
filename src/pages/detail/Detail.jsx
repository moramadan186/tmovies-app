import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import tmdbApi from "./../../api/tmdbApi";
import apiConfig from "./../../api/apiConfig";
import CastList from "./CastList";
import MovieList from "../../components/movie-list/MovieList";
import VideoList from "./VideoList";

import { Container } from "./../../components/shared/Container";
import { Section, SectionHeader } from "./../../components/shared/Section";
import { Banner, MovieContent, MoviePoster, MovieInfo } from "./detail-style";

const Detail = () => {
  const { category, id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      const response = await tmdbApi.detail(category, id, { params: {} });
      setItem(response);
      window.scrollTo(0, 0);
    };
    getDetail();
  }, [category, id]);

  console.log(item);

  return (
    <>
      {item && (
        <>
          <Banner
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                item.backdrop_path || item.poster_path
              )})`,
            }}
          ></Banner>
          <Container>
            <MovieContent className="mb-3">
              <MoviePoster>
                <div
                  className="poster-img"
                  style={{
                    backgroundImage: `url(${apiConfig.originalImage(
                      item.poster_path || item.backdrop_path
                    )})`,
                  }}
                ></div>
              </MoviePoster>
              <MovieInfo.Container>
                <MovieInfo.Title>{item.title || item.name}</MovieInfo.Title>
                <MovieInfo.Genres>
                  {item.genres &&
                    item.genres
                      .slice(0, 5)
                      .map((genre, i) => (
                        <MovieInfo.GenresItem key={i}>
                          {" "}
                          {genre.name}{" "}
                        </MovieInfo.GenresItem>
                      ))}
                </MovieInfo.Genres>
                <p>{item.overview}</p>
                <div>
                  <SectionHeader>
                    <h2>Casts</h2>
                  </SectionHeader>
                  <CastList itemId={item.id} />
                </div>
              </MovieInfo.Container>
            </MovieContent>
            <Section className="mb-3">
              <VideoList id={item.id} />
            </Section>
            <Section className="mb-3">
              <SectionHeader className="mb-2">
                <h2>Similar</h2>
              </SectionHeader>
              <MovieList cat={category} type="similar" id={item.id} />
            </Section>
          </Container>
        </>
      )}
    </>
  );
};

export default Detail;
