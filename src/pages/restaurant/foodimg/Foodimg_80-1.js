import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import { Container } from 'react-bootstrap';
import {Col} from "react-bootstrap";
import {Row} from "react-bootstrap";
class Foodimg_801 extends Component {
    render(){
        return(
            <div id = "img_food1"> 
            <Container>
            <Row>
                <Col xs={6} md={3}>
                <Image src="http://drive.google.com/uc?export=view&id=15dW5OCXrACR-kg4oW3BueGjR81zIJLXv" alt="profile" thumbnail />
                </Col>
                <Col xs={6} md={3}>
                <Image src="http://drive.google.com/uc?export=view&id=15dW5OCXrACR-kg4oW3BueGjR81zIJLXv" alt="profile" thumbnail />
                </Col>
                <Col xs={6} md={3}>
                <Image src="http://drive.google.com/uc?export=view&id=15dW5OCXrACR-kg4oW3BueGjR81zIJLXv" alt="profile" thumbnail />
                </Col>
                <Col xs={6} md={3}>
                <Image src="http://drive.google.com/uc?export=view&id=15dW5OCXrACR-kg4oW3BueGjR81zIJLXv" alt="profile" thumbnail />
                </Col>
            </Row>
            </Container>
            </div>
        )
    }
}

export default Foodimg_801;