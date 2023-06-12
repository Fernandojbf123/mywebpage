import React from 'react'
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'


import Footer from '../components/Footer'
import ImgProfile2 from "/aboutme2.png"


const SectionsLayout = () => {


  return (
    <> 
    <main>
        <header className=" px-1 py-6 flex fixed top-0 w-full z-30 md:px-10">  
                <div className="text-xl font-bold text-gray-600 flex items-center drop-shadow-xl md:text-3xl text2 px-4">
                    BELLODEV
                </div>
                <nav className="flex flex-grow justify-end items-center px-1 md:px-10">
                    <ul className=" [&>li]:md:text-xl
                                    flex gap-x-2 [&>li]:bg-yellow-400 [&>li]:rounded-md [&>li]:shadow-md [&>li]:inline-block [&>li]:text-gray-600 [&>li]:font-bold [&>li]:text-m">
                        <li className="hover:bg-yellow-50"><Link to="/" className="px-2 md:px-4">Index</Link></li>
                        <li className="hover:bg-yellow-50"><Link to="/details/aboutme" className="px-2 md:px-4">About me</Link></li>
                        <li className="hover:bg-yellow-50"><Link to="/details/projects" className="px-2 md:px-4">Projects</Link></li>
                    </ul>
                </nav>
        </header>

        <section className="bg-yellow-300 h-screen w-screen overflow-hidden relative text-center">
            
            <header className='z-20 relative py-40'>
                <Outlet />
            </header>
            
        </section>

        <Footer />
     
    </main>

    </>


      
    
  )
}

export default SectionsLayout
