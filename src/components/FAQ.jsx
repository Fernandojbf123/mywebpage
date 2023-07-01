import ImgRA from "/right-arrow.png"
import ImgLA from "/left-arrow.png"
import { useEffect, useState } from "react"


const FAQ = () => {

    let Q = [];
    let A = [];

    Q[0]="How many years of experience as Front end Dev do I have?"
    Q[1]="Are you willing to learn new techs?"
    Q[2]="Are you willing to relocate and do on site work"
    Q[3]="What can you tell me about your jobs?"

    A[0]="I have 2 years of experience as Frontend developer but I've been coding since my childhood using several coding lenguages such as Turbo Pascal, C++, php, Fortran, Matlab. Now I'm coding in JavaScript and I use Frameworks such as React, NextJS, TailwindCSS, and many more."
    A[1]="I'm always learning since coding languages and frameworks are constantly evolving. Since you started reading this answer probably a new update was released"
    A[2]="Yes. My family and I are ready to move as needed."
    A[3]="I've worked in several projects mainly for engineernig and science. I've coded big projects for Research Centers in Mexico. I coded an App to detect eddies in the Gulf of Mexico using NASA's and ESA's (European Aerospace Agency) Satellital data. I also coded an App to detect eddies, shipwrecks or Sargazum using High frecuency radars data in the Gulf of Mexico coast. Since 2021 I decided to become a Frontend developer I've been working as freelancer making web applications and web pages. I've built several Apps and you can view some of them in the projects section. I'm sure you will find pretty interesting stuff."

    const [question, setQuestion] = useState(Q[0]);
    const [answer, setAnswer] = useState(A[0]);
    let [idx, setIdx] = useState(0);
    
  

  useEffect ( () => {
    
    const interval = setInterval ( () => {
        setQuestion(Q[idx])
        setAnswer(A[idx])
        
        if (idx >= Q.length-1){
            setIdx(0);
        }
        else {
            setIdx(idx+1);
        }
    },10000)
    
    return () => clearInterval(interval)

  },[idx])

  function changeManualLeft () {
    let idxtmp = idx;
    idxtmp = idxtmp-1;
    if (idxtmp < 1){
        setIdx(Q.length-1);
    }
    else {
        setIdx(idxtmp)
    }
    setQuestion(Q[idx])
    setAnswer(A[idx]) 
  }

  function changeManualRight () {
    let idxtmp = idx;
    idxtmp = idxtmp+1;
    
    if (idxtmp > Q.length-1 ){
        setIdx(0);
    }
    else {
        setIdx(idxtmp)
    }
    setQuestion(Q[idx])
    setAnswer(A[idx]) 
  }

  return (
    <div className="my-20 w-full" id="faq">
        <div className="mb-10">
            <h1 className="p-2 w-5/6 m-auto bg-yellow-300 rounded-xl text-center text1 text-2xl
                           md:p-5 md:w-1/4 md:m-auto md:text-center md:text-2xl"
                           >FRECUENTLY ASKED QUESTIONS</h1>
        </div>
        <div className="h-72 w-full m-auto flex flex-row justify-center items-center 
                         md:w-3/5">
                <div className="w-1/5">
                    <img className="cursor-pointer m-auto" src={ImgLA} alt="left-arrow" onClick={changeManualLeft}/>
                </div>
                <div className="changer-cointarner-text md:w-3/4 w-full">
                    <h1 className="text1 md:text-3xl text-xl text-gray-600">{question}</h1>
                    <p className="text1 md:text-2xl text-sm text-gray-600 text-justify">{answer}</p>
                </div>
                <div className="w-1/5">
                    <img className="cursor-pointer m-auto" src={ImgRA} alt="right-arrow" onClick={changeManualRight}/>
                </div>
        </div>
    </div>
  )
}

export default FAQ
