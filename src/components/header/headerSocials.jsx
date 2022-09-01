import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaInstagramSquare} from "react-icons/fa"
import {FaGithubSquare} from "react-icons/fa"

const headerSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/vikash-kumar-2179591a4/" target="_blank"><BsLinkedin/></a>
        <a href="https://instagram.com/kumarvikashdev1" target="_blank"><FaInstagramSquare/></a>
        <a href="https://github.com/Vikash861" target="_blank"><FaGithubSquare/></a>
    </div>
  )
}

export default headerSocials