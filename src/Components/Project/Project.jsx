import React from 'react'
import './Project.css'
import GIRIN from '../../img/GIRIN.png'
import ForestSeven from '../../img/ForestSeven.PNG'
import Stick from '../../img/dongdongstick.PNG'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination'
import 'swiper/css'
import PCard from './PCard'

const Project = () => {

  const clients =[
    {
      img: GIRIN,
      review:"Game Information & Review In Node.js",
      code: "https://github.com/KimIHwan/GIRIN",
      info: "플레이 해본 게임의 리뷰가 작성 가능한 게임 리뷰 웹사이트 입니다.\n구성요소 : Node.js + EJS + MongoDB\n제작 기간: 2022\n로그인 기능과 회원가입, 마이페이지, Admin 회원관리 기능이 있으며\n게시글 CRUD도 구현되어있습니다."
    },
    {
      img: ForestSeven,
      review:"Unity로 만든 서바이벌 게임",
      code: "https://github.com/jungang11/Unity_SurvivalGame",
      info: "구성요소 : C# + Unity\n사용한 툴 : Visual Studio Code + Unity\n제작 기간 : \nUnity로 제작한 3D 서바이벌 게임입니다. 캐릭터의 조작과 시점 변경, 아이템 사용 및 변경 등 구현하였습니다."
    },
    {
      img: Stick,
      review:"RaspberryPi와 Python을 이용하여 만든 시각 장애인용 스마트 지팡이",
      info: "구성요소 : Python\n사용한 툴 : Visual Studio Code + Pycharm + RaspberryPi\n제작 기간 : \n시각 장애인들을 위한 스마트 지팡이로, RaspberryPi의 센서제어를 이용하였습니다.\n손잡이에 내장된 적외선 센서로 사용자가 지팡이를 놓쳤을 경우를\n판단하여 부저를 울리게 하는 기능과, "
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
                <PCard proj={client} />
              </SwiperSlide>
            )
          })}
        </Swiper>
    </div>
  
  )
}

export default Project