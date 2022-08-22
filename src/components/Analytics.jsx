import React from "react";
import design from "../assets/design.png";
// how to import an image from a folder: ../ = go out of folder /= and into assets folder and then the name + .png
function Analytics() {
  return (
    <div
      className="
    w-full
     bg-white
     py-16
     px-4 "
    >
      <div
        className="
      max-w-[1240px]
      mx-auto
      grid
      md:grid-cols-2
      "
      >
        <img
          src={design}
          alt="a design logo"
          className=" w-[500px] mx-auto my-4 p-2"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] uppercase font-bold">
            I analyze code in my browser by pressing Ctrl+U
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-3">
            Learn and Reach out for help
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ad,
            doloribus cupiditate eum id officia! Doloremque voluptatum sed fuga
            alias assumenda, mollitia, tempore quas ratione velit aspernatur
            voluptatem expedita! Quos.
          </p>
          <button
            className="
              uppercase
              text-white
               bg-black
               w-[200px]
               rounded-md
               font-bold
               my-6
               mx-auto
               md:mx-0
               py-3
               hover:text-[#00df9a]"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
