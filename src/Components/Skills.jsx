
import React from 'react'
import AWS from "../images/aws.png";
import JavaScript from "../images/javascript (1).png";
import ReactImg from "../images/react (1).png";

import HTML from "../images/html (1).png"
import Github from "../images/github.png";
import Tailwind from "../images/tailwind (1).png";
import Mongo from "../images/mongo.png";
import CSS from "../images/css (1).png";
import NEXTJS from "../images/nextjs.png"
import TYPESCRIPT from "../images/typescript.png"



const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f] text-gray-300 '>
    
    {/* container */}
    <div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 '>Experience</p>
            <p className='py-4'>// These are the technologies i've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={HTML} alt='AWS Icon' />
                <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={CSS} alt='AWS Icon' />
                <p className='my-4'>CSS</p>
            </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={JavaScript} alt='AWS Icon' />
                <p className='my-4'>JAVASCRIPT</p>
            </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={ReactImg} alt='AWS Icon' />
                <p className='my-4'>REACT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Github} alt='AWS Icon' />
                <p className='my-4'>GITHUB</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Tailwind} alt='AWS Icon' />
                <p className='my-4'>TAILWIND</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={NEXTJS} alt='AWS Icon' />
                <p className='my-4'> NEXTJS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={TYPESCRIPT} alt='AWS Icon' />
                <p className='my-4'> TYPESCRIPT</p>
            </div>
        </div>
    </div>    

    </div>
  )
}

export default Skills


