import {Form} from "react-bootstrap";
import React from "react";

const RadioBt = () => (
    <>
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
    </>
);

export default RadioBt;