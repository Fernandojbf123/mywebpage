import { useState, useEffect } from "react"
import useNewsProvider from "../hooks/useNewsProvider";

const PageSelector = () => {
  
    const {totalResults, fetchNews, currentPage, updateCurrentPage} = useNewsProvider();
    let [paginator, setPaginator] = useState([1])

    useEffect ( () => {
        let numberOfPages= Math.ceil(totalResults/20); //divided by 20 because the API downloads 20 results per page
        let arrayOfPages = []
        for (let i=1; i<=numberOfPages; i++) {
          arrayOfPages.push(i)
        }
        setPaginator(arrayOfPages)
    },[totalResults])


    async function handleChangePage(e){
      e.preventDefault()
      const clickedPage = e.target.value
      await updateCurrentPage(clickedPage)
      await fetchNews(clickedPage)
    }

    async function nextOrPreviousPage  (e){
      e.preventDefault()
      const clickedPage = e.target.value
      await updateCurrentPage(clickedPage)
      await fetchNews(clickedPage)
    }

    return (
    <div className="w-full flex flex-row gap-2 justify-between items-center">
      <button 
        className="w-[70px] text-blue-50 font-serif underline font-bold" 
        value={Math.max(1,currentPage-1)}
        onClick={nextOrPreviousPage}
        >Previous
      </button>
      <ul className="flex-grow flex flex-row gap-2 p-2 justify-center items-center">
        {paginator.map (page => (
            <li key={page}>
                <button 
                  value={page}
                  className={`text-blue-50 font-arial w-[20px] h-[20px]  ${page===Number(currentPage) ? "bg-gray-800 rounded-full" : ''}`}
                  onClick={ handleChangePage }>{page}</button>
            </li>
        ))}
        </ul>
        <button 
           className="w-[70px] text-blue-50 font-serif underline font-bold" 
           value={Math.min(Number(currentPage)+1,paginator.length)}
           onClick={nextOrPreviousPage}
           >Next
        </button>
    </div>
  )
}

export default PageSelector
