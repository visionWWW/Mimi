import React, { Component } from "react";
import Foodimg1 from "./Foodimg1";
import Foodimg2 from "./Foodimg2";
import Foodimg3 from "./Foodimg3";
import { Button } from "antd";
import './rst.css';

class RestButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
    	button1State: false,
      button2State: false,
      button3State: false
    }
    this.toggleState1 = this.toggleState1.bind(this)
    this.toggleState2 = this.toggleState2.bind(this)
    this.toggleState3 = this.toggleState3.bind(this)
  }
  
  render() {
    return (
      <div>                
        <button className="button1" onClick={this.toggleState1}>음식점이름 | 추천음식</button>
        <button className="button2" onClick={this.toggleState2}>음식점이름 | 추천음식</button>
        <button className="button3" onClick={this.toggleState3}>음식점이름 | 추천음식</button>
        {this.state.button1State==true && <Foodimg1/>}
        {this.state.button2State==true && <Foodimg2/>}
        {this.state.button3State==true && <Foodimg3/>}
      </div>
    )
  }
  
  toggleState1() {
  	this.setState({ button1State: !this.state.button1State })
  }
  toggleState2() {
  	this.setState({ button2State: !this.state.button2State })
  }
  toggleState3() {
  	this.setState({ button3State: !this.state.button3State })
  }
}

export default RestButton;


