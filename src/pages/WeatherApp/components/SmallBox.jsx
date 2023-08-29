import Spinner from "./Spinner"

const SmallBox = ({value,valueCSS, description,descriptionCSS, isLoading}) => {
  
    return (
    <div className="w-[100px] h-[80px] md:w-[130px] mx-auto p-2 flex flex-col justify-center items-center bg-slate-200/40 backdrop-blur-md rounded-md border-white border-2 shadow-md">

      {isLoading ? <Spinner /> 
      :( 
        <>
          <p className={`${valueCSS} text-slate-600`}>{value}</p>
          <p className={`${descriptionCSS} text-slate-600 font-serif`}>{description}</p>
        </>
      )}
        
    </div>
  )
}

export default SmallBox
