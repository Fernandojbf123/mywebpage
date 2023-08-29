import React from 'react'

const MemoramaApp = () => {

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    
  return (
    <div>
        <iframe
            width={windowWidth}
            height={windowHeight}
            src="https://inquisitive-mermaid-359825.netlify.app/">
        </iframe>
    </div>
  )
}

export default MemoramaApp
