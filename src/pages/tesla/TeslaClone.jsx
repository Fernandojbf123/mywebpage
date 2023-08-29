import React from 'react'
import { useState, useEffect, useRef } from "react"

import LandingSection from './components/LandingSection'
import HeroSection from './components/HeroSection'
import HeroSectionOthers from './components/HeroSectionOthers'

const TeslaClone = () => {

  const [isInView, setIsInView] = useState(false);

  const landingElement = useRef(null)
  const heroElementOne = useRef(null)
  const heroElementTwo = useRef(null)
  const heroElementThree = useRef(null)
  const heroElementFour = useRef(null)
  const heroElementFive = useRef(null)
  const heroElementSix = useRef(null)

  useEffect ( () => {

      const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: "1",
      }

      const observer = new IntersectionObserver(onIntersection,observerOptions)
      observer.observe(landingElement.current)
      observer.observe(heroElementOne.current)
      observer.observe(heroElementTwo.current)
      observer.observe(heroElementThree.current)
      observer.observe(heroElementFour.current)
      observer.observe(heroElementFive.current)
      observer.observe(heroElementSix.current)
      
      //NOTA SOLO FUNCIONARA CON USE REFF DE CADA ELEMENTO A OBSERVAR
      
  })
  
  function onIntersection (entry) {
    
    const headerColor = entry[0].target.getAttribute("header-color")
    const $liElements = Array.from(document.querySelectorAll("#htext"))
    const $path = document.getElementById("svg")

    $path.setAttribute("fill",headerColor)
    $liElements.forEach( liElement => liElement.style.color=headerColor)
    
  }

  return (
    <>
      
    <header id="landing-header" className='flex items-center justify-between fixed top-0 md:w-full md:px-10 md:py-4 z-40'>
      <div className='flex items-center flex-grow basis-0'>
        <svg 
          className="h-6 w-28" 
          viewBox="0 0 342 35" 
          xmlns="http://www.w3.org/2000/svg"
          ><path id="svg" d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" 
          fill="white"></path></svg>
      </div>

      <nav>
        <ul className='flex text-sm [&>li]:px-3 [&>li]:py-1 [&>li]:text-center text3 [&>li>a]:text-xm'>
          <li id="htext" className="hover:bg-gray-500/10"><a href="#landing">Model S</a></li>
          <li id="htext" className="hover:bg-gray-500/10"><a href="#model3">Model 3</a></li>
          <li id="htext" className="hover:bg-gray-500/10"><a href="#modelX">Model X</a></li>
          <li id="htext" className="hover:bg-gray-500/10"><a href="#modelY">Model Y</a></li>
          <li id="htext" className="hover:bg-gray-500/10"><a href="#">Cybertruck</a></li>
          <li id="htext" className="hover:bg-white/5 backdrop-blur-sm"><a href="#Powerwall">Powerwall</a></li>
        </ul>
      </nav>

      <nav className='flex flex-grow basis-0 justify-end'>
        <ul className='flex text-sm [&>li]:px-3 [&>li]:py-1 [&>li]:text-center text3 [&>li>a]:text-xm'>
          <li id="htext" className="hover:bg-gray-500/10"><a href="#">Tienda</a></li>
          <li id="htext" className="hover:bg-gray-500/10"><a href="#">Cuenta</a></li>
          <li id="htext" className="hover:bg-gray-500/10"><a href="#">Menú</a></li>
        </ul>
      </nav>
    </header>

    <main className="snap-y snap-mandatory relative w-full h-screen overflow-auto">
      <div id="landing" className="snap-center overflow-hidden" header-color="white" ref={landingElement}>
        <LandingSection />
      </div>

      <div id="model3" className="snap-center" header-color="black" ref={heroElementOne}>
        <HeroSection 
          ModelName={"Model 3"}
          imgFile={"model3.avif"}
        />
      </div>

      <div id="modelY" className="snap-center" header-color="black" ref={heroElementTwo}>
        <HeroSection 
          ModelName={"Model Y"}
          imgFile={"modely.avif"}
        />
      </div>

      <div id="modelS" className="snap-center" header-color="black" ref={heroElementThree}>
        <HeroSection 
          ModelName={"Model S"}
          imgFile={"models.avif"}
        />
      </div>

      <div id="modelX" className="snap-center" header-color="black" ref={heroElementFour}>
        <HeroSection 
          ModelName={"Model X"}
          imgFile={"modelx.avif"}
        />
      </div>

      <div id="Powerwall" className="snap-center" header-color="white" ref={heroElementFive}>
        <HeroSectionOthers 
          ModelName={"Energía solar y Powerwall"}
          parraf={"Totalmente eléctrico"}
          hyperlinkText={"Más información"}
          imgFile={"powerwall.avif"}
        />
      </div>

      <div id="Accesesories" className="snap-center" header-color="black" ref={heroElementSix}>
        <HeroSectionOthers 
          ModelName={"Accesorios"}
          parraf={""}
          hyperlinkText={"Compra ahora"}
          imgFile={"accesorios.avif"}
          parraFooter={true}
        />
      </div>

    
    </main>
    
    
    


    </>
    
    
  )
}

export default TeslaClone
