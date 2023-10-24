import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className='n-name'>김이환</div>
            <span>toggle</span>

        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Project</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar