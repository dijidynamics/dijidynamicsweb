import React from 'react'
import ec201 from '/01-ec2.jpg'
import ec202 from '/02-ec2.jpg'
import ec203 from '/03-ec2.jpg'
import ec204 from '/04-ec2.jpg'
import ec205 from '/05-ec2.jpg'
import ec206 from '/06-ec2.jpg'
import ec207 from '/07-ec2.jpg'
import ec208 from '/08-ec2.jpg'
import ec209 from '/09-ec2.jpg'
import ec210 from '/10-ec2.jpg'
import ec211 from '/12-ec2.jpg'
import ec213 from '/13-ec2.jpg'
import ec214 from '/14-ec2.jpg'
import ec215 from '/15-ec2.jpg'
import ec216 from '/16-ec2.jpg'
import ec217 from '/17-ec2.jpg'
import ec218 from '/18-ec2.jpg'

const Awsec2 = () => {
  return (
    <div className='bg-[#f2f6f8]'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
    <div class="grid  grid-cols-1 md:grid-cols-2 gap-4 pb-8 ">
       <div className="bg-white border border-[#cae4f1] rounded-lg mt-4 mx-2 p-5 shadow-sm">
  <h1 className="font-bold text-lg sm:text-xl text-gray-900 mb-4">
    🚀 How to Deploy Backend (MongoDB, Node.js, and Express) to AWS EC2
  </h1>

  <p className="text-gray-700 mb-3">
    <strong>Step 1:</strong> Go to AWS Console → EC2 → Launch instance.
  </p>
  <img src={ec201} alt="EC2 Step 1" className="rounded-xl mb-4" />
  <img src={ec202} alt="EC2 Step 1-2" className="rounded-xl mb-4" />

  <p className="text-gray-700 mb-3">
    <strong>Step 2:</strong> Name it something like <span className="font-semibold text-indigo-700">"apiname"</span> and choose 
    <span className="font-bold text-indigo-700"> Ubuntu 22.04 LTS</span>.  
    Then select instance type: <span className="font-semibold text-gray-800">t2.micro</span> (Free tier eligible, low cost).
  </p>
  <img src={ec203} alt="EC2 Step 2" className="rounded-xl mb-4" />

  <p className="text-gray-700 mb-3">
    <strong>Step 3:</strong> Create a new key pair → name: 
    <span className="font-semibold text-indigo-700"> app-api-key-name</span>, 
    type: RSA, format: <span className="font-semibold">.pem</span>.  
    Download and keep it safe.
  </p>
  <img src={ec204} alt="EC2 Step 3-1" className="rounded-xl mb-4" />
  <img src={ec205} alt="EC2 Step 3-2" className="rounded-xl mb-4" />

  <p className="text-gray-700 mb-3">
    <strong>Step 4:</strong> Under “Network settings”, open port 
    <span className="font-semibold text-gray-800"> 22 (SSH)</span>, 
    <span className="font-semibold text-gray-800"> 80 (HTTP)</span>, and 
    <span className="font-semibold text-gray-800"> 443 (HTTPS)</span>.
  </p>
  <img src={ec206} alt="EC2 Step 4" className="rounded-xl mb-4" />

 
    <p className="text-sm sm:text-base font-semibold text-gray-800 mt-3">
    <strong>Step 5:</strong> Click on <span className="text-indigo-600 font-bold">“Launch instance”</span> — you will see a message saying 
    <span className="text-green-600 font-bold"> “Successfully initiated launch of instance.”</span>
  </p>
  <img src={ec207} alt="EC2 Step 5" className="rounded-xl mb-4" />

    <img src={ec208} alt="EC2 Step 5" className="rounded-xl mb-4" />
</div>
  <div className="bg-white border border-[#cae4f1] rounded-lg mt-4 mx-2 p-5 shadow-sm">
     <p className="text-gray-700 mb-3">
    <strong>Step 6:</strong> <p className="text-gray-700 mb-3">
  Go to <span className="font-semibold text-indigo-600">EC2 → Instances</span> → 
  click on <span className="font-semibold text-indigo-600">Instances</span>. 
  You’ll see the list of all instances (as shown in the screenshot). 
  Click on the <span className="font-semibold text-indigo-600">Instance ID</span> to open the summary page, 
  then copy the <span className="font-bold text-green-600">IPv4 Public Address</span>.
</p>
  </p>
   <img src={ec210} alt="EC2 Step 5" className="rounded-xl mb-4" />
      <img src={ec211} alt="EC2 Step 5" className="rounded-xl mb-4" />

     <p style={{fontWeight:'normal'}}>
  <strong>Step 7:</strong> Connect to EC2 using SSH (Windows PowerShell). <br></br>
  If you’re on Windows, open <strong>PowerShell</strong> and run the command based on your <strong>.pem</strong> file download location. <br></br>
  Important: Follow the screenshot carefully and use the exact <strong>IPv4 address</strong> from your instance list.
</p>
<p style={{fontWeight:'normal'}}>
  <strong>Example Command:</strong><br></br>
  <code style={{
    backgroundColor: '#f3f4f6',
    padding: '6px 10px',
    borderRadius: '5px',
    display: 'inline-block',
    marginTop: '6px',
    fontFamily: 'monospace'
  }}>
    ssh -i "C:\users\yourname\Downloads\ec2instance-key.pem" ubuntu@92.0.2.1
  </code>
</p>
 <img src={ec213} alt="EC2 Step 5" className="rounded-xl mb-4" />

<p style={{fontWeight:'normal'}}>
<strong>Step 9: Create the folder forapi code </strong><br></br>
<strong><code>mkdir dijicare-backend </code></strong>  <br></br>
<img src={ec217} alt="EC2 Step 5" className="rounded-xl mb-4" />
</p>
<p style={{fontWeight:'normal'}}>
  <strong>Step 10: Install Node, Git, and PM2</strong><br></br>
   <img src={ec214} alt="EC2 Step 5" className="rounded-xl mb-4" />
 <strong><code>sudo apt update</code></strong>  <br></br> — updates the list of available packages and their versions.<br></br>
    <img src={ec215} alt="EC2 Step 5" className="rounded-xl mb-4" />
    <strong><code>sudo apt install nodejs npm git -y</code></strong> <br></br> — installs Node.js, npm (Node package manager), and Git on your EC2 instance.<br></br>
    <img src={ec216} alt="EC2 Step 5" className="rounded-xl mb-4" />
 
   <strong><code>sudo npm install -g pm2</code></strong> <br></br> — installs <strong>PM2</strong> globally, which is a process manager used to keep your Node.js server running continuously, even after restarts or crashes.
</p>
<p style={{ fontWeight: 'normal' }}>
  <strong>Step 11: Push Backend to GitHub</strong><br />
  Please check this tutorial:&nbsp;
  <a href="https://www.dijidynamics.in/github" style={{color:'#4f39f6'}} target="_blank" rel="noopener noreferrer">
    https://www.dijidynamics.in/github
  </a>
</p>
<p style={{ fontWeight: 'normal' }}>
  <strong>Step 12: Github Clone</strong><br /><br />
  Replace with your GitHub link:<br /><br />
  https://github.com/dijidynamics/dijicare-backend.git
</p>
<p> check node and npm versions<br /><br />
node -v & npm -v
 <img src={ec218} alt="EC2 Step 5" className="rounded-xl mb-4" />
 
</p>
<p style={{ fontWeight: 'normal' }}>
    <strong>Create .env file manually in EC2</strong><br /><br />

  
</p>

<p style={{ fontWeight: 'normal' }}>
  <strong>Step 14 : Install PM2 to keep backend running </strong> <br />
  <code>
    sudo npm install -g pm2 <br />
pm2 start server.js --name dijicare-api <br />
pm2 save <br />
pm2 startup <br />
  </code>
</p>
  </div>
    </div>
    </div>
    </div>
  )
}

export default Awsec2
