import React from 'react'
import odoo01 from '/odoo01.jpg'
import odoo02 from '/odoo02.jpg'
import odoo03 from '/odoo03.jpg'
import odoo04 from '/odoo04.jpg'
import odoo05 from '/odoo05.jpg'
import odoo07 from '/odoo07.jpg'
import odoo08 from '/odoo08.jpg'
import odoo09 from '/odoo09.jpg'
import odoo010 from '/odoo010.jpg'
import odoo11 from '/odoo011.jpg'
import AdSense from './components/AdSense'
const Odoo = () => {
  return (
       <div>
           <div className='bg-[#f2f6f8]'>
          <AdSense />
                <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
              <div class="grid  grid-cols-1 md:grid-cols-2 gap-4 pb-8 ">          
            <div
  style={{
    backgroundColor: "#ffffff",
    border: "1px solid #cae4f1",
    borderRadius: 8,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    padding: 25,
    lineHeight: 1.8,
  }}
>
  <h1 style={{ fontWeight: "bold", marginBottom: 15 }}>
    Odoo Setup (Windows)
  </h1>

  <p>
    This guide explains how to set up <strong>Odoo</strong> on a Windows system
    step by step.
  </p>

  <h3><span style={{fontWeight:'bold'}}>Step 1: Check Python Version</span> </h3>
  <p>Run the following command to check if Python is installed:</p>
  <pre  >python --version</pre>
      
  <p>
    If Python is not installed, download it from the official website:
    <br />
    <a href="https://www.python.org/downloads/release/python-31011/" target="_blank">
      https://www.python.org/downloads/release/python-31011/
    </a>
  </p>

  <h3><span style={{fontWeight:'bold'}}>Step 2: Check Git Version</span></h3>
  <p>Verify Git installation using:</p>
  <pre >git --version</pre>

  <p>
    If Git is not installed, download it from:
    <br />
    <a href="https://git-scm.com/downloads" target="_blank">
      https://git-scm.com/downloads
    </a>
  </p>

  <img src={odoo04} className="rounded-xl border-2 my-3" />

  <h3><span style={{fontWeight:'bold'}}>Step 3: Install PostgreSQL</span></h3>
  <p>
    Download PostgreSQL from the official website:
    <br />
    <a
      href="https://www.postgresql.org/download/windows/"
      target="_blank"
    >
      https://www.postgresql.org/download/windows/
    </a>
  </p>

  <p>
    During installation, set the following:
    <br />
    <strong>Password:</strong> 2345678
    <br />
    <strong>Port:</strong> 5432
  </p>

  <img src={odoo01} className="rounded-xl border-2 my-2" />
  <img src={odoo02} className="rounded-xl border-2 my-2" />
  <img src={odoo03} className="rounded-xl border-2 my-2" />

  <h3><span style={{fontWeight:'bold'}}>Step 4: Clone Odoo Source Code</span></h3>
  <p>
    Visit the official Odoo GitHub repository:
    <br />
    <a href="https://github.com/odoo/odoo.git" target="_blank">
      https://github.com/odoo/odoo.git
    </a>
  </p>

  <p>Run the following command inside your project folder:</p>
  <pre 
  >
    git clone https://github.com/odoo/odoo.git
  </pre>

  <img src={odoo05} className="rounded-xl border-2 my-3" />

  <h3><span style={{fontWeight:'bold'}}>Step 5: Speed Up Git Download (Optional)</span></h3>
  <p>If the download is slow, run these commands:</p>

  <pre  >
    git config --global http.postBuffer 524288000
    <br />
    git config --global http.lowSpeedLimit 0
    <br />
    git config --global http.lowSpeedTime 999999
    <br />
    git config --global core.compression 0
  </pre>

  <p>Then clone the Odoo repository using:</p>
  <pre  >
    git clone --depth 1 --branch 17.0 https://github.com/odoo/odoo.git
  </pre>

  <img src={odoo07} className="rounded-xl border-2 my-3" />
   <p>Odoo 17.0 source code is successfully installed - following image showing</p>

   <img src={odoo08} className="rounded-xl border-2 my-3" />
</div>

                   <div style={{backgroundColor:'#fff', borderWidth:1, borderRadius:5,marginTop:15,marginLeft:5, marginRight:5, borderColor:'#cae4f1', padding:20}}> 
                     <p><span style={{fontWeight:'bold'}}>Step 6: Open folder in Visual Studio Code</span></p>
                                <p>Run: code .</p>
                      <img src={odoo09} className="rounded-xl border-2 my-3" />
                      <p>Visual Studio Code will open successfully, as shown in the following screenshot</p>
     <img src={odoo010} className="rounded-xl border-2 my-3" />
 <p><span style={{fontWeight:'bold'}}>Step 7: In the same VS Code terminal, run: python -m venv venv</span></p>
                         
                      <img src={odoo11} className="rounded-xl border-2 my-3" />
             
             <p>Install Microsoft C++ Build Tools

Open this link:
👉 https://visualstudio.microsoft.com/visual-cpp-build-tools/</p>
               <p>Upgrade pip & pip install -r requirements.txt</p>
               <p>python -m pip install --upgrade pip</p>
               <p>pip install -r requirements.txt</p>
                     </div>
                     </div>
                     </div>
                     </div>
                     </div>
  )
}

export default Odoo
