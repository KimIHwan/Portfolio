import React, { useState } from 'react'
import Github from '@iconscout/react-unicons/icons/uil-github'
import './PCard.css'
import ReactCardFlip from 'react-card-flip'
import { BsFillArrowLeftSquareFill } from "react-icons/bs"


const PCard = ({proj}) => {
    const [isFlipped, setIsFlipped] = useState(false)

    function flipCard(){
        setIsFlipped(!isFlipped)
    }
  return (
    <div className="projects-item">
        <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
            <div className="Pcard">
                <img src={proj.img} alt='' />
                <span>{proj.review}</span>
                <button className='more' onClick={flipCard}>상세 보기</button>
            </div>
            <div className='Pcard card-back'>
                <button className='back'onClick={flipCard}><BsFillArrowLeftSquareFill className='b'/></button>
                <pre>{proj.info}</pre>
                {proj.code ? 
                    <div className="f-icon">
                        소스코드 : <a href={proj.code}><Github color='white' size='2rem'/></a>
                    </div>
                        :null 
                        // 깃허브 링크가 없을 경우
                }
            </div>
        </ReactCardFlip>        
    </div>
  )
}

export default PCard