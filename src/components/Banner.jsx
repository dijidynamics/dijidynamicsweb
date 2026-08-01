import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='bg-blue-100'>

  
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className='p-8'>

       {/* <h2 className='text-2xl font-bold'>Beginner-Friendly Design Code</h2>
         <span> – Try it on Expo</span>
        <p>I’ve created a design template using React Native and Tailwind CSS. A full React (MERN) stack application is coming soon!</p>
*/} 
<div className="inline-flex items-center rounded-full bg-green-100 text-green-700 px-4 py-2 text-sm font-semibold mb-4">
  🟢 Available for Frontend Software Developer Opportunities
</div>

<h4 className="text-2xl font-bold text-gray-900 leading-tight">
  Hi, I'm Balaji 👋
</h4>

<h3 className="mt-2 text-2xl font-semibold text-blue-700 leading-relaxed">
  Frontend Software Developer
</h3>
{/* 
<p className="mt-2 text-lg font-medium text-gray-700 hidden">
  React.js • React Native • Vue.js • JavaScript • Tailwind CSS • Bootstrap • Node.js
</p> */}

<p className="mt-2 text-md text-gray-700 leading-5">
  I build modern, responsive, and scalable web and mobile applications
  using <strong>React.js</strong>, <strong>React Native</strong>,
  <strong>Vue.js</strong>, <strong>Tailwind CSS</strong>,
  <strong>Bootstrap</strong>, <strong>Node.js</strong>,
  <strong>Express.js</strong>, <strong>MongoDB</strong>,
  <strong>PostgreSQL</strong>, <strong>Firebase</strong>,
  <strong>AWS</strong>, <strong>Git</strong>, and <strong>GitHub</strong>.
  I also build AI-powered applications using
  <strong> Python</strong>, <strong>OpenAI APIs</strong>,
  <strong>OCR</strong>, <strong>Face Recognition</strong>,
  and <strong>Local LLM Integration</strong>.
</p>

<div className="mt-8 flex flex-wrap gap-3 text-gray-700 font-medium">
  <span className="bg-white shadow px-4 py-2 rounded-lg">✔ 9+ Years Experience</span>
  {/* <span className="bg-white shadow px-4 py-2 rounded-lg">✔ 15+ Projects</span> */}
  <span className="bg-white shadow px-4 py-2 rounded-lg">✔ 3 Android Apps</span>
</div>


            </div>
             <div className='pt-8'>
                  <h3 className="text-2xl font-bold text-gray-900">
        📚 Frontend Developer Guides
    </h3>

    <p className="text-gray-600 mt-2 mb-5">
        Step-by-step tutorials for React, Vue, Node.js, AWS and modern frontend development.
    </p>
            <Link to="/docs"><span class="underline">1. Vite React + Tailwind CSS 4.0 Setup</span></Link><br></br>
            <Link to="/bootstrapdoc"><span class="underline">2. Vite React + Bootstrap Setup</span></Link><br></br>
            <Link to="/github"><span class="underline">3. How to Connect Vite React App with GitHub Using VS Code</span></Link><br></br>
             <Link to="/api"><span class="underline">4. Create API with MongoDB, Node.js, and Express</span></Link><br></br>
             <Link to="/awsguide"><span class="underline">5. How to Deploy a React Static Site to AWS Amplify (Free Plan)</span></Link><br></br>
               <Link to="/vuedocs"><span class="underline">6. Vite Vue + Tailwind CSS 4.0 Setup</span></Link><br></br>
            <Link to="/odoo"><span class="underline">7. Odoo Setup</span></Link><br></br>

              {/*  <Link to="/awsec2"><span class="underline">6. How to Deploy backend (MongoDB, Node.js, and Express) for create API  on AWS EC2 </span></Link><br></br>*/}
           {/*  <Link to="/firebasetup"><span class="underline">7. Firebase Authentication setup with React </span></Link>
             <Link to="/firebase"><span class="underline">6. Firebase Authentication with React (Vite)</span> </Link><br></br>
             <Link to="/reactnativesetup"><span class="underline" >7. React Native begineer guide </span></Link>*/} 
             </div>
        </div>


      </div>
       </div>
  )
}

export default Banner
