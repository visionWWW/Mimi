import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Carousel} from 'react-bootstrap'
import logo from '../logo.svg';

class Main extends React.Component {
  render() {
    {
      return (
        <div>
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

          <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4c4f502d-8052-4c14-83cd-5d36c1de65b3/002.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210804T104204Z&X-Amz-Expires=86400&X-Amz-Signature=be0e4b438894288078cbc899e8b6f4edce7b10d5e623d151d2b177399a865bdd&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22002.png%22"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a89fdd4b-63d9-49e7-a637-993b7e2e38ce/004.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210804T103624Z&X-Amz-Expires=86400&X-Amz-Signature=574adaac9cf893f7245a027219e64cc0f248fa9341b74abe151f2eb9c119e4db&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22004.png%22"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/424649c8-23e5-496c-beeb-e88fbcee40fe/007.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210804T104115Z&X-Amz-Expires=86400&X-Amz-Signature=cd409630fd55e0cd583ba2aa7634633008870f0212e6e820f015305c16ea02e7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22007.png%22"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
        </div>

    
      );
    }
  }
}

export default Main;