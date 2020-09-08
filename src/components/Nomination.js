import React from 'react';


export default function NominationList(props) {
  return(
    <div className='nomination-stack'>
      <img
        src={props.nomination.poster}
        alt='movie poster'
        width='120px'
        className='nomination'
        >
      </img>
      <button 
        className='remove-button' 
        onClick={() => {
          props.nominationRemove(props.nomination.id)
        }}
      >Remove</button>
    </div>
  )
}