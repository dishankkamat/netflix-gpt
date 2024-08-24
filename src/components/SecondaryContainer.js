import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.addNowPlayingMovies && (
      <div className=" bg-black">
        <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          <MovieList
            title={"Now Playing"}
            movies={movies.addNowPlayingMovies}
          />
          <MovieList title={"Popular "} movies={movies.popularMovies} />
          <MovieList title={"Upcoming"} movies={movies.addNowPlayingMovies} />
          <MovieList title={"Sci-fi"} movies={movies.addNowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
