import React from 'react'
import One from '../assets/one.png'
import Two from "../assets/two.png";
import Three from "../assets/three.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-gray-100">
      <div className="max-w-[1240px mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-3 my-4 rounded-lg hover:scale-110 duration-300">
          <img
            src={One}
            alt="profile with one avatar"
            className="w-20 mx-auto mt-[-3rem]"
          />
          <h2 className="text-2xl font-bold text center py-8 text-center ">
            Contact me
          </h2>
          <p className="text-center text-4xl font-bold py-4">
            I'm a Front End Developer
          </p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 m-8">
              worked on many projects personally
            </p>
            <p className="py-2 border-b mx-8"> worked on a team for clients</p>
            <p className="py-2 border-b mx-8">
              Looking for my next big challenge
            </p>
          </div>
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
            contact me
          </button>
        </div>

        <div className="w-full shadow-xl flex flex-col p-3 my-4 rounded-lg hover:scale-110 duration-300">
          <img
            src={Two}
            alt="profile with one avatar"
            className="w-20 mx-auto mt-[-3rem]"
          />
          <h2 className="text-2xl font-bold text center py-8 text-center ">
            Contact us
          </h2>
          <p className="text-center text-4xl font-bold py-4">
            Front & Back End Developers
          </p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 m-8">
              {" "}
              worked on many projects together
            </p>
            <p className="py-2 border-b mx-8"> worked for clients</p>
            <p className="py-2 border-b mx-8">
              {" "}
              Looking for our next big challenge
            </p>
          </div>
          <button
            className="
              uppercase
              text-[#00df9a]
               bg-black
               w-[200px]
               rounded-md
               font-bold
               my-6
               mx-auto
               py-3
               hover:text-white"
          >
            contact us
          </button>
        </div>

        <div className=" w-full shadow-xl flex flex-col p-3 my-4 rounded-lg hover:scale-110 duration-300">
          <img
            src={Three}
            alt="profile with one avatar"
            className="w-20 mx-auto mt-[-3rem]"
          />
          <h2 className="text-2xl font-bold text center py-8 text-center ">
            Contact all of us
          </h2>
          <p className="text-center text-4xl font-bold py-4">
            We are Software Engineers
          </p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 m-8">worked on many projects</p>
            <p className="py-2 border-b mx-8">
              {" "}
              work for clients with challenging needs
            </p>
            <p className="py-2 border-b mx-8">
              Looking for our next big challenge
            </p>
          </div>
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
            contact all of us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards