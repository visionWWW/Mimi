import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Cardform from "./cardform";
import RestaurantImg from "./restaurantImg";
import Info from "./restaurantInfo";
import NaviagtionBar from '../navbar';

const Review = () => (
    <>
        <div>
        <NaviagtionBar/>
        </div>
        <div>
            <RestaurantImg></RestaurantImg>
            <Info></Info>
            <hr></hr>
            <h4 style={{textAlign:"center", marginTop:"50px"}}>최근 리뷰보기 👀</h4>
            <Cardform></Cardform>
        </div>

    </>
);

export default Review;