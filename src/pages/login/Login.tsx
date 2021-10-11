import React from 'react';
import {Formik} from "formik";
import * as Yup from "yup";
import {Button, Col, Form, Row} from "react-bootstrap";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {setToken} from "../../redux/reducers/AuthReducer";
import queryString from "query-string";
import api from "../../utils/api";

const Login = (props: any) => {
  console.log(props);
  const dispatch = useDispatch();
  const submit = async (values: any) => {
    const {nickname, password} = values;
    try {
      const {data} = await api.post('/api/auth/signin', {nickname, password});
      console.log(data);

      dispatch(setToken(data.jwt))
      const {redirectUrl} = queryString.parse(props.location.search);

      if (redirectUrl) {
        props.history.push(redirectUrl);
      } else {
        props.history.push('/');
      }

      toast.success('로그인하였습니다.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch(e:any) {
      console.log(e.toString());
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
      <div className="d-flex justify-content-center my-3">
        <h2>로그인</h2>
      </div>

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
                  <Form.Label>Nickname</Form.Label>
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
                <div className="d-flex justify-content-between">
                  <Button variant="link" onClick={() => props.history.push('/sign-up')}>
                    Sign Up
                  </Button>
                  <Button variant="primary" type="submit" disabled={isSubmitting}>
                    Submit
                  </Button>
                </div>
              </Form>)
            }
          </Formik>
        </Col>
      </Row>
    </>
  );
}

export default Login;