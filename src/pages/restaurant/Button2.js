import React, { Component } from "react";
import Foodimg2 from "./Foodimg2";
import { Button } from "antd";

class Button2 extends Component {
  state = { show: false }
  handleClick() {
    this.setState({ show: true });
  }
  renderNext = () => (
    <div>
      <Button onClick={() => this.handleClick()}>
        음식점이름 | 추천음식
      </Button>
    </div>
  );
  render() {
    const { show } = this.state;
    return (
      <div>
        { this.renderNext() }
        { show && <Foodimg2/> }
      </div>
    );
  }
}
export default Button2;