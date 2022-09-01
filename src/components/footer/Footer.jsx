import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import {TiSocialLinkedin} from 'react-icons/ti'
import {BsGithub} from 'react-icons/bs'
import "./footer.css"

const Footer = () => {
  return (
    <footer>
      <ul className="permaLinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
       <div className="social">
        <a href="https://www.instagram.com/kumarvikashdev1/" ><BsInstagram/></a>
        <a href="https://www.linkedin.com/in/vikash-kumar-2179591a4/" ><TiSocialLinkedin/></a>
        <a href="https://github.com/Vikash861"><BsGithub/></a>
      </div>
      

    </footer>
  )
}

export default Footer