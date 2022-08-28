import React from 'react'
import "./portfolio.css"
import restaurentImg from "../../assets/restaurent.png";
import keeperImg from "../../assets/kepper.png";
import urlImg from "../../assets/urlpreviewer.png";
import BlogImg from "../../assets/Blog.png";
import secretsImg from "../../assets/secrets.png";
import todo from "../../assets/todo.png";


const data = [
  {
    id: 1,
    name: "Restaurent landing page",
    image: restaurentImg,
    githubLink: "https://github.com/Vikash861/Restaurent-Landing-Page.git",
    demoLink: "https://air-restaurent.netlify.app/"
  },
  {
    id: 2,
    name: "Keeper",
    image: keeperImg,
    githubLink: "https://github.com/Vikash861/Keeper-App.git",
    demoLink: "https://n278g5-3000.preview.csb.app/ keeper"
  },
  {
    id: 3,
    name: "Url Previewer",
    image: urlImg,
    githubLink: "https://github.com/Vikash861/url-viewer.git",
    demoLink: "https://urlviewer.herokuapp.com/"
  },
  {
    id: 4,
    name: "My blog",
    image: BlogImg,
    githubLink: "https://github.com/Vikash861/Simple-Blog-Aap.git",
    demoLink: "https://vikashblog.herokuapp.com/"
  },
  {
    id: 5,
    name: "Add you secrets",
    image: secretsImg,
    githubLink: "https://github.com/Vikash861/authentication.git",
    demoLink: "https://addsecret.herokuapp.com/"
  },
  {
    id: 6,
    name: "Todo List",
    image: todo,
    githubLink: "https://github.com/Vikash861/Todo-List-App.git",
    demoLink: "https://qtmukd-3000.preview.csb.app/ todo list"
  }
]
const Portfolio = () => {


  return (
    <div className="container">
      <section id="portfolio">
        <h5>My Work</h5>
        <h2>Portfolio</h2>
        <div className=" portfolio__container">

          {data.map((data) => {
            return <div key={data.id} className="portfolio__item">
              <img src={data.image} alt="" />
              <h3>{data.name}</h3>
              <div className="portfolio__cta">
                <a className="btn" href={data.githubLink} target="_blank">Github</a>
                <a className="btn btn-primary" href={data.demoLink} target="_blank">Live Demo</a>
              </div>
          </div>

          })}
        </div>
      </section>
    </div>
  )
}

export default Portfolio