import {Formik} from 'formik';
import React from 'react';
import {Button, Form} from "react-bootstrap";
import * as Yup from "yup";
import axios from "axios";
import {toast} from 'react-toastify';

const SignUp = (props: any) => {
    const submit = async (values: any) => {
      console.log(values);
      const {nickname, password} = values;
      try {
        await axios.post('/api/auth/user', {nickname, password});
  
        toast.success('회원등록하였습니다. 로그인하세요', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        props.history.push('/login');
      } catch(e) {
        toast.error('실패하였습니다. 다시 시도하세요', {
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
      <Formik
        initialValues={{ nickname: '', password: '', password2: ''}}
        onSubmit={submit}
        validationSchema={Yup.object().shape({
          nickname: Yup.string()
            .required("필수필드 입니다."),
          password: Yup.string()
            .required("Required")
            .min(6, "6자이상 입력하세요")
        })}>
        {
          ({values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting }) => (<Form onSubmit={handleSubmit}>
            <Form.Group controlId="nickname">
              <Form.Label>Nickname</Form.Label>
              <Form.Control name="nickname" placeholder="Enter nickname"
                            value={values.nickname}
                            onChange={handleChange} onBlur={handleBlur}
                            isValid={touched.nickname && !errors.nickname}
                            isInvalid={touched.nickname && errors.nickname ? true : false} />
              { touched.nickname && !errors.nickname && <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback> }
              { touched.nickname && errors.nickname && <Form.Control.Feedback type="invalid">{errors.nickname}</Form.Control.Feedback> }
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="enter Password"
                            value={values.password}
                            onChange={handleChange} onBlur={handleBlur}
                            isValid={touched.password && !errors.password}
                            isInvalid={touched.password && errors.password ? true : false} />
              { touched.password && !errors.password && <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback> }
              { touched.password && errors.password && <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback> }
            </Form.Group>

            <Button variant="primary" type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>)
        }
      </Formik>
    );
  }
  
  export default SignUp;