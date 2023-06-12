import { useState } from 'react'

import Header from './components/Header'
import Modal from './components/Modal'
import Aboutme from './components/Aboutme'
import FAQ from './components/FAQ'
import ProjectCard from './components/ProjectCard'
import Education from './components/Education'
import Footer from './components/Footer'


function App() {

  const [modal, setModal] = useState(false)


  return (


    <div className="w-screen">
    
      <Header 
        setModal={setModal}
      />

      <Aboutme />

      {modal ? 
        <Modal 
          modal   ={modal}
          setModal={setModal}/> 
        : ' ' }
      
      <FAQ />

      <ProjectCard />

      <Education />

      <Footer />
    </div>

    )
}

export default App
