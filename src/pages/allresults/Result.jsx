import React from 'react';
import {Col} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Card} from "react-bootstrap";


function Result() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>감정결과</h2>
          <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
                <Col>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
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

    </header>
    </div>
  );
}

export default Result;
