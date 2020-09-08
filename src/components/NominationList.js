import React from 'react';
import Nomination from './Nomination'

export default function NominationList(props) {

  const nominations = props.nominations.map(nomination => {
    return <Nomination nominationRemove={props.nominationRemove} nomination={nomination}></Nomination>
  })
  
  return (
    <div className='nomination-container'>
      {nominations}
    </div>
  )
}