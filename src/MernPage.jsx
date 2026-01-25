import React from 'react'
import mern01 from '/chatbotapplication.png'
import mern02 from '/chatbotapplication01.png'

const MernPage = () => {
  return (
    <div className='bg-[#f2f6f8]'>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                <div><h2 className='font-bold p-4'>Developed AI-powered chatbot platform using React, Tailwind CSS & OpenAI API</h2>
                  <a
  href="https://www.gatheroapp.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 hover:text-blue-800 underline font-medium p-4"
>      Visit Live Demo       https://www.gatheroapp.com/
</a>
           
             <a
  href="https://www.gatheroapp.com/"
  target="_blank"
  rel="noopener noreferrer"
>                     
 <img src={mern02} className='pt-8  border-blue-400 border  p-2 rounded-2xl' />
 </a> 
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto p-6">

  {/* Tech Stack Box */}
  <div className="bg-white rounded-xl shadow-md p-6 border border-blue-400">
    <h2 className="text-xl font-semibold mb-4 text-gray-800">
      🔧 Tech Stack
    </h2>
    <ul className="space-y-2 text-gray-600">
      <li><strong>Frontend:</strong> React.js + CSS</li>
      <li><strong>Backend:</strong> Node.js + Express</li>
      <li><strong>AI:</strong> OpenAI API</li>
      <li><strong>Database:</strong> MongoDB</li>
      <li><strong>Authentication:</strong> Firebase Auth</li>
      <li><strong>Hosting:</strong> AWS EC2 (Frontend & Backend)</li>
      <li><strong>Domain:</strong> Hostinger</li>
    </ul>
  </div>

  {/* Features Box */}
  <div className="bg-white rounded-xl shadow-md p-6 border-blue-400 border ">
    <h2 className="text-xl font-semibold mb-4 text-gray-800">
      ✨ Features
    </h2>
    <ul className="space-y-2 text-gray-600 list-disc list-inside">
      <li>AI-powered real-time chat responses</li>
      <li>Custom chatbot name, icon, text color & theme</li>
      <li>Add tags & FAQs to fine-tune answers</li>
      <li>Replies based strictly on user-saved content</li>
      <li>Auto-generated replies using OpenAI</li>
      <li>Dashboard to manage multiple chatbots</li>
    </ul>
  </div>

</div>

 <br></br>
              <a
  href="https://www.gatheroapp.com/"
  target="_blank"
  rel="noopener noreferrer"
>  
  <img src={mern01} className='pt-8 border-blue-400 border  p-2 rounded-2xl' />
  </a>
                                    </div>
       </div>
    </div>
  )
}

export default MernPage

