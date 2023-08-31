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