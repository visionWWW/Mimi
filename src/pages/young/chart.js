import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import React, { Component } from "react";

const LabelWrap = {
	width: '1000px',
	margin: 'auto',
	
}
class Chart extends Component {
	constructor() {
		super();
		this.state = {
		  name: "React"
		};
		this.onChangeValue = this.onChangeValue.bind(this);
	  }
	
	  onChangeValue(event) {
		console.log(event.target.value);
	  }

	render(){
		return(
			<>
		<div onChange={this.onChangeValue}>
		<label sytle={LabelWrap}>
			<input 
			type="radio"
			name="react-tips"
			value="option1"
			className="form-check-input-1"
			/>
			1
		</label>

		<label>
			<input
			type="radio"
			name="react-tips"
			value="option2"
			className="form-check-input-1"
			/>
			2     
		</label>
					
		<label>
			<input
			type="radio"
			name="react-tips"
			value="option3"
			className="form-check-input-1"
			/>
			3     
		</label>
					
		<label>
			<input
			type="radio"
			name="react-tips"
			value="option4"
			className="form-check-input-1"
			/>
			4     
		</label>
					
		<label>
			<input
			type="radio"
			name="react-tips"
			value="option5"
			className="form-check-input-1"
			/>
			5     
		</label>
					
		<label>
			<input
			type="radio"
			name="react-tips"
			value="option6"
			className="form-check-input-1"
			/>
			6     
		</label>
					
		<label>
			<input
			type="radio"
			name="react-tips"
			value="option7"
			className="form-check-input-1"
			/>
			7    
		</label>

		</div>
	</>
		);
	}
}


export default Chart;