



import React from 'react'

 import quiz_thumb from "../images/quiz_thumb.jpg"
 import bmi_thumb from "../images/bmi_thumb.jpg"
 import spotify_thumb from "../images/spotify_thumb.jpg"
 import tictactoe_thumb from "../images/tictactoe_thumb.jpg"
 import amazon_thumb from "../images/amazon_thumb.jpg"
 import ecomerce_thumb from "../images/ecomerce_thumb.jpg"


const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>
        
        {/* Container */}
        <div className='grid sm:grid-cols md:grid-cols-3 gap-4'>
          
          {/* Grid Item */}
          <div 
            style={{ backgroundImage: `url(${ quiz_thumb })` }} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Quizz-app
              </span>
              <div>
                <a href='https://bit.ly/44Urw8g' target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                {/* Image placeholder */}
              </div>
            </div>
          </div>
          
          {/* Grid Item */}
          <div 
            style={{ backgroundImage: `url(${ bmi_thumb })` }} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Bmi-calculator
              </span>
              <div>
                <a href='https://bit.ly/3wTCgaj' target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                
              </div>
            </div>
          </div>
          
          
          
          {/* Grid Item */}
          <div 
            style={{ backgroundImage: `url(${ tictactoe_thumb })` }} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Tic-tac-toe game
              </span>
              <div>
                <a href='https://bit.ly/3wGlpb5' target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                {/* Image placeholder */}
              </div>
            </div>
          </div>
          
          {/* Grid Item */}
          <div 
            style={{ backgroundImage: `url(${ spotify_thumb })` }} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Spotify
              </span>
              <div>
                <a href='https://bit.ly/3R41Pfy' target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                
              </div>
            </div>
          </div>
          
          {/* Grid Item */}
          <div 
            style={{ backgroundImage: `url(${ amazon_thumb })` }} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Amazon
              </span>
              <div>
                <a href='https://rb.gy/hfb21h' target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                
              </div>
            </div>
          </div>
          
          {/* Grid Item */}
          <div 
            style={{ backgroundImage: `url(${ ecomerce_thumb })` }} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                E-commerce site
              </span>
              <div>
                <a href='https://bit.ly/3WTZCqU' target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
            
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Work


