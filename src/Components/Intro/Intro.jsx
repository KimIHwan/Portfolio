import React from 'react'
import './Intro.css'

const hello = "안녕하세요!"

const Intro = () => {
  return (
    <div className='intro'>
        <div className="i-left">
            <div className="i-name">
                <span>{hello}</span>
                <span>김이환 입니다!!</span>
                <span>
                    저는 웹 개발자를 꿈꾸고 있습니다.
                </span>
            </div>

        </div>
        <div className="i-right">
            오른쪽
        </div>
    </div>
  )
}

export default Intro