import React from 'react';
import web01 from '/ipad-mobile.jpg'
import web02 from '/laptop.jpg'

const TailwindPage = () => {
  return (
   
      <div className='bg-[#f2f6f8]'>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                <div><h2 className='font-bold p-4'>Dashboard UI – Built with Tailwind CSS & React</h2></div>
                
                     
                 
                                <div class="grid  lg:grid-cols-2 md:grid-cols-4 gap-4 pb-8 ">
                                    <div className='shadow-xl/20 border-3 border-white rounded-l p-2 align-middle items-center text-center rounded-xl'><img src={web02} className='pt-8' /></div>
                                     <div className='shadow-xl/20 border-3 bg-[#e9ebed] border-white rounded-l p-2 align-middle items-center text-center rounded-xl'><img src={web01} className='pt-8' /></div>
                                 </div>
                             

                </div>
                </div>
                
  );
};

export default TailwindPage;
