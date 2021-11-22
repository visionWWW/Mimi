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
        <Find></Find>
    </div>
      <Footer></Footer>
  </>
);

export default Review;