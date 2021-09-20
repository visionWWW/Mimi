import React from 'react';
import Navbar from "../navbar";
import TopAlert from "./TopAlert";
import ReviewList from "./ReviewList";
import Footer from "../footer/Footer";

const ReviewCheck = () => (
    <>
        <Navbar></Navbar>
        <TopAlert></TopAlert>
        <ReviewList></ReviewList>
        <Footer></Footer>
    </>
);

export default ReviewCheck;