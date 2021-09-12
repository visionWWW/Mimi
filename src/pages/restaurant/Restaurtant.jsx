import React, { component } from 'react';  // eslint-disable-line no-unused-vars
import './rst.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Preview from "./Preview";
import RestButton from './RestButton';
import MapContainer from './MapContainer';
import { CardGroup } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import ResName from './res_name';
import ReviewText from './reviewtext';

function App() {
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
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
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


        <h2>음 식 점 추천</h2> <br />
        <div className="parent">
          <RestButton />
        </div>
        <br /><br /><br />

        <h2>음 식 점 정 보</h2> <br />

        <div className="warp">
          <div className="preview"> <Preview /> </div>
          <div className="map"> <MapContainer /> </div>
        </div>


        <h2>리 뷰</h2><br />
        <div className="reviewcard"> 
        <CardGroup>
          <Card>
            <Card.Img variant="top" src="http://drive.google.com/uc?export=view&id=1-8noao2KTy9n3OWVfuMIVtSqZTgtQqCJ" width="300px" height="300px" />
            <Card.Body>
              <Card.Title> <ResName/> </Card.Title>
              <Card.Text>
                <ReviewText/> 
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="http://drive.google.com/uc?export=view&id=15dW5OCXrACR-kg4oW3BueGjR81zIJLXv" width="300px" height="300px" />
            <Card.Body>
              <Card.Title>고씨네</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="http://drive.google.com/uc?export=view&id=1z18J_fnHBvtCnjSluv0oLwxLkFsB2OzZ" width="300px" height="300px" />
            <Card.Body>
              <Card.Title>빨봉분식</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
        </div>
      </header>
    </div>
  );
}


export default App;
