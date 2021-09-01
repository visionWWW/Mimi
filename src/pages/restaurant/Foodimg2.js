import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import { Container } from 'react-bootstrap';
import {Col} from "react-bootstrap";
import {Row} from "react-bootstrap";

class FoodImg2 extends Component {
    render(){
        return(
            <div id = "img_food2"> 
            <Container>
            <Row>
                <Col xs={6} md={3}>
                <Image src="http://drive.google.com/uc?export=view&id=1-8noao2KTy9n3OWVfuMIVtSqZTgtQqCJ" alt="profile" thumbnail />
                </Col>
                <Col xs={6} md={3}>
                <Image src="http://drive.google.com/uc?export=view&id=1-8noao2KTy9n3OWVfuMIVtSqZTgtQqCJ" alt="profile" thumbnail />
                </Col>
                <Col xs={6} md={3}>
                <Image src="http://drive.google.com/uc?export=view&id=1-8noao2KTy9n3OWVfuMIVtSqZTgtQqCJ" alt="profile" thumbnail />
                </Col>
                <Col xs={6} md={3}>
                <Image src="http://drive.google.com/uc?export=view&id=1-8noao2KTy9n3OWVfuMIVtSqZTgtQqCJ" alt="profile" thumbnail />
                </Col>
            </Row>
            </Container>
            </div>
        )
    }
}

export default FoodImg2;