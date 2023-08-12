

const AboutMe = () => {
  return (
    <div className="md:h-full h-auto w-full">

      <div className="md:w-2/5 md:mb-5 flex flex-col justify-center items-center m-auto mb-3 w-4/5">
        <p className='md:text-gray-600 text1 mt-2 text-gray-200'>@bellodev</p>
        <h1 className='md:text-gray-600 text1 md:text-xl mt-2 text-gray-200'>ProJects using React & JavaScript</h1>
        <h2 className='md:text-gray-600 text2 md:text-2xl mt-2 text-gray-200'>Hello and welcome</h2>
      </div>

      <div className="md:w-2/5 flex flex-col justify-center items-center m-auto bg-gray-300 opacity-80 rounded-md w-4/5 pb-5 mb-5">
        <p className='text-justify mt-2 px-5 font-bold'>I'm engineer since 2009 🔧 with great experience in: <span className='text2'>React, JAVASCRIPT, HTML, CSS</span>, looking to build up a career in Front end Development.</p>
      </div>

      <div className="md:w-2/5 flex flex-col justify-center items-center m-auto bg-gray-300 opacity-80 rounded-md w-4/5 pb-5 mb-5">    
          <div className='flex flex-col md:w-3/5 w-full p-5 justify-between'>
            <table className='w-full mx-auto mb-3'>
              <tbody >
                <tr className=''>
                  <td className='text2'>►Strengths:</td>
                  <td></td>
                </tr>
                <tr>
                  <td className='text1'>→ Commited</td>
                  <td className='text1'>→ Entusiastic</td>
                </tr>
                <tr>
                  <td className='text1'>→ Organized</td>
                  <td className='text1'>→ Researcher</td>
                </tr>
                <tr>
                  <td className='text1'>→ Problem Solver</td>
                  <td className='text1'>→ Team player</td>
                </tr>
              </tbody>
            </table>

          <table className='w-full mx-auto'>
            <tbody >
              <tr className=''>
                <td className='text2'>►Work style:</td>
                <td></td>
              </tr>
              <tr>
                <td className='text1'>→ Flexible according to task and team members.</td>
              </tr>
            </tbody>
          </table>
        </div>


      </div>
       
    </div>
    
  )
}


export default AboutMe

