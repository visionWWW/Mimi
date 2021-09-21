import React from 'react'; // eslint-disable-line no-unused-vars
import '../rst.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Preview from "../Preview";
import ButtonName from "../button_name";
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import MapContainer from '../MapContainer';
import {Button, Card, CardGroup} from "react-bootstrap";
import ResName from '../res_name';
import ReviewText from '../reviewtext';
import NaviagtionBar from '../../navbar';
import Footer from "../../footer/Footer";
import Foodimg_651 from '../foodimg/Foodimg_65-1';
import Foodimg_652 from '../foodimg/Foodimg_65-2';
import Foodimg_653 from '../foodimg/Foodimg_65-3';

const google = window.google;

class Restaurtant65 extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
    	button1State: true,
      button2State: false,
      button3State: false
    }
    this.toggleState1 = this.toggleState1.bind(this)
    this.toggleState2 = this.toggleState2.bind(this)
    this.toggleState3 = this.toggleState3.bind(this)
  }
  
  render() {

    return (
      <div className = "app">
      <header>
        <NaviagtionBar/>

        <h2>음 식 점 추천</h2> <br />
        <div className="parent">
        
        <div>                
        <button className="button1" onClick={this.toggleState1}><ButtonName/></button>
        <button className="button2" onClick={this.toggleState2}>음식점이름 | 추천음식</button>
        <button className="button3" onClick={this.toggleState3}>음식점이름 | 추천음식</button>
        <br/><br/>
        {this.state.button1State===true && <Foodimg_651/>}
        {this.state.button2State===true && <Foodimg_652/>}
        {this.state.button3State===true && <Foodimg_653/>}
      </div>

        </div>
        <br /><br /><br />

        <h2>음 식 점 정 보</h2> <br />

        <div className="warp">
          <div className="preview">

          <div>
            <p>평점: </p>
            <p>메뉴: </p>
            <p>가격: </p> 
            <p>#키워드 #키워드 #키워드</p> 
        </div>

          </div>
          <div className="map">
          <MapContainer/>
          </div>
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
      <Footer></Footer>
    </div>
    )
  }

  toggleState1() {
    if((this.state.button2State = true)){
      this.setState({button2State: !this.state.button2State})
    }
    if ((this.state.button3State = true)) {
      this.setState({button3State: !this.state.button3State})
    }
    {
      this.setState({button1State: !this.state.button1State})
    }
  }

 toggleState2() {
  if((this.state.button1State = true)){
    this.setState({button1State: !this.state.button1State})
  }
  if ((this.state.button3State = true)) {
    this.setState({button3State: !this.state.button3State})
  }
  {
   this.setState({button2State: !this.state.button2State})
  }
}

toggleState3() {
  if((this.state.button1State = true)){
    this.setState({button1State: !this.state.button1State})
  }
  if ((this.state.button2State = true)) {
    this.setState({button2State: !this.state.button2State})
  }
  {
   this.setState({button3State: !this.state.button3State})
  }
}
}


export default Restaurtant65;
