import React, {Image} from 'react'
import github01 from '/github-01.jpg'
import github02 from '/github-02.jpg'
import github04 from '/github-04.jpg'
import github05 from '/github-05.jpg'
import github06 from '/github-06.jpg'
import github07 from '/github-07.jpg'

const Github = () => {
  return (
     <div className='bg-[#f2f6f8]'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
    <div class="grid  grid-cols-1 md:grid-cols-2 gap-4 pb-8 ">
       <div style={{backgroundColor:'#fff', borderWidth:1, borderRadius:5,marginTop:15,marginLeft:5, marginRight:5, borderColor:'#cae4f1', padding:20}}> 
         <h1 style={{fontWeight:'bold'}} ><br></br> How to Connect Vite React App with GitHub Using VS Code</h1>
         <p style={{fontWeight:'bold'}}><br></br>Step 1: Visit the GitHub website and create an account. <br></br><span style={{fontWeight:'normal'}}>https://github.com/</span> <br></br></p>
         <p style={{fontWeight:'bold'}}><br></br>Step 2: Create a new repository <img src={github01} className='rounded-xl' /> </p>
           <p style={{fontWeight:'bold'}}><br></br>Step 3: Enter a repository name & click the 'create repository' button <img src={github02} className='rounded-xl' /> </p>
         <p><span style={{color:'black', fontWeight:'bold'}}>After successfully creating the repository, you will see the following code:</span> <br>
         </br>echo "# tailwindcsstemplate01" &gt;&gt; README.md <br></br>
git init<br></br>
git add README.md<br></br>
git commit -m "first commit"<br></br>
git branch -M main<br></br>
git remote add origin https://github.com/dijidynamics/tailwindcsstemplate01.git<br></br>
git push -u origin main</p>
        </div>


        <div style={{backgroundColor:'#fff', borderWidth:1, borderRadius:5,marginTop:15,marginLeft:5, marginRight:5, borderColor:'#cae4f1', padding:20}}>
          <p style={{fontWeight:'bold'}}>4. Check if Git is installed in Visual Studio Code using this command:<br></br>
          View -&gt; Terminal  <span style={{color:'blue'}}>git --version</span>
           <img src={github04} className='rounded-xl' /> 
          </p>
          <p><br></br><span style={{fontWeight:'bold', color:'red'}}>5. If GitHub Is Not Working, Follow These Steps to Check the Extension:</span><br></br></p>
          <p style={{fontStyle:'italic', fontSize:13}}>I. Go to the left sidebar in Visual Studio Code.<br></br>
          II. Click on the Extensions icon (or press Ctrl + Shift + X).<br></br>
          III. In the search bar, type: GitHub<br></br>
          IV. Look for the extension called: <span style={{fontWeight:'bold'}}>"GitHub Pull Requests and Issues" (by GitHub).</span></p>
          <p style={{fontWeight:'bold'}}><br></br>
          6. start pushing the code to GitHub.
               <img src={github05} className='rounded-xl' /> 
          </p>
            <p>
             <img src={github07} className='rounded-xl' /> 
          </p>
          <p >If you don’t see the result shown in the screenshot above, please follow the commands below:
             <img src={github06} className='rounded-xl' /> 
          </p>
          </div>
        </div>
        </div>
        </div>
  )
}

export default Github
