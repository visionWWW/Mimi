import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import {Carousel} from 'react-bootstrap'
// import logo from '../logo.svg';
import {NavLink} from 'react-router-dom'
import Start from './start.js'


const Young = () => {
	const totallWrap={
		width: '800px',
		margin: 'auto'
	}

	const introWrap = {
		backgroundColor: '#FFE650',
		lineHeight: '20px',
		width: '800px',
		margin: 'auto'
	}
	const surveyWrap = {
		
		lineHeight: '100px',
		width:'100px',
    textAlign: 'center',
		margin: 'auto'
	}
	
	const main = {
		backgroundColor: 'whitesmoke',
		width: '80%',
		textAlign: 'center',
		borderRadius: '20px'
	  }

  
  return (
	  <div className="container">
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
              <Nav.Link href="../survey">검사하기</Nav.Link>
              <Nav.Link href="../emotion">감정진단결과</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="../restaurant">음식점 보기</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="../review" className="ha">리뷰 작성하기</Nav.Link>
          </Navbar.Collapse></Navbar>
	  
		  <div class="container">
    <section id="main" class="mx-auto my-5 py-5 px-3">
      <h1>나의 감정에 맞는 음식은?</h1>
      <div class="col-lg-6 col-md-8 col-sm-10 col-12 mx-auto">
        {/*<img src="./img/main.png" alt="mainImage" class="img-fluid">*/}
      </div>
      <p class={surveyWrap}>
        감정검사 사이트입니다! <br />
        감정의 만족도에 대한 척도를 체크 해주세요.<br/>
        아래 시작하기 버튼을 눌러 시작해 주십시오.
      </p>
      <Start></Start>
    </section>
    <script src="./js/data.js" charset="utf-8"></script>
    <script src="./js/start.js" charset="utf-8"></script>
  </div>

      </div>
  );
};

export default Young;