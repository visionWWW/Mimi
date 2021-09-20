import React, { component } from 'react';  // eslint-disable-line no-unused-vars
import './rst.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Preview from "./Preview";
import RestButton from './RestButton';
import MapContainer from './MapContainer';
import { CardGroup } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import ResName from './res_name';
import ReviewText from './reviewtext';
import NaviagtionBar from '../navbar';
import { Map } from 'google-maps-react';

function App() {
  return (
    <div className="App">
      <header>
        <NaviagtionBar/>

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
          </Card>
        </CardGroup>
        </div>
      </header>
    </div>
  );
}


export default App;
