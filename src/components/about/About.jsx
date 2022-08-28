import React from 'react'
import aboutMe from "../../assets/aboutMe.jpg"
import Btn from "./Btn"
import "./about.css"

const About = () => {
  return (
    <section  id="about" className=" container">
      <h5 className="text-light">Get To Know</h5>
      <h2>About Me</h2>
      <div className="aboutContentContainer">
        <div className="aboutImg">
          <img src={aboutMe} alt="aboutme" />
        </div>
        <div className="aboutText_Buttons text-light">
          <p>Hi, My name is Vikash Kumar. A Fullstack Developer and computer programmer. Currently, I'm in the final year of my bachelor's degree.I write code and do fantastic things using code. I have experience in essential development to modern development using technologies like ReactJs and express as well as I do solve coding problems hence my problem-solving skill is also good. Currently, I'm looking for an internship to use the skill that I have learned so far and improve more myself.</p>
          <div className="aboutButtons">
            <Btn class="btn btn-primary" url="#contact" value="Let's Talk"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About