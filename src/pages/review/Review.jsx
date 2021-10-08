import React from 'react';
import Find from './find.js'
import './re_main.css';
import NaviagtionBar from '../navbar';
import Footer from "../footer/Footer";

const Review = () => (
  <>
    <div>
        <NaviagtionBar/>
        <br/><br/>
        <h3 className="title">리뷰를 남겨주세요</h3>
        <p style={{marginTop:"20px", textAlign:"center"}}>현재 리뷰 기능을 지원하는 음식점은 또와또, 음식미담, 비일입니다.</p>
        <Find></Find>
    </div>
      <Footer></Footer>
  </>
);

export default Review;