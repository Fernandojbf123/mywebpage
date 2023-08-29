import React from 'react'

const BudgetApp = () => {

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  return (
    <div>
        <iframe
            width={windowWidth}
            height={windowHeight}
            src="https://monumental-concha-b85b56.netlify.app/">
        </iframe>
    </div>
  )
}

export default BudgetApp
