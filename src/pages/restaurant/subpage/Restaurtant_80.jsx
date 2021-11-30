import React from 'react'; // eslint-disable-line no-unused-vars
import '../rst.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, CardGroup} from "react-bootstrap";
import NaviagtionBar from '../../navbar';
import Footer from "../../footer/Footer";
import Foodimg_801 from '../foodimg/Foodimg_80-1';
import Foodimg_802 from '../foodimg/Foodimg_80-2';
import Foodimg_803 from '../foodimg/Foodimg_80-3';
import Map_801 from './map/Map_80-1';
import Map_802 from './map/Map_80-2';
import Map_803 from './map/Map_80-3';
import TopAlert from "../TopAlert";
import Preview801 from './preview/Preview80-1';
import Preview802 from './preview/Preview80-2';
import Preview803 from './preview/Preview80-3';

const google = window.google;

class Restaurtant80 extends React.Component{
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
      <div className="App">
      <header>
        <NaviagtionBar/>

        <h2>음 식 점 추천</h2> <br />
        <div className="parent">
        
        <div>                
        <Button variant="outline-secondary" className="button3" onClick={this.toggleState1}>선다래 | 오므라이스</Button>
        <Button variant="outline-secondary" className="button3" onClick={this.toggleState2}>마시앤바시 | 시금치파스타</Button>
        <Button variant="outline-secondary" className="button3" onClick={this.toggleState3}>을의커피</Button>
        <br/><br/>
        {this.state.button1State===true && <Foodimg_801/>}
        {this.state.button2State===true && <Foodimg_802/>}
        {this.state.button3State===true && <Foodimg_803/>}
      </div>

        </div>
        <br /><br /><br />

        <h2>음 식 점 정 보</h2> <br />

        <div className="warp">
          <div className="preview">

          <div>
          {this.state.button1State === true && <Preview801/>}
              {this.state.button2State === true && <Preview802 />}
              {this.state.button3State === true && <Preview803/>}
        </div>

          </div>
          <div className="map">
              {this.state.button1State === true && <Map_801 />}
              {this.state.button2State === true && <Map_802 />}
              {this.state.button3State === true && <Map_803 />}
            </div>
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


export default Restaurtant80;
