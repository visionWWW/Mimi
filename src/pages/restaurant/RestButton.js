import React, { Component } from "react";
import ButtonName from "./ButtonName";
import Foodimg1 from "./Foodimg1";
import Foodimg2 from "./Foodimg2";
import Foodimg3 from "./Foodimg3";
import './rst.css';

class RestButton extends Component {
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
      <div>                
        <button className="button1" onClick={this.toggleState1}><ButtonName/></button>
        <button className="button2" onClick={this.toggleState2}>음식점이름 | 추천음식</button>
        <button className="button3" onClick={this.toggleState3}>음식점이름 | 추천음식</button>
        <br/><br/>
        {this.state.button1State===true && <Foodimg1/>}
        {this.state.button2State===true && <Foodimg2/>}
        {this.state.button3State===true && <Foodimg3/>}
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

export default RestButton;


