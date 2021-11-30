import React from 'react'; // eslint-disable-line no-unused-vars
import '../rst.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, CardGroup} from "react-bootstrap";
import NaviagtionBar from '../../navbar';
import Footer from "../../footer/Footer";
import Map_1001 from './map/Map_100-1';
import Map_1002 from './map/Map_100-2';
import Map_1003 from './map/Map_100-3';
import Foodimg_1003 from '../foodimg/Foodimg_100-3';
import Foodimg_1002 from '../foodimg/Foodimg_100-2';
import Foodimg_1001 from '../foodimg/Foodimg_100-1';
import TopAlert from "../TopAlert";
import Preview1001 from './preview/Preview100-1';
import Preview1003 from './preview/Preview100-3';
import Preview1002 from './preview/Preview100-2';

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
        <Button variant="outline-secondary" className="button3" onClick={this.toggleState1}>버거인 | 지못미버거</Button>
        <Button variant="outline-secondary" className="button3" onClick={this.toggleState2}>효이다방</Button>
        <Button variant="outline-secondary" className="button3" onClick={this.toggleState3}>비일 | 뒥쉘</Button>
        <br/><br/>
        {this.state.button1State===true && <Foodimg_1001/>}
        {this.state.button2State===true && <Foodimg_1002/>}
        {this.state.button3State===true && <Foodimg_1003/>}
      </div>

        </div>
        <br /><br /><br />

        <h2>음 식 점 정 보</h2> <br />

        <div className="warp">
          <div className="preview">

          <div>
          {this.state.button1State === true && <Preview1001/>}
              {this.state.button2State === true && <Preview1002/>}
              {this.state.button3State === true && <Preview1003/>}
        </div>

          </div>
          <div className="map">
              {this.state.button1State === true && <Map_1001/>}
              {this.state.button2State === true && <Map_1002/>}
              {this.state.button3State === true && <Map_1003/>}
            
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
