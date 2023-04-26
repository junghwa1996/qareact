import React from "react";

function BenefitAll() {
  return   (
    <div className="section benefit_all">
      <div className="inner_wrap">
        <div className="main_title">
          <h3>삼성닷컴 회원 혜택 모두보기</h3>
        </div>
        <div className="btn_box_wrap">
          <div className="link_btn">
            <a href="#!" className="btn_round small">회원 가입하기</a>
          </div>
          <div className="under_link">
            <a href="#!">더 많은 혜택 보러가기</a>
          </div>
        </div>
        <div className="benefit_all_area_1">
          <ul>
            <li className="list_box">
              <p className="title">삼성전자 멤버십 <br/>최대 <span className="en">26</span>만 포인트 적립</p>
              <div className="img_box">
                <img src="images/benefit_all_img01.png" alt=""/>
              </div>
            </li>
            <li className="list_box">
              <p className="title">삼성닷컴 회원 제휴카드 <br/>결제 시 최대 <span className="en">3%</span> 할인</p>
              <div className="img_box">
                <img src="images/benefit_all_img02.png" alt=""/>
              </div>
            </li>
            <li className="list_box">
              <p className="title">고객이 원하는 배송일 <br/>지정 서비스</p>
              <p className="notice">* 일부 제품 제외</p>
              <div className="img_box">
                <img src="images/benefit_all_img03.png" alt=""/>
              </div>
            </li>
            <li className="list_box">
              <p className="title">삼성닷컴 제품 구매 시 <br/>전제품 배송비 무료</p>
              <div className="img_box">
                <img src="images/benefit_all_img04.png" alt=""/>
              </div>
            </li>
          </ul>
        </div>
        <div className="benefit_all_area_2">
          <div className="list_box">
            <p className="title"><span className="en">#YouMake</span> 프로젝트</p>
            <p className="txt">내 라이프스타일에 딱 맞는 나만의 제품을 만나보세요 <br/>오직 당신만을 위한 새로운 경험이 펼쳐집니다</p>
            <div className="link_btn">
              <div className="under_link m_show">
                <a href="#!">더 알아보기</a>
              </div>
              <a href="#!" className="btn_round small m_hide_in">더 알아보기</a>
            </div>
          </div>
          <div className="accordion">
            <div className="accordion_btn">
              <a href="#!">혜택 유의사항을 꼭 확인하세요</a>
            </div>
            <div className="accordion_ctn">
              <div className="accordion_ctn_wrap">
                <div className="accordion_area">
                  <div className="area_list">
                    <p className="list_title">꼭 확인하세요!</p>
                    <ul className="list_1depth">
                      <li>본 혜택은 삼성닷컴 내 대상모델에 한해 제공되는 혜택이며, 삼성전자 오프라인 매장과는 무관합니다.</li>
                      <li>본 페이지에서 제공되는 혜택들은 출시 제품, 구매 시점마다 차이가 있을 수 있으며, 꼭 해당 혜택 내용, 제공조건을 확인하시기 바랍니다.</li>
                      <li>본 혜택은 구입하신 제품 1개 당 1회 제공됩니다.</li>
                      <li>구매 취소 시 제공받은 혜택(사은품, 포인트 등)은 반납하여야 합니다.</li>
                      <li>본 행사 내용은 당사 사정에 따라 예고 없이 변경될 수 있습니다. 행사 관련 문의 : 고객센터 1588-6084</li>
                    </ul>
                  </div>
                  <div className="area_list">
                    <p className="list_title">삼성전자 멤버십 포인트 안내</p>
                    <ul className="list_1depth">
                      <li>삼성전자 멤버십 회원에 한하여 지급됩니다.</li>
                      <li>지정매장, 제휴사 및 제휴가맹점의 환경 및 정책, 특성에 따라 삼성전자 멤버십 포인트 적립, 사용에 제한이 있을 수 있습니다.</li>
                      <li>만 14세 이상 고객은 멤버십 회원으로 가입하실 수 있습니다. (단, 본인 명의의 휴대폰 인증, 아이핀/마이핀 등 실명인증이 되지 않는 고객은 제외)</li>
                      <li>삼성전자 멤버십 포인트 적립은 각종 할인 쿠폰 및, 이벤트코드가 적용된 최종 결제 금액을 기준으로 합니다.</li>
                      <li>적립 예정 포인트는 상품 배송 완료 후 14일 이내 적립됩니다.</li>
                      <li>포인트의 유효기간은 적립일로부터 2년이며, 일부 포인트의 유효기간은 다를 수 있습니다.</li>
                      <li>5,000 포인트 이상부터 1포인트 단위로 사용 가능합니다.</li>
                      <li>보유중인 포인트는 사용 즉시 차감됩니다.</li>
                      <li>구매 상품 취소/반품 시 포인트는 즉시 회수됩니다.</li>
                      <li>포인트 사용 전 반드시 삼성전자 멤버십 카드를 제시해 주세요.</li>
                      <li>포인트 사용취소 시 사용되었던 포인트는 다시 복구되며, 기존에 부여되어 있던 유효기간이 적용됩니다.</li>
                      <li>고객님의 포인트는 마이 멤버십-포인트 내역 조회 또는 어플리케이션, 콜센터를 통해 확인하시기 바랍니다.</li>
                      <li>단, 사용 취소된 포인트의 유효기간이 이미 경과한 경우에는 당월 말일 자정(24:00)까지 한시적으로 포인트 사용이 가능합니다.</li>
                      <li>각 포인트(기본, 제품별, 구매금액별 등)의 적립 조건 충족 시 중복 적용 가능합니다.</li>
                      <li>포인트 사용처 <a href="#!">자세히보기 &gt;</a></li>
                    </ul>
                  </div>
                </div>
                <div className="accordion_area">
                  <div className="area_list">
                    <p className="list_title">런칭 혜택 2. 알레시 와인 오프너 증정</p>
                    <ul className="list_1depth">
                      <li>
                        삼성계정(Samsung Account)은 하나의 계정을 통해 Samsung Apps, Find My Mobile,
                        그리고 다양한 삼성 Mobile/TV/Web 기반의 삼성 서비스를 방문/이용할 수 있도록 제공되는
                        통합 계정 서비스이며, 삼성계정(Samsung Account)을 기반으로 하는 다른 서비스들을 추가 가입
                        절차 없이 즐기실 수 있습니다.
                      </li>
                      <li>
                        삼성닷컴 회원이 되시면 상품 구매 시 최대 3% 할인과 구매 금액에 따라 삼성전자 포인트 적립 혜택을 드립니다. 
                        제품에 따라 최대 할인 금액이 제한될 수 있으며, 제휴카드의 종류에 따라 혜택 제공 여부는 달라질 수 있습니다. 
                        (단, 휴대폰/태블릿/기어 및 일부 제품은 회원 3% 할인 제외)
                      </li>
                      <li>삼성닷컴 회원가입은 삼성전자 멤버십 혜택 제공을 위해 만 14세 이상으로 제한됩니다.</li>
                      <li>비회원 구매 혹은 계정 탈퇴 시에는 해당 할인 혜택은 제공되지 않습니다.</li>
                      <li>금액대별 포인트는 중복 지급되지 않습니다.</li>
                      <li>제품 구매 시, 포인트는 타 할인 쿠폰 등과 중복 적용 가능합니다.</li>
                      <li>일부 제품의 경우 할인 혜택에서 제외될 수 있으며, 할인율 차이가 발생할 수 있습니다.</li>
                    </ul>
                  </div>
                  <div className="area_list">
                    <p className="list_title">배송일 지정 서비스 혜택</p>
                    <ul className="list_1depth">
                      <li>배송 희망일은 배송 시 참고 사항이며, 실제 배송되는 날짜는 변경 될 수 있습니다.</li>
                      <li>입력하신 이메일 주소로 주문 내역 및 상품 발송 정보를 안내 드립니다.</li>
                      <li>멤버십 고객명, 주문자 이름, 받으시는 분이 일치하지 않은 경우 멤버십 서비스 중 제한이 있을 수 있습니다.</li>
                      <li>적립 예정 멤버십 포인트는 멤버십 회원 상태와 등급별 최대 적립 한도, 분리 배송 여부에 따라 실제 적립 포인트와 상이할 수 있습니다.</li>
                      <li>카드사별 매입 승인 기간 이후로 배송 희망일을 연기할 경우 주문이 취소될 수 있습니다.</li>
                      <li>카드사별 매입 승인 기간은 카드사별로 상이하며 주문일로부터 최소 25일부터 최대 88일까지 입니다.</li>
                      <li>도서 산간지역은 배송이 제한될 수 있습니다.</li>
                      <li>주문결제 후 평균 3일 이내 배송 (일, 공휴일 제외) 단, 도서/산간지역은 배송일이 추가적으로 소요될 수 있으며, 상품 보유현황에 따라 배송일이 지연될 수 있습니다.</li>
                      <li>
                        아래 상품군은 지정하신 희망배송일에 상품을 배송 해 드리나 상품 보유현황 및 설치기사 상황에 따라 배송이 다소 지연될 수 있습니다.
                        <ul className="list_2depth">
                          <li>- 희망배송일 지정 가능 상품군 : 전자레인지, 청소기, 자연가습청정기</li>
                          <li>- 희망배송일 지정 및 설치 상품군 : PC/모니터, 프린터, 오븐, 에어케어, 에어트랙, 무선도킹오디오,
                            블루레이/DVD플레이어 또한 인수고객과의 통화불가, 수령지 주소가 불명확할 경우 배송이 지연될 수
                            있습니다.</li>
                        </ul>
                      </li>
                      <li>배송 추적 관련 : 삼성닷컴 상단 '마이 삼성 -&gt; 주문/배송조회 -&gt; 주문정보'에서 배송상태 및 배달설치 기사 전화번호 조회가 가능합니다.</li>
                    </ul>
                  </div>
                  <div className="area_list">
                    <p className="list_title">배송비 무료 혜택 안내</p>
                    <ul className="list_1depth">
                      <li>전 상품은 무료로 배송되며, 파트너사 제품 구매 시에는 배송비가 발생할 수 있습니다.</li>
                      <li>(단, 제주도 등 일부 도서/산간 지역은 별도 배송비가 발생할 수 있으며, 설치상품의 경우 설치 환경 등에 따라 추가 설치비가 발생할 수 있습니다.)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BenefitAll;