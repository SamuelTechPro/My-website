



import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] '>
      <div className='flex flex-col justify-center items-center w-full h-full text-gray-100 '>
        <div className='max-w-[1000px] w-full  grid grid-cols-2 gap-8'>
            <div className='sm:text-right pl-4 pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
            </div>
            <div>

            </div>
            </div>
            <div className='max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
                <p>Hi, I'm  Samuel, nice to meet you. Please take a look around</p>
            </div>
            <div>
              <p>I am passionate about building excellent software that improves the lives of people around me. I specialize in creating software for clients ranging from individuals and small-business all the way to large enterprise corporations. What would you do if you had a software expert at your fingertip</p>  
            </div>
            </div>

       
      </div>
    </div>
  )
}

export default About
