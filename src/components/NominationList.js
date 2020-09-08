import React from 'react';
import Nomination from './Nomination'

export default function NominationList(props) {

  const nominations = props.nominations.map(nomination => {
    return <Nomination nominationRemove={props.nominationRemove} nomination={nomination}></Nomination>
  })

  let banner;
  if(props.nominations.length === 5) {
    banner = <div className='banner' style={{visibility:'visible'}}>
      <h3>You've Nominated 5 Movies!</h3>
    </div>
  } else {
    banner = <div className='banner' style={{visibility:'hidden'}}>
      <h3>You've Nominated 5 Movies!</h3>
    </div>
  }
  
  return (
    <div>
      <div className='nomination-container'>
        {nominations}
      </div>
      <div>
        {banner}
      </div>
    </div>
  )
}