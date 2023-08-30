import { useState } from 'react'

import Header from './components/Header'
import Modal from './components/Modal'
import Aboutme from './components/Aboutme'
import Education from './components/Education'
import Footer from './components/Footer'
import IntroModal from './components/IntroModal'


function App() {

  const [modal, setModal] = useState(false)


  return (


    <div className="w-full bg-gray-300 overflow-hidden">
      <IntroModal />

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
