import React from "react";

function Product() {
  return   (
    <div className="section product">
      <div className="inner_wrap">
        <div className="title">
          <h3>나에게 딱 맞는 컬러와 소재를 <br className="m_show"/>골라 조합해보세요</h3>
          <a href="#!" className="btn_round big">나만의 와인냉장고 조합하기</a>
        </div>
        <div className="product_swiper_wrap swiper">
          <div className="product_swiper">
            <div className="swiper-slide">
              <div className="big_tag_wrap new">
                <div className="big_tag tail_bottom"><span><span className="en">NEW</span><br />컬러</span></div>
              </div>
              <div className="pd_wrap">
                <div className="img_box">
                  <img src="images/pd_img01.png" alt=""/>
                </div>
              </div>
              <div className="name_box">
                <p className="prd_name">새틴 화이트</p>
                <p className="prd_code_name">RA-M17DAAW6</p>
              </div>
              <div className="price_box">
                <dl className="sell_price">
                  <dt>판매가</dt>
                  <dd><b className="en">2,399,000</b>원</dd>
                </dl>
                <dl className="benefit_price">
                  <dt>혜택가</dt>
                  <dd><b className="en">1,990,000</b>원</dd>
                </dl>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="big_tag_wrap best">
                <div className="big_tag tail_bottom"><span className="en">BEST</span></div>
              </div>
              <div className="pd_wrap">
                <div className="img_box">
                  <img src="images/pd_img02.png" alt=""/>
                </div>
              </div>
              <div className="name_box">
                <p className="prd_name">새틴 베이지</p>
                <p className="prd_code_name">RA-M17DAA39</p>
              </div>
              <div className="price_box">
                <dl className="sell_price">
                  <dt>판매가</dt>
                  <dd><b className="en">2,399,000</b>원</dd>
                </dl>
                <dl className="benefit_price">
                  <dt>혜택가</dt>
                  <dd><b className="en">2,399,000</b>원</dd>
                </dl>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="big_tag_wrap best">
                <div className="big_tag tail_bottom"><span className="en">BEST</span></div>
              </div>
              <div className="pd_wrap">
                <div className="img_box">
                  <img src="images/pd_img03.png" alt=""/>
                </div>
              </div>
              <div className="name_box">
                <p className="prd_name">코타 차콜</p>
                <p className="prd_code_name">RA-M17DAA05</p>
              </div>
              <div className="price_box">
                <dl className="sell_price">
                  <dt>판매가</dt>
                  <dd><b className="en">2,199,000</b>원</dd>
                </dl>
                <dl className="benefit_price">
                  <dt>혜택가</dt>
                  <dd><b className="en">1,790,000</b>원</dd>
                </dl>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="big_tag_wrap new">
                <div className="big_tag tail_bottom"><span><span className="en">NEW</span><br />컬러</span></div>
              </div>
              <div className="pd_wrap">
                <div className="img_box">
                  <img src="images/pd_img04.png" alt=""/>
                </div>
              </div>
              <div className="name_box">
                <p className="prd_name">코타 모닝블루</p>
                <p className="prd_code_name">RA-M17DAA3B</p>
              </div>
              <div className="price_box">
                <dl className="sell_price">
                  <dt>판매가</dt>
                  <dd><b className="en">2,199,000</b>원</dd>
                </dl>
                <dl className="benefit_price">
                  <dt>혜택가</dt>
                  <dd><b className="en">1,790,000</b>원</dd>
                </dl>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="pd_wrap">
                <div className="img_box">
                  <img src="images/pd_img05.png" alt=""/>
                </div>
              </div>
              <div className="name_box">
                <p className="prd_name">글램 핑크</p>
                <p className="prd_code_name">RA-M17DAA32</p>
              </div>
              <div className="price_box">
                <dl className="sell_price">
                  <dt>판매가</dt>
                  <dd><b className="en">2,399,000</b>원</dd>
                </dl>
                <dl className="benefit_price">
                  <dt>혜택가</dt>
                  <dd><b className="en">1,990,000</b>원</dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="slick-arrow nextArrow nextArrow-2"></div>
          <div className="slick-arrow prevArrow prevArrow-2"></div>

          <div className="slider_control">
            <button className="stop"></button>
            <button className="play active"></button>
          </div>
          <p className="notice">*본 혜택가는 한정수량으로 제공되며 해당 물량 소진 시 혜택가가 변동될 수 있습니다</p>
        </div>
      </div>
    </div>
  )
}

export default Product;