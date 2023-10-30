import React from 'react'
import TypeIt from "typeit-react"
import './Intro.css'
import title from '../../img/itsme.png'

const Intro = () => {
  return (
    <div className='intro'>
        <div className="i-left">
            <div className="i-name">
                <span className="typeit" >
                    <TypeIt 
                        options={{
                        strings: ["안녕하세요!<br/> <font color ='orange'>김이환 </font> 입니다!!!!!"],
                        speed: 150,
                        loop: true,
                        loopDelay: [2500],
                        waitUntilVisible: true,
                    }}/>
                </span>
                <span>
                    저는 웹 개발자를 꿈꾸고 있습니다.
                </span>
            </div>

        </div>
        <div className="i-right">
            <img className='img' src={title} alt='girin'></img>
        </div>
    </div>
  )
}

export default Intro