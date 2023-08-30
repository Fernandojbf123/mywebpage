import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

const PageSelector = () => {
  
    let numberOfResults = 69;
    let [paginator, setPaginator] = useState([1])

    useEffect ( () => {
        let numberOfPages= Math.ceil(numberOfResults/20);
        let tmp2 = []
        for (let i=1; i<=numberOfPages; i++) {
            tmp2.push(i)
        }
        setPaginator(tmp2)
    },[])

  
    return (
    <div className="flex flex-row gap-2">
      <p>Previous</p>
      <ul>
        {paginator.map (page => (
            <li key={page}>
                <button value={page} onClick={ (page) => handleChangePage(page)}></button>
            </li>
        ))}
        
        </ul>
      <p>Next</p>
    </div>
  )
}

export default PageSelector
