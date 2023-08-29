import SmallBox from "./SmallBox"
import useWeather from "../hooks/useWeather";
import Spinner from "./Spinner";
import { useRef } from "react";

const CardModelOne = ({title}) => {
  
  const {formData, dataFromAPI, isLoading} = useWeather();
  const {city, country} = formData;

  const {clouds, humidity, pressure, temp, temp_feel, tmax, tmin, visibility, weather, windDirection, windSpeed} = dataFromAPI
  
    return (
    <div className="w-full md:min-w-[300px] md:max-w-[600px] mx-auto flex flex-col p-5 justify-center items-center bg-slate-200/40 backdrop-blur-md rounded-md mb-5 border-white border-2 shadow-md">

        <header className='w-full mb-3'>
            <h2 className='text1'>{title}<span className="text2">{` ${city}, ${country}`}</span></h2>
        </header>
        
        <div className='w-full flex flex-row justify-between items-center '>
            <div className='w-1/3'>
                    {isLoading ? <Spinner /> : <p className="text-center">Fix IMG</p>}       
            </div>

            <div className='flex-grow flex flex-col md:flex-row justify-center items-center gap-2'>
                <div className="w-1/2 mx-auto">
                  <SmallBox 
                      value={`${temp} ºC`}
                      valueCSS={"md:text-xl"}
                      description={"Now"}
                      descriptionCSS={"md:font-xl font-serif text-sm"}
                      isLoading={isLoading}
                  />
                </div>

                <div className="w-1/2 mx-auto flex flex-col gap-2">
                    <SmallBox 
                      value={`${tmin} ºC`}
                      valueCSS={"md:text-xl"}
                      description={"T min"}
                      descriptionCSS={"md:font-xl font-serif text-sm"}
                      isLoading={isLoading}
                    />
                    <SmallBox 
                      value={`${tmax} ºC`}
                      valueCSS={"md:text-xl"}
                      description={"T max"}
                      descriptionCSS={"md:font-xl font-serif text-sm"}
                      isLoading={isLoading}
                    />

                </div>
            </div>
        </div>
    </div>
  )
}

export default CardModelOne
