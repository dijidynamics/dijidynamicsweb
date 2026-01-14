import React from 'react'
import bootstrap01 from '/bootstrap01.jpg'
import bootstrap02 from '/bootstrap02.jpg'
import bootstrap03 from '/bootstrap03.jpg'
import bootstrap04 from '/bootstrap04.jpg'
import bootstrap05 from '/bootstrap05.jpg'
import bootstrap06 from '/bootstrap06.jpg'
import bootstrap07 from '/bootstrap07.jpg'
import bootstrap08 from '/bootstrap08.jpg'
import bootstrap09 from '/bootstrap09.jpg'
import bootstrap10 from '/bootstrap10.jpg'
import bootstrap11 from '/bootstrap11.jpg'
import AdSense from './components/AdSense'
const Bootstrap = () => {
  return (
        <div className='bg-[#f2f6f8]'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <AdSense />
    <div class="grid  grid-cols-1 md:grid-cols-2 gap-4 pb-8 ">

        <div style={{backgroundColor:'#fff', borderWidth:1, borderRadius:5,marginTop:15,marginLeft:5, marginRight:5, borderColor:'#cae4f1', padding:20}}> 
           <h1 style={{fontWeight:'bold'}} ><br></br> Vite React + Bootsrap Setup</h1>
npm install vite@6.2.5 --save-dev
      <p><br></br> 1. C:\project-folder&gt;<span style={{fontWeight:'bold', color:'#9c27b0'}}>npm create vite@latest or </span><br></br>
      Enter the project name, then select the framework ‘React’ and the variant ‘JavaScript’.</p>
      <img src={bootstrap01}  className='rounded-xl w-64' />
      <p>2. C:\project-folder&gt;<span style={{fontWeight:'bold', color:'#9c27b0'}}>cd volunteer-connect </span>  <br></br> <img src={bootstrap02} className='rounded-xl'  /> </p>
                 <p> 3. Open Project in VS Code -&gt; 'code .' <br></br>     C:\project-folder&gt;volunteer-connect&gt; <span style={{fontWeight:'bold', color:'#9c27b0'}}>code .</span> <br></br></p>
                 <p><br></br><span style={{fontWeight:'bold'}}>The project has been successfully opened in Visual Studio Code, as shown in the screenshot below.</span></p>
                  <p><img src={bootstrap03} className='pb-8'  /> </p>
             
    <p>4. Install Project Dependencies <br></br>C:\project-folder&gt;volunteer-connect&gt;<span style={{fontWeight:'bold', color:'#9c27b0'}}>npm install</span>  <br></br></p>
            <img src={bootstrap04} className='rounded-2xl w-64'  />

             <p>5. Start the Development Server <br></br> C:\project-folder&gt;volunteer-connect&gt;<span style={{fontWeight:'bold', color:'#9c27b0'}}>npm run dev</span>
                       <img src={bootstrap05} className='rounded-xl w-80'  />  <br></br> 
            
            
                          </p>

                              <p>6. "Open your browser (e.g., Chrome) and visit the following URL to view the project: <br></br> <span style={{color:'blue', fontWeight:'bold'}}>
           http://localhost:5174</span>"</p>
                    
                      <p><br></br><span style={{fontWeight:'bold'}}>The product is running successfully, as shown in the screenshot below.</span><br></br>
                      <img src={bootstrap06} className='rounded-2xl'  />
                      </p>
    </div>
        <div style={{backgroundColor:'#fff', borderWidth:1, borderRadius:5,marginTop:15,marginLeft:5, marginRight:5, borderColor:'#cae4f1', padding:20}}> 
           
                    
<p><br></br>7. Install Bootstrap CSS <br></br>
           C:\project-folder&gt;volunteer-connect&gt;<span style={{fontWeight:'bold', color:'#9c27b0'}}>npm install bootstrap</span>
            <img src={bootstrap07} className='rounded-2xl'  />
             </p>
             <br></br>
             <p><br></br>8. Open package.json: <br></br></p>
 <img src={bootstrap08} className='rounded-2xl'  />
<p><br></br>9. Open src/main.jsx and add: <br></br>
<span style={{fontWeight:'bold', color:'#9c27b0'}}>import 'bootstrap/dist/css/bootstrap.min.css';</span> <br></br>
<span style={{fontWeight:'bold', color:'#9c27b0'}}>import 'bootstrap/dist/js/bootstrap.bundle.min.js';</span> <br></br>
<img src={bootstrap09} className='rounded-2xl'  />
</p>
  <p className='text-sm'><br></br>Step 10: 💡 How to Confirm Bootstrap Is Working -&gt; Open App.jsx add Boostrap Css Style <br></br>
           ClassName=<span style={{fontWeight:'bold', fontSize: '0.875rem', color:'#9c27b0'}}>"row"</span> Creates a horizontal row. <br></br>
           ClassName=<span style={{fontWeight:'bold', fontSize: '0.875rem', color:'#9c27b0'}}>"col bg-primary"</span> Creates an equal-width column with a primary bg color.<br></br>
               ClassName=<span style={{fontWeight:'bold', fontSize: '0.875rem', color:'#9c27b0'}}>"col bg-secondary"</span> Creates an equal-width column with a sec bg color.<br></br>
                   ClassName=<span style={{fontWeight:'bold',fontSize: '0.875rem',  color:'#9c27b0'}}>"col bg-success"</span> Creates an equal-width column with a green bg color.<br></br>
                       ClassName=<span style={{fontWeight:'bold', fontSize: '0.875rem', color:'#9c27b0'}}>"col bg-danger"</span> Creates an equal-width column with a red bg color.<br></br>
                     <img src={bootstrap11} className='rounded-2xl'  />
   
        
           </p>
           <p><br></br>Step 11: Start the Development Server <span style={{fontWeight:'bold', color:'#9c27b0'}}>"npm run dev"</span> & test Bootstrap css style<br></br></p>  
      
                    <span style={{fontWeight: 'bold'}}>Bootstrap CSS styles are working fine, as shown in the screenshot below.</span>
                    <img src={bootstrap10} className='rounded-2xl'  />

</div>
    </div>
    </div>
    </div>
  )
}

export default Bootstrap
