import { useContext } from "react"
import NewsContext from "../provider/NewsProvider"

const useNewsProvider = () => {

   return useContext(NewsContext)
}

export default useNewsProvider
