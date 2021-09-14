import {Form} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import Card from "react-bootstrap/Card";
import FloatingLabel from "react-bootstrap-floating-label";

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
                        <FloatingLabel
                            controlId="floatingInput"
                            label="닉네임"
                        >
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel controlId="floatingPassword" label="비밀번호">
                            <Form.Control type="password" placeholder="Password" />
                        </FloatingLabel>
                    </Col>
                </Row>
            </Form>

            <h4 style={{textAlign:"center", marginTop:"30px"}}>만족도는 어떤가요?</h4>

            <Form style={{textAlign:"center", marginTop:"30px"}}>
                {['radio'].map((type) => (
                    <div key={`inline-${type}`}>
                        <Form.Check
                            inline
                            label="1"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                        />
                        <Form.Check
                            inline
                            label="2"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                        />
                        <Form.Check
                            inline
                            label="3"
                            name="group1"
                            type={type}
                            id={`inline-${type}-3`}
                        />
                        <Form.Check
                            inline
                            label="4"
                            name="group1"
                            type={type}
                            id={`inline-${type}-3`}
                        />
                        <Form.Check
                            inline
                            label="5"
                            name="group1"
                            type={type}
                            id={`inline-${type}-3`}
                        />
                    </div>
                ))}
            </Form>

        </Card>
    </>
);

export default RvForm;