import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Find from './find.js'
import './re_main.css';

const Review = () => (
  <>
    <div>
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
         <Navbar.Brand href="../">
            <img
              src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3a2c92f5-f33b-4df5-84b5-3ce2ebdd0c0f%2F_-001_(1).png?table=block&id=360799d6-74b6-44a8-b131-ebc234ef5f06&spaceId=4145db40-ad1d-42f4-9f54-6e512b13bafb&width=580&userId=fc5b8e01-4d70-4ab8-8078-e67683ebc863&cache=v2"
              width="100"
              height="100"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/surveyIntro">검사하기</Nav.Link>
              <Nav.Link href="/emotion">감정진단결과</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/restaurant">음식점 보기</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="/review" className="ha">리뷰 작성하기</Nav.Link>
          </Navbar.Collapse></Navbar>
        <h3 className="title">리뷰를 남겨주세요</h3>
        <Find></Find>
    </div>
  </>
);

export default Review;