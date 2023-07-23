import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const SectionsLayout = () => {

  return (

        <div className='w-screen md:h-screen h-auto flex flex-col justify-between'>
            
            <header className="px-1 py-6 flex w-full fixed top-0 z-30 md:px-10">  
                    <div className="md:text-[2rem] text-[1rem] font-bold text-gray-600 flex items-center drop-shadow-xl text2 px-4 md:text-3xl">
                        BELLODEV
                    </div>
                    <nav className="flex flex-grow justify-center items-center px-1 md:px-10 md:justify-end">
                        <ul className=" [&>li]:md:text-xl
                                        flex gap-x-2 [&>li]:bg-yellow-400 [&>li]:rounded-md [&>li]:shadow-md [&>li]:text-gray-600 [&>li]:font-bold [&>li]:text-[0.7rem]">
                            <li className="hover:bg-yellow-50"><Link to="/" className="px-2 md:px-4">Index</Link></li>
                            <li className="hover:bg-yellow-50"><Link to="/details/aboutme" className="px-2 md:px-4">About me</Link></li>
                            <li className="hover:bg-yellow-50"><Link to="/details/projects" className="px-2 md:px-4">Projects</Link></li>
                        </ul>
                    </nav>
            </header>

            <section className="bglayout md:overflow-y-scroll md:pt-[150px] md:pb-20 pt-20 h-full">
                    <Outlet />
            </section>

            <section className='flex'>
                <Footer />     
            </section>
            

            
        </div>


  )
}
export default SectionsLayout

