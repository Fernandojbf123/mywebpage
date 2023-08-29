import { useState, createContext } from "react"

const WeatherContext = createContext()

const WeatherProvider = ({children}) => {

    const [dataFromAPI,setDataFromAPI] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [hasData, setHasData] = useState(false)

    const [formData, setFormData] = useState({
        city: "",
        country: "",
    })

    const searchData = e => {
        setFormData({... formData, [e.target.name]: e.target.value})
    }

    const fetchData = async formData => {
        //function that connects to API and search the weather data
        setIsLoading(true)
        try {
            const {city, country} = formData;
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${import.meta.env.VITE_WEATHER_KEY}`
            const result = await fetch (url);
            const response = await result.json();
            if (response.cod === "404"){
                setHasData(false)
                return 
            }
            setDataFromAPI(mapData(response))
            setHasData(true)


        } catch (error) {
            console.log(error)
        }
        finally {
            setIsLoading(false)
        }
    }


    function mapData (fetchedData) {
        let data = {}
        
        data = {
            weather: fetchedData.weather[0].description,
            clouds: fetchedData.clouds.all,
            temp: (fetchedData.main.temp-273.15).toFixed(2),
            temp_feel: (fetchedData.main.feels_like-273.15).toFixed(2),
            tmin: (fetchedData.main.temp_min-273.15).toFixed(2),
            tmax: (fetchedData.main.temp_max-273.15).toFixed(2),
            pressure: fetchedData.main.pressure,
            humidity: fetchedData.main.humidity,
            visibility: fetchedData.visibility,
            windSpeed: fetchedData.wind.speed,
            windDirection: fetchedData.wind.deg
        }
        return data
    }



    return (
        <WeatherContext.Provider
            value={
                {
                    formData,
                    searchData,
                    fetchData,
                    dataFromAPI,
                    isLoading,
                    hasData,
                }
            }
        >    
            {children}
        </WeatherContext.Provider>
    )
}

export {
    WeatherProvider
}

export default WeatherContext