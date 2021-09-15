import {Form} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import FloatingLabel from "react-bootstrap-floating-label";

const RvForm = () => (
    <>
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
    </>
);

export default RvForm;