import { createContext, useState } from "react";

const NewsContext = createContext();

const NewsProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(false)
    const [hasData, setHasData] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [newsData, setNewsData] = useState({})
    const [message, setMessage] = useState("Select a category and click search");

    const [formData, setFormData] = useState({
        category: "",
    })


    function updateFormData (e) {
        //this function updates the data that is written in the formulary
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    async function fetchNews (formData) {
        const {category} = formData;
        const API_KEY = import.meta.env.VITE_NEWS_KEY;
        const url = `https://newsapi.org/v2/top-headlines?&country=Mx&category=${category}&pageSize=20&page=${currentPage}&apiKey=${API_KEY}`
        let controller = new AbortController();
        setIsLoading(true)
        setHasData(false)
        setMessage("")
        try {
            let response = await fetch (url,{signal: controller.signal})
            let result = await response.json()
            if (result.totalResults === 0){
                setHasData(false)
                setMessage("No results found for this category")
                return
            }
            setHasData(true)
            setNewsData(mappedData(result))
        } catch (error) {
            console.log(error)
            setHasData(false)
            setMessage("Could not connect to News data base :(")
            setNewsData([])
        }
        finally{
            setIsLoading(false)
        }

        return () => controller.abort()
    }

    function mappedData (resultFromAPI) {  
        
        let data = resultFromAPI.articles.map ( article => {

            // if /img_not_available.png

            return { 
                title: article.title,
                source: article.source.name,
                publishedAt: article.publishedAt,
                srcImg: article.urlToImage,
                srcURL: article.url,
            }
        })
        return data
    }
    

    return (
        <NewsContext.Provider
            value={{
                formData,
                updateFormData,
                fetchNews,
                isLoading,
                hasData,
                newsData,
                currentPage,
                message,
            }}
        >
            {children}
        </NewsContext.Provider>
    )
}

export {
    NewsProvider
}

export default NewsContext