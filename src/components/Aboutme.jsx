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
          <Link className="w-full flex justify-center"
                to="/details/aboutme">
            <h2 className="p-2 w-5/6 bg-yellow-300 hover:bg-yellow-500 rounded-xl text1 text-2xl
                         md:p-5 md:w-1/4"
                         >ABOUT ME
            </h2>
            </Link>
          <h3 className="p-2 m-auto text-3xl   
                        md:p-5 md:text-6xl"
                        >Get to know me
          </h3>
        </div>

        <div className="w-full flex flex-col justify-center items-center gap-5
                                md:flex-row">         
          <div className="w-full md:w-2/6">
            <img src={ImgProfile2} alt="aboutme" className="imgaboutme"/>
            <p className="text1 text-2xl text-underline w-fit mx-auto md:text-3xl">2 years of experience</p>
          </div>
          <div className="w-full flex flex-col justify-center align-middle md:w-4/6">
            <p className="md:text-4xl text-2xl font-bold text-gray-600 md:text-left text-center">Hi, I'm <span className="text-underline">Fernando Bello</span></p>
            <p className="font-bold text-gray-600 mt-5 md:text-2xl md:w-4/5">I'm a web developer with great experience <span className="text-underline">REACT</span>, HTML, CSS and JAVASCRIPT. I'm looking to build up a career in Front end Development.</p>
          </div>     
        </div>

        <div className="w-full flex flex-col justify-center items-center">
          <h3 className="mt-5 font-bold md:text-3xl text-2xl mb-5">Knowledges</h3>    
          
          <div className="w-full flex flex-col gap-3
                          md:flex-row">
            <table className="w-4/5 self-center md:w-4/6">
              <tbody>
              <tr><td className="highlighted text1">HTML, CSS, JS</td></tr>
              <tr><td className="highlighted text1">React, Remix-Run, NextJS</td></tr>
              <tr><td className="highlighted text1">Bootstrap, TailwindCSS</td></tr>              
              <tr><td className="highlighted text1">SQL, PostgreSQL, MongoDB, Cloudinary</td></tr>                   
              <tr><td className="highlighted text1">WordPress, Strapi</td></tr>
              <tr><td className="highlighted text1">NodeJS, PostMan</td></tr>
              <tr><td className="highlighted text1">GitHub, GitLab, Jira y otros</td></tr>
              <tr><td className="highlighted text1">Matlab, php, C, Fortran</td></tr>
              </tbody>
            </table>
            
            <table className="w-4/5 self-center md:w-2/6">
              <tbody>
              <tr><td className="highlighted text1">English C1/C2</td></tr>
              <tr><td className="highlighted text1">Team leader / player</td></tr>                 
              <tr><td className="highlighted text1">Teacher</td></tr>                   
              <tr><td className="highlighted text1">Pragmatist</td></tr>
              <tr><td className="highlighted text1">Client focused</td></tr>
              <tr><td className="highlighted text1">Researcher</td></tr>
              <tr><td className="highlighted text1">Success seeker</td></tr>
              <tr><td className="highlighted text1">Problem solver</td></tr>
              </tbody>
            </table>

            <ul className="md:ml-16 mx-0 flex flex-row justify-evenly gap-2 aboutme-socialmedia flex-wrap">
                <li><img src={ImgHTML} alt="" className="mt-5"/></li>
                <li><img src={ImgCSS} alt="" className="mt-5"/></li>
                <li><img src={ImgJS} alt="" className="mt-5"/></li>
                <li><img src={ImgReact} alt="" className="mt-5"/></li>
                <li><img src={ImgJira} alt="" className="mt-5"/></li>
                <li><img src={ImgTailwind} alt="" className="mt-5"/></li>
                <li><img src={ImgGit} alt="" className="mt-5"/></li>
            </ul>
          </div>
                           
        </div>
    </div>
  )
}
export default Aboutme

{/* <h2 className="bg-red-800">
              <Link className="p-2 w-5/6 m-auto bg-yellow-300 rounded-xl text-center text1 text-2xl
                               md:p-5 md:w-1/4 cursor-pointer hover:bg-yellow-500" to="/details/aboutme"
                               >ABOUT ME
               </Link>
          </h2> */}