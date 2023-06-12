import { useEffect, useState } from "react"

import ImgClose from "/bx-x.svg"
import ImgGmail from "/gmail-logo.png"
import ImgLinked from "/linkedin-logo.png"
import ImgTikTok from "/tiktok-logo.png"
import ImgGit from "/github-logo.svg"

const Modal = ({modal,setModal}) => {
  

  const [show,setShow] = useState(false)

  const handleModal = () => {
    setShow(false)
    setTimeout ( ( ) => {
      setModal(false)
    },500) 

  }

  useEffect ( () => {
    if (modal) {
      setShow(true)
    }
  },[modal])
  
  return (
    <div>
        
        <div className={`modal animenubefore ${show ? 'animenuafter' : ''}`}>

        <img 
          src={ImgClose} 
          alt="close" 
          id="button-close" 
          onClick={handleModal}/>

        <div className="modal-buttons-menu">
            <div className="button-ppl"><a href="#aboutme">About me</a></div>
            <div className="button-ppl"><a href="#faq">FAQ</a></div>
            <div className="button-ppl"><a href="#projects">Projects</a></div>
            <div className="button-ppl"><a href="#education">Education</a></div>
            <div className="button-ppl"><a href="#contact">Contact</a></div>

            <div className="social-media w-full">
                <a href="mailto:fernandojbf123@gmail.com"><img src={ImgGmail} alt="gmail" id="gmail"/></a>
                <a href="https://www.linkedin.com/in/fernando-bello-6b5160250/"><img src={ImgLinked} alt="linkedin" id="linkedin"/></a>
                <a href="https://www.tiktok.com/@soyfernandobello"><img src={ImgTikTok} alt="tiktok" id="tiktok"/></a>
                <a href="https://github.com/Fernandojbf123"><img src={ImgGit} alt="github" id="github"/></a>
            </div>
        </div>
      </div>


    </div>
  )
}




export default Modal
