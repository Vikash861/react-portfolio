import React from 'react'
import "./header.css"
import CTA from "./CTA"
import pic from "../../assets/pic.jpg"
import Socials from "./headerSocials"
function Header() {
  let careerName = "";
  let careerName1 = "Fullstack Developer";
  let careerName2 = "A Programmer";
  // setTimeInterval



  return (
    <header id="#">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Vikash Kumar</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA/>
        <a href="#contact" className="scroll__down">Scroll Down</a>
        <div className="me">
          <img src={pic} alt="Avatar.jpg" />
        </div>
      <Socials/>
      </div>
    </header>
  )
}

export default Header