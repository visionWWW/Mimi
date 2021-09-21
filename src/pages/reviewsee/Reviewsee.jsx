import React from 'react';
import Cardform from "./cardform";
import RestaurantImg from "./restaurantImg";
import Info from "./restaurantInfo";
import NaviagtionBar from '../navbar';
import Footer from "../footer/Footer";
import TopAlert from '../reviewcheck/TopAlert'

const Review = () => (
    <>
        <div>
        <NaviagtionBar/>
        </div>
        <TopAlert></TopAlert>
        <br/>
        <div>
            <RestaurantImg></RestaurantImg>
            <Info></Info>
            <hr></hr>
            <h4 style={{textAlign:"center", marginTop:"50px"}}>최근 리뷰보기 👀</h4>
            <Cardform></Cardform>
        </div>
            <Footer></Footer>
    </>
);

export default Review;