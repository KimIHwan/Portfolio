import React from 'react'
import './Project.css'
import Eighteen from '../../img/eighteen.PNG'
import GIRIN from '../../img/GIRIN.png'
import ForestSeven from '../../img/ForestSeven.PNG'
import Stick from '../../img/dongdongstick.PNG'
import Portfolio from '../../img/portfolio.PNG'
import MahjongCal from '../../img/mahjongCal.png'
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css'
import PCard from './PCard'

const Project = () => {

  
  const clients =[
    {
      img: MahjongCal,
      review:"리치마작 계산기",
      urlGoogle:"https://play.google.com/store/apps/details?id=com.hwansquare.MahjongCal",
      info: "구성요소 : React Native\n제작 기간 : 2024.02~\n프로젝트 참가 인원 : 2인\n\nReact Native로 제작한 리치마작 계산기 어플입니다.\n리치마작의 점수 계산을 쉽고 편하게 이용할 수 있습니다.\n심플하고 깔끔한 UI와 직접 만든 계산 알고리즘이 특징이며,\n구글 플레이에 정식 출시 되었습니다."
    },
    {
      img: Eighteen,
      review: "Eighteen",
      code: "https://github.com/hwan-2/eighteen",
      url:"https://eighteen-three.vercel.app/",
      info: "Next.js로 만든 노래방 api를 활용하여 번호 검색 및 북마크가 가능한 웹사이트 입니다.\n구성요소 : Next.js + MongoDB\n제작 기간: 2023.11~2024.01\n프로젝트 참가 인원 : 2인\n\nNextAuth를 이용한 로그인과 회원가입 기능이 구현되어 있으며, 노래방 api를 사용하여 \n국내 노래방에 등록되어 있는 노래들을 제목 또는 가수로 검색을 할 수 있습니다.\n검색한 결과에서 원하는 노래를 북마크 할 수 있으며, 마이페이지에서 확인 가능합니다.\nDB는 MongoDB를 사용하였으며, DB에 회원 정보와 해당 회원이 북마크한 노래 목록이\n따로 저장됩니다.\n야간 모드 기능도 존재하며, 구글 로그인도 가능합니다."
    },
    {
      img: GIRIN,
      review:"Game Information & Review In Node.js",
      code: "https://github.com/KimIHwan/GIRIN",
      url:"x",
      info: "플레이 해본 게임의 리뷰가 작성 가능한 게임 리뷰 웹사이트 입니다.\n구성요소 : Node.js + EJS + MongoDB\n제작 기간: 2022.05~2022.06\n\n로그인 기능과 회원가입, 마이페이지, Admin 회원관리 기능이 있으며 게시글 CRUD도\n구현되어 있습니다. 게시글 별 카테고리가 나뉘어져 있으며, 검색기능도 구현하였습니다.\nDB는 MongoDB를 사용하였으며, DB에 계정과 게시글을 저장, 수정 및 삭제와 열람이\n가능합니다."
    },
    {
      img: ForestSeven,
      review:"Unity로 만든 서바이벌 게임",
      code: "https://github.com/jungang11/Unity_SurvivalGame",
      info: "구성요소 : C# + Unity\n사용한 툴 : Visual Studio Code + Unity\n제작 기간 : 2022.03~2022.10\n\nUnity로 제작한 3D 서바이벌 게임입니다.\n캐릭터의 조작과 시점 변경, 아이템 사용 및 변경 등 구현하였습니다.\n오브젝트와의 상호작용도 구현하였으며, 시작, 정지 화면과 인벤토리도 제작하였습니다."
    },
    {
      img: Stick,
      review:"시각 장애인용 스마트 지팡이",
      info: "구성요소 : Python\n사용한 툴 : Visual Studio Code + Pycharm + RaspberryPi\n제작 기간 : 2021.03~2021.11\n\n시각 장애인들을 위한 스마트 지팡이로, RaspberryPi의 센서제어를 이용하였습니다.\n제가 제작한 부분은 손잡이에 내장된 적외선 센서로 사용자가 지팡이를 놓쳤을 경우를\n판단하여 부저를 울리게 하는 기능과, 부저가 일정 시간 이상 울리면 사고 발생으로\n판단하여 기기에 장착된 GPS값을 읽어 등록된 보호자에게 SMS로 사용자의 위치를\n전송하는 기능입니다.\nSMS 전송에는 Naver Cloud Platform API를 사용하였습니다.\n또한 두 개의 초음파 센서를 각각 다른 높이에 설치하여 읽어낸 거리값의 차이를\n이용하여 계단일 경우 안내음이 울리는 기능도 구현하였습니다."
    },
    {
      img: Portfolio,
      review:"김이환의 Portfolio",
      code: "https://github.com/KimIHWan/Portfolio",
      info: "구성요소 : React.js\n사용한 툴 : Visual Studio Code\n제작 기간 : 2023.10~\n\nReact로 제작한 개인 Portfolio 웹 사이트 입니다.\n개인적인 React 공부를 위해 React로 제작하였습니다.\n배포는 Github Page로 이뤄지고 있으며, 지속적으로 추가 및 수정해나가고 있습니다.\n소스 코드 열람 시 master branch로 확인 가능합니다."
    },

  ]
  return (
    <div className='p-wrapper' id='Project'>
        <div className='p-heading'>
          <span>Project</span>
        </div>
        {/* 내용 */}
        <Swiper
          modules={[Pagination, Navigation]} //페이저 버튼, <>버튼
          slidesPerView={1} // 한 슬라이드 당 보여질 개수
          navigation={true} // <> 버튼
          pagination={{clickable: true}} //페이저 버튼 클릭 가능
          loop={true} // 마지막 슬라이드에서 슬라이드하면 첫번째로
          style={{
            "--swiper-navigation-color": "#FFFFFF",
          }}
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