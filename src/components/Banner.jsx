import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='bg-blue-100'>

  
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className='p-8'>

        <h2 className='text-2xl font-bold'>Beginner-Friendly Design Code</h2>
         <span> – Try it on Expo</span>
        <p>I’ve created a design template using React Native and Tailwind CSS. A full React (MERN) stack application is coming soon!</p>


            </div>
             <div className='pt-8'>
            <Link to="/docs"><span class="underline">1. Vite React + Tailwind CSS 4.0 Setup</span></Link><br></br>
            <Link to="/github"><span class="underline">2. How to Connect Vite React App with GitHub Using VS Code</span></Link>

             </div>
        </div>


      </div>
    </div>
  )
}

export default Banner
