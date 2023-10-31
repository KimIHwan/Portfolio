import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'

import Github from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt='' style={{width: '100%'}}/>
        <div className="f-content">
            <span>김이환</span>
            <div className="f-icon">
                <a href='https://github.com/KimIHwan'><Github color='white' size='3rem'/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer