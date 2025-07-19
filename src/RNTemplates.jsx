import React from 'react'
import portfolio01 from '/portfolio-01.png'
import portfolio02 from '/portfolio-02.png'
import portfolio04 from '/portfolio-04.png'
import portfolio05 from '/portfolio-05.png'
import portfolio07 from '/portfolio-07.png'
function RNTemplates() {
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
                            🚀 View Code on Expo Snack
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
                            🚀 View Code on Expo Snack
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
                            🚀 View Code on Expo Snack
                        </button>

                    </div>
                    <div className='shadow-xl/20 border-3 border-white rounded-l p-2 align-middle items-center text-center rounded-xl'>
                        <img src={portfolio05} className='pt-8' />
                        <p className='pt-4 pb-4'>Food Order Screen</p>

                        {/* <button class="bg-blue-100 hover:bg-blue-100 text-black p-2 rounded-lg border border-[#ddd] focus:ring-2 focus:ring-blue-300">
              View Code
            </button> */}

                        <button
                            onClick={() => window.open('https://snack.expo.dev/@dijidynamics/crm-dashboard-with-chart', '_blank')}
                            className="mt-2 bg-blue-200 hover:bg-blue-300 text-black p-2 rounded-lg border border-[#ddd] focus:ring-2 focus:ring-blue-300"
                        >
                            🚀 View Code on Expo Snack
                        </button>

                    </div>
                </div>
   <div class="grid  grid-cols-1 md:grid-cols-4 gap-4 pb-8 ">
         <div className='shadow-xl/20 border-3 border-white rounded-l p-2 align-middle items-center text-center rounded-xl'>
                        <img src={portfolio07} className='pt-8' />
                        <p className='pt-4 pb-4'>Navigation Drawer Side Menu</p>

                        {/* <button class="bg-blue-100 hover:bg-blue-100 text-black p-2 rounded-lg border border-[#ddd] focus:ring-2 focus:ring-blue-300">
              View Code
            </button> */}

                        <button
                            onClick={() => window.open('https://snack.expo.dev/@dijidynamics/drawer-sidebar-menu', '_blank')}
                            className="mt-2 bg-blue-200 hover:bg-blue-300 text-black p-2 rounded-lg border border-[#ddd] focus:ring-2 focus:ring-blue-300"
                        >
                            🚀 View Code on Expo Snack
                        </button>

                    </div>


   </div>

            </div>
        </div>
    )
}

export default RNTemplates
