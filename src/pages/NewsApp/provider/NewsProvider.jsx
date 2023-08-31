import { createContext, useState } from "react";

const NewsContext = createContext();
// this context is used by the hook useNewsProvider

const NewsProvider = ({children}) => {


    const [isLoading, setIsLoading] = useState(false)
    const [hasData, setHasData] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [newsData, setNewsData] = useState({})
    const [totalResults, setTotalResults] = useState(0)
    const [message, setMessage] = useState("Select a category and click search");

    const [formData, setFormData] = useState({
        category: "",
    })


    function updateFormData (e) {
        //this function updates the data that is written in the formulary
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    async function fetchNews (page) {
        //this function fetch data from API
        const {category} = formData;
        const API_KEY = import.meta.env.VITE_NEWS_KEY;
        const url = `https://newsapi.org/v2/top-headlines?&country=US&category=${category}&pageSize=20&page=${page}&apiKey=${API_KEY}`
        let controller = new AbortController();
        setIsLoading(true)
        setHasData(false)
        setMessage("")
        setTotalResults(0)
        try {
            let response = await fetch (url,{signal: controller.signal})
            let result = await response.json()
            if (result.totalResults === 0){
                setHasData(false)
                setMessage("No results found for this category")
                return
            }

            if (result.status==="error"){
                setMessage(result.message)
                return
            }

            setHasData(true)
            setNewsData(mappedData(result))
            setTotalResults(result.totalResults)
        } catch (error) {
            console.log(error)
            setHasData(false)
            setMessage("Could not connecto to API.")
            setNewsData([])
            
        }
        finally{
            setIsLoading(false)
        }

        return () => controller.abort()
    }

    function mappedData (resultFromAPI) {  

        let data = resultFromAPI.articles.map ( article => {

            return { 
                title: article.title,
                source: article.source.name,
                publishedAt: article.publishedAt,
                srcImg: article.urlToImage,
                srcURL: article.url,
            }
        })
        //Found out that sometimes API returns null for some news
        let filteredData = data.filter( idata => idata.title != null)

        return filteredData
    }
    

    function updateCurrentPage (pageNumber) {
        setCurrentPage(pageNumber)
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
                totalResults,
                currentPage,
                message,
                updateCurrentPage,
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