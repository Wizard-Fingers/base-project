# Getting Started!

1) open terminal and start by typing: "npx create-react-app@latest base-project"

NB - @latest is optional however I do it when I start a new project

2) I installed yarn you can use npm if you wish I like yarn and will show you  how to do both throughout the set up

yarn: " yarn add"
npm: "npm install" 

3) I used Tailwind because it gives you, as the developer highly customizable CSS done faster and it has dead-code-elimination built in so you don't have a huge CSS file when you go to production. 
- As a side note I use it because naming components is hard in CSS and it might not matter when you make simple apps but as it gets bigger you spend more time thinking of names rather then developing cutting into your time as a developer.
- Another sine note I used a VS code extension called "Tailwind CSS IntelliSense" that I would strongly sagest you do the some.

4) clean up your src folder by removing everything except: 
App.js
index.css
index.js
and replacing everything in the index.js file with:

-------------------------------------------------------------------

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

-------------------------------------------------------------------

5) replace everything in the App.js file with:
   
-------------------------------------------------------------------

import React from "react";

function App() {
  return (
    <div >

    </div>
  );
}

export default App;


-------------------------------------------------------------------

- if you run:

npm: "npm start"

or

yarn: "yarn run start"

you should have a blank screen, then in your node terminal press ctrl+c (for windows) command+c (for mac) to stop the server and follow step 6

6) install tailwind as follows: 
https://tailwindcss.com/docs/guides/create-react-app

yarn:

"yarn add -D tailwindcss postcss autoprefixer"
"npx tailwindcss init -p"

npm:

"npm install -D tailwindcss postcss autoprefixer"
and then:
"npx tailwindcss init -p"

- Once you have followed the above go into your tailwind.config.js file and add this below:

-------------------------------------------------------------------

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

-------------------------------------------------------------------

- Once that is done go into the index.css file and replace everything with this:

-------------------------------------------------------------------

@tailwind base;
@tailwind components;
@tailwind utilities;

-------------------------------------------------------------------

- NB I added one line of CSS here in the index.css file, however you don't have to I just changed the background color to something else as I'm a bit color blind and it helps me to layout components better

-------------------------------------------------------------------

<!-- its an off black color I like -->
body { background-color: #000300; }

-------------------------------------------------------------------

# The project:

# 1) the Navbar

1) I created a folder in the src folder called components 

2) I created a file called: Navbar.jsx.
- NB I used JSX because its syntactically similar to HTML, however you can use Navbar.js if you wish I just prefer it

3) after you created the Navbar.jsx I did the following: 
-in the App.js file:

-------------------------------------------------------------------

import React from "react";
import NavBar from "./components/Navbar.jsx";

function App() {
  return (
    <div >
<NavBar/>
    </div>
  );
}

export default App;

-------------------------------------------------------------------

and in the Navbar.jsx I did the following:

-------------------------------------------------------------------

import React from "react";

function NavBar() {
  return (
    <div className="flex justify-between items-center h-23 text-white px-3.5 max-w-[1240px]">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">
        #react-starter-project
      </h1>
      <ul className="flex">
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
        <li className="p-4">Blog</li>
      </ul>
    </div>
  );
}

export default NavBar;

-------------------------------------------------------------------

# 2) the Navbar icons and side bar

- I'm using React Icons from: https://www.npmjs.com/package/react-icons

I installed them in the following way:
yarn: "yarn add react-icons --save"
or
npm: "npm install react-icons --save"

from here there is a convention you need to follow to use icons in your project

at the top of your project add this

import { the name of the Icon } from 'react-icons/fa';

-you can chain the icons you want to use in the {} if they follow the same naming convention but I personally import them individually as you will see in the project

- NB I have already chosen the ones I want to use and you can mix and match the ones you personally want to use

my Navbar.jsx:

-------------------------------------------------------------------

import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu} from "react-icons/ai";

function NavBar() {
  return (
    <div className="flex justify-between items-center h-23 text-white px-3.5 max-w-[1240px]">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">
        #react-starter-project
      </h1>
      <ul className="flex hidden">
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
        <li className="p-4">Blog</li>
      </ul>
      <div>
        <AiOutlineMenu size={30} />
      </div>
      <div className="fixed left-0 top-0 w-[60%] h-full border-r border-r-white-900 bg-[#000300]">
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">
          #react-starter-project
        </h1>
        <ul className=" uppercase p-4">
          <li className="p-4 border-b">Home</li>
          <li className="p-4 border-b">About</li>
          <li className="p-4 border-b">Contact</li>
          <li className="p-4">Blog</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;

-------------------------------------------------------------------
# 2) adding useState to get the functionality working

- in this I used the useState functionality and used the other icon to create an onClick event which is easier in simple JSX because :
- { you can write regular JS between this}

- NB if your are not using JSX I sagest you look into the React here: https://reactjs.org/docs/faq-state.html#should-i-use-a-state-management-library-like-redux-or-mobx

- I also created an ease-in-ease-out effect in Tailwind and set the mobile view to be hidden at a tablet screen size

-------------------------------------------------------------------

//functionality for the navbar
import React, { useState } from "react";
// icons
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]"> #react-starter</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
        <li className="p-4">Blog</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4"> #react-starter</h1>
        <li className="p-4 border-b border-gray-600">Home</li>
        <li className="p-4 border-b border-gray-600">About</li>
        <li className="p-4 border-b border-gray-600">Contact</li>
        <li className="p-4 border-b border-gray-600">Blog</li>
        <li className="p-4">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;

-------------------------------------------------------------------
# 3) Creating the Hero Component with an imported library from NPM

- create a Hero.jsx file in the components directory and import it in the App.js file

-------------------------------------------------------------------

import React from "react";
import Hero from "./components/Hero.jsx";
import NavBar from "./components/Navbar.jsx";

function App() {
  return (
    <div >
      <NavBar />
      <Hero/>
    </div>
  );
}

export default App;


-------------------------------------------------------------------

- I then created the Hero Component:

-------------------------------------------------------------------

import React from 'react'

function Hero() {
  return (
    <div className="text-white">
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
        <p className="uppercase text-[#00df9a] font-bold p-2">
          Learn React + Tailwind
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Grow from Googling</h1>
        <div>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold'>fast, custom, front end development</p>
        </div>
      </div>
    </div>
  );
}

export default Hero

-------------------------------------------------------------------

- I then got a package from: https://www.npmjs.com/package/react-typed

yarn: "yarn add react-typed"
or
npm: "npm install react-typed --save"

- then put: "import Typed from 'react-typed';" at the top of your Hero Component  

from reading about the library I used the <Typed/> component and used the  "typeSpeed" property (meaning the speed it takes to display it forwards) and set it ={140} 

then I set the "back-speed" property to ={100}

then set it to loop with the loop property

- mess around with this and make it display at the speeds you want them to display at I also listed a few programming languages for fun but it was probably overkill :)

I then created a button with a hover effect

-------------------------------------------------------------------

import React from "react";
import Typed from "react-typed";

function Hero() {
  return (
    <div className="text-white">
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
        <p className="uppercase text-[#00df9a] font-bold p-2">
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
            className="md:text-5xl sm:text-4xl text-xl font-bold md:   text-[#00df9a]"
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
        <p className="md:text-2xl text-xl font-bold text-gray-500 py-4">
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

-------------------------------------------------------------------
# 4)  Analytics page

- I thought about creating a router and link the pages in the nav bar component and that is something you can 100% do and I would recommend using this: https://www.techomoro.com/how-to-create-a-multi-page-website-with-react-in-5-minutes/ or: https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/ However, I thought I should keep it simple and create everything on one page and you could add these in if you want later or do it instead of what I'm doing demonstrating in this readme.

first create another JSX file in the components folder(I called it Analytics you can call it whatever you want) and link it to the App.js file

-------------------------------------------------------------------

import React from "react";
import Analytics from "./components/Analytics.jsx";
import Hero from "./components/Hero.jsx";
import NavBar from "./components/Navbar.jsx";

function App() {
  return (
    <div >
      <NavBar />
      <Hero />
      <Analytics/>
    </div>
  );
}

export default App;

-------------------------------------------------------------------

I created an assets folder and in that folder I placed an image for my Analytics.js file
afterwards I linked it to the Analytics.js file and displayed the image - I thought about showing you how to do global styles like I did with the button in the previous component but I thought  I would leave that for another project.


-------------------------------------------------------------------

import React from "react";
import design from "../assets/design.png";
// how to import an image from a folder: ../ = go out of folder /= and into assets folder and then the name + .png (or filetype of your choice depending on the image you chose)
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
          className="rounded-lg w-[500px] mx-auto my-4"
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

-------------------------------------------------------------------
# 5) News-letter component 
- at this point you might have notices how little CSS we are developing in other than the index.css file this is what makes Tailwind so great it really is CSS on training wheels

I created a news letter component and linked it to the App.js file like we have been doing before

- This is going to be a small component and I want it to display the full length of the screen so this will be a quick one

-------------------------------------------------------------------
import React from "react";
import Analytics from "./components/Analytics.jsx";
import Hero from "./components/Hero.jsx";
import NavBar from "./components/Navbar.jsx";
import Newsletter from "./components/Newsletter.jsx";

function App() {
  return (
    <div >
      <NavBar />
      <Hero />
      <Analytics />
      <Newsletter/>
    </div>
  );
}

export default App;

-------------------------------------------------------------------

import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks?
          </h1>
          <p>Sign up to my newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 hover:text-white uppercase">
              Notify Me
            </button>
          </div>
          <p>
            We care bout the protection of your data. Read our{" "}
            <span className="text-[#00df9a] hover:cursor-pointer ">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

-------------------------------------------------------------------
# 6) Cards
- in this section we will create cards with a box-shadow and hover effects I thought about creating cards as a stand alone component and using them way and passing properties but I thought about it and felt that this would be more beginner friendly and you can look into the docs and do that yourself if you want here: https://reactjs.org/docs/faq-functions.html

-------------------------------------------------------------------

import React from 'react'
import One from '../assets/one.png'
import Two from "../assets/two.png";
import Three from "../assets/three.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-gray-100">
      <div className="max-w-[1240px mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-300">
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

        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-300">
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

        <div className=" w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-300">
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

-------------------------------------------------------------------

# 7) Footer

- I followed facebook's footer kinda with a bit of mix and match from others but this is the layout I chose

I imported icons from react icons and showed you best practice for how to import them - I also added a hover effect on the background which I kinda regret probably sagest but left it in

-------------------------------------------------------------------

import React from "react";
import Analytics from "./components/Analytics.jsx";
import Cards from "./components/Cards.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import NavBar from "./components/Navbar.jsx";
import Newsletter from "./components/Newsletter.jsx";

function App() {
  return (
    <div >
      <NavBar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer/>
    </div>
  );
}

export default App;

-------------------------------------------------------------------

import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">
          #React-starter
        </h1>
        <p className="py-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
          ullam iste repellat consequatur libero reiciendis, blanditiis
          accusantium.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} className="hover:bg-[#00df9a] hover:cursor-pointer" />
          <FaInstagram size={30} className="hover:bg-[#00df9a] hover:cursor-pointer"/>
          <FaTwitterSquare size={30} className="hover:bg-[#00df9a] hover:cursor-pointer"/>
          <FaGithubSquare size={30} className="hover:bg-[#00df9a] hover:cursor-pointer"/>
          <FaDribbbleSquare size={30} className="hover:bg-[#00df9a] hover:cursor-pointer"/>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">How we operate</h6>
          <ul>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

-------------------------------------------------------------------

# Thoughts:

This is just a starter project that shows you how I would layout a single page but added in some areas you can work on from here I would sagest you create React Routing and maybe display the pages through a click event on the navbar and rewrite the card components and use them as props all of which I recommended along the way through the readme.

I hope you learned enough to see how easy React can be as well as Tailwind and combined make a great page.