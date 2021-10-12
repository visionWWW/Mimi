import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Review} from "../../dto/Review";
import Card from "react-bootstrap/Card";

const ReviewView = ({match}: any) => {
    const [review, setReview] = useState<Review>({
        id: 0,
        grade: 0,
        explain: "",
        restaurantName:"",
        hashtag: "",
        user: {}
    });

    useEffect(() => {
        console.log("매치가 머죠");
        console.log(match);
        getReview(match.params.id);
    }, []);

    const getReview = async (id: string) => {
        const res = await axios.get(`http://localhost:8080/api/review-find/${id}`);
        console.log("아니 님 데이터는 잘 가져오잖아여");
        console.log(res.data);
        setReview(res.data);
    }

    return (
        <div>
            <Card>
                <Card.Title>{review.restaurantName}</Card.Title>
                <Card.Text>
                    {review.explain}
                    {console.log("근데 리뷰는 왜 그러는 건데여..")}
                    {console.log(review)}
                    {console.log(review.restaurantName)}
                </Card.Text>
            </Card>
        </div>
    );
};

export default ReviewView ;