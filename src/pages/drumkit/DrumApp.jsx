import React from 'react'

const DrumApp = () => {

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  return (
    <div>
        <iframe
            width={windowWidth}
            height={windowHeight}
            src="./src/pages/drumkit/index.html">
        </iframe>
    </div>
  )
}

export default DrumApp
