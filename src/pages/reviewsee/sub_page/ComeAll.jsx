import React from 'react';
import RestaurantImg from "./ComeImg";
import Info from "./ComeInfo";
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