import React from 'react'

const HeroSectionOthers = ({ModelName, parraf, hyperlinkText, imgFile, parraFooter}) => {
  return (
    <>
        <section 
            className='bg-black h-screen overflow-hidden text-center relative' 
            data-header-color="black">
            <div className='flex flex-col h-full z-30 relative'>
                <header className="pt-40">
                    <h2 className='text-gray-800 text-3xl text-[40px] font-bold'>{ModelName}</h2>
                    <p className='text-gray-800 text3'>{parraf}</p>
                </header>
                
                <footer className='flex flex-col flex-grow w-full items-center justify-end pb-10 gap-5'>
                    <div className='pb-10 flex gap-5'>
                        <a 
                            className='px-14 py-2 rounded-md text1 text-gray-200 bg-gray-800 hover:bg-gray-600 hover:text-white' 
                            href="#"
                            >{hyperlinkText}</a>
                    </div>

                    {parraFooter && 
                        <ul className="-mb-5 flex flex-row gap-5 [&>li>a]:text-xs [&>li>a]:text-gray-500">
                            <li><a className="text1" href="#">Tesla C 2023</a></li>
                            <li><a className="text1" href="#">Privacidad y legal</a></li>
                            <li><a className="text1" href="#">Llamadas a revisión de vehícuos</a></li>
                            <li><a className="text1" href="#">Contacto</a></li>
                            <li><a className="text1" href="#">Noticias</a></li>
                            <li><a className="text1" href="#">Ubicaciones</a></li>
                        </ul> }
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

export default HeroSectionOthers
