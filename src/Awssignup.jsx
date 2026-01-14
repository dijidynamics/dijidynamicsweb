import React from 'react'
import aws01 from '/aws-step-01.jpg'
import aws02 from '/aws-step-02.jpg'
import aws03 from '/aws-step-03.jpg'
import aws04 from '/aws-step-04.jpg'
import aws05 from '/aws-step-05.jpg'
import aws06 from '/aws-step-06.jpg'
import aws07 from '/aws-step-07.jpg'
import aws11 from '/aws-step-11.jpg'
import aws12 from '/aws-step-12.jpg'
import aws13 from '/aws-step-13.jpg'
import aws14 from '/aws-step-14.jpg'
import AdSense from './components/AdSense'
const Awssignup = () => {
  return (
     <div className='bg-[#f2f6f8]'>
      <AdSense />
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
    <div class="grid  grid-cols-1 md:grid-cols-2 gap-4 pb-8 ">
        <div style={{backgroundColor:'#fff', borderWidth:1, borderRadius:5,marginTop:15,marginLeft:5, marginRight:5, borderColor:'#cae4f1', padding:20}}> 
          
            <h1 style={{fontWeight:'bold'}} ><br></br> How to Deploy a React Static Site to AWS Amplify (Free Plan)</h1>
             <p style={{fontWeight:'normal'}}><br></br>Step 1 : Go to aws.amazon.com → Click Create an AWS Account.</p>
                <img src={aws01} className='rounded-xl' /> 
                  <p style={{fontWeight:'normal'}}><br></br>Step 2 : Choose the Free Tier plan.</p>
                <img src={aws02} className='rounded-xl' /> 
                  <p style={{fontWeight:'normal'}}><br></br>Step 3 : In the search bar, 'amplify'</p>

                <img src={aws03} className='rounded-xl' /> 
                  <p style={{fontWeight:'normal'}}><br></br>Step 4 : Click on "Deploy an app</p>

                <img src={aws04} className='rounded-xl' /> 
                <p style={{fontWeight:'normal'}}><br></br>Step 5 : Choose GitHub.</p>

                <img src={aws05} className='rounded-xl' /> 
                <p>you can check this guide '2. How to Connect Vite React App with GitHub Using VS Code' </p>
                <p style={{fontWeight:'normal'}}><br></br>Step 6 : Install & Authorize</p>

                <img src={aws06} className='rounded-xl' /> 
                    
        </div>
         <div style={{backgroundColor:'#fff', borderWidth:1, borderRadius:5,marginTop:15,marginLeft:5, marginRight:5, borderColor:'#cae4f1', padding:20}}> 
     
      <p style={{fontWeight:'normal'}}><br></br>Step 7 : Add repository</p>

                <img src={aws07} className='rounded-xl' /> 
       <p style={{fontWeight:'normal'}}><br></br>Step 8 : Add settings & Edit YML file</p>

                <img src={aws11} className='rounded-xl' /> 
                      <img src={aws12} className='rounded-xl' /> 

                      <p style={{fontWeight:'normal'}}><br></br>Step 9 : Amplify Dashboard → Overview.

Under Branches → main (Deployed) you will see your app’s Domain URL:</p>             
           <img src={aws14} className='rounded-xl' /> 
        </div>
      </div>
      </div>
      </div>
  )
}

export default Awssignup
