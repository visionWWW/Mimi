import React from 'react';
import {Col} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './result.css';


function Result() {
    return (
      <div className="App">
        <header>
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
          <Navbar.Brand href="../">
            <img
              src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3a2c92f5-f33b-4df5-84b5-3ce2ebdd0c0f%2F_-001_(1).png?table=block&id=360799d6-74b6-44a8-b131-ebc234ef5f06&spaceId=4145db40-ad1d-42f4-9f54-6e512b13bafb&width=580&userId=fc5b8e01-4d70-4ab8-8078-e67683ebc863&cache=v2"
              width="100"
              height="100"
              className="d-inline-block align-top"
              alt="profile"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="../survey/src/survey.html">검사하기</Nav.Link>
              <Nav.Link href="../emotion">감정진단결과</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="../restaurant">음식점 보기</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="../review" className="ha">회원가입</Nav.Link>
          </Navbar.Collapse></Navbar>

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
