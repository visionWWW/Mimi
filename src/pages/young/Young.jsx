import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from "react-bootstrap/Button";
import Chart from './chart.js'

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
              <Nav.Link href="../surveyIntro">검사하기</Nav.Link>
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
    
    <section id="qna">
      <div class="status mx-auto mt-5">
        <div class="statusBar">
        </div>
      </div>
      <div class="qBox my-5 py-3 mx-auto">

      </div>
      <div class="answerBox">

      </div>
    </section>

    <script src="./js/data.js" charset="utf-8"></script>
    <script src="./js/start.js" charset="utf-8"></script>
  </div>
	  
        <div className="row mt-5">
          <div className="col-sm-12" style={totallWrap}>
            
				<form>
				<label style={introWrap}>
				1. 나는 현재 즐거운 감정을 느끼고 있다. 
				</label>
				<Chart></Chart>
				</form>
			  <form>
				<label style={introWrap}>
				2. 나는 현재 편안한 감정을 느끼고 있다. 
				</label>
				<Chart></Chart>
				</form>
			  <form>
				<label style={introWrap}>
				3. 나는 현재 행복한 감정을 느끼고 있다. 
				</label>
				<Chart></Chart>
				</form>
			  <form>
			  
				<label style={introWrap}>
				4. 나는 현재 부정적인 감정을 느끼고 있다. 
				</label>
				<Chart></Chart>
				</form>
			  <form>
				<label style={introWrap}>
				5. 나는 현재 짜증나는 감정을 느끼고 있다. 
				</label>
				<Chart></Chart>
				</form>

				<form>
				<label style={introWrap}>
				6. 나는 현재 무기력한 감정을 느끼고 있다. 
				</label>
				<Chart></Chart>
				</form>
				
		
			  <Button as="input" type="submit" value="Submit" />{' '}
          </div>
        </div>

      </div>
  );
};

export default Young;