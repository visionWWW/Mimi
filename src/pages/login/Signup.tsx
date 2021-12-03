import {Formik} from 'formik';
import React from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import * as Yup from "yup";
import axios from "axios";
import Navbar from "../navbar";
import Footer from "../footer/Footer";

const RvForm = (props: any) => {

    let isCheckedId = false;

    const submit = async (values: any) => {
      if(isCheckedId){
          console.log(values);
          const {nickname, password} = values;
          try {
              await axios.post('http://mimi-project.kr:5000/api/user', {nickname, password});
              props.history.push('/');
          } catch(e) {
              console.log("error");
          }
      }
      else{
          alert("다른 사람이 사용하고 있는 닉네임입니다. 다른 닉네임을 사용해주세요.");
      }
  }

  const checkId = async (values: any) => {
      try {
          console.log("check Id 되니");
          console.log(values);
          const nickname = values;
          const data = await axios.post('http://mimi-project.kr:5000/api/login', {nickname});
          console.log(data);
          if(data) {
              alert("중복된 닉네임입니다.");
              isCheckedId = false;
          }

      } catch(e) {
          isCheckedId = true;
      }

  }

  return (
      <>
        <Navbar></Navbar>
        <h5 style={{textAlign:"center", marginTop:"30px"}}>회원가입</h5>
        <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6} xl={4}>
        <Formik
            initialValues={{nickname: '', password: ''}}
            onSubmit={submit}
            validationSchema={Yup.object().shape({
              nickname: Yup.string()
                  .required("필수필드 입니다."),
              password: Yup.string()
                  .required("Required")
                  .min(6, "6자이상 입력하세요")
                  .max(12, '11자이하 입력하세요')
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
                        <Form.Control style={{display:"inline-block",width:"50%", marginLeft:"10%"}} name="nickname" placeholder="닉네임을 입력해주세요."
                                      value={values.nickname}
                                      onChange={handleChange} onBlur={handleBlur}
                                      isValid={touched.nickname && !errors.nickname}
                                      isInvalid={touched.nickname && errors.nickname ? true : false} />
                          <Button variant="outline-secondary"
                                  style={{margin:"10px"}}
                                  onClick={() => { console.log("???");console.log(values.nickname); checkId(values.nickname) } } >
                              중복확인
                          </Button>
                        { touched.nickname && !errors.nickname && <Form.Control.Feedback style={{textAlign:"center"}}type="valid">Looks good!</Form.Control.Feedback> }
                        { touched.nickname && errors.nickname && <Form.Control.Feedback style={{textAlign:"center"}}type="invalid">{errors.nickname}</Form.Control.Feedback> }
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
                        { touched.password && !errors.password && <Form.Control.Feedback style={{textAlign:"center"}}type="valid">Looks good!</Form.Control.Feedback> }
                        { touched.password && errors.password && <Form.Control.Feedback style={{textAlign:"center"}}type="invalid">{errors.password}</Form.Control.Feedback> }
                      </Form.Group>
                      <Button variant="outline-secondary" type="submit" disabled={isSubmitting} style={{display:"block",margin:"auto"}}>
                        회원가입 완료
                      </Button>
                    </Form>
                )
          }
        </Formik>
        </Col>
        </Row>
      
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