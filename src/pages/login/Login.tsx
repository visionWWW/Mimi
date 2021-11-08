import React from 'react';
import {Formik} from "formik";
import * as Yup from "yup";
import {Button, Col, Form, Row} from "react-bootstrap";
import axios from "axios";
import {toast} from "react-toastify";
import Navbar from "../navbar";
import Footer from "../footer/Footer";

const Login = (props: any) => {
    const submit = async (values: any) => {
        const {nickname, password} = values;
        try {
            const {data} = await axios.post('http://localhost:8080/api/sign-in', {nickname, password});
            console.log(data);

            toast.success('로그인하였습니다.', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            props.history.push('/');
        } catch(e) {
            toast.error('로그인에 실패하였습니다. 다시 시도하세요', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    return (
        <>
            <Navbar></Navbar>
            <h5 style={{textAlign:"center", marginTop:"30px"}}>로그인</h5>

            <Row className="justify-content-center">
            <Col xs={12} sm={10} md={8} lg={6} xl={4}>
            <Formik
                initialValues={{nickname: '', password: ''}}
                onSubmit={submit}
                validationSchema={Yup.object().shape({
                    nickname: Yup.string()
                        .required("필수필드 입니다."),
                    password: Yup.string()
                        .required("필수필드 입니다.")
                })}>
            {
            ({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
            }) => (<Form onSubmit={handleSubmit}>
            <Form.Group controlId="nickname">
            <Form.Label>nickname</Form.Label>
        <Form.Control name="nickname" placeholder="Enter nickname"
            value={values.nickname}
            onChange={handleChange} onBlur={handleBlur}
            isValid={touched.nickname && !errors.nickname}
            isInvalid={touched.nickname && errors.nickname ? true : false}/>
            {touched.nickname && !errors.nickname &&
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>}
            {touched.nickname && errors.nickname &&
        <Form.Control.Feedback type="invalid">{errors.nickname}</Form.Control.Feedback>}
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="enter Password"
            value={values.password}
            onChange={handleChange} onBlur={handleBlur}
            isValid={touched.password && !errors.password}
            isInvalid={touched.password && errors.password ? true : false}/>
            {touched.password && !errors.password &&
            <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>}
                {touched.password && errors.password &&
                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>}
                    </Form.Group>
                    <Button variant="primary" type="submit" disabled={isSubmitting}>
                    로그인
                    </Button>
                    <Button variant="primary" type="submit" href="./Signup">
                        회원가입
                    </Button>
                    </Form>)
                }
                </Formik>
                </Col>
                </Row>
                </>
            );
}

    export default Login;