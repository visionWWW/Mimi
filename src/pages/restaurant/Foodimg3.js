import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import { Container } from 'react-bootstrap';
import {Col} from "react-bootstrap";
import {Row} from "react-bootstrap";

class FoodImg3 extends Component {
    render(){
        return(
            <div id = "img_food3"> 
            <Container>
            <Row>
                <Col xs={6} md={3}>
                <Image src="http://drive.google.com/uc?export=view&id=1z18J_fnHBvtCnjSluv0oLwxLkFsB2OzZ" alt="profile" thumbnail />
                </Col>
                <Col xs={6} md={3}>
                <Image src="http://drive.google.com/uc?export=view&id=1z18J_fnHBvtCnjSluv0oLwxLkFsB2OzZ" alt="profile" thumbnail />
                </Col>
                <Col xs={6} md={3}>
                <Image src="http://drive.google.com/uc?export=view&id=1z18J_fnHBvtCnjSluv0oLwxLkFsB2OzZ" alt="profile" thumbnail />
                </Col>
                <Col xs={6} md={3}>
                <Image src="http://drive.google.com/uc?export=view&id=1z18J_fnHBvtCnjSluv0oLwxLkFsB2OzZ" alt="profile" thumbnail />
                </Col>
            </Row>
            </Container>
            </div>
        )
    }
}

export default FoodImg3;