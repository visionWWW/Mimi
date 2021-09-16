import React from "react";
import {Form} from "react-bootstrap";

const FileUpload = () => (
    <>
        <>
            <Form.Group controlId="formFileMultiple" style={{display:"block",textAlign:"center",marginTop:"20px",marginBottom:"20px"}}>
                <Form.Label>아래에 사진을 업로드 해주세요</Form.Label>
                <br></br>
                <Form.Control type="file" multiple />
            </Form.Group>
        </>
    </>
);

export default FileUpload;

