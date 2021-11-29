import React from "react";
import {ToggleButtonGroup} from "react-bootstrap";
import ToggleButton from "react-bootstrap/ToggleButton";
import axios from "axios";
import {toast} from "react-toastify";
import {Field, Form, Formik} from "formik";
import './reviewform.css';

const RvForm = (props: any) => {
    const submit = async (values: any) => {
        console.log(values);
        const {hashtag} = values;
        try {
            await axios.post('http://localhost:5000/api/user', {hashtag});

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
                checked: []
            }}
                    onSubmit={async (values) => {
                        alert(JSON.stringify(values, null, 2));
                    }}>

                {({ values }) => (
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
                    </Form>
                )}
            </Formik>
        </>
    );
}
export default RvForm;