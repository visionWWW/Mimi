import {Field, Formik} from 'formik';
import React from 'react';
import {Button, Form} from "react-bootstrap";
import * as Yup from "yup";
import axios from "axios";
import Navbar from "../../navbar";
import Footer from "../../footer/Footer";

const RvForm = (props: any) => {
    const submit = async (values: any) => {
        console.log(values);
        const {nickname, password} = values;
        try {
            await axios
                .all([
                    axios.post('http://localhost:8080/api/user', {nickname, password})])
                .then(axios.spread((res)=>{
                    console.log(res);
                }))
            props.history.push('/user');
        } catch(e) {
            console.log("error");
        }
    }
    return (
        <>
            <Navbar></Navbar>
        <h5 style={{textAlign:"center", marginTop:"30px"}}>비일 | 음식점은 어떠셨나요?</h5>
        <Formik
        initialValues={{ nickname: '', password: ''
        }}
        onSubmit={submit}
        validationSchema={Yup.object().shape({
                nickname: Yup.string()
                    .required("필수필드 입니다."),
                password: Yup.string()
                    .required("Required")
                    .min(6, "6자이상 입력하세요"),
                explain: Yup.string()
                    .required("Required")
                    .max(100, "100자 미만으로 입력하세요")
            })}>
        {
        ({values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting }) =>
    (
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="nickname">
        <Form.Label style={{textAlign:"center", display:"block"}} >닉네임을 입력해주세요.</Form.Label>
        <Form.Control style={{display:"block",width:"50%",margin:"30px auto"}} name="nickname" placeholder="닉네임을 입력해주세요."
        value={values.nickname}
        onChange={handleChange} onBlur={handleBlur}
        isValid={touched.nickname && !errors.nickname}
        isInvalid={touched.nickname && errors.nickname ? true : false} />
        { touched.nickname && !errors.nickname && <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback> }
            { touched.nickname && errors.nickname && <Form.Control.Feedback type="invalid">{errors.nickname}</Form.Control.Feedback> }
                </Form.Group>
            <Form.Group controlId="formGroupPassword">
        <Form.Label style={{textAlign:"center", display:"block"}} >비밀번호를 입력해주세요.</Form.Label>
        <Form.Control
            style={{margin:"30px auto", width:"50%", display:"block"}}
            name="password" placeholder="비밀번호를 입력해주세요."
            value={values.password}
            onChange={handleChange} onBlur={handleBlur}
            isValid={touched.password && !errors.password}
            isInvalid={touched.password && errors.password ? true : false} />
            { touched.password && !errors.password && <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback> }
                { touched.password && errors.password && <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback> }
                    </Form.Group>
                    <Button variant="outline-secondary" type="submit" disabled={isSubmitting} style={{display:"block",margin:"auto" }}
                    href="/review/see/form/midam-write"
                        >
                        리뷰 쓰러가기📝
                            </Button>
                            </Form>
                )
}
    </Formik>
    <br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/>
    <br/><br/><br/>
    <Footer></Footer>
    </>
);
}
export default RvForm;