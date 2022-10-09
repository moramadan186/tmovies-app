import React from "react";
import HeroSlide from "./../components/hero-slide/HeroSlide";
import { Container } from "./../components/shared/Container";
import { Link } from "react-router-dom";
import { OutlineButton } from "../components/shared/Button";
import { Section, SectionHeader } from "./../components/shared/Section";
import MovieList from "./../components/movie-list/MovieList";
import { category, movieType, tvType } from "./../api/tmdbApi";

const Home = () => {
  return (
    <>
      <HeroSlide />
      <Container>
        <Section className="mb-3">
          <SectionHeader className="mb-2">
            <h2>Trending Movies</h2>
            <Link to="/movie">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </SectionHeader>
          <MovieList cat={category.movie} type={movieType.popular} />
        </Section>

        <Section className="mb-3">
          <SectionHeader className="mb-2">
            <h2>Top Rated Movies</h2>
            <Link to="/movie">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </SectionHeader>
          <MovieList cat={category.movie} type={movieType.top_rated} />
        </Section>

        <Section className="mb-3">
          <SectionHeader className="mb-2">
            <h2>Trending Tv</h2>
            <Link to="/tv">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </SectionHeader>
          <MovieList cat={category.tv} type={tvType.popular} />
        </Section>

        <Section className="mb-3">
          <SectionHeader className="mb-2">
            <h2>Top Rated Tv</h2>
            <Link to="/tv">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </SectionHeader>
          <MovieList cat={category.tv} type={tvType.top_rated} />
        </Section>
      </Container>
    </>
  );
};

export default Home;
