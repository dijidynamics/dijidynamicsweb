import React from 'react'
import vue01 from '/vue01.jpg'
import vue03 from '/vue03.jpg'
import vue05 from '/vue05.jpg'
import vue06 from '/vue06.jpg'
import vue07 from '/vue07.jpg'
import vue08 from '/vue08.jpg'
import vue09 from '/vue09.jpg'
import vue10 from '/vue10.jpg'
import vue11 from '/vue11.jpg'
import vue12 from '/vue12.jpg'
import vue13 from '/vue13.jpg'
const Vuedocs = () => {
  return (
    <div>
       <div className='bg-[#f2f6f8]'>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
          <div class="grid  grid-cols-1 md:grid-cols-2 gap-4 pb-8 ">
      
              <div style={{backgroundColor:'#fff', borderWidth:1, borderRadius:5,marginTop:15,marginLeft:5, marginRight:5, borderColor:'#cae4f1', padding:20}}> 
                 <h1 style={{fontWeight:'bold'}} ><br></br> Vite Vue + Tailwind CSS 4.0 Setup</h1>
            <h2> Prerequisites</h2>
            <p><b>Step 1: check node version</b><br></br>node -v</p>
            <p><b>Step 2: check npm version</b><br></br> npm -v</p>
             <p> <img src={vue01} className='rounded-xl border-2' /> </p>
             <p ><br></br><b>Step 3: </b>C:\dijidynamics2025\Vueprojects &gt;<span style={{fontWeight:'bold', color:'#009688'}}>npm create vite@latest</span><br></br></p>
            <p><br></br><b>Step 4: </b>Enter Project Name:<span style={{fontWeight:'bold', color:'#009688'}}>vuedashboard</span> </p>
            <p>
|  Select a framework: Vue <br></br>
|  Select a variant: JavaScript <br></br>
|  Use rolldown-vite (Experimental)?: No  <br></br>
| Install with npm and start now? |  Yes</p>
  <p> <img src={vue03} className='rounded-xl border-2' /> </p>
  <p><b>Step 5: </b>Open the project through Visual Studio Code. C:\dijidynamics2025\Vueprojects\vuedashboard&gt;code .</p>
  <p> <img src={vue05} className='rounded-xl border-2' /> </p>
  <p><b>Step 6: </b>Go to Visual Studio → View → Terminal → <span style={{fontWeight:'bold', color:'#009688'}}> run npm run dev.</span> </p>
    <p> <img src={vue06} className='rounded-xl border-2' /> </p>
    <p>We have successfully installed Vite + Vue, as shown in the screen below.</p>
        <p> <img src={vue07} className='rounded-xl border-2' /> </p>
            </div>

          <div style={{backgroundColor:'#fff', borderWidth:1, borderRadius:5,marginTop:15,marginLeft:5, marginRight:5, borderColor:'#cae4f1', padding:20}}> 
                          <h1 style={{fontWeight:'bold'}} ><br></br> Vite Vue + Tailwind CSS 4.0 Setup</h1>
                          <p><b>Step 6:</b><span style={{fontWeight:'bold', color:'#009688'}}> npm install tailwindcss @tailwindcss/vite</span> </p>
                            <p> <img src={vue08} className='rounded-xl border-2' /> </p>
                              <p><br></br><b>Step 7: </b> Open the <span style={{fontWeight:'bold', color:'#009688'}}>vite.config.js</span> file in your project</p>
                      <pre>
  <code>
{`import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})`}
  </code>
</pre>
 <p>
 <img src={vue09} class="rounded-xl border-2" />
</p>

<p><br></br><b>Step 8: </b> Go to the <code>src</code> folder and open the <code> <span style={{fontWeight:'bold', color:'#009688'}}>style.css</span></code> file.</p>

<p>Add the following line inside <code>style.css</code>:</p>

<pre>
  <code>
<b> <span style={{fontWeight:'bold', color:'#009688'}}>@import "tailwindcss";</span></b>
  </code>
  <p>
     <img src={vue10} class="rounded-xl border-2" />
  </p>
  </pre>
<p><br></br><b>Step 9:</b> Go to the <code>src</code> folder and open the <code> <span style={{fontWeight:'bold', color:'#009688'}}>App.vue</span></code> file.</p>
<p>Add the following code inside the <b> <span style={{fontWeight:'bold', color:'#009688'}}>&lt;template&gt;</span></b>  section:</p>
<pre>
  <code>
     <span style={{fontWeight:'bold', color:'#009688'}}>
   {`<div class="grid grid-cols-3 gap-4">
  <div class="bg-red-300">01</div>
  <div class="bg-emerald-200">02</div>
  <div class="bg-blue-200">03</div>
</div>`}
</span>
  </code>
</pre>
<p><br></br><b>Step 10:</b><br></br> Start the Development Server
  <span style={{fontWeight:'bold', color:'#009688'}}>"npm run dev" </span> & test tailwind css style</p>

<p>
Tailwind CSS styles are working fine, as shown in the screenshot below.</p>
  <img src={vue12} class="rounded-xl border-2" />
  <br></br>
    <img src={vue13} class="rounded-xl border-2" />
          </div>
      
            </div>
            </div>
            </div>
    </div>
  )
}

export default Vuedocs
