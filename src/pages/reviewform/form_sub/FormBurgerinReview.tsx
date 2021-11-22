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

        const {grade, explain, hashtag, restaurant_name, user_id} = values;
        try {
            await axios
                .all([
                    axios.post('http://localhost:8080/api/review', {grade, explain, restaurant_name, hashtag, user_id})])
                .then(axios.spread((res)=>{
                    console.log(res);
                }))
            props.history.push('/review');


        } catch(e) {
            console.log("error");
        }
    }
    return (
        <>
            <Navbar></Navbar>
            <h5 style={{textAlign:"center", marginTop:"30px"}}>버거인 | 음식점은 어떠셨나요?</h5>
            {/*{getData()}*/}
            <Formik
                initialValues={{
                    grade: '', hashtag: [],
                    explain:'', restaurant_name:"버거인", user_id: localStorage.getItem("id")
                }}
                onSubmit={submit}
                validationSchema={Yup.object().shape({
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
                                <div role="group" aria-labelledby="my-radio-group" style={{textAlign:"center", marginBottom:"30px"}}>
                                    <h6 style={{textAlign:"center", fontSize:"14px", marginBottom:"20px"}}>만족도를 입력해주세요.</h6>
                                    <label>
                                        1
                                        <Field type="radio" name="grade" value="1" />
                                    </label>
                                    <label>
                                        2
                                        <Field type="radio" name="grade" value="2" />
                                    </label>
                                    <label>
                                        3
                                        <Field type="radio" name="grade" value="3" />
                                    </label>
                                    <label>
                                        4
                                        <Field type="radio" name="grade" value="4" />
                                    </label>
                                    <label>
                                        5
                                        <Field type="radio" name="grade" value="5" />
                                    </label>
                                </div>
                                <div role="group" aria-labelledby="checkbox-group" style={{display:"block",margin:"30px auto",textAlign:"center", fontSize:"14px", marginBottom:"20px"}}>
                                    <h6 style={{textAlign:"center", fontSize:"14px", marginBottom:"30px"}}>음식점을 대표할 대표어를 골라주세요.</h6>
                                    <label style={{marginRight:"20px"}}>
                                        <Field type="checkbox" name="hashtag" value="가정식" />
                                        가정식
                                    </label>
                                    <label style={{marginRight:"20px"}}>
                                        <Field type="checkbox" name="hashtag" value="혼밥" />
                                        혼밥
                                    </label>
                                    <label style={{marginRight:"20px"}}>
                                        <Field type="checkbox" name="hashtag" value="포장가능한" />
                                        포장가능한
                                    </label>
                                    <label style={{marginRight:"20px"}}>
                                        <Field type="checkbox" name="hashtag" value="비건" />
                                        비건
                                    </label>
                                    <label style={{marginRight:"20px"}}>
                                        <Field type="checkbox" name="hashtag" value="대식가" />
                                        대식가
                                    </label>
                                    <label style={{marginRight:"20px"}}>
                                        <Field type="checkbox" name="hashtag" value="가성비" />
                                        가성비
                                    </label>
                                    <label>
                                        <Field type="checkbox" name="hashtag" value="웨이팅" />
                                        웨이팅
                                    </label>
                                </div>
                                <Form.Group controlId="explain" style={{display:"block", margin:"30px auto"}}>
                                    <Form.Label style={{display:"block", margin:"30px auto", textAlign:"center"}}>리뷰 작성 (100자 이내)</Form.Label>
                                    <Form.Control
                                        style={{width:"80%", margin:"auto"}}
                                        as={"textarea"} name="explain" placeholder="리뷰에 대한 설명을 입력해주세요."
                                        value={values.explain}
                                        onChange={handleChange} onBlur={handleBlur}
                                        isValid={touched.explain && !errors.explain}
                                        isInvalid={touched.explain && errors.explain ? true : false} />
                                    { touched.explain && !errors.explain && <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback> }
                                    { touched.explain && errors.explain && <Form.Control.Feedback type="invalid">{errors.explain}</Form.Control.Feedback> }
                                </Form.Group>
                                <Button variant="outline-secondary" type="submit" disabled={isSubmitting} style={{display:"block",margin:"auto"}}>
                                    리뷰 등록하기📝
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
};
export default RvForm;