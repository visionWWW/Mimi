import {Field, Form, Formik} from 'formik';
import {Button} from "react-bootstrap";
import React from 'react';
import 'antd/dist/antd.css';
import {toast} from "react-toastify";
import axios from "axios";
import './reviewform.css';

const RadioBt = (props: any) => {
    const submit = async (values: any) => {
        console.log(values);
        alert(JSON.stringify(values, null, 2));
        const { grade, hashtag } = values;
        try {
            await axios.post('http://mimi-project.kr:5000/api/review', { grade, hashtag });

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
        } catch (e) {
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
        <>
            <Formik initialValues={{
                grade: '',
                toggle: false,
                checked: [],
            }}
                onSubmit={submit}>

                {({ values,
                    handleSubmit,
                    isSubmitting }) => (
                    <>
                        <Form onSubmit={handleSubmit}>
                            <div role="group" aria-labelledby="my-radio-group">
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
                                <div>Picked: {values.grade}</div>
                            </div>
                        </Form>
                        <Form>
                            <div role="group" aria-labelledby="checkbox-group">
                                <label>
                                    <Field type="checkbox" name="checked" value="가정식" />
                                    #가정식
                                </label>
                                <label>
                                    <Field type="checkbox" name="checked" value="혼밥" />
                                    #혼밥
                                </label>
                                <label>
                                    <Field type="checkbox" name="checked" value="포장가능한" />
                                    #포장가능한
                                </label>
                                <label>
                                    <Field type="checkbox" name="checked" value="비건" />
                                    #비건
                                </label>
                                <label>
                                    <Field type="checkbox" name="checked" value="대식가" />
                                    #대식가
                                </label>
                                <label>
                                    <Field type="checkbox" name="checked" value="가성비" />
                                    #가성비
                                </label>
                                <label>
                                    <Field type="checkbox" name="checked" value="웨이팅" />
                                    #웨이팅
                                </label>
                            </div>


                            <Button variant="primary" type="submit" disabled={isSubmitting}>
                                Submit
                            </Button>
                        </Form>
                    </>
                )}
            </Formik>
        </>

    );

}

export default RadioBt;