import React, {Component} from 'react';
import Navbar from '../navbar';
import Button from "react-bootstrap/Button";
import Chart from './chart.js'
import './SurveyStyle.css';

class Young extends Component {
  render(){
  return (
  	<>
		<Navbar></Navbar>
	
        <div className="row mt-5">
          <div className="col-sm-12">
			<div className="satis_qna">
			<label >
				만족감질문입니다
			</label>
			<form>
				<label className="intro">
				1. 나는 내 삶의 개인적인 측면에 대해 만족한다.
				</label>
				<Chart></Chart>
				</form>
				<form>
				<label className="intro">
				2. 나는 내 삶의 관계적 측면에 대해 만족한다. 
				</label>
				<Chart></Chart>
				</form>
				<form>
				<label className="intro">
				3. 나는 내가 속한 집단에 대해 만족한다. 
				</label>
				<Chart></Chart>
				</form>
			</div>
			<div className="emo_qna">
            <label>
				감정질문입니다
			</label>
				<form>
				<label className="intro">
				1. 나는 현재 즐거운 감정을 느끼고 있다. 
				</label>
				<Chart></Chart>
				</form>
			  <form >
				<label className="intro">
				2. 나는 현재 편안한 감정을 느끼고 있다. 
				</label>
				<Chart></Chart>
				</form>
			  <form>
				<label className="intro">
				3. 나는 현재 행복한 감정을 느끼고 있다. 
				</label>
				<Chart></Chart>
				</form>
			  <form>
				<label className="intro">
				4. 나는 현재 부정적인 감정을 느끼고 있다. 
				</label>
				<Chart></Chart>
				</form>
			  <form>
				<label className="intro">
				5. 나는 현재 짜증나는 감정을 느끼고 있다. 
				</label>
				<Chart></Chart>
				</form>

				<form>
				<label className="intro">
				6. 나는 현재 무기력한 감정을 느끼고 있다. 
				</label>
				<Chart></Chart>
				</form>
				</div>
		
			  <Button as="input" type="submit" value="Submit"/>{' '}
          </div>
        </div>

	</>
  );
};
}

export default Young;