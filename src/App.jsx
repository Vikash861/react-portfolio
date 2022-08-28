import React from 'react'
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Skills from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "./index.css"

function App() {
    return (
        <div>
            <Header/>
            <Nav/>
            <About/>
            <Skills/>
            <Portfolio/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default App