import React from 'react';
import {Col} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";
import NaviagtionBar from '../navbar';
import './result.css';


function Result() {
    return (
      <div className="App">
        <header>
        <NaviagtionBar/>

          <h2>감정결과</h2>
          <div className="result">
          <Row>
                <Col xs={6} md={4}>
                <Card className="card">
                    <Card.Img variant="top" src="/images/cozy.png" />
                    <Card.Body>
                    <Card.Title>편안한</Card.Title>
                    <Card.Text>
                    감정상태 설명이 들어갑니다. 
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </Col>

                <Col xs={6} md={4}>
                <Card>
                    <Card.Img variant="top" src="/images/annoying.png" />
                    <Card.Body>
                    <Card.Title>짜증난</Card.Title>
                    <Card.Text>
                        감정상태 설명이 들어갑니다. 
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </Col>

                <Col xs={6} md={4}>
                <Card>
                    <Card.Img variant="top" src="/images/enjoy.png" />
                    <Card.Body>
                    <Card.Title>즐거운</Card.Title>
                    <Card.Text>
                        감정상태 설명이 들어갑니다.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </Col>

                <Col xs={6} md={4}>
                <Card>
                    <Card.Img variant="top" src="/images/happy.png" />
                    <Card.Body>
                    <Card.Title>행복한</Card.Title>
                    <Card.Text>
                    감정상태 설명이 들어갑니다.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </Col>

                <Col xs={6} md={4}>
                <Card>
                    <Card.Img variant="top" src="/images/lethargy.png" />
                    <Card.Body>
                    <Card.Title>무기력한</Card.Title>
                    <Card.Text>
                    감정상태 설명이 들어갑니다.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </Col>

                <Col xs={6} md={4}>
                <Card>
                    <Card.Img variant="top" src="/images/negative.png" />
                    <Card.Body>
                    <Card.Title>부정적인</Card.Title>
                    <Card.Text>
                    감정상태 설명이 들어갑니다.
                    두 줄이 들어가면 이런 느낌.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            </div>

    </header>
    </div>
  );
}

export default Result;
