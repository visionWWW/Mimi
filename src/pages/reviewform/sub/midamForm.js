import React from 'react';
import Form from "../form_sub/formmidam";
import Navbar from "../../navbar";
import Footer from "../../footer/Footer";
import TopAlert from '../../reviewcheck/TopAlert'

const ReviewForm = () => (
    <>
        <Navbar></Navbar>
        <TopAlert></TopAlert>
        <Form></Form>
        <Footer></Footer>
    </>
);

export default ReviewForm;