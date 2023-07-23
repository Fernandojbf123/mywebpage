import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
  
  const [bounce, setBounse] = useState(true)

  useEffect ( () => {
    setTimeout( () =>{
      setBounse(false)
    },1350)
  },[]) 
  
  return (
    
    <div className='w-full min-h-screen h-auto flex flex-col items-center text-center md:gap-3 gap-2'>
        <div className="md:w-2/6 md:[&>p]:text-gray-600 [&>p]:text-gray-200">
          <p className=' text1 mt-2'>@bellodev</p>
          <h1 className='md:text-gray-600 text1 md:text-xl mt-2 text-gray-200'>Proyects using React & JavaScript</h1>
          <h2 className='md:text-gray-600 text2 md:text-2xl mt-2 text-gray-200'>Hello and welcome</h2>
          <p className='text-justify mt-2 px-5 font-bold'>Here you will find links to all the projects I've made as frontend developer. I hope you enjoy some of them :)</p>
        </div>

        <div>GAMES</div>

        <div className="md:w-2/6 mt-2 w-4/5">
          <Link 
            to="/wackamole">
              <p className={`text1 w-full h-10 bg-blue-500 text-2xl flex justify-center items-center rounded-md hover:bg-yellow-100 transition-colors ease-in-out ${bounce && "animate-bounce"}`}
                >WACK-A-MOLE
              </p>
            </Link>
        </div>

        <div className="md:w-2/6 w-4/5">
          <Link to="/memorama">
            <p className='text1 w-full h-10 bg-blue-400 text-2xl flex justify-center items-center rounded-md hover:bg-yellow-100 transition-colors ease-in-out '
              >Memorama game
            </p>
          </Link>
        </div>


        <div className="md:w-2/6 w-4/5">
          <Link to="/drumkit">
            <p className='text1 w-full h-10 bg-cyan-500 text-2xl flex justify-center items-center rounded-md hover:bg-yellow-100 transition-colors ease-in-out'
              >Drum Kit
            </p>
          </Link>

        </div>

        <div>APPS</div>

        <div className="md:w-2/6 w-4/5">
          <Link to="/fitness">
            <p className='text1 w-full h-10 bg-green-400 text-2xl flex justify-center items-center rounded-md hover:bg-yellow-100 transition-colors ease-in-out'
              >Fitness App
            </p>
          </Link>
        </div>

        <div className="md:w-2/6 w-4/5">
          <Link to="/crypto-quoter">
            <p className='text1 w-full h-10 bg-green-400 text-2xl flex justify-center items-center rounded-md hover:bg-yellow-100 transition-colors ease-in-out'
              >Cryto Quoter
            </p>
          </Link>
        </div>

        <div className="md:w-2/6 w-4/5">
          <Link to="/budget">
            <p className='text1 w-full h-10 bg-green-300 text-2xl flex justify-center items-center rounded-md hover:bg-yellow-100 transition-colors ease-in-out'
              >Budget App
            </p>
          </Link>
        </div>

        

        <div>
          WEB DESIGN
        </div>

        <div className="md:w-2/6 w-4/5">
          <Link to="/tesla">
            <p className='text1 w-full h-10 bg-orange-500 text-2xl flex justify-center items-center rounded-md hover:bg-yellow-100 transition-colors ease-in-out'
              >Tesla Web clone
            </p>
          </Link>
        </div>

        <div className="md:w-2/6 w-4/5">
          <Link to="/tesla">
            <p className='text1 w-full h-10 bg-orange-500 text-2xl flex justify-center items-center rounded-md hover:bg-yellow-100 transition-colors ease-in-out'
              >Web Design
            </p>
          </Link>
        </div>

        <div>
          Interviews request
        </div>

        <div className="md:w-2/6 w-4/5">
          <Link to="/randomdatafromapi">
            <p className='text1 w-full h-10 bg-orange-500 text-2xl flex justify-center items-center rounded-md hover:bg-yellow-100 transition-colors ease-in-out'
              >Random Data from API
            </p>
          </Link>
        </div>


       


        
    </div>
  )
}

export default Projects
