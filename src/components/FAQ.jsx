import ImgRA from "/right-arrow.png"
import ImgLA from "/left-arrow.png"
import { useEffect, useState } from "react"


const FAQ = () => {

    let Q = [];
    let A = [];

    Q[0]="How many years of experience as Front end Dev do I have?"
    Q[1]="Are you willing to learn new techs?"
    Q[2]="Are you willing to relocate and do on site work"

    A[0]="I have 3 years of experience as Frontend developer coding in JavaScript and using React, NextJS, Remix Run, Vite, TailwindCSS, Strapi & more. I've been coding since my childhood using several coding lenguages such as Turbo Pascal, C++, php, Fortran, Matlab."
    A[1]="I'm always learning since coding languages and frameworks are constantly evolving. Since you started reading this answer probably a new update was released"
    A[2]="Yes. My family and I are ready to move as needed."

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
