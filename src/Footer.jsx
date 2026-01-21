import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{backgroundColor:'#f4f4f4', paddingTop:10, paddingBottom:10, textAlign:'center'}}>
      <p>© 2025 Dijidynamics | Digital Solutions & Creative Services. All rights reserved.  📧 :{" "}
        <a
          href="mailto:dijidynamics2024@gmail.com"
          style={{ color: '#007bff', textDecoration: 'none' }}
        >
          dijidynamics2024@gmail.com
        </a> </p>

         <p>
        <Link to="/aboutus" style={{ marginRight: 10 }}>
          About Us
        </Link>
        |
        <Link to="/privacypolicy" style={{ marginLeft: 10 }}>
          Privacy Policy
        </Link>
      </p>
    </div>
  )
}

export default Footer
