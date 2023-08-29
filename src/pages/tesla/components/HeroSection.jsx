import React from 'react'

const HeroSection = ({ModelName, imgFile}) => {
  return (
    <>
        <section className='bg-black h-screen overflow-hidden text-center relative'>
            <div className='flex flex-col h-full z-30 relative'>
                <header className="pt-40">
                <h2 className='text-gray-800 text-3xl text-[40px] font-bold'>{ModelName}</h2>
                <a href="#" className='text-gray-800 underline'>Agenda una demostración de manejo</a>
                </header>
                
                <footer className='flex flex-col flex-grow w-full items-center justify-end pb-10 gap-5'>
                    <div className='flex gap-5'>
                        <a 
                            className='px-14 py-2 rounded-md text1 text-gray-700 bg-gray-200 hover:bg-gray-600 hover:text-white' 
                            href="#"
                            >Explora el inventario</a>
                        <a 
                            className='px-14 py-2 rounded-md text1 text-white bg-gray-900/60 hover:bg-white hover:text-black' 
                            href="#"
                            >Orden personalizada</a>
                    </div>

                    <p className="text-gray-700 text-xs">3 meses de supercarga gratis si recibes tu vehículo de inventario nuevo antes del 30 de junio</p>
                </footer>
            </div>

            <div className="absolute top-0 bottom-0 z-10 h-full">
                <img 
                    className="object-center object-cover h-full w-screen"
                    src={`./teslafiles/${imgFile}`}/>
            </div>
        </section>

        

        
    </>
  )
}

export default HeroSection
