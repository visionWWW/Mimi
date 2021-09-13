import React from 'react';
import Find from './find.js'
import './re_main.css';
import NaviagtionBar from '../navbar';

const Review = () => (
  <>
    <div>
        <NaviagtionBar/>
        <h3 className="title">리뷰를 남겨주세요</h3>
        <Find></Find>
    </div>
  </>
);

export default Review;