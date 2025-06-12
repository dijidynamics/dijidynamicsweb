import React, {Image} from 'react'
import step01 from '/steps.jpg'
import step02 from '/steps2.jpg'
import step03 from '/steps3.jpg'
import step05 from '/steps5.jpg'
import step07 from '/step7.jpg'
import step08 from '/step8.jpg'
import step09 from '/step9.jpg'
import step10 from '/step10.jpg'
import step11 from '/step11.jpg'
import step12 from '/step12.jpg'
import step13 from '/step13.jpg'
import step14 from '/step14.jpg'
import step16 from '/step16.jpg'
import step17 from '/step17.jpg'
import step18 from '/step18.jpg'
const Docs = () => {
  return (
    <div className='bg-[#f2f6f8]'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
    <div class="grid  grid-cols-1 md:grid-cols-2 gap-4 pb-8 ">

        <div style={{backgroundColor:'#fff', borderWidth:1, borderRadius:5,marginTop:15,marginLeft:5, marginRight:5, borderColor:'#cae4f1', padding:20}}>  <h1 style={{fontWeight:'bold'}} ><br></br> Vite React + Tailwind CSS 4.0 Setup</h1>
      <p><br></br> 1. C:\project-folder&gt;<span style={{fontWeight:'bold', color:'#9c27b0'}}>npm create vite@latest </span><br></br></p>
      <p><br></br>2. Enter Project Name:<span style={{fontWeight:'bold', color:'#9c27b0'}}> CRM-Dashboard-01</span><img src={step01} className='rounded-xl' /> </p>
      <p>3. Select <span style={{fontWeight:'bold', color:'#9c27b0'}}>React </span> framework<img src={step02} className='rounded-xl' /> </p>
      <p>4. Select <span style={{fontWeight:'bold', color:'#9c27b0'}}>Javascript</span> <img src={step03} className='rounded-xl' /> </p>
       <p>5. C:\project-folder&gt;<span style={{fontWeight:'bold', color:'#9c27b0'}}>cd CRM-Dashboard-01 </span>  <br></br> <img src={step05} className='rounded-xl'  /> </p>
           <p> 6. Open Project in VS Code -&gt; 'code .' <br></br>     C:\project-folder&gt;CRM-Dashboard-01&gt; <span style={{fontWeight:'bold', color:'#9c27b0'}}>code .</span> <br></br></p>
           <p><br></br><span style={{fontWeight:'bold'}}>The project has been successfully opened in Visual Studio Code, as shown in the screenshot below.</span></p>
            <p><img src={step07} className='pb-8'  /> </p>
               <p>7. Next, open the terminal in VS Code using the menu: Terminal &gt; New Terminal. <br></br>
           <img src={step08} className='pb-8'  />
           </p>
                <p>8. Install Project Dependencies <br></br>C:\project-folder&gt;CRM-Dashboard-01&gt;<span style={{fontWeight:'bold', color:'red'}}>npm install</span>  <br></br>
            <img src={step09} className='rounded-2xl'  />
           
             </p>
           <p>9. Start the Development Server <br></br> C:\project-folder&gt;CRM-Dashboard-01&gt;<span style={{fontWeight:'bold', color:'red'}}>npm run dev</span>
           <img src={step10} className='rounded-2xl'  />  <br></br> 


              </p>
      </div>

         <div style={{backgroundColor:'#fff', borderWidth:1, borderRadius:5,marginTop:15,marginLeft:5, marginRight:5, borderColor:'#cae4f1', padding:20}}>  
          
            
      
             <p>10. "Open your browser (e.g., Chrome) and visit the following URL to view the project: <br></br> <span style={{color:'blue', fontWeight:'bold'}}>
http://localhost:5174</span>"</p>
         
           <p><br></br><span style={{fontWeight:'bold'}}>The product is running successfully, as shown in the screenshot below.</span><br></br>
           <img src={step11} className='rounded-2xl'  />
           </p>
           <p><br></br>11. Install Tailwind CSS <br></br>
           C:\project-folder&gt;CRM-Dashboard-01&gt;<span style={{fontWeight:'bold', color:'#9c27b0'}}>npm install tailwindcss @tailwindcss/vite</span>
            <img src={step12} className='rounded-2xl'  />
             </p>
             <br></br>
           <p>Step 12: Open the <span style={{fontWeight:'bold', color:'#000'}}>vite.config.js</span> file in your project<br></br><br></br>
           import tailwindcss from <span style={{fontWeight:'bold', color:'#9c27b0'}}>'@tailwindcss/vite'</span> // 👈 Import Tailwind plugin <br></br>
            plugins: [ <br></br> <span style={{fontWeight:'bold', color:'#9c27b0'}}>tailwindcss()</span> // 👈 Use the Tailwind plugin <br>
            </br>
            ], <br></br>
             <img src={step13} className='rounded-2xl'  /> </p>
             <br></br>
           <p>Step 13: Open the index.css file <br></br>
           Add <span style={{fontWeight:'bold', color:'#9c27b0'}}>@import "tailwindcss";</span> <br></br>
             <img src={step14} className='rounded-2xl'  />           
           </p>
           <p><br></br>Step 14: 💡 How to Confirm Tailwind Is Working -&gt; Open App.jsx add Tailwind Css Style <br></br>
           ClassName=<span style={{fontWeight:'bold', color:'red'}}>"text-blue-600"</span> 	Sets the text color to a medium blue shade. <br></br>
           ClassName=<span style={{fontWeight:'bold', color:'red'}}>"grid-cols-3"</span> Defines 3 equal-width columns.
                       <img src={step17} className='rounded-2xl'  />
           </p>
                  <p><br></br>Step 15: Start the Development Server <span style={{fontWeight:'bold', color:'red'}}>"npm run dev"</span> & test tailwind css style<br></br>
                       <img src={step18} className='rounded-2xl'  /> <br></br>
                     <span style={{fontWeight: 'bold'}}>Tailwind CSS styles are working fine, as shown in the screenshot below.</span>
                       <img src={step16} className='rounded-2xl'  />
           </p>
           </div>
        

    </div>

      

    </div>
    </div>
  )
}

export default Docs
