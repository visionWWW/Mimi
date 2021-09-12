import React from 'react';
import Card from 'react-bootstrap/Card';

const Info = () => (
    <>
        <Card>
            <Card.Header>가게 이름</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p>
                        {' '}
                        가게 설명
                        {' '}
                    </p>
                    <footer className="blockquote-footer">
                        별점
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    </>
);

export default Info;