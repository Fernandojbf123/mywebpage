import React from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    
    <div>
        <div>Página de proyects</div>
        
        <div>
          <Link to="/wackamole">WACK-A-MOLE</Link>
        </div>
        <div>
          <Link to="/drumkit">Drum Kit</Link>
        </div>
        <div>
          <Link to="/memorama">Memorama game</Link>
        </div>
        
    </div>
  )
}

export default Projects
