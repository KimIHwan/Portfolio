import React from 'react'
import './Project.css'
import GIRIN from '../../img/GIRIN.png'
import ForestSeven from '../../img/ForestSeven.PNG'
import Stick from '../../img/dongdongstick.PNG'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination'
import 'swiper/css'

const Project = () => {
  const clients =[
    {
      img: GIRIN,
      review:"Node.js와 MongoDB를 활용한 게임 리뷰 웹 사이트"
    },
    {
      img: ForestSeven,
      review:"Unity로 만든 서바이벌 게임"
    },
    {
      img: Stick,
      review:"RaspberryPi와 Python을 이용하여 만든 시각 장애인용 스마트 지팡이"
    }
  ]
  return (
    <div className='p-wrapper' id='Project'>
        <div className='p-heading'>
          <span>프로젝트</span>
        </div>
        {/* 내용 */}

        <Swiper
          modules={[Pagination]} //페이저 버튼
          slidesPerView={1} // 한 슬라이드 당 보여질 개수
          pagination={{clickable: true}} //버튼 클릭 가능
          loop={true} // 마지막 슬라이드에서 슬라이드하면 첫번째로
        >
          {clients.map((client, index) => {
            return(
              <SwiperSlide key={index}>
                <div
                  className="project">
                  <img src={client.img} alt='' />
                  <span>{client.review}</span>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
    </div>
  
  )
}

export default Project