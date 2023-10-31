import React from 'react'
import './Skills.css'
import Card from '../Card/Card'
import {motion} from 'framer-motion'

const Skills = () => {
  const transition = {duration : 1, type: 'spring'}
  return (
    <div className="skills" id='Skills'>
        <div className="info">
            <span>Skills</span>
            <br/>
            <span>보유한 기술들을 소개합니다.</span>
        </div>
        <div className="desc">
            {/* 언어 */}
            <motion.div 
              whileInView={{left: '10rem'}}
              initial={{left: '25%'}}
              transition={transition}
              style={{left: '10rem'}}>
              <Card
                heading = {'Language'}
                detail = {'JavaScript, Java, Python, C, C#, Kotlin, HTML'}
              />
            </motion.div>
            {/* DB */}
            <motion.div 
              whileInView={{left: '28rem'}}
              initial={{left: '25%'}}
              transition={transition}
              style={{left: '28rem'}}>
              <Card
                heading = {'DB'}
                detail = {'MySQL, MongoDB'}
              />
            </motion.div>
            {/* 자격증 */}
            <motion.div
              whileInView={{left: '46rem'}}
              initial={{left: '25%'}}
              transition={transition}
              style={{left: '46rem'}}>
              <Card
                heading = {'Certificate'}
                detail = {'정보처리기사(2022/11 취득)'}
              />
            </motion.div>
            {/* 그 외 */}
            <motion.div
              whileInView={{left: '64rem'}}
              initial={{left: '25%'}}
              transition={transition}
              style={{left: '64rem'}}>
              <Card
                heading = {'Etc.'}
                detail = {'Photoshop, Excel, PowerPoint, Word'}
              />
            </motion.div>
        </div>
    </div>
  )
}

export default Skills