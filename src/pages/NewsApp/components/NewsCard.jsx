import imgNotAvailable from "/NewsApp/img_not_available.png"


const NewsCard = ({title, source, publishedAt , srcImg, srcURL}) => {
   


  return (

    <div className="w-full md:w-[32%] md:h-[300px] bg-slate-200 p-2 rounded-md">
        
        <a href={srcURL} className='flex flex-col items-center'>
        
            <div className="h-[72px] overflow-hidden">
                <h2 className="text1 h-full text-justify">{title}</h2>
            </div>

            <figure className="w-full md:h-[200px] flex flex-col justify-between items-center">
                <img
                    src={srcImg || imgNotAvailable } 
                    alt={title} 
                    className="h-full"
                />
                <figcaption className="w-full flex flex-row justify-between [&>p]:font-serif [&>p]:text-xs ">
                    <p className="text-red-500">{source}</p>
                    <p>{`published at ${publishedAt}`}</p>
                </figcaption>
            </figure>
        </a>

      </div>
  )
}

export default NewsCard
