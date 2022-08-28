import React from 'react'
import { useState } from "react";
import "./nav.css"
import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import {AiOutlineBook} from "react-icons/ai";
import {AiOutlineProject} from "react-icons/ai";
import {RiMessage3Line} from "react-icons/ri";

const Nav = () => {
  const [activeNav,setActiveNav] = useState("#");
  // console.log(activeNav)


  return (
    <nav>
        <a href="#" onClick={()=>setActiveNav("#")} className={activeNav==="#" ? "active" : '' } ><AiOutlineHome/></a>
        <a href="#about" onClick={()=>setActiveNav("about")} className={activeNav==="about" ? "active" : ''} ><AiOutlineUser/></a>
        <a href="#experience" onClick={()=>setActiveNav("experience")} className={activeNav==="experience" ? "active" : ''}><AiOutlineBook/></a>
        <a href="#portfolio" onClick={()=>setActiveNav("portfolio")} className={activeNav==="portfolio" ? "active" : ''} ><AiOutlineProject/></a>
        <a href="#contact" onClick={()=>setActiveNav("contact")} className={activeNav==="contact" ? "active" : ''} ><RiMessage3Line/></a>
    </nav>
  )
}

export default Nav