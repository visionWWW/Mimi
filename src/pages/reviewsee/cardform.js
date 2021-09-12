import React from 'react';
import Card from "react-bootstrap/Card";
import "./card.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const carouselWrap = {
    width: '1000px',
    margin: 'auto'
}

const Cardform = () => (
    <>
        <div>
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 2 }).map((_, idx) => (
                    <Col>
                        <Card style={{ width: '40rem' }}>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    </>
);

export default Cardform;