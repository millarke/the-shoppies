import React from 'react';


export default function NominationList(props) {

  // console.log('!!!!!', props)
  // console.log(props.nomination.poster)

  return(
    <div>
      <img
        src={props.nomination.poster}
        alt='movie poster'
        width='120px'
        className='nomination'
        >
      </img>
    </div>
  )
}