import { useEffect, useState } from 'react'
import ImgClose from "/bx-x.svg"
import ProjectGalery from './ProjectGalery';


const ProjectsModal = ({src, galModal, setGalModal, info}) => {

  const [show,setShow] = useState(false)  
  
  const {projectName, techs, details, linktodemo} = info;
    const handleModal = () => {
      setShow(false)
      setTimeout ( () => {
        setGalModal(false)
      },500)
    }

    
    useEffect ( () => {
      if (galModal) {
        setShow(true)
      }
    },[galModal])

  return (

      <div className={`galery-modal anibefore ${show && 'aniafter'}`}>  
        <div className={`md:w-3/5 md:h-4/5 bg-gray-300 
                        w-full h-full overflow-auto`}>

            <div className="md:flex md:flex-col">

              <div className='flex justify-end'>
                <img 
                  className='bg-white p-2 rounded-full w-10 h-10 cursor-pointer fixed'
                  src={ImgClose} 
                  alt="close" 
                  id="" 
                  onClick={handleModal}/>
              </div>
              
              <div className="md:w-full md:h-4/5 mt-5 md:px-10 px-3 
                              w-full h-full">

                <table className='w-full'>
                  <tbody>
                    <tr>
                      <td className="md:w-1/4 text2 md:text-2xl text-xs">Name:{' '}</td>
                      <td className="px-2 md:w-3/4 text1 md:text-1xl text-xs">{projectName}</td>
                    </tr>
                    <tr>
                      <td className="md:w-1/4 text2 md:text-2xl text-xs">Techs:{' '}</td>
                      <td className="px-2 md:w-3/4 text1 md:text-1xl text-xs">{techs}</td>
                    </tr>
                    <tr>
                      <td className="md:w-1/4 text2 md:text-2xl text-xs align-top">Details:{' '}</td>
                      <td className="px-2 md:w-3/4 text1 md:text-1xl text-xs">{details}</td>
                    </tr>
                    <tr>
                      <td className="md:w-1/4 text2 md:text-2xl text-xs align-top">Demo:{' '}</td>
                      <td className="px-2 md:w-3/4 text1 md:text-1xl text-xs">
                        <a href={linktodemo}
                          className='text1 text-2xl hover:text-yellow-600 cursor-pointer'
                          >Watch demo</a> 
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div> 

              <div className='mt-5 w-full flex flex-col justify-center items-center'>
                <ProjectGalery 
                  src={src}/>
              </div>

            </div>  
        </div>
      </div>
  )
}

export default ProjectsModal
