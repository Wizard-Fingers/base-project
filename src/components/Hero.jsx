import React from "react";
import Typed from "react-typed";

function Hero() {
  return (
      <div className=
          "text-white">
      <div
        className="
          max-w-[800px]
          mt-[-96px]
          w-full
          h-screen
           mx-auto
           text-center
           flex flex-col
           justify-center"
      >
              <p className="
        uppercase
         text-[#00df9a]
          font-bold
          p-2">
          React + Tailwind FrontEnd project by Art Beckett
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow from Googling!!!
        </h1>
        <div className="">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Develop in:
          </p>

          <Typed
            className="
            md:text-5xl 
            sm:text-4xl 
            text-xl 
            font-bold md:   
            text-[#00df9a]"
            strings={[
              "Python?",
              "HTML?",
              "CSS?",
              "SCSS?",
              "Tailwind?",
              "Java?",
              "Java Script?",
              "TypeScript?",
              "React?",
              "React Native?",
              "Django?",
              "Go Lang?",
              "Dart?",
              "Flutter?",
              "Kotlin?",
              "Swift?",
              "Rust?",
              "Elixir?",
              "Erlang?",
              "Haskell?",
              "Clojure?",
              "Elm?",
              "Fortran?",
              "C?",
              "C++?",
              "C#?",
              "F#?",
              "Visual Basic?",
              "PHP?",
              "Ruby?",
              "Ruby on Rails?",
              "R?",
              "Lua?",
              "Scratch?",
            ]}
            typeSpeed={140}
            backSpeed={100}
            loop
          />
        </div>
        <p
          className="
        md:text-2xl
        text-xl
        font-bold
        text-gray-500
        py-4"
        >
          CRUD!!! = Create, Read, Update, Delete...
        </p>
        <button
          className="
              uppercase
              text-black
               bg-[#00df9a]
               w-[200px]
               rounded-md
               font-bold
               my-6
               mx-auto
               py-3
               hover:text-white"
        >
          find out more
        </button>
      </div>
    </div>
  );
}

export default Hero;
