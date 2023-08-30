import useNewsProvider from "../hooks/useNewsProvider";
import { useState } from "react";

const categories = [
{ value: "general", label: "General" },
{ value: "business", label: "Business" },
{ value: "entertainment", label: "Entertainment" },
{ value: "health", label: "Health" },
{ value: "sciences", label: "Sciences" },
{ value: "ports", label: "Ports" },
{ value: "technology", label: "Technology" },
]


const NewsForm = () => {

  const {formData, updateFormData, fetchNews} = useNewsProvider();
  const {category} = formData;

  const [alertMsg, setAlertMsg] = useState("")

  function handleSubmit (e) {
    e.preventDefault()
    setAlertMsg("")

    if (!isFormDataValid(formData)){
        setAlertMsg("All fields are mandatory")
        return
    }

    fetchNews(formData)
    
  }

  function isFormDataValid (formData) {
    
    if (Object.values(formData).includes("")){
        return false
    }

    return true

    function isBlank(str) {
        return (!str || /^\s*$/.test(str));
    }
    
}


  return (
    <div className='w-full md:w-1/3 md:mx-auto p-5 rounded-md flex flex-col justify-center items-centers bg-slate-200/30 backdrop-blur-sm'>
        
      {alertMsg ? <p className="font-serif mb-2 text-red-600">{alertMsg}</p> : null}
      <form 
        onSubmit={handleSubmit}
      >
        

        <div className="w-full mb-2">
        <select 
            id='category'
            name="category"
            type='select' 
            className="w-full rounded-sm font-serif [&>option]:font-serif"
            onChange={ updateFormData}
            value={category}
        > 
            <option value="">Select a category</option>
            {categories.map ( category => (
                <option 
                    key={category.value} 
                    value={category.value}
                >{category.label}</option>
            ))}
        </select>
        </div>

        <div className="w-full mb-2">
            <input 
                type="submit" 
                value="Search News"
                className='w-full bg-slate-300 font-serif rounded-md h-10 text-white font-bold uppercase cursor-pointer hover:bg-slate-500'
            />
        </div>

      </form>
    </div>
  )
}

export default NewsForm
// category = [
// "business",
// "entertainment",
// "general",
// "health",
// "sciences",
// "ports",
// "technology"]