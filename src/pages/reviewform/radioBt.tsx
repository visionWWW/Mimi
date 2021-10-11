import { Formik, Field, Form } from 'formik';
import React from "react";
import 'antd/dist/antd.css';
import {toast} from "react-toastify";
import * as Yup from "yup";
import axios from "axios";

const RadioBt = (props: any) => {
    const submit = async (values: any) => {
        console.log(values);
        const {grade} = values;
        try {
            await axios.post('http://localhost:8080/api/user', {grade});

            toast.success('리뷰등록 성공', {
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
    return(
        <>
            <Formik initialValues={{grade: ''}}
                onSubmit={submit}>
                    {({ values }) => (
                    <Form>
                        <div id="my-radio-group">Picked</div>
                        <div role="group" aria-labelledby="my-radio-group">
                <label>
                    <Field type="radio" name="grade" value="One" />
                    One
                </label>
                <label>
                <Field type="radio" name="grade" value="Two" />
                    Two
                </label>
                <label>
                    <Field type="radio" name="grade" value="three" />
                    Three
                </label>
                <label>
                    <Field type="radio" name="grade" value="four" />
                    Four
                </label>
                <label>
                    <Field type="radio" name="grade" value="five" />
                    Five
                </label>
                    <div>Picked: {values.grade}</div>
                </div>
            </Form>
            )}
            </Formik>
    </>

);

}

export default RadioBt;