import { useState, useEffect } from "react"

const ProjectGalery = ({src}) => {

    let [isLoaded, setIsLoaded] = useState(false);
    let [imgsrc, setImgsrc] = useState([]);
    
    useEffect( () => {
        
        let work = [];
        const checkImgExist = async (srcToCheck) => {
            const response = await fetch (srcToCheck)
            const result = await response
            if (result.ok) {
                work.push(srcToCheck)
                setImgsrc([...work])
            }
        }

        for (let it = 1; it<7; it++) {
            let srcToCheck = `${src}${it}.png`;    
            checkImgExist(srcToCheck)
            if (it == 6){
                setIsLoaded(true)
            }
        }

    },[])

    const handleClick = (e) => {
        window.open(e.target.src)
    }

  return (

    <div className="flex flex-row flex-wrap justify-center mt-5 gap-3 mb-5">


    {isLoaded && imgsrc.map( (isrc, idx) => (
            <img 
                key={isrc}
                id={isrc}
                src={isrc} 
                alt="project image"
                className='img-projectgal aspect-square cursor-pointer rounded-md'
                onClick={e => handleClick(e)}
                /> 
        ))}
        
    </div>
  )
}

export default ProjectGalery
