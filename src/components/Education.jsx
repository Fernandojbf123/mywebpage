import React from 'react'

const Education = () => {
  return (
    <div id="education" className="md:w-2/5 mx-auto mt-20 mb-10
                                   w-full">
        <div className="">
            <h2 className="md:p-5 md:w-1/4 m-auto bg-yellow-300 rounded-xl text-center text1 text-2xl
                           p-2 w-5/6"> Education </h2>
            <div className="md:mt-10 mt-3 w-5/6 flex flex-col mx-auto">
                <details open={true} className='mt-10 cursor-pointer'>
                    <summary className='text1 md:text-3xl text-xl text-gray-600'>College: Petroleum Engineer (2002-2009)</summary>
                    <p className='text1 md:text-2xl text-gray-600'>During this period I used Visual Basic, Borland C. My bachelor's thesis was about an app to storage oil fields data in a friendly user interface. I used php, html, CSS, and MySQL</p>
                </details>
                <details open={true} className='mt-10 cursor-pointer'>
                    <summary className='text1 md:text-3xl text-xl text-gray-600'>Master: Applied Geophysics (2012-2015)</summary>
                    <p className='text1 md:text-2xl text-sm text-gray-600'>During this period I learn high level coding. I used Matlab to code a solver for coupled fluid flow and heat flow to model 2D geothermal reservoirs. After this I was able to work with NASA and ESA's (European Space Agency) satellite data</p>
                </details>
                <details open={true} className='mt-10 cursor-pointer'>
                    <summary className='text1 md:text-3xl text-xl text-gray-600'>Front end Developer (2021 up to date)</summary>
                    <p className='text1 md:text-2xl text-sm text-gray-600'>I started learning JavaScript to have a second income, so I devoured video tutorials in youtube and in Udemy to learn faster. Later on 2021 I got my first job as freelancer coding GeoMaya's webpage (GeoMaya is a small consultant company in Ensenada, BC) then they hired me as freelancer to code the <strong>Condo Manager App</strong>. Then I built a dentist webpage using HTML, CSS and JS and finally my portafolio using React</p>
                </details>
            </div>
        </div>
    </div>
  )
}

export default Education
