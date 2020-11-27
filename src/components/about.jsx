import React from "react";
import emoji from "./emira.jpg"

export default function about() {
  return (
    <div class="flex flex-col justify-center items-center min-h-screen w-full lg:flex-row">
      <div class="justify-center ">
        <img src={emoji} className="max-w-xs rounded-full" alt="Memoji of Emira"/>
      </div>
      <div class="intro max-w-sm lg:ml-6 lg:mt-6">
        <h1 class='text-gray-300 text-center lg:-ml-16 text-4xl lg:text-left lg:text-8xl leading-12'>Hello.</h1>
        <p class="text-center text-gray-400 text-lg lg:text-2xl lg:mt-2 lg:text-left">
        I'm a computer science 
          major at CUNY - Hunter College. When I'm not programming, I like to make
          music, vector art, and AR filters for Instagram.
        </p>
      </div>
    </div>
  )
}
