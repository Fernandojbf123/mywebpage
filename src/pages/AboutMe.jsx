import React from 'react'
import { Link } from 'react-router-dom'

const AboutMe = () => {
  return (
    <div className="md:h-screen h-auto w-full">

      <div className="md:w-2/5 md:mb-5 flex flex-col justify-center items-center m-auto mb-3 w-4/5">
        <p className='md:text-gray-600 text1 mt-2 text-gray-200'>@bellodev</p>
        <h1 className='md:text-gray-600 text1 md:text-xl mt-2 text-gray-200'>Proyects using React & JavaScript</h1>
        <h2 className='md:text-gray-600 text2 md:text-2xl mt-2 text-gray-200'>Hello and welcome</h2>
      </div>

      <div className="md:w-2/5 flex flex-col justify-center items-center m-auto bg-gray-300 opacity-80 rounded-md w-4/5 pb-5 mb-10">
        <p className='text-justify mt-2 px-5 font-bold'>I'm an engineer since 2009. I've got a master in applied geophysics and also a MBA. I've been a coder most part of my life. I've coded in C++, Fortran, Matlab, Visual Basic, and more. Right now I'm coding in <span className='text1 text-md text-black'>JAVASCRIPT, HTML, CSS, and my Fav libraries are React, NextJS, TailwindCSS</span>. I focus mainly on GOOD CODING (good practices) and reusable components. I comment my functions very carefully as well as my code and since I learned coding in the "old school" I'm very used to make diagrams flows and algorithm before starting to write any code.</p>
      </div>

      <div className="md:w-2/5 flex flex-col justify-center items-center m-auto bg-gray-300 opacity-80 rounded-md w-4/5 pb-5 mb-10">
        <p className='text-justify mt-2 px-5 font-bold'>Now a days I have two jobs: <span className='text1 text-md text-black'>Freelance Frontend Developer</span> and <span className='text2 text-md text-black'>Chief Operating Oficer</span> (COO) of <Link className="text-blue-800 text1 underline" to="https://fundacioncastrolimon.org/quienes-somos/">"Fundacion Castro Limon"</Link> which is the most important ONG against childhood cancer in Mexico. As COO of this ONG I'm in charge of +30 people who make fundrasings to pay the full treatment of 74 children who are fighting cancer (last update june 2023)</p>
      </div>

      <div className="md:w-2/5 flex flex-col justify-center items-center m-auto bg-gray-300 opacity-80 rounded-md w-4/5 pb-5 mb-10">
        <p className='text-justify mt-2 px-5 font-bold'>Now, you must be asking Why am I looking for a job as Frontend dev?</p>
        <p className='text-justify mt-2 px-5 font-bold'>Well, it is because I'm an engineer, I love my carrear and <span className='text1 text-md text-black'>I LOVE CODING</span><img  className="h-10 inline mix-blend-color-burn" src="https://cdn-media-1.freecodecamp.org/images/1*lsB5T7aKYZHpcKBxq6gMog.gif" alt="" /> </p>
        <p className='text-justify mt-2 px-5 font-bold'>But also... Working in the ONG is one of the most rewarding things you could imagine, but also it is emotionally exhausting</p>
      </div>
       
    </div>
    
  )
}


export default AboutMe
