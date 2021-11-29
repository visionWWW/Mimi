import React from 'react';
import {Carousel} from "react-bootstrap";
import Image from "react-bootstrap/Image";

const wrap = {
    margin: 'auto',
    width: '60%',

}

const RestraurantImg = () => (
    <>
        <div style={wrap}>
            <Carousel style={{display:"block", margin:"auto"}}>
                <Carousel.Item interval={1000}>
                    <Image
                        className="d-block w-100"
                        src="/images/hyo1.png"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src="/images/hyo2.jpg"
                        alt="second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    </>
);

export default RestraurantImg;