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
      d: {
        value: ["M-0.5,0.5h1920c0,294.7,0,589.3,0,884c-556.2-53.2-735-521-1701-406c-60,7.1-163.8-" +
            "25.5-219-47C-0.5,287.8-0.5,144.2-0.5,0.5z"]
      },
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

        <div className="fixed w-full">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            // width={window.innerWidth < 1024
            // ? "800%"
            // : "1005%"}
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
              d="M-0.5,0.5h1920c0,294.7,0,589.3,0,884c-556.2-53.2-1025.4-604-1701-406c-58,17-163.8-25.5-219-47C-0.5,287.8-0.5,144.2-0.5,0.5z"/>
          </svg>
        </div>
        <div className="nav+splash_div flex relative flex-col">

          <div className="fixed z-10 w-full">
            <Nav/>
          </div>

          <div
            className="flex flex-col lg:flex-row justify-center items-center w-full min-h-screen">
            <Mac/>
          </div>

          <About/>

          <div className="">
            <h1 className="text-gray-300 text-8xl text-center">Projects</h1>
            <div
              class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 items-center min-h-screen">
              {projects.map((project) => (createCard(project)))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center min-h-screen w-full">
            <div className="absolute">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="600px"
                length="600px" 
                viewBox="0 0 382.6 309.6">
                <path
                  fill="#F09235"
                  d="M1.1,95.6c1.7-12.5,5.8-42.9,31-67c24.5-23.4,54.1-26.8,66-28c31.8-3.2,45.3,8,79,14c22.8,4,56.7,6,101-6
	c7.2-0.9,27.5-2.5,46,10c22.2,15,26.8,40.1,29,52c4.8,26-2.3,41.1-5,61c-9.3,68.5,46.8,95.2,32,132c-18,44.7-117.1,45.6-155,46
	c-39.6,0.4-68.8-6.4-85-11c-31-8.8-60.5-17.2-86-43c-23.1-23.4-30.9-48.9-42-85C3.6,142.8-2.6,122.7,1.1,95.6z"/>
              </svg>

            </div>
            <h1 className="text-gray-100 relative z-10 text-6xl text-center">Get in touch</h1>

            <div className="flex flex-col relative z-10 items-center">
              <div className=" w-96">
                <p className="text-gray-200 text-2xl mt-6 text-center">
                  I'm actively looking for full-time and internship SWE roles. Feel free to
                  connect with me on LinkedIn or via email.
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
