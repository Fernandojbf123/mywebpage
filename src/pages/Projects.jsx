import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share'
import LinkToProject from '../components/LinkToProject'
import TitleOfProjectGroup from '../components/TitleOfProjectGroup'

const Projects = () => {
  
  
  
  return (
    
    <div className='w-full min-h-screen h-auto flex flex-col items-center text-center md:gap-3 gap-2'>
        <div className="md:w-2/6 md:[&>p]:text-gray-600 [&>p]:text-gray-200">
          <p className=' text1 mt-2'>@bellodev</p>
          <h1 className='md:text-gray-600 text1 md:text-xl mt-2 text-gray-200'>Projects using React & JavaScript</h1>
          <h2 className='md:text-gray-600 text2 md:text-2xl mt-2 text-gray-200'>Hello and welcome</h2>
          <p className='text-justify mt-2 px-5 font-bold'>Here you will find links to all the projects I've made as frontend developer. I hope you enjoy some of them :)</p>

          <p className="mt-3 text2">If you'd like to share my portafolio just click the icons</p>
          
          <div className='mt-3 flex flex-row gap-2 justify-center'>
            <FacebookShareButton url='https://www.bellodev.com' quote="This web page is awesome">
              {<FacebookIcon size={32} round="true"/>}
            </FacebookShareButton>

            <TwitterShareButton url='https://www.bellodev.com
Hey, this is a great frontend developer we should be working with :D ' >
              {<TwitterIcon size={32} round="true"/>}
            </TwitterShareButton>

          <WhatsappShareButton url='https://www.bellodev.com 
Hey, this is a great frontend developer we should be working with :D ' >
            {<WhatsappIcon size={32} round="true" />}
          </WhatsappShareButton>

          </div>  
        </div>

        <TitleOfProjectGroup 
          title = {"GAMES"}
          textColor={"text-purple-500"}/>

        <LinkToProject 
          href={"/wackamole"}
          name={"WACK-A-MOLE"}
          bgColor={"bg-blue-500"}
          animate={true}
        />
        <LinkToProject 
          href={"/memorama"}
          name={"Memorama game"}
          bgColor={"bg-blue-400"}
          animate={false}
        />

        <LinkToProject 
          href={"/drumkit"}
          name={"Drum Kit - PC Only"}
          bgColor={"bg-cyan-500"}
          animate={false}
        />

        <TitleOfProjectGroup 
          title = {"APPS"}
          textColor={"text-purple-500"}/>


        <LinkToProject
          href={"/weather"}
          name={"Weather App"}
          bgColor={"bg-green-500"}
          animate={false}
        />

      <LinkToProject
          href={"/news"}
          name={"News App"}
          bgColor={"bg-green-500"}
          animate={false}
        />

        <LinkToProject
          href={"/fitness"}
          name={"Fitness App"}
          bgColor={"bg-green-400"}
          animate={false}
        />

        
     
        <LinkToProject
          href={"/crypto-quoter"}
          name={"Cryto Quoter"}
          bgColor={"bg-green-300"}
          animate={false}
        />

        <LinkToProject
          href={"/budget"}
          name={"Budget App"}
          bgColor={"bg-green-300"}
          animate={false}
        />

        <TitleOfProjectGroup 
          title = {"WEB DESIGN"}
          textColor={"text-purple-500"}/>
  
        <LinkToProject
          href={"/tesla"}
          name={"Tesla Web clone"}
          bgColor={"bg-orange-500"}
          animate={false}
        />

      <TitleOfProjectGroup 
        title={"Interviews request: AVAILABLE SOON"}
        textColor={"text-purple-500"}/>
        

    

        {/* <div className="md:w-2/6 w-4/5">
          <Link to="/randomdatafromapi">
            <p className='text1 w-full h-10 bg-orange-500 text-2xl flex justify-center items-center rounded-md hover:bg-yellow-100 transition-colors ease-in-out'
              >Random Data from API
            </p>
          </Link>
        </div> */}


       


        
    </div>
  )
}

export default Projects
