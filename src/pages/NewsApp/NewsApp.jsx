import Footer from "./components/Footer"
import Header from "./components/Header"
import NewsForm from "./components/NewsForm"
import NewsShowCards from "./components/NewsShowCards"
import { NewsProvider } from "./provider/NewsProvider"


const NewsApp = () => {


  return (
    <NewsProvider >
        <div className="min-h-screen w-screen bg-gradient-to-br from-slate-300 via-slate-600 to-gray-700 flex flex-col">
            <Header />
            <div className="flex-grow mb-5">
                <NewsForm />

                <NewsShowCards />   

            </div>
            <Footer />
        </div>
    </NewsProvider>
  )
}

export default NewsApp

//GET https://newsapi.org/v2/top-headlines?category=${}&country=${country}&pageSize=20&apiKey=API_KEY

// category = [
// "business",
// "entertainment",
// "general",
// "health",
// "sciences",
// "ports",
// "technology"]

//https://newsapi.org/v2/top-headlines?q=Trump&category=health&country=US&pageSize=10&page=2&apiKey=02bf41cf6fa44a829979449f2bbc611a
//https://newsapi.org/v2/top-headlines?category=health&country=US&pageSize=10&page=4&apiKey=02bf41cf6fa44a829979449f2bbc611a