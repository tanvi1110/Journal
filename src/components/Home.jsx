import React from 'react'

const Home = () => {
  return (
    <>
    <div className="flex flex-col sm:flex-col lg:flex-row sm:justify-center justify-between items-center mt-6 lg:mt-20">
      <div className="lg:w-1/2">
       <h1 className='text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide'>
       Unlocking Insights: Your Gateway to 
       <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>
        {" "} 
        Groundbreaking Research and Knowledge
       </span>
       </h1>
      </div>
      <div className="lg:w-1/2">
        {/* Add your content here */}
      </div>
    </div>
    </>
  )
}

export default Home
