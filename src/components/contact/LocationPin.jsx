import React from 'react'
import { MdLocationPin } from "react-icons/md";

const LocationPin = (props) => {
  return (
    <div className='pin'>
        <span style={{fontSize: "4rem"}}><MdLocationPin /></span>
        <p className='pin-text' style={{fontSize: "1.2em"}}>{props.text}</p>
    </div>
  )
}

export default LocationPin