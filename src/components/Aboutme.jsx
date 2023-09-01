import ImgProfile2 from "/aboutme2.png"
import ImgHTML from "/html-logo.svg" 
import ImgCSS from "/CSS-logo.svg" 
import ImgJS from "/javascript-logo.svg" 
import ImgReact from "/react-logo.svg" 
import ImgJira from "/jira-logo.svg" 
import ImgTailwind from "/tailwindcss-logo.svg" 
import ImgGit from "/github-logo.svg" 
import { Link } from "react-router-dom"



const Aboutme = () => {

   
  
  return (
    <div id="aboutme" className="w-full my-10 mx-auto flex flex-col 
                                 md:w-3/5 md:my-20 md:mx-auto">
        <div className="w-full flex flex-col justify-center items-center text-center">
            <h2 className="p-2 w-5/6 bg-yellow-300 rounded-xl text1 text-2xl
                         md:p-5 md:w-1/4"
                         >ABOUT ME
            </h2>
          <h3 className="p-2 m-auto text-3xl   
                        md:p-5 md:text-6xl"
                        >Get to know me
          </h3>
        </div>

        <div className="w-full flex flex-col justify-center items-center gap-5
                                md:flex-row">         
          <div className="w-full md:w-2/6 flex flex-col items-center">
            <img src={ImgProfile2} alt="aboutme" className="imgaboutme"/>
            <div className="flex flex-row">
              <p className="text1 text-2xl w-fit mx-auto md:text-3xl">Hello there!</p>
              <img className="w-10" src="https://em-content.zobj.net/source/animated-noto-color-emoji/356/waving-hand_1f44b.gif" alt="" />
            </div>
          </div>
          <div className="w-full flex flex-col justify-center align-middle md:w-4/6">
            <p className="md:text-4xl text-2xl font-bold text-gray-600 md:text-left text-center">{`I'm`}<span className="text-underline">Fernando Bello</span></p>
            <p className="font-bold text-gray-600 mt-5 md:text-2xl md:w-full px-5 text-justify">an engineer since 2009 🔧 with great experience in <span className="text-underline">REACT</span>, HTML, CSS and JAVASCRIPt with knowledge using context API, custom hooks, API Fetching and focusing on good practices to build reusable components with readable and understandable code.</p>
            <div className="w-full flex flex-col justify-center items-center mt-10">
              <p className="text1 px-5 text-justify">Want to know more about me and what am I doing?</p>
              <Link 
                className="md:w-1/5 w-3/5 mt-2 rounded-xl bg-yellow-300 text-center text1 hover:bg-yellow-500 "
                to="/details/aboutme"
                >Click here
              </Link> 
          </div>
          
          </div>     
        </div>

        <div className="w-full flex flex-col justify-center items-center">
          <h3 className="mt-5 font-bold md:text-3xl text-2xl mb-5">Knowledges & soft skills</h3>    
          
          <div className="w-full flex flex-col gap-3
                          md:flex-row">
            <ul className="w-4/5 self-center md:w-4/6 [&>li]:text-gray-700 [&>li]:py-1 [&>li]:px-3 [&>li]:mt-1 [&>li]:rounded-md">
             <li className="highlighted text1">HTML, CSS, JS, Astro</li>
             <li className="highlighted text1">React, Remix-Run, NextJS, WordPress</li>
             <li className="highlighted text1">TailwindCSS, Bootstrap, MUI</li>              
             <li className="highlighted text1">MySQL, PostgreSQL, MongoDB, Cloudinary</li>                   
             <li className="highlighted text1">Strapi, Prisma</li>
             <li className="highlighted text1">NodeJS, PostMan</li>
             <li className="highlighted text1">GitHub, GitLab, Jira</li>
             <li className="highlighted text1">Matlab</li>
            </ul>

            <ul className="w-4/5 self-center md:w-4/6 [&>li]:text-gray-700 [&>li]:py-1 [&>li]:px-3 [&>li]:mt-1 [&>li]:rounded-md">
              <li className="highlighted text1">English C1/C2</li>
              <li className="highlighted text1">Team leader / player</li>                 
              <li className="highlighted text1">Teacher</li>                   
              <li className="highlighted text1">Pragmatist</li>
              <li className="highlighted text1">Client focused</li>
              <li className="highlighted text1">Researcher</li>
              <li className="highlighted text1">Success seeker</li>
              <li className="highlighted text1">Problem solver</li>
              </ul>
           
            <ul className="md:ml-16 mx-0 flex flex-row justify-evenly gap-2 aboutme-socialmedia flex-wrap px-5 md:px-0">
                <li><img src={ImgHTML} alt="" className="mt-5"/></li>
                <li><img src={ImgCSS} alt="" className="mt-5"/></li>
                <li><img src={ImgJS} alt="" className="mt-5"/></li>
                <li><img src={ImgReact} alt="" className="mt-5"/></li>
                <li><img src={ImgJira} alt="" className="mt-5"/></li>
                <li><img src={ImgTailwind} alt="" className="mt-5"/></li>
                <li><img src={ImgGit} alt="" className="mt-5"/></li>
            </ul>
          </div>

          <table className='w-full mx-auto [&>tbody>tr>td]:text-gray-700'>
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
  )
}
export default Aboutme

