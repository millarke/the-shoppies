import React from "react";

export default function Movie(props) {
  return (
    <article className="search-result">
      <div className="movie-info">
        <img src={props.poster} alt='poster' />
        <div className="movie-title">{props.title}</div>
        <div className="movie-year">{props.year}</div>
        <button className='nominate'>nominate</button>
      </div>
    </article>
  );
}
