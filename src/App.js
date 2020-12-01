import Nav from "./components/navbar";
import projects from "./images/projects"
import Mac from "./components/mac"
import About from "./components/about"
import Card from "./components/card"
import anime from "animejs"
import {Component} from "react";
import React from "react";

function createCard(project) {
  return (<Card
    title={project.title}
    description={project.description}
    img={project.img}
    lang={project.lang}/>);
}

export default class App extends Component {

  animation() {
    const mine = anime({
      targets: ".backy",
      d: [
        {value:
          "M-0.5,0.5h1920v884c-207.8-19.9-413.7,116.5-510.8-97.5C1248.4,433.3,785,207.2,560.2,430C413.4,576.7,54.7,453-0.5,431.5V0.5z"},
        {value: "M-0.5,0.5h1920v884c-207.8-19.9-222.6,153.9-510.8-97.5C1116,531.7,930,488.9,560.2,633.3C315.2,739,54.7,453-0.5,431.5V0.5z"
            },
          ],
      duration: 7000,
      direction: 'alternate',
      autoplay: true,
      easing: 'linear',
      elasticity: 1200,
      loop: true
    });
  }

  componentDidMount() {
    this.animation();
    console.log(window.innerWidth);
  }
  render() {
    return (

      <div className="App bg-gradient-to-r from-green-300 to-blue-400 -mt-1">

        <div className="fixed w-extra-wide md:w-xx-wide lg:w-full">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100%"
            height="100%"
            viewBox="0 0 1920 1080"
            enable-background="new 0 0 1920 1080">
            <defs>
              <linearGradient id="grad2" x1="0%" y1="10%" x2="0%" y2="65%">
                <stop offset="0%" stop-color="#976192" stop-opacity="1"/>
                <stop offset="100%" stop-color="#F09235" stop-opacity="1"/>
              </linearGradient>
            </defs>
            <path
              className="backy"
              fill="url(#grad2)"
              d="M-0.5,0.5h1920v884c-207.8-19.9-476.8,147.7-573.9-66.4C1185.3,464.4,685.8,254.8,461,477.6C321,617.5,54.7,453-0.5,431.5V0.5z"/>
          </svg>
        </div>
        <div className="nav+splash_div flex relative flex-col">

          <Nav/>
          <Mac/>
          <About/>

          <h1 className="text-gray-100 text-8xl text-center mb-24">Projects</h1>
          <div className="flex flex-col items-center">
            <div
              className="grid grid-cols-1 items-center justify-around min-h-screen lg:flex lg:flex-row lg:max-w-screen-lg lg:flex-wrap ">
              {projects.map((project) => (createCard(project)))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center min-h-screen w-full">
            <div className="flex flex-col relative z-10 items-center">
              <div className="w-72 md:w-96">
                <h1 className="text-gray-100 relative z-10 text-4xl md:text-6xl text-center">Get in touch</h1>
                <p
                  className="text-purp2 bold text-xl md:text-2xl mt-6 leading-tight text-center">
                  I'm actively looking for full-time and internship SWE roles. Feel free to
                  connect on LinkedIn or via email.
                </p>

              </div>

            </div>

          </div>

          <div className="h-10">
            <p className="text-gray-600 mt-1 text-xl text-center">© Emira Hajj 2020</p>
          </div>

        </div>
      </div>
    )
  }

}
