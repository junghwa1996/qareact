import React from "react";

function Introduction() {
  return   (
    <div className="section introduction">
      <div className="inner_wrap">
        <div className="introduction_title">
          <h3><span className="en m_hide">BESPOKE,</span> 와인 전문 냉장고를 <br className="m_show"/>소개합니다</h3>
          <a href="#!" className="btn_round small">제품 자세히 보기</a>
        </div>
        <div className="introduction_swiper_wrap swiper">
          <div className="introduction_swiper">
            <div className="swiper-slide">
              <div className="img_box bg">
                <img src="images/introduction_img01.png" alt=""/>
              </div>
              <div className="ctn_txt">
                <div className="img_box icon01">
                  <img src="images/introduction_icon01.png" alt=""/>
                </div>
                <div className="txt_box">
                  <p className="list_title">BESPOKE 디자인&오리지널 키친핏</p>
                  <p className="list_area">다양한 소재와 컬러의 도어 패널 그리고 딱 맞는 키친핏까지, <br/>덕분에 바라만 보아도 행복한 공간을 선사합니다</p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="img_box bg">
                <img src="images/introduction_img02.png" alt=""/>
              </div>
              <div className="ctn_txt">
                <div className="img_box icon02">
                  <img src="images/introduction_icon02.png" alt=""/>
                </div>
                <div className="txt_box">
                  <p className="list_title">2개존 개별 온도 설정을 통한 <br className="m_show"/>최적의 와인 보관</p>
                  <p className="list_area">상칸 4℃에서 18℃까지, 하칸 1℃에서 18℃까지 설정 가능합니다<br/>약 70병의 와인을 각각 최적의 온도로 보관하세요!</p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="img_box bg">
                <img src="images/introduction_img03.png" alt=""/>
              </div>
              <div className="ctn_txt">
                <div className="img_box icon03">
                  <img src="images/introduction_icon03.png" alt=""/>
                </div>
                <div className="txt_box">
                  <p className="list_title">와인에 최적화된 적정 습도 유지</p>
                  <p className="list_area">와인에 최적화된 70% 적정 습도를 유지해줍니다.<br/>빛이 차단되는 불투명 도어패널로 와인을 더욱 효과적으로 보관해보세요</p>
                  <p className="list_notice">*70% 습도유지주위온도 32도, 고내 Notch 11℃ - 11℃ setting 조건이며, <br/>환경에 따라 달라질 수 있습니다.</p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="img_box bg">
                <img src="images/introduction_img04.png" alt=""/>
              </div>
              <div className="ctn_txt">
                <div className="img_box icon04">
                  <img src="images/introduction_icon04.png" alt=""/>
                </div>
                <div className="txt_box">
                  <p className="list_title">와인의 맛을 오랫동안 유지하는 <br className="m_show"/>저소음 · 저진동 설계</p>
                  <p className="list_area">와인의 맛을 오랫동안 유지해줄 뿐만 아니라 <br/>저소음, 저진동 설계로 조용하고 편안한 환경을 누려보세요</p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="img_box bg">
                <img src="images/introduction_img05.png" alt=""/>
              </div>
              <div className="ctn_txt">
                <div className="img_box icon05">
                  <img src="images/introduction_icon05.png" alt=""/>
                </div>
                <div className="txt_box">
                  <p className="list_title">2개존 개별 온도 설정을 통한 최적의 와인 보관</p>
                  <p className="list_area">상칸 4℃에서 18℃까지, 하칸 1℃에서 18℃까지 설정 가능합니다<br/>약 70병의 와인을 각각 최적의 온도로 보관하세요!</p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="img_box bg">
                <img src="images/introduction_img06.png" alt=""/>
              </div>
              <div className="ctn_txt">
                <div className="img_box icon06">
                  <img src="images/introduction_icon06.png" alt=""/>
                </div>
                <div className="txt_box">
                  <p className="list_title">소믈리에 앳 홈 <br className="m_show"/>(와인 정보 기록,관리,음식 페어링까지)</p>
                  <p className="list_area">와인의 정보부터 기록과 보관까지 편리하게~<br/>어울리는 요리 추천까지 SmartThings가 도와드려요</p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="img_box bg">
                <img src="images/introduction_img07.png" alt=""/>
              </div>
              <div className="ctn_txt">
                <div className="img_box icon07">
                  <img src="images/introduction_icon07.png" alt=""/>
                </div>
                <div className="txt_box">
                  <p className="list_title">오토 오픈 도어</p>
                  <p className="list_area">한 번의 간편한 터치로 냉장고 문을 보다 편하게~<br/>편리함을 위한 오토 오픈 도어 기능이 적용되었습니다</p>
                </div>
              </div>
            </div>

          </div>
          <div className="slick-arrow nextArrow nextArrow-3"></div>
          <div className="slick-arrow prevArrow prevArrow-3"></div>
        </div>
      </div>
    </div>
  )
}

export default Introduction;