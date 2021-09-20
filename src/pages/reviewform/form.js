import React from "react";
import Card from "react-bootstrap/Card";
import NickPw from "./nickPw";
import RadioBt from "./radioBt";
import Hashtag from "./hashtag";
import WriteArea from "./textArea";
import FileUpload from "./fileUpload";
import Button from "react-bootstrap/Button";

const RvForm = () => (
    <>
        <Card>
            <div style={{textAlign:"center"}}>
            <h4 style={{marginTop:"20px"}}>🍽 음식점 | 음식점 이름 🍽 </h4>
            <h6 style={{marginBottom:"20px"}}>어땠나요?</h6>
            </div>
            <NickPw></NickPw>

            <h4 style={{textAlign:"center", marginTop:"50px"}}>만족도는 어떤가요?</h4>
            <RadioBt></RadioBt>

            <h4 style={{textAlign:"center", marginTop:"50px"}}>해당 음식점에 맞는 키워드를 알려주세요</h4>
            <Hashtag></Hashtag>

            <h4 style={{textAlign:"center",marginTop:"50px",marginBottom:"30px"}}>리뷰를 작성해주세요</h4>
            <WriteArea></WriteArea>
            <FileUpload></FileUpload>
            <Button variant="outline-primary" style={{display:"block",margin:"auto",marginTop:"30px",width:"300px",marginBottom:"30px"}}>업로드</Button>
        </Card>
    </>
);

export default RvForm;