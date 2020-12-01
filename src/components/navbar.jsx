import React, {Component} from "react";
import anime from "animejs";

export default class Nav extends Component {
  animation() {
    anime({targets: ['.full-navbar-div'], opacity: 1, duration: 300, easing: 'linear', delay: 3600});
  }
  componentDidMount() {
    this.animation()
  }
  render() {
    return (
      <div className="full-navbar-div opacity-0 fixed z-30 w-full">
        <div
          className="flex bg-purp top-0 lg:bg-main justify-between">
          <div
            className='name-div text-purp2 py-2 px-3 items-center text-3xl md:text-4xl lg:hidden'>
            <div>
              <h1>Emira Hajj</h1>
            </div>
          </div>
          <div className="icon-div flex flex-row lg:flex-col-reverse lg:fixed lg:right-0">
            <div className="w-6 md:w-8 md:mt-3 mt-4 lg:w-10 mr-4">
              <a href="https://github.com/emirahajj">
                <svg
                  class="icon"
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 98 99">
                  <path
                    class="cls-1"
                    d="M49,0C21.94,0,0,22.72,0,50.76,0,73.18,14,92.2,33.51,98.91c2.45.47,3.35-1.1,3.35-2.44s0-4.4-.07-8.64C23.16,90.9,20.28,81,20.28,81c-2.22-5.86-5.44-7.42-5.44-7.42-4.45-3.15.34-3.09.34-3.09,4.92.36,7.51,5.23,7.51,5.23C27.06,83.51,34.15,81.27,37,80a11,11,0,0,1,3.11-6.79C29.18,71.9,17.74,67.55,17.74,48.1a20,20,0,0,1,5-13.62c-.5-1.28-2.18-6.44.48-13.43,0,0,4.12-1.37,13.48,5.2a44.84,44.84,0,0,1,24.53,0c9.35-6.57,13.46-5.2,13.46-5.2,2.67,7,1,12.15.49,13.43a20,20,0,0,1,5,13.62c0,19.5-11.46,23.79-22.38,25,1.76,1.57,3.33,4.67,3.33,9.4,0,6.79-.06,12.26-.06,13.93,0,1.35.88,2.93,3.37,2.44C84,92.18,98,73.17,98,50.76,98,22.72,76.06,0,49,0Z"/>
                </svg>
              </a>
            </div>
            <div className="w-6 md:w-8 md:mt-3 mt-4 mr-4 lg:w-10">
              <a href="https://www.linkedin.com/in/emirahajj/">
                <svg
                  className="icon hover:text-white"
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path
                    d="M19,0H5A5,5,0,0,0,0,5V19a5,5,0,0,0,5,5H19a5,5,0,0,0,5-5V5A5,5,0,0,0,19,0ZM8,19H5V8H8ZM6.5,6.73A1.77,1.77,0,1,1,8.25,5,1.75,1.75,0,0,1,6.5,6.73ZM20,19H17V13.4c0-3.37-4-3.12-4,0V19H10V8h3V9.77c1.4-2.59,7-2.78,7,2.47Z"/>
                </svg>
              </a>
            </div>
            <div className="w-6 md:w-8 md:mt-3 mt-4 lg:w-10 mr-4 ">
              <a href="https://www.instagram.com/emira.cpp/">
                <svg
                  class="icon hover:text-white"
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path
                    d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.59-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.64.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.35.2-6.78,2.62-7,7C0,8.33,0,8.74,0,12S0,15.67.07,17c.2,4.36,2.62,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.35-.2,6.78-2.62,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.35-2.62-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.43,1.44A1.44,1.44,0,0,0,18.41,4.15Z"
                    transform="translate(0)"/>
                </svg>
              </a>
            </div>
            <div className="w-6 md:w-8 md:mt-3 mr-4 lg:w-10 mt-4 -ml-1 lg:ml-0">
              <a href="emira_hajj.pdf">
                <svg
                  class="icon hover:text-white"
                  id="Capa_1"
                  enable-background="new 0 0 100 100"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path
                      d="m446.605 124.392-119.997-119.997c-2.801-2.802-6.624-4.395-10.608-4.395h-210c-24.813 0-45 20.187-45 45v422c0 24.813 20.187 45 45 45h300c24.813 0 45-20.187 45-45v-332c0-4.09-1.717-7.931-4.395-10.608zm-115.605-73.179 68.787 68.787h-53.787c-8.271 0-15-6.729-15-15zm75 430.787h-300c-8.271 0-15-6.729-15-15v-422c0-8.271 6.729-15 15-15h195v75c0 24.813 20.187 45 45 45h75v317c0 8.271-6.729 15-15 15z"/>
                    <path
                      d="m346 212h-180c-8.284 0-15 6.716-15 15s6.716 15 15 15h180c8.284 0 15-6.716 15-15s-6.716-15-15-15z"/>
                    <path
                      d="m346 272h-180c-8.284 0-15 6.716-15 15s6.716 15 15 15h180c8.284 0 15-6.716 15-15s-6.716-15-15-15z"/>
                    <path
                      d="m346 332h-180c-8.284 0-15 6.716-15 15s6.716 15 15 15h180c8.284 0 15-6.716 15-15s-6.716-15-15-15z"/>
                    <path
                      d="m286 392h-120c-8.284 0-15 6.716-15 15s6.716 15 15 15h120c8.284 0 15-6.716 15-15s-6.716-15-15-15z"/></g>
                </svg>
              </a>
            </div>

          </div>
        </div>
      </div>
    )
  }

}
