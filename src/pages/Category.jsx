import React from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../components/page-header/PageHeader";
import MovieGrid from "../components/movie-grid/MovieGrid";
import { category as cat } from "../api/tmdbApi";
import { Container } from "./../components/shared/Container";
import { Section } from "./../components/shared/Section";
const Category = () => {
  const { category } = useParams();
  return (
    <>
      <PageHeader>{category === cat.movie ? "Movies" : "TV Series"}</PageHeader>
      <Container>
        <Section className="mb-3">
          <MovieGrid category={category} />
        </Section>
      </Container>
    </>
  );
};

export default Category;
