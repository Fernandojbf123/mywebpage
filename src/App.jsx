import { useState } from 'react'

import Header from './components/Header'
import Modal from './components/Modal'
import Aboutme from './components/Aboutme'
import Education from './components/Education'
import Footer from './components/Footer'


function App() {

  const [modal, setModal] = useState(false)


  return (


    <div className="w-screen bg-gray-300">
      
      <Header 
        setModal={setModal}
      />

      <Aboutme />

      {modal ? 
        <Modal 
          modal   ={modal}
          setModal={setModal}/> 
      : ' ' 
      }
 
      <div className='mt-20'>
        <Education />
      </div>

      <Footer />
    </div>

    )
}

export default App
