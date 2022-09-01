import React from 'react'
import cv from "../../assets/Vikash's Resume.pdf"

const Button = () => {
  return (
    <div className="cta">
        <a className="btn" href={cv} target="_blank" download >Download CV</a>
        <a className=" btn btn-primary"href="#contact">Let's Talk</a>
    </div>
  )
}

export default Button