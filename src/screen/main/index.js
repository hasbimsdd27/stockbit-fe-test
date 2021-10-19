import React from "react";
import { useSelector } from "react-redux";
import Container from "../../components/container";
import MoviesList from "./moviesList";
import SearchForm from "./searchForm";

export default function Index() {
  const movies = useSelector((state) => state.movies);
  return (
    <Container>
      {movies.data.length === 0 ? (
        <SearchForm />
      ) : (
        <MoviesList movies={movies.data} />
      )}
    </Container>
  );
}
