import { useState } from "react";
import useWeather from "../hooks/useWeather"
const WeatherForm = () => {
    
    const {formData, searchData, fetchData} = useWeather();
    const {city, country } = formData;

    let [alertMsg, setAlertMsg] = useState("")

    function handleSubmit (e) {
        e.preventDefault()
        setAlertMsg("")
        if (Object.values(formData).includes("")) {
            setAlertMsg("All fields are mandatory")
            return
        }   
        fetchData(formData)
        
    }

  return (
    <div className="w-full p-3 md:p-5">
        <form
            className="w-full md:min-w-[300px] md:max-w-[600px] mx-auto flex flex-col p-5 justify-center items-center bg-slate-200/40 backdrop-blur-md rounded-md  border-white border-2 shadow-md"
            onSubmit={handleSubmit}
            >
                {alertMsg ? <p>{alertMsg}</p> : null}
            <div className='mb-3'>
                <input 
                    id="city"
                    name="city"
                    type="text" 
                    placeholder='Type a city'
                    className="rounded-md p-2 w-[250px] font-serif"
                    value={city}
                    onChange={searchData}/>
            </div>

            <div className='mb-3'>
               <select 
                    id="country"
                    name="country" 
                    className="rounded-md p-2 w-[250px] font-serif [&>option]:font-serif"
                    value={country}
                    onChange={searchData}>
                        <option value="">Select a country</option>
                        <option value="MX">Mexico</option>
                        <option value="VE">Venezuela</option>
                        <option value="US">United States</option>
                        <option value="SP">Spain</option>
                </select>
            </div>

            <div className='mb-3'>
                <input 
                    type="submit"
                    className="bg-blue-600 rounded-md text1 text-slate-200 w-[150px] p-2 hover:bg-blue-800 cursor-pointer"
                    value="Search"/>
            </div>
        </form>

    </div>
  )
}

export default WeatherForm
