import useNewsProvider from "../hooks/useNewsProvider";
import NewsCard from "./NewsCard"
import PageSelector from "./PageSelector";
import Spinner from "./Spinner";

const NewsShowCards = () => {

  const {isLoading, hasData, newsData, message} = useNewsProvider();

  return (

    isLoading ? (
        <div className='w-full md:w-2/3 md:mx-auto p-5 rounded-md flex flex-col md:flex-row gap-3 flex-wrap justify-center items-center bg-slate-200/30 backdrop-blur-sm mt-3'>
         <Spinner />
        </div>
    ):(
        hasData ? (
            <div className='w-full md:w-2/3 md:mx-auto p-5 rounded-md flex flex-col md:flex-row gap-3 flex-wrap justify-center items-center bg-slate-200/30 backdrop-blur-sm mt-3'>
            
            
                {newsData?.map( news => (
                    <NewsCard 
                        key={news.title}
                        title={news.title}
                        source={news.source}
                        publishedAt={news.publishedAt.slice(0,10)}
                        srcImg={news.srcImg}
                        srcURL={news.srcURL}
                    />
                    ))
                }
                
            
                {/* <PageSelector /> */}
        
        </div>
        ):(
            <div className='w-full md:w-2/3 md:mx-auto p-5 rounded-md flex flex-col md:flex-row gap-3 flex-wrap justify-center items-center bg-slate-200/30 backdrop-blur-sm mt-3'>
                <p className="text-2xl text2">{message}</p>
            </div>
        )
    )
  )
}

export default NewsShowCards
