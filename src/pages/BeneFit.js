import React from "react";
import BenefitSlider from "react-slick";

function BeneFit() {
  return   (
    <div className="section benefit">
      <div className="inner_wrap">
        <div className="title">
          <h3>런칭 구매 혜택</h3>
        </div>
        <ul className="benefit_list m_hide_flex">
          <li className="list-1">
            <div className="big_tag_wrap">
              <div className="big_tag tail_top"><span>런칭<br/>혜택</span></div>
            </div>
            <span className="small_tag">4만P지급</span>
            <p className="list_title">삼성전자 멤버십 포인트<br />40,000 P 증정</p>
            <div className="under_link">
              <a href="#!">자세히 보기</a>
            </div>
            <p className="notice notice_bottom">* 삼성전자 멤버십 구매 금액대별 <br />포인트 적립 기준</p>
          </li>
          <li className="list-2">
            <div className="big_tag_wrap">
              <div className="big_tag tail_top"><span>전문<br/>설치</span></div>
            </div>
            <span className="small_tag">삼성닷컴 혜택</span>
            <p className="list_title">고객이 원하는 배송일<br/>지정 서비스</p>
            <p className="notice">* 일부 제품 제외</p>
          </li>
          <li className="list-3">
            <div className="big_tag_wrap">
              <div className="big_tag tail_top"><span>배송<br/>무료</span></div>
            </div>
            <span className="small_tag">삼성닷컴 혜택</span>
            <p className="list_title">삼성닷컴 제품 구매 시<br/>전제품 배송 무료</p>
          </li>        
        </ul>
        <div className="benefit_list_mo m_show swiper">
          <ul className="benefit_list">
            <li className="list-1">
              <div className="big_tag_wrap">
                <div className="big_tag tail_top"><span>런칭<br/>혜택</span></div>
              </div>
              <span className="small_tag">4만P지급</span>
              <p className="list_title">삼성전자 멤버십 포인트<br />40,000 P 증정</p>
              <div className="under_link">
                <a href="#!">자세히 보기</a>
              </div>
              <p className="notice notice_bottom">* 삼성전자 멤버십 구매 금액대별 <br />포인트 적립 기준</p>
            </li>
            <li className="list-2">
              <div className="big_tag_wrap">
                <div className="big_tag tail_top"><span>전문<br/>설치</span></div>
              </div>
              <span className="small_tag">삼성닷컴 혜택</span>
              <p className="list_title">고객이 원하는 배송일<br/>지정 서비스</p>
              <p className="notice">* 일부 제품 제외</p>
            </li>
            <li className="list-3">
              <div className="big_tag_wrap">
                <div className="big_tag tail_top"><span>배송<br/>무료</span></div>
              </div>
              <span className="small_tag">삼성닷컴 혜택</span>
              <p className="list_title">삼성닷컴 제품 구매 시<br/>전제품 배송 무료</p>
            </li>        
          </ul>
          <div className="slick-arrow nextArrow nextArrow-1"></div>
          <div className="slick-arrow prevArrow prevArrow-1"></div>
        </div>
        <div className="accordion">
          <div className="accordion_btn">
            <a href="#!">혜택 유의사항을 꼭 확인하세요</a>
          </div>
          <div className="accordion_ctn">
            <div className="accordion_ctn_wrap">
              <div className="accordion_area">
                <div className="area_list">
                  <p className="list_title">런칭 혜택 공통 유의사항</p>
                  <ul className="list_1depth">
                    <li>런칭 행사 기간: 2022년 2월 17일 ~ 2022년 2월 27일</li>
                    <li>런칭 혜택은 대상 모델 RW24B5820AP,RW24B5920AP을 구매 기간 내 구매하신 고객에 한하여, 제품 배송/설치가 완료된 후 2주가 지난 시점에 순차 발송됩니다. </li>
                    <li>런칭 기간 동안 주문/결제한 제품은 2022년 03월 09일 이후 순차 배송됩니다.</li>
                    <li>행사 내용 및 혜택은 당사 사정에 의해 사전 공지 없이 변경 또는 종료될 수 있습니다.</li>
                    <li>삼성닷컴 ID 1개 당 1개씩 제공됩니다.</li>
                    <li>혜택은 현금과 교환되지 않습니다.</li>
                    <li>제품 구매 취소 시, 제공받은 혜택(사은품, 포인트 등)도 함께 반납해야 합니다.</li>
                    <li>혜택은 구매한 제품 배송지로 배송됩니다. 주소 변경이 필요한 경우 제품 주문 전 주소 변경을 완료해 주셔야 합니다.</li>
                    <li>멤버십 회원정보는 서비스센터 (1588-3366) 혹은 나의정보&gt;멤버십 정보 확인&gt;기본정보 (<a href="https://www.samsung.com/sec/membership/point/">https://www.samsung.com/sec/membership/point/</a>)에서 확인할 수 있습니다.</li>
                    <li>잘못된 개인 정보 입력으로 인해 당첨자에게 연락이 불가능하거나 혜택이 오발송, 반송/분실된 경우 재발송 되지 않으며 당사에서 책임지지 않습니다.</li>
                    <li>페이지 내 이미지는 소비자 이해를 돕기 위해 연출된 이미지로, 각 혜택 이미지와 실제 혜택이 다를 수 있습니다.</li>
                    <li>혜택 관련 문의: 삼성전자 고객센터 1588-6084</li>
                  </ul>
                </div>
                <div className="area_list">
                  <p className="list_title">런칭 혜택 1. TASTE AND TASTE 와인 안주 패키지 <br className="m_show"/>3개월 구독 서비스</p>
                  <ul className="list_1depth">
                    <li>구독 서비스로 월 1회, 총 3개월 동안 제공됩니다.</li>
                    <li>구독 패키지 발송은 3월 부터, 월 말일 배송으로, 총 3회 배송됩니다. </li>
                    <li>본 혜택은 TASTE AND TASTE에서 배송 진행되며 제공되는 상품은 매장 상황에 따라 매달 변경됩니다.</li>
                    <li>상기 이미지는 이해를 돕기 위해 연출된 이미지로 실 사용 시 차이가 있을 수 있습니다.</li>
                    <li>제품 배송 및 매장 안내 문의 : 02-2088-6798</li>
                  </ul>
                </div>
              </div>
              <div className="accordion_area">
                <div className="area_list">
                  <p className="list_title">런칭 혜택 2. 알레시 와인 오프너 증정</p>
                  <ul className="list_1depth">
                    <li>본 혜택은 제품 배송 완료 후, 3/31까지 구매 시 기입하신 제품 배송지 순차적으로 배송되며, 배송일정은 사전 예고 없이 변동될 수 있습니다.</li>
                    <li>상기 이미지는 이해를 돕기 위해 연출된 이미지로 실 사용 시 차이가 있을 수 있습니다.</li>
                    <li>해당 제품의 컬러 (블랙/그린/블루/레드와인) 는 선택이 불가하며 임의의 컬러로 배송됩니다.</li>
                    <li>이벤트 경품 증정 관련 문의 : 펑타이코리아 070-4206-4197 (평일 10시~17시 운영/토,일 및 공휴일 휴무)</li>
                  </ul>
                </div>
                <div className="area_list">
                  <p className="list_title">런칭 혜택 5. 구매 후 포토상품평 작성 시 올리브영 상품권 3만원 증정</p>
                  <ul className="list_1depth">
                    <li>올리브영 기프트카드 3만원 금액권의 사용방법은 하기와 같습니다.</li>
                    <li>해당 교환권은 올리브영 전국 매장에서 즉시 사용 가능하며, 매장 결제 시 기프트카드 바코드를 매장 직원에게 제시 바랍니다.(일부 매장 제외)</li>
                    <li>해당 교환권은 온라인몰(CJ ONE 홈페이지 or 앱)에 등록하여 사용 가능합니다. 등록방법은 CJ ONE 홈페이지 및 앱을 참고 바랍니다. <a href="#!">자세히보기 &gt;</a></li>
                    <li>등록된 올리브영 기프트카드는 등록일로부터 5년간 사용 가능합니다.</li>
                    <li>결제 시, CJ ONE 포인트 적립 및 현금영수증 발행 가능합니다.</li>
                    <li>본 이벤트를 제공된 올리브영 기프트카드는 결제 시 캡처본 사용이 불가합니다.</li>
                    <li>본 이벤트를 통해 제공된 올리브영 기프트카드는 재충전이 불가합니다.</li>
                    <li>본 이벤트를 통해 제공된 올리브영 기프트카드는 실물 카드로 교환되지 않습니다.</li>
                    <li>본 이벤트를 통해 제공된 기프트카드로 상품권 및 일부 상품 구매는 불가합니다.</li>
                    <li>
                      [이용안내]<br/>
                      매장에서 결제시 선물받은 MMS 바코드를 제시해 주세요.<br/>
                      다양한 CJ 브랜드에서 사용 가능합니다.
                      (CGV(매점포함), 올리브영, CJ온스타일, 뚜레쥬르, 빕스,
                      제일제면소, CJ더마켓, 계절밥상, 더플레이스, 쿡킷, CJ푸드월드, N서울타워)CJ ONE App/Web에
                      등록하시면 잔액조회,온라인결제,CJ ONE포인트 자동적립 등 편리한 기능을 제공합니다.
                    </li>
                    <li>
                      [유의사항]<br/>
                      기업 경품/사은품 등으로 받은 CJ기프트카드는 현금반환 및 기간연장이 불가합니다. 카드번호 도난,
                      분실 등의 고객 부주의로 발생한 사고에 대해서는 보상이 불가합니다. 발송 내역 삭제 후에는 기프트카드
                      삭제, 분실 등에 따른 재발송이 불가하니 유의 바랍니다. CJ ONE FAQ(자주하는질문) '사용불가매장'
                      참고 <a href="http://www.cjone.com/cjmweb/customer/faq.do">http://www.cjone.com/cjmweb/customer/faq.do</a>카드 등록 바로가기:<br/>
                      <a href="https://www.cjone.com/cjmweb/cash/cashreg.do">https://www.cjone.com/cjmweb/cash/cashreg.do</a><br/>
                      기프트카드 이용 문의 : 올리브영 고객센터(1661-8191)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BeneFit;