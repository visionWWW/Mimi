import React from "react";
import Card from "react-bootstrap/Card";
import NickPw from "../nickPw";
import Button from "react-bootstrap/Button";

const RvForm = () => (
    <>
        <Card>
            <div style={{textAlign:"center"}}>
                <h4 style={{marginTop:"20px"}}>🍽 음식점 | 음식미담 🍽 </h4>
                <h6 style={{marginBottom:"20px"}}>어땠나요?</h6>
            </div>
            <NickPw></NickPw>
            <Button variant="outline-secondary" style={{display:"block",margin:"auto",marginTop:"30px",width:"300px",marginBottom:"30px"}}  href="/review/see/form/midam-write"> 리뷰 작성하러 가기 </Button>
        </Card>
    </>
);

export default RvForm;