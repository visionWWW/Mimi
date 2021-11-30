import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Review} from "../../dto/Review";
import Card from "react-bootstrap/Card";
import Navbar from "../navbar"
import Footer from "../footer/Footer"

const BoardList: React.FC = ({match}: any) => {
    const [boardList, setBoardList] = useState<Array<Review>>([]);
    useEffect(() => {
        getBoardList(match.params.id);
    }, []);

    const getBoardList = async (id: string) => {
        let res = await axios.get(`http://mimi-project.kr:5000/api/review-find/${id}`);
        console.log(res);
        setBoardList(res.data);
    }

    return (
        <div>
            <Navbar></Navbar>
            <Card style={{width:"80%", marginBottom:"50px"}}>
            <h4 style={{textAlign:"center", marginTop:"30px"}}>📝 <b>작성한 리뷰 목록</b> 📝</h4>
                {
                    boardList.map((review: Review)=>
                         <Card style={{width:"80%", marginBottom:"50px"}}>
                            <Card.Title>{review.restaurantName}</Card.Title>
                             <hr/>
                            <Card.Text>
                                {review?.explain}
                            </Card.Text>
                        </Card>)
                }
                <p style={{textAlign:"center"}}>작성해주신 리뷰는 음식점에 큰 도움이 됩니다.</p>
            </Card>
            <Footer></Footer>
        </div>
    );
};

export default BoardList;