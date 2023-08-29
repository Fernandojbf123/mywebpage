import useWeather from "../hooks/useWeather"
import EmptyShowCard from "./EmptyShowCard";
import CardModelOne from "./CardModelOne";
import CardModelTwo from "./CardModelTwo";


const WeatherShowCard = () => {

  const {hasData} = useWeather();

  return (
    <div className="w-full p-3">
        
        {!hasData ? (
          <EmptyShowCard /> )
        :(
          <>
            <CardModelOne 
              title={"The temperature in"}/> 
            <CardModelTwo 
              title={"The weather is"}/> 
          </>
        )}

    </div>
  )
}

export default WeatherShowCard
