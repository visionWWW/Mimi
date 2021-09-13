import {Form} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import Card from "react-bootstrap/Card";

const RvForm = () => (
    <>
        <Card>
            <div style={{textAlign:"center"}}>
            <h4 style={{marginTop:"20px"}}>🍽 음식점 | 음식점 이름 🍽 </h4>
            <h6 style={{marginBottom:"20px"}}>어땠나요?</h6>
            </div>
            <Form>
                <Row>
                    <Col>
                        <Form.Control placeholder="First name" />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Last name" />
                    </Col>
                </Row>
            </Form>
        </Card>
    </>
);

export default RvForm;