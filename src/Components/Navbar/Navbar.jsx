import React from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'

function Navbar() {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className='n-name'>김이환</div>
            

        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>

                    <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                        <li>Home</li>
                    </Link>
                    <Link spy={true} to='About' smooth={true}>
                        <li>About</li>
                    </Link>
                    <Link spy={true} to='Skills' smooth={true}>
                        <li>Skills</li>
                    </Link>
                    <Link spy={true} to='Project' smooth={true}>
                        <li>Project</li>
                    </Link>
                    <Link spy={true} to='Contact' smooth={true}>
                        <li>Contact</li>
                    </Link>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar