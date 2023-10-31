import React, { useState } from 'react'
import Github from '@iconscout/react-unicons/icons/uil-github'
import './PCard.css'
import ReactCardFlip from 'react-card-flip'

const PCard = ({proj}) => {
    const [isFlipped, setIsFlipped] = useState(false)

    function flipCard(){
        setIsFlipped(!isFlipped)
    }
  return (
    <div className="projects-item">
        <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
            <div className="Pcard" onClick={flipCard}>
                <img src={proj.img} alt='' />
                <span>{proj.review}</span>
            </div>
            <div className='Pcard card-back' onClick={flipCard}>
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