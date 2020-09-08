import React from "react";

import SearchResult from "./SearchResult";

export default function Results(props) {
  const { results } = props;

  if (results !== 0) {
    return results.map(movie => {
      return <SearchResult isMovieNommed={props.isMovieNommed} nominationHandler={props.nominationHandler} title={movie.Title} year={movie.Year} poster={movie.Poster} id={movie.imdbID} nominations={props.nominations} {...movie}/>;
    });
  } else {
    return <div></div>;
  }
}