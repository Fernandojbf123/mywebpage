
const Education = () => {
  return (
    <div id="education" className="md:w-4/6 mx-auto mt-20 mb-10
                                   w-full">
        <div className="">
            <h2 className="md:p-5 md:w-1/4 m-auto bg-yellow-300 rounded-xl text-center text1 text-2xl
                           p-2 w-5/6"> Education </h2>
            <div className="md:mt-10 mt-3 w-5/6 flex flex-col mx-auto">
                <details open={true} className='mt-10 cursor-pointer'>
                    <summary className='text1 md:text-3xl text-xl text-gray-600'>Engineer (2002-2009)</summary>
                        <ul className="w-full flex-col">
                            <li>
                                <p className="p-2 md:text-xl text-sm">✅ <span className="text1 md:text-2xl text-sm text-gray-600">Thesis: I created an app to storage oil fields data in a friendly user interface using php, html, CSS, and MySQL</span></p>
                            </li>
                        </ul>
                </details>

                <details open={true} className='mt-10 cursor-pointer'>
                    <summary className='text1 md:text-3xl text-xl text-gray-600'>Certificates 2022</summary>
                        <ul className="w-full flex-col">
                            <li className="p-2 align-top">
                                <p className="p-2 md:text-xl text-sm">✅ <span className="text1 md:text-2xl text-sm text-gray-600">Introduction to web development I & II by Google</span></p>
                            </li>
                               
                            <li className="p-2 align-top">
                            <p className="p-2 md:text-xl text-sm">✅ <span className="text1 md:text-2xl text-sm text-gray-600">Javascript ES9, HTML, CSS and NodeJS. Instructor Nicolas Schurmann. 19 hours</span></p>
                            </li>

                            <li className="p-2 align-top">
                            <p className="p-2 md:text-xl text-sm">✅ <span className="text1 md:text-2xl text-sm text-gray-600">React 18, React Router Dom, Next.js, Remix Run, Redux, Tailwind CSS, Prisma and MERN. Instructor Juan Pablo de la Torre Valdez. 67 hours</span></p>
                            </li>
            
                        </ul>
                </details>
            </div>
        </div>
    </div>
  )
}

export default Education
