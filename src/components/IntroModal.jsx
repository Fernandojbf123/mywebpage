import { useState } from "react"
import AnimateLetter from "./BelloDev/AnimateLetter"

const IntroModal = () => {

    const [close, setClose] = useState(false)


    setTimeout ( ( ) => {
        console.log("time ended")
        setClose(true)
    },[4200])

  return (

    <div className={`fixed top-0 left-0 bg-gradient-to-br from-purple-950 via-gray-950 md:to-black/20 to-black z-30 w-screen h-screen flex flex-col justify-center items-center ${close && "closeIntroModal"}`}>
    
        <div className="flex flex-col justify-center items-center">
            <p className="text-slate-100 font-serif text-2xl">WELCOME</p>
            <p className="text-slate-100 font-serif text-xl">to</p>
        </div>

        <div className="flex justify-center items-center">
            <AnimateLetter 
                letter={"B"}
                animationDirection={"animate-l-r"}    
            />
            <AnimateLetter 
                letter={"E"}
                animationDirection={"animate-t-b"}    
            />
            <AnimateLetter 
                letter={"L"}
                animationDirection={"animate-l-r"}    
            />
            <AnimateLetter 
                letter={"L"}
                animationDirection={"animate-t-b"}    
            />
            <AnimateLetter 
                letter={"O"}
                animationDirection={"animate-l-r"}    
            />
            <AnimateLetter 
                letter={"D"}
                animationDirection={"animate-t-b"}    
            />
            <AnimateLetter 
                letter={"E"}
                animationDirection={"animate-l-r"}    
            />
            <AnimateLetter 
                letter={"V"}
                animationDirection={"animate-t-b"}    
            />
        </div>

        <div className="flex flex-col justify-center items-center mt-5">
            <p className="text-slate-100 font-serif text-sm">PORTFOLIO</p>
        </div>

    </div>
  )
}

export default IntroModal
