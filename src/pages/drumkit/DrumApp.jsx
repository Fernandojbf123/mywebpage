import React from 'react'

const DrumApp = () => {

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  return (
    <div>
        <iframe
            width={windowWidth}
            height={windowHeight}
            src="https://courageous-entremet-af03d9.netlify.app/">
        </iframe>
    </div>
  )
}

export default DrumApp
