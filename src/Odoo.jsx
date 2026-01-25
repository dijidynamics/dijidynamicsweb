import React from 'react'
import doc00 from '/doc00.jpg'
import doc01 from '/doc01.jpg'
import doc02  from '/doc02.jpg'
import doc03  from '/doc03.jpg'
import doc04  from '/doc04.jpg'
import doc05  from '/doc05.jpg'
import doc06  from '/doc06.jpg'
import doc07 from '/doc07.jpg'
import doc08 from '/doc08.jpg'
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
  <h1><span style={{fontWeight:'bold'}}>Install & Run Odoo using Docker</span></h1>
  <h2>
   <span style={{fontWeight:'bold'}}> STEP 1: </span>
    Download Docker Desktop (Windows)
  </h2>
  <p>Go to: https://www.docker.com/products/docker-desktop/ <br></br>
  Click “Download for Windows” <br></br>
      <img src={doc01} className="rounded-xl" alt="" />
      <br></br>
  </p>
  <p> <span style={{fontWeight:'bold'}}> STEP 2: </span> Open Command Prompt and run: docker --version</p>
   <img src={doc02} className="rounded-xl" alt="" />
   <p>Run Docker Engine first</p>
     <img src={doc00} className="rounded-xl" alt="" />
   <p> <span style={{fontWeight:'bold'}}> STEP 3: </span> Create new project folder 'odoocrm' & cmd run : notepad docker-compose.yml </p>
   <img src={doc03} className="rounded-xl" alt="" />
   <p>Go to the folder location and find the docker-compose file. Right-click it, open it with Notepad.</p>
<img src={doc04} className="rounded-xl" alt="" />
<p><span style={{fontWeight:'bold'}}>Paste the following content exactly, and save the file.</span>
<pre>
  <code>{`
version: '3.1'
services:
  db:
    image: postgres:15
    environment:
      POSTGRES_DB: postgres
      POSTGRES_USER: odoo
      POSTGRES_PASSWORD: odoo
    restart: always
  odoo:
    image: odoo:17
    depends_on:
      - db
    ports:
      - "8069:8069"
    environment:
      - HOST=db
      - USER=odoo
      - PASSWORD=odoo
    restart: always
  `}</code>
</pre>
</p>
  
    <img src={doc05} className="rounded-xl" alt="" />
<p><span style={{fontWeight:'bold'}}>STEP 4: </span>
Open code with visual studio run this comment : code .</p>
 <img src={doc06} className="rounded-xl" alt="" />
<p><span style={{fontWeight:'bold'}}>STEP 5:</span>
go to visual sudio code click view click terminal
 <img src={doc07} className="rounded-xl" alt="" />
</p>
<p><span style={{fontWeight:'bold'}}>STEP 6:</span> run this cmd in visual studio terminal  : 
  docker-compose up -d  </p>
<img src={doc08} className="rounded-xl" alt="" />
   <br></br>
   <p>C:\dijidynamics2025\odooswimap - docker pull postgres:15</p>
   <p>docker pull odoo:17</p>
</div>

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
>test</div>
                     </div>
                     </div>
                     </div>
                     </div>
  )
}

export default Odoo
