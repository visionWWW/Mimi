import React from 'react';
import Card from 'react-bootstrap/Card';
import StarRatingComponent from 'react-star-rating-component';

const wrap = {
    width:"500px",
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
            <Card.Header>가게 이름</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p>
                        {' '}
                        가게 설명
                        {' '}
                    </p>
                    <footer className="blockquote-footer">
                        <div>
                            <StarRatingComponent
                                name="star"
                                editing={false}
                                renderStarIcon={() => <span>★</span>}
                                starCount={5}
                                value={2}
                            />
                        </div>
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    </>
);

export default Info;