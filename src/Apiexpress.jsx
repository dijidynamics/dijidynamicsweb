import React, {Image} from 'react'
import api01 from '/api-01.jpg' 
import api02 from '/api-02.jpg' 
import api03 from '/api-03.jpg' 
import api05 from '/api-05.jpg' 
import api06 from '/api-06.jpg'
import api07 from '/api-07.jpg'
import api08 from '/api-08.jpg'
import api09 from '/api-09.jpg'

const Apiexpress = () => {
  return (
        <div className='bg-[#f2f6f8]'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
         <div class="grid  grid-cols-1 md:grid-cols-2 gap-4 pb-8 ">

        <div style={{backgroundColor:'#fff', borderWidth:1, borderRadius:5,marginTop:15,marginLeft:5, marginRight:5, borderColor:'#cae4f1', padding:20}}> 
       
        <p><span style={{fontWeight:'bold'}}>Step 1: Create a New Folder (e.g., server) Inside Your Project</span> <br></br>In the VS Code terminal, run:<br></br>
        <span style={{color:'blue', fontWeight:'bold'}}>npm init -y</span><br></br>
        <span style={{fontStyle:'italic'}}><br></br>npm → Node Package Manager (used to manage libraries/dependencies) <br></br>

init → Initializes a new Node.js project<br></br>

-y → Automatically answers "yes" to all prompts (uses default values)</span><br></br>
<span><br></br>You will see an output like this:</span>
   <img src={api01} className='rounded-xl' /> 

        </p>

          <p><br></br><span style={{fontWeight:'bold'}}>Step 2: Install Required Backend Packages (Express,  Mongoose DB, CORS, Nodemon) </span> <br></br>In the VS Code terminal, run:<br></br>
        <span style={{color:'blue', fontWeight:'bold'}}>npm install express mongoose cors nodemon</span><br></br>
        <span style={{fontStyle:'italic'}}><br></br>
          [After successful installation, you will see the updated package.json file like the following screenshot:]
        </span>
        <br></br>
         <img src={api02} className='rounded-xl' /> 
         <br>
         </br>
         Notes:<br></br>
         
         
          <span style={{fontStyle:'italic'}}>cors - Allows frontend and backend to communicate safely</span><br></br>
          <span style={{fontStyle:'italic'}}>nodemon - Automatically restarts the server when you make changes</span><br></br>
        </p>


        <p><br></br><span style={{fontWeight:'bold'}}>Step 3: Create index.js – Setup Express API with MongoDB</span> <br></br>
        </p>
        <p>Index.js: <br></br>

<pre>
<code>
{`
const express = require('express');
`}
</code>
<span style={{ color: 'green', fontSize: '11px' }}>
/* express – Loads the Express framework (used to build APIs) */</span>
<code>
{`
const mongoose = require('mongoose');
`}
</code>
<span style={{ color: 'green', fontSize: '11px' }}>
/* mongoose – Connects your app to a MongoDB database */</span>
<code>
{`
const cors = require('cors');
`}
</code>
<span style={{ color: 'green', fontSize: '11px' }}>
/* cors – Enables Cross-Origin Resource Sharing (frontend & backend) */</span>
<code>
{`
const app = express();
`}
</code>
<span style={{ color: 'green', fontSize: '11px' }}>
/* Initializes an instance of an Express application */</span>
<code>
{`
app.use(cors());
`}
</code>
<span style={{ color: 'green', fontSize: '11px' }}>
/* app.use(cors()) – Allows requests from your frontend <br></br>(even from different ports) */</span>
<code>
{`
app.use(express.json());
`}
</code>

<span style={{ color: 'green', fontSize: '11px' }}>/* app.use(express.json()) – Parses JSON data in incoming requests <br></br>(e.g., form data) */</span>
<code>
{`
app.listen(3001, () => {
  console.log("Server is Running");
});
`}
<br></br>
</code>
</pre>

        </p>
        <p>
             <img src={api03} className='rounded-xl' /> 
        </p>
        <p>
<br></br><span style={{fontWeight:'bold'}}>Step 4: Configure package.json to Run the Server</span><br></br>
 <span style={{fontStyle:'italic'}}>File Location: /server/package.json</span>
        </p>
   <pre>
    <code>
      "start": "nodemon index.js"
    </code>
   </pre>
<p>
  <img src={api05} className='rounded-xl' /> 
</p>
<p><br></br>
 <span style={{fontWeight:'bold'}}>Step 5: Run the server using</span> <span style={{color:'blue'}}>'npm start'. </span><br></br>
 The expected result will appear as shown in the following screenshot:
<img src={api06} className='rounded-xl' /> 
</p>
        </div>
        
        <div style={{backgroundColor:'#fff', borderWidth:1, borderRadius:5,marginTop:15,marginLeft:5, marginRight:5, borderColor:'#cae4f1', padding:20}}> 
   <p><br />
  <span style={{ fontWeight: 'bold' }}>Step 6: Connect to MongoDB Using Mongoose</span>
</p>

<p>Add MongoDB connection code:</p>

<pre>
  <code>
{`mongoose.connect(
  'mongodb+srv://dijidynamics2024:<your_password>@' +
  'evmdb.8l73c.mongodb.net/evmdb?retryWrites=true&w=majority'
)
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });`}
  </code>
</pre>

 <img src={api07} className='rounded-xl' />

 <p><br></br>
 <span style={{fontWeight:'bold'}}> Step 7: Create Schema and Models for MongoDB</span>
 <br></br>
 <pre>
  <code>
    server/ <br></br>
     &nbsp; └── models/ <br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── contact.js
  </code>
 </pre>
 </p>
 <img src={api08} className='rounded-xl' />

<p><br></br> <span style={{fontWeight:'bold'}}>Step 8: Run the Server Using</span><br>
</br>
 <span style={{color:'blue', fontWeight:'bold'}}>npm start</span></p>
 <p><br></br>You can test APIs like:<br></br>http://localhost:3001/contacts</p>
  <img src={api09} className='rounded-xl' />
        </div>
        </div>
        </div>
        </div>
  )
}

export default Apiexpress
