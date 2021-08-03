import React, {component} from 'react';  // eslint-disable-line no-unused-vars
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
import Preview from "./Preview";
import FoodImg from './FoodImg1';
import FoodImg2 from './FoodImg2';
import Button1 from './Button1';
import Button2 from './Button2';
import Button3 from './Button3';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>음식점추천</h2>

    <div id = "button">
      <Button1/> 
      <Button2/> 
      <Button3/>
    </div>
    <br/>
    
    <h2>음식점정보</h2>
    <div>
      <Preview/>
    </div>
    <br/>
    
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
