import React from 'react'
import "./experience.css"
//  ========================FRONTEND ICONS=======================================
import {AiOutlineHtml5} from "react-icons/ai"
import {DiCss3} from "react-icons/di"
import {IoLogoJavascript} from "react-icons/io"
import {DiBootstrap} from "react-icons/di"
import {GrReactjs} from "react-icons/gr"
import {DiJqueryLogo} from "react-icons/di"
// ============================BACKEND ICONS====================================
import {FaNodeJs} from "react-icons/fa"
import {SiExpress} from "react-icons/si"
import {DiMongodb} from "react-icons/di"
import {DiPhp} from "react-icons/di"
import {GrMysql} from "react-icons/gr"
//===========================OTHERS ICONS=========================
import {FaLinux} from "react-icons/fa"
import {SiCplusplus} from "react-icons/si"
import {FiDatabase} from "react-icons/fi"


import Progress from "./Progressbar"
import Card from "./ProgressCard"

const Skills = () => {
  return (
    <section id="experience" className="container"> 
      <h5>The Skills I have</h5>
      <h2>Experience</h2>
      <div className="exp__container">
        <div className="frontEnd">
          <h4>Frontend</h4>
          <div>
            <div className="expCard">
              <span style={{color:"#e34c26"}}><AiOutlineHtml5/></span>
              <Progress width="95%" bgColor="#e34c26"/>
            </div>

            <div className="expCard">
              <span style={{color:"#4db5ff"}}><DiCss3/></span>
              <Progress width="90%" bgColor="#4db5ff"/>
            </div>

            <div className="expCard">
              <span style={{color:"#f0db4f"}}><IoLogoJavascript/></span>
              <Progress width="90%" bgColor="#f0db4f"/>
            </div>

            <div className="expCard">
              <span style={{color:"#5bc0de"}}><DiBootstrap/></span>
              <Progress width="70%" bgColor="#5bc0de"/>
            </div>

            <div className="expCard">
              <span style={{color:"#04d8f9"}}><GrReactjs/></span>
              <Progress width="75%" bgColor="#04d8f9"/>
            </div>

            <div className="expCard">
              <span style={{color:"#ffffff"}}><DiJqueryLogo/></span>
              <Progress width="85%" bgColor="#ffffff"/>
            </div>

          </div>
        </div>
        {/* backend */}
        <div className="Backend">
          <h4>Backend</h4>
          <div>
            <Card logo={FaNodeJs} width="80%" bg="#3c873a"/>
            <Card logo={SiExpress} width="87%" bg="#ffeb3b"/>
            <Card logo={DiMongodb} width="60%" bg="#388e3c"/>
            <Card logo={DiPhp} width="70%" bg="#8993be"/>
            <Card logo={GrMysql} width="85%" bg="#039be5"/>
          </div>
        </div>
        </div>

        <div className="general">
          <div>
            <h4>Others</h4>
            <div>
              <Card logo ={FaLinux} width="65%" bg="#f57f17" Card/>
              <Card logo ={SiCplusplus} width="75%" bg="#ec407a" Card/>
              <Card logo ={FiDatabase} width="70%" bg="#848c8c" Card/>
              {/* <Card logo ={} width="70%" bg="#848c8c" Card/> */}
            </div>
          </div>
      </div>
    </section>
  )
}

export default Skills