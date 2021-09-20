import React, {Component} from 'react';
import Navbar from '../navbar';
import Button from "react-bootstrap/Button";
import './SurveyStyle.css';

class Young extends Component {
	state = {
		satis_1 : "",
		satis_2 : "",
		satis_3 : "",
		emo_1 : "",
		emo_2 : "",
		emo_3 : "",
		emo_4 : "",
		emo_5 : "",
		emo_6 : ""
	};
	onChange = e => {
		this.setState({[e.target.name] : e.target.value});
	}

  render(){
	  const{satis_1, satis_2, satis_3, emo_1, emo_2, emo_3, emo_4, emo_5, emo_6} = this.state;
	  const result1 = parseInt(satis_1) + parseInt(satis_2) + parseInt(satis_3);
	  const result2 = parseInt(emo_1) + parseInt(emo_2) + parseInt(emo_3) - parseInt(emo_4) - parseInt(emo_5) - parseInt(emo_6);

  return (
  	<>
	<Navbar></Navbar>
	<div className="row mt-5">
	<div className="col-sm-12">
	<div className="satis_qna">
	<label >
		만족감질문입니다
	</label>
	<h1>결과 1 합 : {result1}</h1>
		<form>
			<h3>1. 나는 내 삶의 개인적인 측면에 대해 만족한다.</h3>
			<label>
				1 <input type= "radio" value="1" name="satis_1" checked={satis_1 === "1"} onChange={this.onChange}/>
			</label>
			<label>
				2 <input type= "radio" value="2" name="satis_1" checked={satis_1 === "2"} onChange={this.onChange}/>
			</label>
			<label>
				3 <input type= "radio" value="3" name="satis_1" checked={satis_1 === "3"} onChange={this.onChange}/>
			</label>
			<label>
				4 <input type= "radio" value="4" name="satis_1" checked={satis_1 === "4"} onChange={this.onChange}/>
			</label>
			<label>
				5 <input type= "radio" value="5" name="satis_1" checked={satis_1 === "5"} onChange={this.onChange}/>
			</label>
			<label>
				6 <input type= "radio" value="6" name="satis_1" checked={satis_1 === "6"} onChange={this.onChange}/>
			</label>
			<label>
				7 <input type= "radio" value="7" name="satis_1" checked={satis_1 === "7"} onChange={this.onChange}/>
			</label>
		</form>

		<form>
			<h3>2. 나는 내 삶의 관계적 측면에 대해 만족한다.</h3>
			<label>
				1 <input type= "radio" value="1" name="satis_2" checked={satis_2 === "1"} onChange={this.onChange}/>
			</label>
			<label>
				2 <input type= "radio" value="2" name="satis_2" checked={satis_2 === "2"} onChange={this.onChange}/>
			</label>
			<label>
				3 <input type= "radio" value="3" name="satis_2" checked={satis_2 === "3"} onChange={this.onChange}/>
			</label>
			<label>
				4 <input type= "radio" value="4" name="satis_2" checked={satis_2 === "4"} onChange={this.onChange}/>
			</label>
			<label>
				5 <input type= "radio" value="5" name="satis_2" checked={satis_2 === "5"} onChange={this.onChange}/>
			</label>
			<label>
				6 <input type= "radio" value="6" name="satis_2" checked={satis_2 === "6"} onChange={this.onChange}/>
			</label>
			<label>
				7 <input type= "radio" value="7" name="satis_2" checked={satis_2 === "7"} onChange={this.onChange}/>
			</label>
		</form>

		<form>
			<h3>3. 나는 내가 속한 집단에 대해 만족한다.</h3>
			<label>
				1 <input type= "radio" value="1" name="satis_3" checked={satis_3 === "1"} onChange={this.onChange}/>
			</label>
			<label>
				2 <input type= "radio" value="2" name="satis_3" checked={satis_3 === "2"} onChange={this.onChange}/>
			</label>
			<label>
				3 <input type= "radio" value="3" name="satis_3" checked={satis_3 === "3"} onChange={this.onChange}/>
			</label>
			<label>
				4 <input type= "radio" value="4" name="satis_3" checked={satis_3 === "4"} onChange={this.onChange}/>
			</label>
			<label>
				5 <input type= "radio" value="5" name="satis_3" checked={satis_3 === "5"} onChange={this.onChange}/>
			</label>
			<label>
				6 <input type= "radio" value="6" name="satis_3" checked={satis_3 === "6"} onChange={this.onChange}/>
			</label>
			<label>
				7 <input type= "radio" value="7" name="satis_3" checked={satis_3 === "7"} onChange={this.onChange}/>
			</label>
		</form>
	</div>

	<div className="emo_qna">
	<label>
		감정질문입니다
	</label>
	<h1>결과 2 합 : {result2}</h1>
		<form>
			<h3>1. 나는 현재 즐거운 감정을 느끼고 있다.</h3>
			<label>
				1 <input type= "radio" value="1" name="emo_1" checked={emo_1 === "1"} onChange={this.onChange}/>
			</label>
			<label>
				2 <input type= "radio" value="2" name="emo_1" checked={emo_1 === "2"} onChange={this.onChange}/>
			</label>
			<label>
				3 <input type= "radio" value="3" name="emo_1" checked={emo_1 === "3"} onChange={this.onChange}/>
			</label>
			<label>
				4 <input type= "radio" value="4" name="emo_1" checked={emo_1 === "4"} onChange={this.onChange}/>
			</label>
			<label>
				5 <input type= "radio" value="5" name="emo_1" checked={emo_1 === "5"} onChange={this.onChange}/>
			</label>
			<label>
				6 <input type= "radio" value="6" name="emo_1" checked={emo_1 === "6"} onChange={this.onChange}/>
			</label>
			<label>
				7 <input type= "radio" value="7" name="emo_1" checked={emo_1 === "7"} onChange={this.onChange}/>
			</label>
		</form>

		<form>
			<h3>2. 나는 현재 편안한 감정을 느끼고 있다.</h3>
			<label>
				1 <input type= "radio" value="1" name="emo_2" checked={emo_2 === "1"} onChange={this.onChange}/>
			</label>
			<label>
				2 <input type= "radio" value="2" name="emo_2" checked={emo_2 === "2"} onChange={this.onChange}/>
			</label>
			<label>
				3 <input type= "radio" value="3" name="emo_2" checked={emo_2 === "3"} onChange={this.onChange}/>
			</label>
			<label>
				4 <input type= "radio" value="4" name="emo_2" checked={emo_2 === "4"} onChange={this.onChange}/>
			</label>
			<label>
				5 <input type= "radio" value="5" name="emo_2" checked={emo_2 === "5"} onChange={this.onChange}/>
			</label>
			<label>
				6 <input type= "radio" value="6" name="emo_2" checked={emo_2 === "6"} onChange={this.onChange}/>
			</label>
			<label>
				7 <input type= "radio" value="7" name="emo_2" checked={emo_2 === "7"} onChange={this.onChange}/>
			</label>
		</form>	

		<form>
			<h3>3. 나는 내가 행복한 감정을 느끼고 있다.</h3>
			<label>
				1 <input type= "radio" value="1" name="emo_3" checked={emo_3 === "1"} onChange={this.onChange}/>
			</label>
			<label>
				2 <input type= "radio" value="2" name="emo_3" checked={emo_3 === "2"} onChange={this.onChange}/>
			</label>
			<label>
				3 <input type= "radio" value="3" name="emo_3" checked={emo_3 === "3"} onChange={this.onChange}/>
			</label>
			<label>
				4 <input type= "radio" value="4" name="emo_3" checked={emo_3 === "4"} onChange={this.onChange}/>
			</label>
			<label>
				5 <input type= "radio" value="5" name="emo_3" checked={emo_3 === "5"} onChange={this.onChange}/>
			</label>
			<label>
				6 <input type= "radio" value="6" name="emo_3" checked={emo_3 === "6"} onChange={this.onChange}/>
			</label>
			<label>
				7 <input type= "radio" value="7" name="emo_3" checked={emo_3 === "7"} onChange={this.onChange}/>
			</label>
		</form>
		<form>
			<h3>4. 나는 현재 부정적인 감정을 느끼고 있다.</h3>
			<label>
				1 <input type= "radio" value="1" name="emo_4" checked={emo_4 === "1"} onChange={this.onChange}/>
			</label>
			<label>
				2 <input type= "radio" value="2" name="emo_4" checked={emo_4 === "2"} onChange={this.onChange}/>
			</label>
			<label>
				3 <input type= "radio" value="3" name="emo_4" checked={emo_4 === "3"} onChange={this.onChange}/>
			</label>
			<label>
				4 <input type= "radio" value="4" name="emo_4" checked={emo_4 === "4"} onChange={this.onChange}/>
			</label>
			<label>
				5 <input type= "radio" value="5" name="emo_4" checked={emo_4 === "5"} onChange={this.onChange}/>
			</label>
			<label>
				6 <input type= "radio" value="6" name="emo_4" checked={emo_4 === "6"} onChange={this.onChange}/>
			</label>
			<label>
				7 <input type= "radio" value="7" name="emo_4" checked={emo_4 === "7"} onChange={this.onChange}/>
			</label>
		</form>

		<form>
			<h3>5. 나는 현재 짜증나는 감정을 느끼고 있다.</h3>
			<label>
				1 <input type= "radio" value="1" name="emo_5" checked={emo_5 === "1"} onChange={this.onChange}/>
			</label>
			<label>
				2 <input type= "radio" value="2" name="emo_5" checked={emo_5 === "2"} onChange={this.onChange}/>
			</label>
			<label>
				3 <input type= "radio" value="3" name="emo_5" checked={emo_5 === "3"} onChange={this.onChange}/>
			</label>
			<label>
				4 <input type= "radio" value="4" name="emo_5" checked={emo_5 === "4"} onChange={this.onChange}/>
			</label>
			<label>
				5 <input type= "radio" value="5" name="emo_5" checked={emo_5 === "5"} onChange={this.onChange}/>
			</label>
			<label>
				6 <input type= "radio" value="6" name="emo_5" checked={emo_5 === "6"} onChange={this.onChange}/>
			</label>
			<label>
				7 <input type= "radio" value="7" name="emo_5" checked={emo_5 === "7"} onChange={this.onChange}/>
			</label>
		</form>

		<form>
			<h3>6. 나는 현재 무기력한 감정을 느끼고 있다.</h3>
			<label>
				1 <input type= "radio" value="1" name="emo_6" checked={emo_6 === "1"} onChange={this.onChange}/>
			</label>
			<label>
				2 <input type= "radio" value="2" name="emo_6" checked={emo_6 === "2"} onChange={this.onChange}/>
			</label>
			<label>
				3 <input type= "radio" value="3" name="emo_6" checked={emo_6 === "3"} onChange={this.onChange}/>
			</label>
			<label>
				4 <input type= "radio" value="4" name="emo_6" checked={emo_6 === "4"} onChange={this.onChange}/>
			</label>
			<label>
				5 <input type= "radio" value="5" name="emo_6" checked={emo_6 === "5"} onChange={this.onChange}/>
			</label>
			<label>
				6 <input type= "radio" value="6" name="emo_6" checked={emo_6 === "6"} onChange={this.onChange}/>
			</label>
			<label>
				7 <input type= "radio" value="7" name="emo_6" checked={emo_6 === "7"} onChange={this.onChange}/>
			</label>
		</form>
	</div>
	{/* 항목 선택 덜 했을 시 팝업창 띄우는 것 추가하면 좋을 듯 */}
		<Button as="input" type="submit" value="Submit" 
		onClick={()=> {if(isNaN(result1)||isNaN(result2)){console.log("Nan");}}}
		style={{marginTop:'10px'}}
		/>
		
	</div>
    </div>

	</>
  );
};
}

export default Young;