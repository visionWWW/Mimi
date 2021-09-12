import React from 'react';
import {Carousel} from "react-bootstrap";
import Imageurl1 from "./imageurl1";
import Imageurl2 from "./imageurl2";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const wrap = {
    width:"600px",
    margin: 'auto'
}

const RestraurantImg = () => (
    <>
        <div style={wrap}>
        <Carousel style={{display:"block", margin:"auto"}}>
            <Carousel.Item interval={1000}>
                <Row>
                    <Col xs={11} md={12}>
                        <Image
                            className="d-block w-100"
                            src={Imageurl1.url}
                            alt="First slide"
                        />
                    </Col>
                </Row>
            </Carousel.Item>
            <Carousel.Item>
                <Row>
                    <Col xs={11} md={12}>
                        <Image
                            className="d-block w-100"
                            src={Imageurl2.url}
                            alt="First slide"
                        />
                    </Col>
                </Row>
            </Carousel.Item>
        </Carousel>
        </div>
    </>
);

export default RestraurantImg;