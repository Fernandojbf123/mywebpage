
const WeatherHeader = () => {
  return (

    <header className="w-full md:p-5 p-3 ">
      <div className="md:max-w-[600px] p-5 bg-slate-200/40 md:mx-auto backdrop-blur-md rounded-md border-white border-2 shadow-md">
          <h1 className="text-center text2 text-3xl">{`Weather O'rama`}</h1>
          <h2 className="text-center text1 text-xl">The weather in your city</h2>
        </div>
    </header>
  )
}

export default WeatherHeader
