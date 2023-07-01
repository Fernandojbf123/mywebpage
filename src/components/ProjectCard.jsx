import React from 'react'
import { useState } from "react"
import { Link } from 'react-router-dom'

import ProjectsModal from "./ProjectsModal"


import { projectName, techs, details, linktodemo, imgs } from "../data/ProjectsInfo.js"


const ProjectCard = () => {

    const [galModal, setGalModal] = useState(false);
    const [src, setSrc]  = useState('');
    const [info, setInfo] = useState([]);
    
    const handleEnlarge = (e,idx) => {
        setSrc(`/p${idx}/`)     
        setGalModal(true)
        setInfo({
            "projectName": projectName[idx],
            "techs":techs[idx], 
            "details":details[idx],
            "linktodemo": linktodemo[idx],
        })
        
    }
    

  return (
    <div id="projects"
        className="md:w-3/5 flex flex-col w-full items-center m-auto" >
        <div className="w-full flex flex-col justify-center items-center text-center
                        md:w-full md:flex md:flex-col md:justify-center md:align-middle">    
            <h2 className="p-2 w-5/6 bg-yellow-300 rounded-xl text1 text-2xl
                        md:p-5 md:w-1/4"
                        >PROJECTS
            </h2>
 
        </div>
        
        <div className="mt-10 w-full flex flex-col gap-5
                        md:flex-row flex-wrap md:justify-evenly">
            {imgs.map( ( iimg, idx ) => (
                <div key={idx} className="flex items-center justify-center">
                                
                    <img 
                        className="img-project cursor-pointer" 
                        src={iimg} 
                        alt={iimg} 
                        onClick={ (e) => {handleEnlarge(e,idx)}}/>

                    <p className="absolute text1 text-white">Click me for details</p>
                        
                </div>
            ))}
        </div>

        <div className="w-full flex flex-col justify-center items-center mt-10">
            <p className="text1">Want to know more?</p>
            <Link 
              className="md:w-1/5 w-3/5 mt-2 rounded-xl bg-yellow-300 text-center text1 hover:bg-yellow-500 "
              to="/details/projects"
              >Click here
            </Link>
        </div>

        {galModal ? 
        <ProjectsModal 
            src={src}
            galModal   = {galModal}
            setGalModal={setGalModal}
            info={info}
        /> : ''}
    </div>
  )
}

export default ProjectCard
