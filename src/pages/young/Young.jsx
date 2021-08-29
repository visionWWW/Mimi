import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import {Carousel} from 'react-bootstrap'
// import logo from '../logo.svg';
import {NavLink} from 'react-router-dom'
import List from './list.js'

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
		margin: 'auto'
	}
  return (
	  <div className="container">
	  <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
                        <Navbar.Brand href="#home">
                            <img
                                src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3a2c92f5-f33b-4df5-84b5-3ce2ebdd0c0f%2F_-001_(1).png?table=block&id=360799d6-74b6-44a8-b131-ebc234ef5f06&spaceId=4145db40-ad1d-42f4-9f54-6e512b13bafb&width=580&userId=fc5b8e01-4d70-4ab8-8078-e67683ebc863&cache=v2"
                                width="100"
                                height="100"
                                className="d-inline-block align-top"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="./survey/src/survey.html">검사하기</Nav.Link>
                                <Nav.Link href="">감정진단결과</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="./secondpage/src/secondpage.html">음식점 보기</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>

                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link href="#pricing" className="ha">회원가입</Nav.Link>
                        </Navbar.Collapse></Navbar>

                    
	  
				  <div className="App">
					
					  
				  </div>
        <div className="row mt-5">
          <div className="col-sm-12" style={totallWrap}>
            <form>
				<label style={introWrap}>
				성별을 선택해주세요 
				</label>
				
				<label style={surveyWrap}>
				  <input 
					type="radio"
					name="react-tips"
					value="option1"
					className="form-check-input-sex"
				  />
				  남
				</label>
				<label style={surveyWrap}>
				  <input 
					type="radio"
					name="react-tips"
					value="option2"
					className="form-check-input-sex"
				  />
				  여
				</label>
				
				<label style={introWrap}>
				나이를 선택해주세요 
				</label>
				<label style={surveyWrap}>
				  <input 
					type="radio"
					name="react-tips"
					value="option1"
					className="form-check-input-age"
				  />
				  10대
				</label>
				<label style={surveyWrap}>
				  <input 
					type="radio"
					name="react-tips"
					value="option2"
					className="form-check-input-age"
				  />
				  20대
				</label>
				<label style={surveyWrap}>
				  <input 
					type="radio"
					name="react-tips"
					value="option3"
					className="form-check-input-age"
				  />
				  30대
				</label>
				<label style={surveyWrap}>
				  <input 
					type="radio"
					name="react-tips"
					value="option4"
					className="form-check-input-age"
				  />
				  40대
				</label>
				<label style={surveyWrap}>
				  <input 
					type="radio"
					name="react-tips"
					value="option5"
					className="form-check-input-age"
				  />
				  50대
				</label>
				
				<label style={introWrap}>
				감정의 만족도에 대한 척도를 체크 해주세요.
				</label>
				
				<label style={introWrap}>
				1. 나는 현재 즐거운 감정을 느끼고 있다. 
				</label>
				
				<label style={surveyWrap}>
				  <input 
					type="radio"
					name="react-tips"
					value="option1"
					className="form-check-input-1"
				  />
				  1
				</label>

				<label style={surveyWrap}>
				  <input
					type="radio"
					name="react-tips"
					value="option2"
					className="form-check-input-1"
				  />
				  2     
				</label>
				
				<label style={surveyWrap}>
				  <input
					type="radio"
					name="react-tips"
					value="option3"
					className="form-check-input-1"
				  />
				  3     
				</label>
				
				<label style={surveyWrap}>
				  <input
					type="radio"
					name="react-tips"
					value="option4"
					className="form-check-input-1"
				  />
				  4     
				</label>
				
				<label style={surveyWrap}>
				  <input
					type="radio"
					name="react-tips"
					value="option5"
					className="form-check-input-1"
				  />
				  5     
				</label>
				
				<label style={surveyWrap}>
				  <input
					type="radio"
					name="react-tips"
					value="option6"
					className="form-check-input-1"
				  />
				  6     
				</label>
				
				<label style={surveyWrap}>
				  <input
					type="radio"
					name="react-tips"
					value="option6"
					className="form-check-input-1"
				  />
				  7    
				</label>

				<label style={introWrap}>
				2. 나는 현재 편안한 감정을 느끼고 있다. 
				</label>
				
				<label style={surveyWrap}>
				  <input 
					type="radio"
					name="react-tips"
					value="option1"
					className="form-check-input-1"
				  />
				  1
				</label>

				<label style={surveyWrap}>
				  <input
					type="radio"
					name="react-tips"
					value="option2"
					className="form-check-input-2"
				  />
				  2     
				</label>
				
				<label style={surveyWrap}>
				  <input
					type="radio"
					name="react-tips"
					value="option3"
					className="form-check-input-2"
				  />
				  3     
				</label>
				
				<label style={surveyWrap}>
				  <input
					type="radio"
					name="react-tips"
					value="option4"
					className="form-check-input-2"
				  />
				  4     
				</label>
				
				<label style={surveyWrap}>
				  <input
					type="radio"
					name="react-tips"
					value="option5"
					className="form-check-input-2"
				  />
				  5     
				</label>
				
				<label style={surveyWrap}>
				  <input
					type="radio"
					name="react-tips"
					value="option6"
					className="form-check-input-2"
				  />
				  6     
				</label>
				
				<label style={surveyWrap}>
				  <input
					type="radio"
					name="react-tips"
					value="option6"
					className="form-check-input-2"
				  />
				  7    
				</label>

				<label style={introWrap}>
				3. 나는 현재 행복한 감정을 느끼고 있다. 
				</label>
				
				<label style={surveyWrap}>
				  <input 
					type="radio"
					name="react-tips"
					value="option1"
					className="form-check-input-3"
				  />
				  1
				</label>

				<label style={surveyWrap}>
				  <input
					type="radio"
					name="react-tips"
					value="option2"
					className="form-check-input-3"
				  />
				  2     
				</label>
				
				<label style={surveyWrap}>
				  <input
					type="radio"
					name="react-tips"
					value="option3"
					className="form-check-input-3"
				  />
				  3     
				</label>
				
				<label style={surveyWrap}>
				  <input
					type="radio"
					name="react-tips"
					value="option4"
					className="form-check-input-3"
				  />
				  4     
				</label>
				
				<label style={surveyWrap}>
				  <input
					type="radio"
					name="react-tips"
					value="option5"
					className="form-check-input-3"
				  />
				  5     
				</label>
				
				<label style={surveyWrap}>
				  <input
					type="radio"
					name="react-tips"
					value="option6"
					className="form-check-input-3"
				  />
				  6     
				</label>
				
				<label style={surveyWrap}>
				  <input
					type="radio"
					name="react-tips"
					value="option6"
					className="form-check-input-3"
				  />
				  7    
				</label>

				<label style={introWrap}>
				4. 나는 현재 부정적인 감정을 느끼고 있다. 
				</label>
				
				<label style={surveyWrap}>
				  <input 
					type="radio"
					name="react-tips"
					value="option1"
					className="form-check-input-4"
				  />
				  1
				</label>

				<label style={surveyWrap}>
				  <input
					type="radio"
					name="react-tips"
					value="option2"
					className="form-check-input-4"
				  />
				  2     
				</label>
				
				<label style={surveyWrap}>
				  <input
					type="radio"
					name="react-tips"
					value="option3"
					className="form-check-input-4"
				  />
				  3     
				</label>
				
				<label style={surveyWrap}>
				  <input
					type="radio"
					name="react-tips"
					value="option4"
					className="form-check-input-4"
				  />
				  4     
				</label>
				
				<label style={surveyWrap}>
				  <input
					type="radio"
					name="react-tips"
					value="option5"
					className="form-check-input-4"
				  />
				  5     
				</label>
				
				<label style={surveyWrap}>
				  <input
					type="radio"
					name="react-tips"
					value="option6"
					className="form-check-input-4"
				  />
				  6     
				</label>
				
				<label style={surveyWrap}>
				  <input
					type="radio"
					name="react-tips"
					value="option6"
					className="form-check-input-4"
				  />
				  7    
				</label>

				<label style={introWrap}>
				5. 나는 현재 짜증나는 감정을 느끼고 있다. 
				</label>
				
				<label style={surveyWrap}>
				  <input 
					type="radio"
					name="react-tips"
					value="option1"
					className="form-check-input-5"
				  />
				  1
				</label>

				<label style={surveyWrap}>
				  <input
					type="radio"
					name="react-tips"
					value="option2"
					className="form-check-input-5"
				  />
				  2     
				</label>
				
				<label style={surveyWrap}>
				  <input
					type="radio"
					name="react-tips"
					value="option3"
					className="form-check-input-5"
				  />
				  3     
				</label>
				
				<label style={surveyWrap}>
				  <input
					type="radio"
					name="react-tips"
					value="option4"
					className="form-check-input-5"
				  />
				  4     
				</label>
				
				<label style={surveyWrap}>
				  <input
					type="radio"
					name="react-tips"
					value="option5"
					className="form-check-input-5"
				  />
				  5     
				</label>
				
				<label style={surveyWrap}>
				  <input
					type="radio"
					name="react-tips"
					value="option6"
					className="form-check-input-5"
				  />
				  6     
				</label>
				
				<label style={surveyWrap}>
				  <input
					type="radio"
					name="react-tips"
					value="option6"
					className="form-check-input-5"
				  />
				  7    
				</label>

				
            </form>
			  <Button as="input" type="submit" value="Submit" />{' '}
          </div>
        </div>
      </div>
  );
};

export default Young;