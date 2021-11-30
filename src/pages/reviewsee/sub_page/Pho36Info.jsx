import React from 'react';
import Card from 'react-bootstrap/Card';
import StarRatingComponent from 'react-star-rating-component';
import Button from "react-bootstrap/Button";

const wrap = {
    width:"50%",
    float:"center",
    clear:"both",
    marginLeft: 'auto',
    marginRight:'auto',
    marginTop: '-50px'
}

const { rating } = 1;

const Info = () => (
    <>
        <Card style={wrap}>
            <Card.Header><h4>포36거리</h4></Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <h6 style={{fontSize:"13px"}}>오픈 시간 : 오전 11시 ~ </h6>
                    <h6 style={{fontSize:"13px"}}>주소 : 서울특별시 용산구 청파로47길 77 2층</h6>
                    <h6 style={{fontSize:"13px"}}>대표 메뉴 : 쌀국수</h6>
                    <br></br>
                    <footer className="blockquote-footer">
                        <div>
                            <StarRatingComponent
                                name="star"
                                editing={false}
                                renderStarIcon={() => <span>★</span>}
                                starCount={5}
                                value={4.7}
                            />
                            <Button href="/review/see/form/pho36-write" variant="secondary" style={{display:"block",margin:"auto"}}>리뷰 폼 작성하러 가기 📝</Button>
                        </div>
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    </>
);

export default Info;