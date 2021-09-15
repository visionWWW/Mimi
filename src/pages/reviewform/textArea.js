import React from "react";
import {Form} from "react-bootstrap";
import FloatingLabel from "react-bootstrap-floating-label";

const TextArea = () => (
    <>
        <>
            <FloatingLabel controlId="floatingTextarea" label="Comments" style={{width:"800px",marginTop:"30px",margin:"auto"}}>
                <Form.Control as="textarea" placeholder="100글자 이하로 작성해주세요." />
            </FloatingLabel>
        </>
    </>
);

export default TextArea;