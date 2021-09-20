import React, {Component, useState} from "react";

const LabelWrap = {
	width: '1000px',
	margin: 'auto',

}

class Chart extends Component {
	/*
	constructor() {
		super();
		this.state = {
			name: "React",
			number : ""
		};
		this.onChangeValue = this.onChangeValue.bind(this);
	}

	onChangeValue(event) {
		console.log(event.target.value);
		this.state = {
			number : event.target.value
		};}
 */
		constructor(props) {
			super(props);
			this.state = {};
		  }
		
		  handleChange = e => {
			const { name, value } = e.target;
		
			this.setState({
			  [name]: value
			});
		  };

	render(){
		const {number} = this.state;

		return(
			<>

				<div>
					<button onClick={()=>{console.log("선택한 "+{number})}}></button> {/* 콘솔에 뜨는 옵션value 확인하려고 만든건데 object라고 뜸 */}
					<label sytle={LabelWrap}>
						<input
							type="radio"
							name="react-tips"
							value='1'
							className="form-check-input-1"
							onChange={this.onChangeValue}
						/>
						1
					</label>

					<label>
						<input
							type="radio"
							name="react-tips"
							value="option2"
							className="form-check-input-1"
							onChange={this.onChangeValue}
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