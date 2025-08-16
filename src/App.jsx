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
    </Routes>
    <Footer />
    </Router>
 

    </>
  )
}

export default App
