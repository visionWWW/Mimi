import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import { Container } from 'react-bootstrap';
import {Col} from "react-bootstrap";
import {Row} from "react-bootstrap";
class Foodimg_653 extends Component {
    render(){
        return(
            <div id = "img_food1"> 
            <Container>
            <Row>
                <Col xs={6} md={3}>
                <Image src="/images/c1.png" alt="profile" thumbnail />
                </Col>
                <Col xs={6} md={3}>
                <Image src="/images/c4.png" alt="profile" thumbnail />
                </Col>
                <Col xs={6} md={3}>
                <Image src="/images/c3.png" alt="profile" thumbnail />
                </Col>
                <Col xs={6} md={3}>
                <Image src="/images/c2.png" alt="profile" thumbnail />
                </Col>
            </Row>
            </Container>
            </div>
        )
    }
}

export default Foodimg_653;