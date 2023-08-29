

const AboutMe = () => {
  return (
    <div className="md:h-full h-auto w-full">

      <div className="md:w-2/5 md:mb-5 flex flex-col justify-center items-center m-auto mb-3 w-4/5">
        <p className='md:text-gray-600 text1 mt-2 text-gray-200'>@bellodev</p>
        <h1 className='md:text-gray-600 text1 md:text-xl mt-2 text-gray-200'>ProJects using React & JavaScript</h1>
        <h2 className='md:text-gray-600 text2 md:text-2xl mt-2 text-gray-200'>Hello and welcome</h2>
      </div>

      <div className="md:w-2/5 flex flex-col justify-center items-center m-auto bg-gray-300 opacity-80 rounded-md w-4/5 pb-5 mb-5">
        <p className='text-justify mt-2 px-5 font-bold'>I'm working on making a web page that gathers all kind of interviews test that will help other developers to ace their interviews</p>
      </div>
   
     
    </div>
    
  )
}


export default AboutMe

