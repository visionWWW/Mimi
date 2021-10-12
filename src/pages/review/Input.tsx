import React from 'react';
import {Formik} from "formik";
import * as Yup from "yup";
import {Button, Col, Form, Row} from "react-bootstrap";
import {withRouter} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {setToken} from "../../redux/reducers/AuthReducer";
import api from "../../utils/api";
import Card from "react-bootstrap/Card";
import axios from "axios";

const Login = (props: any) => {
    console.log(props);
    const dispatch = useDispatch();
    const submit = async (values: any) => {
        const {nickname, password} = values;
        try {
            const {data} = await api.post('http://localhost:8080/api/sign-in', {nickname, password});
            console.log(data);

            dispatch(setToken(data.jwt))
            const redirectUrl = './review/check';
            console.log(data.id);
            if (data.nickname) {
                props.history.push(redirectUrl+"/"+`${data.id}`); // 그 사람의 닉네임으로 이동하게끔 해봤는데 이걸 쓸 일이 있을까요?
                const res = await axios.get(`http://localhost:8080/api/review-find/${data.id}`);
                console.log(res.data);
            } else {
                console.log(data.nickname);
                alert("로그인에 실패하셨습니다. 맞는 회원정보를 입력해주세요.");
            }
        } catch(e:any) {
            console.log(e.toString());
        }
    }

    return (
        <>
            <Card style={{width:"80%"}}>
                <div className="d-flex justify-content-center my-3">
                    <h6 style={{textAlign:"center"}}>리뷰 작성 시 사용한 닉네임과<br/><br/> 비밀번호를 입력해주세요.</h6>
                </div>
                <Row className="justify-content-center" style={{marginTop:"-30px", marginBottom:"30px"}}>
                    <Col xs={12} sm={10} md={8} lg={6} xl={4} style={{marginBottom:"120px"}}>
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
                                    <Form.Group controlId="nickname" style={{marginBottom:"20px"}}>
                                        <Form.Label>Nickname</Form.Label>
                                        <Form.Control name="nickname" placeholder="닉네임을 입력해주세요 :)"
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
                                        <Form.Control type="password" name="password" placeholder="비밀번호를 입력해주세요."
                                                      value={values.password}
                                                      onChange={handleChange} onBlur={handleBlur}
                                                      isValid={touched.password && !errors.password}
                                                      isInvalid={touched.password && errors.password ? true : false}/>
                                        {touched.password && !errors.password &&
                                        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>}
                                        {touched.password && errors.password &&
                                        <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>}
                                    </Form.Group>
                                    <div className="d-flex justify-content-between">
                                        <Button variant="outline-secondary" type="submit" disabled={isSubmitting}
                                        style={{
                                            display:"block",
                                            marginLeft:"auto",
                                            marginRight:"auto",
                                            marginTop:"30px",
                                        }}>
                                            로그인 ✅
                                        </Button>
                                    </div>
                                </Form>)
                            }
                        </Formik>
                    </Col>
                </Row>
            </Card>
        </>
    );
}

export default withRouter(Login);