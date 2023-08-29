import SmallBox from "./SmallBox"
import useWeather from "../hooks/useWeather";

const CardModelTwo = ({title}) => {
  
  const {dataFromAPI, isLoading} = useWeather();
  

  const {clouds, humidity, pressure, temp, temp_feel, tmax, tmin, visibility, weather, windDirection, windSpeed} = dataFromAPI
  
    return (
    <div className="w-full md:min-w-[300px] md:max-w-[600px] mx-auto flex flex-col p-5 justify-center items-center bg-slate-200/40 backdrop-blur-md rounded-md mb-5 border-white border-2 shadow-md">

        <header className='w-full mb-3'>
            <h2 className='text1'>{title}</h2>
        </header>
        
        <div className='w-full flex flex-row justify-center items-center '>
            <div className='w-1/3 mx-auto'>
                
            <div className="flex flex-col gap-2">
                    <SmallBox 
                      value={`${visibility/1000} km`}
                      valueCSS={"md:text-xl"}
                      description={"Visibility"}
                      descriptionCSS={"md:font-xl font-serif text-sm"}
                      isLoading={isLoading}
                    />
                    <SmallBox 
                      value={`${humidity} %`}
                      valueCSS={"md:text-xl"}
                      description={"Humidity"}
                      descriptionCSS={"md:font-xl font-serif text-sm"}
                      isLoading={isLoading}
                    />

                </div>
                
            </div>

            <div className='w-1/3 mx-auto '>
                
            <SmallBox 
                    value={`${weather}`}
                    valueCSS={"md:text-xl text1"}
                    description={"Sky"}
                    descriptionCSS={"md:font-xl font-serif text-sm"}
                    isLoading={isLoading}
                />

                
            </div>

            <div className='w-1/3 mx-auto flex flex-row justify-center items-center gap-2'>
                    
               
                <div className="flex flex-col gap-2">
                    <SmallBox 
                      value={`${windDirection} deg`}
                      valueCSS={"md:text-xl"}
                      description={"Wind direction"}
                      descriptionCSS={"md:font-xl font-serif text-sm"}
                      isLoading={isLoading}
                    />
                    <SmallBox 
                      value={`${windSpeed} m/s`}
                      valueCSS={"md:text-xl"}
                      description={"Wind speed"}
                      descriptionCSS={"md:font-xl font-serif text-sm"}
                      isLoading={isLoading}
                    />

                </div>
            </div>
        </div>
    </div>
  )
}

export default CardModelTwo
