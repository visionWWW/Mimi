import React, {component} from 'react';  // eslint-disable-line no-unused-vars
import './rst.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CardGroup} from "react-bootstrap";
import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";
import Preview from "./Preview";
import Foodimg1 from './Foodimg1.js';
import Foodimg2 from './Foodimg2';
import Button1 from './Button1';
import Button2 from './Button2';
import Button3 from './Button3';
import { GoogleApiWrapper } from 'google-maps-react';
import MapContainer from './MapContainer';
import ReviewCard from './ReviewCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
              <Nav.Link href="../survey/src/survey.html">검사하기</Nav.Link>
              <Nav.Link href="">감정진단결과</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="../secondpage/src/secondpage.html">음식점 보기</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="#pricing" className="ha">회원가입</Nav.Link>
          </Navbar.Collapse></Navbar>


        <h2>음식점추천</h2>

        
    <div>
      <Button1/> 
      <Button2/> 
      <Button3/>
    </div>
    <br/>    

    <h2>음식점정보</h2>

    <div id="map">
    <Preview/>
    <MapContainer/>
    </div>

    <div>
    <ReviewCard/>
    </div>
    </header>
    </div>
  );
}


export default App;
