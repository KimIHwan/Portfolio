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
                    저는 풀스택 개발자를 꿈꾸고 있는 웹 개발 꿈나무입니다. <br/> 도전하는 것을 좋아하고 낯선 것을 두려워하지 않는 점이 저의 장점입니다.
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