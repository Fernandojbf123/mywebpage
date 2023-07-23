import React from 'react'

const DrumApp = () => {

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  return (
    <div>
      <p className="text-2xl">NOTE: MOBILE VERSION NOT AVAILABLE</p>
        <iframe
            width={windowWidth}
            height={windowHeight}
            src="https://courageous-entremet-af03d9.netlify.app/">
        </iframe>

        
    </div>

    
  )
}

export default DrumApp
