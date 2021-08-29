import React, { Component } from 'react';

class list extends Component {
  state = {
    options: ["아주동의", "보통동의", "보통", "보통비동의", "아주비동의"],
    name: ""
  }
  mapTestChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  mapTestClick = (e) => {
    this.setState({
      options: this.state.options.concat(this.state.name),
      name: ""
    })
  }
  render() {
    const { options, name } = this.state;
    const { mapTestChange, mapTestClick } = this;
    const optionList = options.map(
      (option, i) => (
        <li key={i}>{option}</li>
      )
    );
    return (
      <div>
          {optionList}
      </div>
    );
  }
}

export default list;