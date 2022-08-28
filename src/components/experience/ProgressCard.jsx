import React from 'react'
import Progress from "./Progressbar"

const Progressbar = (props) => {
  return (
    <div className="expCard">
    <span style={{color:props.bg}}>{<props.logo/>}</span>
    <Progress width={props.width} bgColor={props.bg}/>
  </div>
  )
}

export default Progressbar