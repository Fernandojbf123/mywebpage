import WeatherForm from "./components/WeatherForm"
import WeatherHeader from "./components/WeatherHeader"
import "./styles/WeatherApp.css"
import { WeatherProvider } from "./context/WeatherProvider"
import WeatherShowCard from "./components/WeatherShowCard"
const WeatherApp = () => {




  return (
    
    <>
        <WeatherProvider >
          <main className="bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-500 mx-auto min-h-screen">
            <WeatherHeader />
            <div>
                <WeatherForm />
                <WeatherShowCard />
            </div> 
          </main>
        </WeatherProvider>

        
        

    </>
  )
}

export default WeatherApp


//APIKey=6009fc20cabce07a5475f7c60c563abe

//https://api.openweathermap.org/data/2.5/weather?q={city},{country}&appid={API_key}
//https://api.openweathermap.org/data/2.5/weather?q=Caracas,Ve&appid=6009fc20cabce07a5475f7c60c563abe