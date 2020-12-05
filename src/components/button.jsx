import React from "react";

export default function button() {
  return (
    <div class=" bg-accent4 flex flex-row justify-center hover:bg-green-300 text-white hover:text-accent4 rounded-full">
      <p className=" ml-3 mt-1 mb-1 text-xl self-center">View on </p>
      <div className="w-3.5 mr-4 self-center">
      <svg
        class="ml-1.5 mt-0.5 fill-current"
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 98 99">
        <path
          class="cls-1"
          d="M49,0C21.94,0,0,22.72,0,50.76,0,73.18,14,92.2,33.51,98.91c2.45.47,3.35-1.1,3.35-2.44s0-4.4-.07-8.64C23.16,90.9,20.28,81,20.28,81c-2.22-5.86-5.44-7.42-5.44-7.42-4.45-3.15.34-3.09.34-3.09,4.92.36,7.51,5.23,7.51,5.23C27.06,83.51,34.15,81.27,37,80a11,11,0,0,1,3.11-6.79C29.18,71.9,17.74,67.55,17.74,48.1a20,20,0,0,1,5-13.62c-.5-1.28-2.18-6.44.48-13.43,0,0,4.12-1.37,13.48,5.2a44.84,44.84,0,0,1,24.53,0c9.35-6.57,13.46-5.2,13.46-5.2,2.67,7,1,12.15.49,13.43a20,20,0,0,1,5,13.62c0,19.5-11.46,23.79-22.38,25,1.76,1.57,3.33,4.67,3.33,9.4,0,6.79-.06,12.26-.06,13.93,0,1.35.88,2.93,3.37,2.44C84,92.18,98,73.17,98,50.76,98,22.72,76.06,0,49,0Z"/>
      </svg>  
      </div>
    </div>
  )
}