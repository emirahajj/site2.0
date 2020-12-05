import React from "react";
import emoji from "../images/emira.jpg"

export default function about() {
  return (
    <div
      class="flex flex-col justify-center items-center min-h-screen w-full lg:flex-row">
      <div class="flex flex-row justify-center items-center w-full lg:flex-row">
        <div class="justify-center">
          <img src={emoji} className="w-64 md:w-80 lg:w-96 min rounded-full" alt="Emira"/>
        </div>
        <div class="intro max-w-sm md:ml-6 lg:mt-6">
          <h1
            class='text-gray-100 -ml-12 text-6xl text-left leading-12 md:-ml-16 md:text-8xl'>Hello.</h1>
          <p
            class="hidden text-purp2 bold text-2xl leading-6 md:contents md:leading-none md:text-2xl md:mt-2 md:text-left">
            I'm a computer science student at CUNY - Hunter
            College. When I'm not programming, I like to make music, vector art, and AR
            filters for Instagram.
          </p>
        </div>
      </div>

      <div className="md:hidden max-w-xs mt-3">
        <p class="text-center bold text-purp2 text-2xl leading-6">
          I'm a computer science student at CUNY - Hunter
          College. When I'm not programming, I like to make music, vector art, and AR
          filters for Instagram.
        </p>
      </div>

    </div>
  )
}
