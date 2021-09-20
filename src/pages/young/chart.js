import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import React, { Component, useCallback } from "react";

const LabelWrap = {
	width: '1000px',
	margin: 'auto',
	
}
class Chart extends Component {
	constructor() {
		super();
		this.state = {
		  name: "React",
		  number : 0
		};
		this.onChangeValue = this.onChangeValue.bind(this);
	  }
	
	  onChangeValue(event) {
		console.log(event.target.value);
		this.state = {
			number : 1
	  };}
	  

	render(){
		const {number} = this.state;
		return(
			<>
			
		<div onChange={this.onChangeValue}>
			<h1>{number}</h1> {/*+1 버튼 누를 때 마다 값이 증가하는걸 하고 싶었는데 누를때마다 새로고침 됨..*/}
			<button onClick={()=>{console.log("선택한 "+{number})}}></button> {/* 콘솔에 뜨는 옵션value 확인하려고 만든건데 object라고 뜸 */}
		<button onClick={()=>{this.setState({number : number +1});}}> +1 </button>
		<label onChange={this.onChangeValue1}sytle={LabelWrap}>
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