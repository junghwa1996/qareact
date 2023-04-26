import React from "react";
import {useState} from "react";

function NavWrap() {


  return   (
    <div className="nav_wrap">
    <div className="inner_wrap">
      <ul className="ctn_nav">
        <li>
          <a href="#!">
            <div className="txt_wrap">
              <span className="small_tag">일시<br className="m_show"/>품절</span>
              <div className="title"><span className="en">The Freestyle</span> <br />런칭</div>
              <p className="date"><span className="en">22.01.27</span> ~ <span className="en">22.02.28</span></p>
            </div>
          </a>
        </li>
        <li>
          <a href="#!">
            <div className="txt_wrap">
              <div className="title"><span className="bespoke">BE<span>SPOKE</span></span> 제트 I 제트 봇 <br />런칭</div>
              <p className="date"><span className="en">22.02.22</span> ~ <span className="en">22.02.28</span></p>
            </div>
          </a>
        </li>
        <li>
          <a href="#!">
            <div className="txt_wrap">
              <div className="title"><span className="bespoke">BE<span>SPOKE</span></span> 그랑데 <sup>AI</sup><br />런칭</div>
              <p className="date"><span className="en">22.01.27</span> ~ <span className="en">22.02.28</span></p>
            </div>
          </a>
        </li>
        <li className="on">
          <a href="#!">
            <div className="txt_wrap">
              <div className="title"><span className="bespoke">BE<span>SPOKE</span></span> 1도어 <br />와인냉장고 런칭</div>
              <p className="date"><span className="en">22.02.28</span> ~ </p>
            </div>
          </a>
        </li>

      </ul>
    </div>
  </div>
  )
}

export default NavWrap;