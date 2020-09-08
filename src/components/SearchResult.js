import React from "react";

export default function Movie(props) {

  // const idCheck = function() {
  //   for (let nomination of props.nominations) {
  //     if (props.nomination.id === nomination.id) {
  //       return true
  //     }
  //   }
  //   return false
  // }

  // const activeButton = function() {
  //   console.log('idCheck', idCheck)
  //   if (!idCheck) {
  //     return <button
  //         className='nominate' 
  //         onClick={() => {
  //           props.nominationHandler({
  //             poster: props.poster,
  //             title: props.title,
  //             year: props.year,
  //             id: props.id
  //           })
  //         }}>
  //           nominate
  //       </button>
  //   } else {
  //     return <button>nope!</button>
  //   }
  // }

  return (
    <article className="search-result">
      {/* <div className="movie-info"> */}
      <div>
        <div className='movie-info' >
          <img src={props.poster} alt='poster' />
          <div>
            <h1 className="movie-title light-font">{props.title}</h1>
            <h3 className="movie-year light-font">{props.year}</h3>
            {/* <button
              className='nominate' 
              onClick={() => {
                props.nominationHandler({
                  poster: props.poster,
                  title: props.title,
                  year: props.year,
                  id: props.id
                })
              }}
              // disabled={!idCheck}>
              >
                nominate
            </button> */}
          </div>
        </div>
        {/* {activeButton} */}
        {/* {idCheck && <button
          className='nominate' 
          onClick={() => {
            props.nominationHandler({
              poster: props.poster,
              title: props.title,
              year: props.year,
              id: props.id
            })
          }}>
            nominate
        </button>} */}
        
        <button
          className='nominate' 
          onClick={() => {
            props.nominationHandler({
              poster: props.poster,
              title: props.title,
              year: props.year,
              id: props.id
            })
          }}
          disabled={props.isMovieNommed(props.id)}
          // disabled={!idCheck}>
          >
            nominate
        </button>
      </div>
    </article>
  );
}
