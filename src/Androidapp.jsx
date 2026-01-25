import React from 'react'
import android01 from '/androidapp01.jpg'
import android02 from '/androidapp02.jpg'

function Androidapp() {
  return (
    <div>
         <div className='bg-[#f2f6f8]'>
                  <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-5'>
<div
  style={{
    backgroundColor: "#ffffff",
    border: "1px solid #cae4f1",
    borderRadius: 8,
    marginLeft: 10,
    marginRight: 10,
    padding: 25,
    lineHeight: 1.8,
  }}
>
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">
  🚀 BuyZzo UAE – Android App
</h2>

<p className="text-gray-600 mb-4">
  BuyZzo is a local marketplace Android app available on the Google Play Store, <br></br>
  designed to help users <strong>buy, sell, or donate</strong> second-hand items nearby —
  simple, secure, and user-friendly.
</p>

<a
  href="https://lnkd.in/gSFPbNaN"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mb-4 text-blue-600 hover:underline font-medium"
>
  📱 Download on Google Play
   <img src={android01} className='pt-8  border-blue-400 border  p-2 rounded-2xl' />
</a>

<ul className="space-y-2 text-gray-600">
  <li><strong>Platform:</strong> Android (Google Play Store)</li>
  <li><strong>Tech Stack:</strong> React Native, Firebase, Firestore, AdMob</li>
</ul>

<hr className="my-4"/>

<h3 className="text-lg font-semibold text-gray-800 mb-2">
  🔹 What I worked on (End-to-End)
</h3>

<ul className="space-y-2 text-gray-600 list-disc list-inside">
  <li>UI/UX design with clean, user-centered flows</li>
  <li>Full app development using React Native</li>
  <li>Firebase Authentication for secure login</li>
  <li>Firestore real-time database integration</li>
  <li>In-app secure chat between buyers and sellers</li>
  <li>Sell or Donate item flow (supporting sustainability)</li>
  <li>Google AdMob integration</li>
  <li>Play Store testing and publishing</li>
</ul>

</div>
             </div>


             <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-5">
  <div
    style={{
      backgroundColor: "#ffffff",
      border: "1px solid #cae4f1",
      borderRadius: 8,
      marginLeft: 10,
      marginRight: 10,
      padding: 25,
      lineHeight: 1.8,
    }}
  >
    <h2 className="text-xl font-semibold mb-4 text-gray-800">
      🚶 WalkZzo – Indoor Walking App (Android)
    </h2>

    <p className="text-gray-600 mb-4">
      WalkZzo is an <strong>indoor walking Android app</strong> designed with a strong focus
      on <strong>mobile UI, usability, and offline experience</strong>.  
      The app works without GPS or internet and helps users track their indoor walking activity easily.
    </p>

    <a
      href="https://play.google.com/store/apps/details?id=com.dijistoreonline.googleadmobapp"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mb-4 text-blue-600 hover:underline font-medium"
    >
      📱 Download WalkZzo App
      <img
        src={android02}
        alt="WalkZzo Android App"
        className="mt-4 border-blue-400 border p-2 rounded-2xl hover:scale-105 transition"
      />
    </a>

    <ul className="space-y-2 text-gray-600 mt-4">
      <li><strong>Platform:</strong> Android (Google Play Store)</li>
      <li><strong>Technology:</strong> React Native (No Backend)</li>
      <li><strong>Focus:</strong> Mobile UI Design & User Experience</li>
    </ul>

    <hr className="my-4" />

    <h3 className="text-lg font-semibold text-gray-800 mb-2">
      🔹 Key Highlights
    </h3>

    <ul className="space-y-2 text-gray-600 list-disc list-inside">
      <li>Indoor walking support (no GPS, no internet required)</li>
      <li>Upload selfie or walking place photo</li>
      <li>Download & share images with steps, calories, time & date</li>
      <li>Strong focus on mobile UI and usability</li>
      <li>React Native app development (end-to-end)</li>
      <li>Published on Google Play Console</li>
    </ul>

    <p className="mt-6 text-gray-700">
      I’m currently looking for opportunities as an
      <strong> Android Mobile App Developer / Mobile UI Designer</strong>,
      where I can design and build production-ready mobile applications.
    </p>
  </div>
</div>

          </div>
    </div>
  )
}

export default Androidapp
