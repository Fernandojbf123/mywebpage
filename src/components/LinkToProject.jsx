import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

const LinkToProject = ({href, name, bgColor, animate}) => {
  
    const [bounce, setBounce] = useState(false)

    useEffect ( () => {
        if (animate) {
            setBounce(true)

            setTimeout( () =>{
                setBounce(false)
              },1350)
        }
    },[]) 
  
    return (

      <div className="md:w-2/6 w-4/5">
          <Link
              to={href}>
              <p className={`text1 w-full h-10 ${bgColor} text-2xl flex justify-center items-center rounded-md hover:bg-yellow-100 transition-colors ease-in-out ${bounce && "animate-bounce"}`}
              >{name}
              </p>
          </Link>
      </div>
  )
}

export default LinkToProject
