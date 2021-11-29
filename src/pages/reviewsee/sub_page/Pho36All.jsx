import React from 'react';
import RestaurantImg from "./Pho36Img";
import Info from "./Pho36Info";
import NaviagtionBar from '../../navbar';
import Footer from "../../footer/Footer";

const Review = () => (
    <>
        <div>
            <NaviagtionBar/>
        </div>
        <br/>
        <div>
            <RestaurantImg></RestaurantImg>
            <Info></Info>
            <hr></hr>
        </div>
        <Footer></Footer>
    </>
);

export default Review;