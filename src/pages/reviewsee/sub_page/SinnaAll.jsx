import React from 'react';
import RestaurantImg from "./SinnaImg";
import Info from "./SinnaInfo";
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