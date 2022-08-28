import React from 'react'

const Progressbar = (props) => {
  return (
    <div className="progressBar">
        <div style={{width:props.width,backgroundColor:props.bgColor}}></div>
    </div>
  )
}

export default Progressbar