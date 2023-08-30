import { useEffect, useState } from "react"
import "./AnimateLetter.css"

const AnimateLetter = ({letter, animationDirection}) => {
    //animation direction can be one of the following strings:
    //animationDirection={"animate-l-r"}
    //animationDirection={"animate-t-b"}

    return (
        <div id="letter">
            <h2 
                id={animationDirection}
                data-text={`${letter}`}
                >{`${letter}`}
            </h2>
    </div>
  )
}

export default AnimateLetter
