

import React, { useEffect, useState, useRef } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import './Home.css'; 

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const nameRef = useRef(null);
  const roleRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);

    const nameElement = nameRef.current;
    const roleElement = roleRef.current;

    const handleNameAnimationEnd = () => {
      nameElement.classList.add('finished');
    };

    const handleRoleAnimationEnd = () => {
      roleElement.classList.add('finished');
    };

    nameElement.addEventListener('animationend', handleNameAnimationEnd);
    roleElement.addEventListener('animationend', handleRoleAnimationEnd);

    return () => {
      nameElement.removeEventListener('animationend', handleNameAnimationEnd);
      roleElement.removeEventListener('animationend', handleRoleAnimationEnd);
    };
  }, []);

  return (
    <div name='home' className={`bg-[#0a192f] w-full h-screen ${isVisible ? 'fade-in' : ''}`}>
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className={`text-pink-600 ${isVisible ? 'slide-in' : ''}`}>Hi, my name is</p>
            <h1 ref={nameRef} className={`text-4xl sm:text-7xl font-bold text-[#ccd6f6] ${isVisible ? 'typing-name' : ''}`}>Friday Samuel</h1>
            <h2 ref={roleRef} className={`text-[#8892b0] text-3xl sm:text-5xl font-bold ${isVisible ? 'typing-role' : ''}`}>I'm a Front-end Developer</h2>
            <p className={`text-[#8892b0] py-4 max-w-[700px] ${isVisible ? 'slide-in' : ''}`}>I'm a Front-end Developer specializing in building and occasionally designing exceptional digital experience. Currently, I'm focused on building responsive front-end web interface </p>
         <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 button-hover' >View Work 
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-4' />
            </span>
           </button>
        </div>
        </div>
    </div>
  )
}

export default Home
