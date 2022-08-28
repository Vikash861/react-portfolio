import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaInstagramSquare} from "react-icons/fa"
import {FaGithubSquare} from "react-icons/fa"

const headerSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://instagram.com" target="_blank"><FaInstagramSquare/></a>
        <a href="https://github.com" target="_blank"><FaGithubSquare/></a>
    </div>
  )
}

export default headerSocials