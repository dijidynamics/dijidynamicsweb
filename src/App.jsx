import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Mainpage from './Mainpage'
import RNTemplates from './RNTemplates'
import TailwindPage from './TailwindPage'
import MernPage from './MernPage'
import Banner from './components/Banner'
import Footer from './Footer'
import Github from './Github'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Docs from './Docs'
import Apiexpress from './Apiexpress'
import Awssignup from './Awssignup'
import Bootstrap from './Bootstrap'
import Firebase from './Firebase'
import Rectnativesetup from './Rectnativesetup'
import Awsec2 from './Awsec2'
import Firebasesetup from './Firebasesetup'
import Vuedocs from './Vuedocs'
import Odoo from './Odoo'
import Aboutus from './Aboutus'
import PrivacyPolicy from './Privacypolicy'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
     <Navbar />
     <Banner />
    <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/rn-templates" element={<RNTemplates />} />
        <Route path="/tailwind" element={<TailwindPage />} />
        <Route path="/mern" element={<MernPage />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/github" element={<Github />} />
        <Route path="/api" element={<Apiexpress />} />
        <Route path="/awsguide" element={<Awssignup />} />
        <Route path="//bootstrapdoc" element={<Bootstrap />} />
        <Route path='/firebase' element={<Firebase />} />
        <Route path='/reactnativesetup' element={<Rectnativesetup />} />
        <Route path='/awsec2' element={<Awsec2 />} />
        <Route path='/firebasetup' element={<Firebasesetup />} />
        <Route path='/vuedocs' element={<Vuedocs />} />
        <Route path='/odoo' element={<Odoo />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/privacypolicy' element={<PrivacyPolicy />} />
    </Routes>
    <Footer />
    </Router>
 

    </>
  )
}

export default App
