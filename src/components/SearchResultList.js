import React from "react";

import SearchResult from "./SearchResult";

export default function Results(props) {
  const { results } = props;

  return results.map(movie => {
    return <SearchResult title={movie.title} year={movie.year} poster={movie.poster} />;
  });
}
