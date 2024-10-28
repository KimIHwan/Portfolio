import React, { useState } from 'react'
import Github from '@iconscout/react-unicons/icons/uil-github'
import './PCard.css'
import ReactCardFlip from 'react-card-flip'
import { BsFillArrowLeftSquareFill } from "react-icons/bs"
import { SiVercel } from "react-icons/si";
import { TiCancel } from "react-icons/ti";
import { FaGooglePlay } from "react-icons/fa";

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
                <div style={{height:"3rem", width:"100%"}}>
                    <button className='back'onClick={flipCard}><BsFillArrowLeftSquareFill className='b' size='2rem'/></button>
                </div>
                <div style={{height:"16rem", width:"100%",}}>
                    <pre>{proj.info}</pre>
                </div>
                <div style={{height:"3rem", width:"100%"}}>
                    <div className='cLink'>  
                        {proj.code ? 
                            <div className="f-icon">
                                소스코드 : <a href={proj.code}><Github color='white' size='2rem'/></a>
                            </div>
                                :null 
                                // 깃허브 링크가 없을 경우
                        }
                        {proj.url ?
                            proj.url === "x" ? 
                            <div className="f-icon">
                                배포 : <TiCancel color='white' size="2rem" /> 일시 중단
                            </div>
                            :<div className="f-icon">
                                배포 : <a href={proj.url}><SiVercel color='white' size='2rem'/></a>
                            </div>
                                :null
                        }
                        {proj.urlGoogle ?
                            <div className="f-icon">
                                배포 : <a href={proj.urlGoogle}><FaGooglePlay color='white' size='2rem'/></a>
                            </div>
                            : null
                        }
                    </div>
                </div>
                
                
            </div>
        </ReactCardFlip>        
    </div>
  )
}

export default PCard