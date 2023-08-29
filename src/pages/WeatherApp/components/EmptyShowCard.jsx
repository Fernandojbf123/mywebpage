import useWeather from "../hooks/useWeather"

const EmptyShowCard = () => {

  const {dataFromAPI} = useWeather();
  const {message} = dataFromAPI

  return (
    <div className="w-full md:min-w-[300px] md:max-w-[600px] mx-auto flex flex-col p-5 justify-center items-center bg-slate-200/40 backdrop-blur-md rounded-md mb-5 border-white border-2 shadow-md">
      {message ? <p>{message}</p> : <p>Search a city to get the weather</p>}
    </div>
  )
}

export default EmptyShowCard
