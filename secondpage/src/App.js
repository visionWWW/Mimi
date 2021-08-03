import React, {component} from 'react';
import './App.css';
//import '../../googlemap';
//import GoogleApiMap from "./GoogleApiMap";
//import MapContainer from "./MapContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import {CardGroup} from "react-bootstrap";
import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";
//import {GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react";
//import { AIzaSyC4avBeOZV9CvBnJh7aF7oIEqZ14GCnc1U } from "../../googlemap";
//import GoogleApi from './GoogleApiMap';
import Reacts from "react";
import Preview from "./Preview";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>음식점추천</h2>
        <div id = "button">
      <input type="button" id = "first"  value = "음식점이름|추천음식"></input>
      <input type="button" id = "second" value = "음식점이름|추천음식"></input>
      <input type="button" id = "third" value = "음식점이름|추천음식"></input>
    </div>

    <div id = "img_food1"> 
    <img src = "http://drive.google.com/uc?export=view&id=1-8noao2KTy9n3OWVfuMIVtSqZTgtQqCJ" width="300px" height="300px" alt="profile"/>
    <img src = "" width="300px" height="300px" alt="profile"/>
    <img src = "" width="300px" height="300px" alt="profile"/>
    <img src = "" width="300px" height="300px" alt="profile"/>
    </div>

    <div id = "img_food2" style={{display: 'none'}}> 
    <img src = "" width="300px" height="300px" alt="profile"/>
    <img src = "" width="300px" height="300px" alt="profile"/>
    <img src = "" width="300px" height="300px" alt="profile"/>
    <img src = "" width="300px" height="300px" alt="profile"/>
    </div>

    <div id = "img_food3" style={{display: 'none'}}> 
    <img src = "" width="300px" height="300px" alt="profile"/>
    <img src = "" width="300px" height="300px" alt="profile"/>
    <img src = "" width="300px" height="300px" alt="profile"/>
    <img src = "" width="300px" height="300px" alt="profile"/>
    </div>
    
    <h2>음식점정보</h2>
  

    <div id = "info_1">
    <div className="Map">
      <Preview/>
    </div>
        <p>평점: </p>
        <p>메뉴: </p>
        <p>가격: </p> 
        <p>#키워드 #키워드 #키워드</p> 
    </div>
    
    <div id = "review">
    <CardGroup>
    <Card>
    <Card.Img variant="top" src="http://drive.google.com/uc?export=view&id=1-8noao2KTy9n3OWVfuMIVtSqZTgtQqCJ" />
    <Card.Body>
      <Card.Title>비일</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
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
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
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
