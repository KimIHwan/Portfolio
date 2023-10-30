import React from 'react'
import './About.css'
import { FiUser, FiHome } from "react-icons/fi";
import { FaBirthdayCake, FaUniversity } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi"

const About = () => {
  return (
    <div className='about' id='About'>
        <div className='box'>
            <span className='title'>ABOUT</span>
            <div className='profile'>
              <ul>
                <li><FiUser/> 김이환</li>
                <li><FaBirthdayCake/> 97.07.24</li>
                <li><FiHome/> 서울시 구로구</li>
                <li><HiOutlineMail/> lionf2000@naver.com</li>
                <li><FaUniversity/> 동양미래대학교 (컴퓨터소프트웨어공학과 전공심화)</li>
              </ul>
            </div>
        </div>
    </div>
  )
}

export default About