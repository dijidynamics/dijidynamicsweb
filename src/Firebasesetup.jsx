import React from "react";
import firebasesetup01 from "/01-firebase-setup.jpg";
import firebasesetup02 from "/02-firebase-setup.jpg";
import firebasesetup03 from "/03-firebase-setup.jpg";
import firebasesetup04 from "/04-firebase-setup.jpg";
import firebasesetup05 from "/05-firebase-setup.jpg";
import firebasesetup06 from "/06-firebase-setup.jpg";
import firebasesetup07 from "/07-firebase-setup.jpg";
import firebasesetup08 from "/08-firebase-setup.jpg";
import firebasesetup09 from "/09-firebase-setup.jpg";
import firebasesetup10 from "/10-firebase-setup.jpg";
import firebasesetup11 from "/11-firebase-setup.jpg";
import firebasesetup12 from "/12-firebase-setup.jpg";
import firebasesetup13 from "/13-firebase-setup.jpg";
import firebasesetup14 from "/14-firebase-setup.jpg";
import firebasesetup15 from "/15-firebase-setup.jpg";

const Firebasesetup = () => {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 20,
        marginLeft: "auto",
        marginRight: "auto",
        borderColor: "#cae4f1",
        padding: 25,
        maxWidth: 900,
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        textAlign: "left",
      }}
    >
      <h2 style={{ fontWeight: "bold", marginBottom: 20, color: "#0A4D68" , textAlign:'left'}}>
        Firebase Setup Guide for Your Vite React Project
      </h2>

      <p style={{fontWeight:'bold', color: "#0A4D68" }}>1. Open your Vite React project in VS Code.</p><br></br>

      <p style={{fontWeight:'bold', color: "#0A4D68" }}>2. Install Firebase using the following command:</p><br></br>
      <p><strong>npm install firebase</strong></p><br></br>

      <img src={firebasesetup01} className="rounded-xl" alt="" />

      <p style={{fontWeight:'bold', color: "#0A4D68" }}>3. Create a new file inside your project:</p>
      <p><strong>src/firebase.js</strong></p><br></br>

      <img src={firebasesetup02} className="rounded-xl" alt="" />

      <p style={{fontWeight:'bold', color: "#0A4D68" }}>4. Go to the Firebase website and log in to your account.</p><br></br>

      <img src={firebasesetup03} style={{height:'330px'}} className="rounded-xl border-indigo-400 border-1" alt="" />

      <p style={{fontWeight:'bold', color: "#0A4D68" }}>5. Click “Create a project” and enter your project name (example: <strong>dijidj</strong>).</p><br></br>

      <img src={firebasesetup04 } style={{height:'430px'}} className="rounded-xl border-indigo-400 border-1" alt="" />

      <p style={{fontWeight:'bold', color: "#0A4D68" }}>6. Disable Google Analytics (optional) and click “Continue”.</p><br></br>

      <img src={firebasesetup05} style={{height:'430px'}} className="rounded-xl border-indigo-400 border-1" alt="" />

      <img src={firebasesetup07} className="rounded-xl border-indigo-400 border-1 mt-4" alt="" />

      <p style={{fontWeight:'bold', color: "#0A4D68" }}>7. After creating your project, click the settings gear icon → <strong>Project Settings</strong>.</p><br></br>

      <img src={firebasesetup08} className="rounded-xl  border-indigo-400 border-1"  alt="" />

      <p style={{fontWeight:'bold', color: "#0A4D68" }}>8. Scroll down to “Your apps” and select the Web icon {`(</>)`}.</p><br></br>

      <img src={firebasesetup09} className="rounded-xl  border-indigo-400 border-1" alt="" />

      <p style={{fontWeight:'bold', color: "#0A4D68" }}>9. Enter a nickname for your web app → click <strong>Register App</strong>.</p><br></br>

      <img src={firebasesetup10} className="rounded-xl  border-indigo-400 border-1" alt="" />

      <p style={{fontWeight:'bold', color: "#0A4D68" }}>10. Copy the Firebase configuration code shown on the screen.</p><br></br>

      <img src={firebasesetup11}  style={{height:'430px'}} className="rounded-xl  border-indigo-400 border-1" alt="" />

      <p style={{fontWeight:'bold', color: "#0A4D68" }}>11. Go to your <strong>src/firebase.js</strong> file and paste the Firebase setup code exactly as provided.</p><br></br>

      <img src={firebasesetup12}  style={{height:'350px'}} className="rounded-xl  border-indigo-400 border-1" alt="" />

      <p style={{fontWeight:'bold', color: "#0A4D68" }}>12. Go back to Firebase → Menu → Build → <strong>Authentication</strong>.</p><br></br>

      <img src={firebasesetup13} style={{height:'350px'}}  className="rounded-xl  border-indigo-400 border-1" alt="" />

      <p style={{fontWeight:'bold', color: "#0A4D68" }}>13. Open <strong>Sign-in Method</strong> → select <strong>Email/Password</strong> → enable it → click Save.</p><br></br>

      <img src={firebasesetup14} style={{height:'350px'}}  className="rounded-xl  border-indigo-400 border-1" alt="" />

      <img src={firebasesetup15} className="rounded-xl  border-indigo-400 border-1" alt="" />

      <p style={{ marginTop: 30, fontWeight: "bold", color: "#0A4D68" }}>
        🎉 Your Firebase setup for the Vite React project is now complete!
      </p>
      <p>got to https://firebase.google.com/docs/auth/web/password-auth </p>
      <p>copy the sample code for regisger user </p>
      <p>{` import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; `}</p>
      <p>go to app.jsx</p>
      <p>open firebase.js - add {` import { getAuth } from "firebase/auth"; `}</p>
    </div>
  );
};

export default Firebasesetup;
