import React from 'react'

const LandingSection = () => {
  return (
    <>
      
    
        <section className='bg-black h-screen overflow-hidden text-center relative' data-header-color="white">
          <div className='flex flex-col h-full z-30 relative'>
              <header className="pt-40">
                <h2 className='text-white text-3xl text-[40px] font-bold'>Vive la experiencia Tesla</h2>
                <p className='text-white text1'>Agenda una demostración de manejo hoy</p>
              </header>
              
              <footer className='flex flex-grow w-full justify-center pb-20 items-end'>
                <a className='px-8 py-1 border-[3px] rounded-md border-white text1 text-white bg-white/5 backdrop-blur-md hover:bg-white hover:text-black' href="#">Demostración de manejo</a>
              </footer>
          </div>


          <div className="absolute top-0 bottom-0 z-10 h-full w-full">
            <video 
                className="object-center object-cover h-full w-screen"
                autoPlay muted loop src="./teslafiles/video.webm"/>
          </div>
        </section>

        
    </>
  )
}

export default LandingSection
