import React from 'react'
import portfolio01 from '/portfolio-01.png'
import portfolio02 from '/portfolio-02.png'
import portfolio04 from '/portfolio-04.png'
import portfolio05 from '/portfolio-05.png'
import web01 from '/ipad-mobile.jpg'
import web02 from '/laptop.jpg'
import { Link } from 'react-router-dom';

const Mainpage = () => {
  return (
<div className='bg-[#f2f6f8]'>    
<div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
<div><h2 className='font-bold p-4'>React Native UI Templates</h2></div>
<div class="grid  grid-cols-1 md:grid-cols-4 gap-4 pb-8 ">
<div className='shadow-xl/20 border-3 border-white rounded-l p-2 align-middle items-center text-center rounded-xl'>
<img src={portfolio01} className='pt-8' />
<p className='pt-4 pb-4'>Profile screen with user info</p>

{/* <button class="bg-blue-100 hover:bg-blue-100 text-black p-2 rounded-lg border border-[#ddd] focus:ring-2 focus:ring-blue-300">
  View Code
</button> */}

<button
  onClick={() => window.open('https://snack.expo.dev/@dijidynamics/profile-page', '_blank')}
  className="mt-2 bg-blue-200 hover:bg-blue-300 text-black p-2 rounded-lg border border-[#ddd] focus:ring-2 focus:ring-blue-300"
>
🚀 View Code on Expo Snack!
</button>

</div>
<div className='shadow-xl/20 border-3 border-white rounded-l p-2 align-middle items-center text-center rounded-xl'>
<img src={portfolio02} className='pt-8' />
<p className='pt-4 pb-4'>Bottom Tab with Icons</p>

{/* <button class="bg-blue-100 hover:bg-blue-100 text-black p-2 rounded-lg border border-[#ddd] focus:ring-2 focus:ring-blue-300">
  View Code
</button> */}

<button
  onClick={() => window.open('https://snack.expo.dev/@dijidynamics/rn-bottom-tabs', '_blank')}
  className="mt-2 bg-blue-200 hover:bg-blue-300 text-black p-2 rounded-lg border border-[#ddd] focus:ring-2 focus:ring-blue-300"
>
🚀 View Code on Expo Snack!
</button>

</div>
<div className='shadow-xl/20 border-3 border-white rounded-l p-2 align-middle items-center text-center rounded-xl'>
<img src={portfolio04} className='pt-8' />
<p className='pt-4 pb-4'>Dashboard with Chart</p>

{/* <button class="bg-blue-100 hover:bg-blue-100 text-black p-2 rounded-lg border border-[#ddd] focus:ring-2 focus:ring-blue-300">
  View Code
</button> */}

<button
  onClick={() => window.open('https://snack.expo.dev/@dijidynamics/crm-dashboard-with-chart', '_blank')}
  className="mt-2 bg-blue-200 hover:bg-blue-300 text-black p-2 rounded-lg border border-[#ddd] focus:ring-2 focus:ring-blue-300"
>
🚀 View Code on Expo Snack!
</button>

</div>
<div className='shadow-xl/20 border-3 border-white rounded-l p-2 align-middle items-center text-center rounded-xl'>
<img src={portfolio05} className='pt-8' />
<p className='pt-4 pb-4'>Food Order Screen</p>

{/* <button class="bg-blue-100 hover:bg-blue-100 text-black p-2 rounded-lg border border-[#ddd] focus:ring-2 focus:ring-blue-300">
  View Code
</button> */}

<button
  onClick={() => window.open('https://snack.expo.dev/@dijidynamics/food-app-dashboard', '_blank')}
  className="mt-2 bg-blue-200 hover:bg-blue-300 text-black p-2 rounded-lg border border-[#ddd] focus:ring-2 focus:ring-blue-300"
>
🚀 View Code on Expo Snack!
</button>

</div>

</div>    
<div className="text-center mt-8">
  <Link to="/rn-templates">
    <button className="bg-white hover:bg-blue-100 text-blue-600 font-semibold py-2 px-5 rounded-lg border border-blue-300 shadow-sm transition-all duration-200">
      🔍 View All Templates
    </button>
  </Link>
</div>

 <div >
  <div><h2 className='font-bold p-4'>Dashboard UI – Built with Tailwind CSS & React</h2></div>
           <div class="grid  lg:grid-cols-2 md:grid-cols-4 gap-4 pb-8 ">
               <div className='shadow-xl/20 border-3 border-white rounded-l p-2 align-middle items-center text-center rounded-xl'>
               
               <p class="flex items-center gap-2 text-gray-700">
  Hosted on 
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" 
       class="w-5 h-5 text-orange-500">
    <path fill="currentColor" d="M142.8 45.2L87.5 141.1h38.7l-34.9 61.7 99.6-55.2h-38.7l34.9-61.7z"/>
  </svg>
  AWS Amplify: 
  <a href="https://main.d26eyfxyn8p783.amplifyapp.com" 
     target="_blank" 
     class="text-blue-600 hover:text-blue-800 underline">
     https://main.d26eyfxyn8p783.amplifyapp.com
  </a>
</p>


               <img src={web02} className='pt-8' />
               <button
  onClick={() => window.open('https://github.com/dijidynamics/dashboard01-tailwindcss/tree/main/client', '_blank')}
  className="mt-2 bg-blue-200 hover:bg-blue-300 text-black p-2 rounded-lg border border-[#ddd] focus:ring-2 focus:ring-blue-300"
>
🚀 View Code on Github!
</button>

   
</div>
                <div className='shadow-xl/20 border-3 bg-[#e9ebed] border-white rounded-l p-2 align-middle items-center text-center rounded-xl'><img src={web01} className='pt-8' /></div>
            </div>

            <div className="text-center mt-8">
  <Link to="/tailwind">
    <button className="bg-white hover:bg-blue-100 text-blue-600 font-semibold py-2 px-5 rounded-lg border border-blue-300 shadow-sm transition-all duration-200">
      🔍 View All Templates
    </button>
  </Link>
</div>
            </div>
</div>
</div>
  )
}

export default Mainpage
