import React from 'react';
import Card from "react-bootstrap/Card";
import {ListGroup} from "react-bootstrap";
import Button from "react-bootstrap/Button";

function alertClicked() {
    alert('작성하신 리뷰가 없습니다.');
}

const ReviewList = () => (
    <>
        <hr style={{marginTop:"30px"}}></hr>
        <Card>
            <h3 style={{textAlign:"center", marginTop:"30px"}}>리뷰 리스트</h3>
            <ListGroup style={{display:"auto",width:"65%",margin:"auto", marginTop: "30px",marginBottom:"30px"}}>
                <ListGroup.Item action onClick={alertClicked}>
                    작성하신 리뷰가 없습니다.
                </ListGroup.Item>
            </ListGroup>
            <Button variant="secondary" style={{width:"200px",display:"block",margin:"auto", marginBottom:"30px"}} href="/review">
                리뷰 페이지로 이동하기
            </Button>
         </Card>
    </>
);

export default ReviewList;