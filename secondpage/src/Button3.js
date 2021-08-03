import React, { Component } from "react";
import FoodImg2 from "./FoodImg2";
import { Button } from "antd";

class Button3 extends Component {
  state = { show: false }
  handleClick() {
    this.setState({ show: true });
  }
  renderNext = () => (
    <div>
      <Button type="primary" onClick={() => this.handleClick()}>
        음식점이름 | 추천음식
      </Button>
    </div>
  );
  render() {
    const { show } = this.state;
    return (
      <div>
        { this.renderNext() }
        { show && <FoodImg2/> }
      </div>
    );
  }
}
export default Button3;