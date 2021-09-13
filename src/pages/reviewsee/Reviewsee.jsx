import React from 'react';
import Cardform from "./cardform";
import RestaurantImg from "./restaurantImg";
import Info from "./restaurantInfo";
import Button from "react-bootstrap/Button";
import NaviagtionBar from '../navbar';

const Review = () => (
    <>
        <div>
            <NaviagtionBar/>
        </div>
        <div>
            <RestaurantImg></RestaurantImg>
            <Info></Info>
            <Button style={{display:"block",margin:"auto",marginTop:"-10px"}}>리뷰 폼 어떻게 구성해야 될 지 모르겠읍니다</Button>
            <hr></hr>
            <h4 style={{textAlign:"center", marginTop:"50px"}}>최근 리뷰보기 👀</h4>
            <Cardform></Cardform>
        </div>

    </>
);

export default Review;