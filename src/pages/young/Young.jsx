import React, { Component } from 'react';
import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import {Carousel} from 'react-bootstrap'
// import logo from '../logo.svg';
import {NavLink} from 'react-router-dom'
import List from './list.js'
import Chart from './chart.js'
import NaviagtionBar from '../navbar.js';


const Young = () => {
	const totallWrap={
		width: '800px',
		margin: 'auto'
	}

	const introWrap = {
		backgroundColor: '#FFE650',
		lineHeight: '20px',
		width: '800px',
		margin: 'auto'
	}
	const surveyWrap = {
		
		lineHeight: '100px',
		width:'100px',
		margin: 'auto'
	}
	
	const main = {
		backgroundColor: 'whitesmoke',
		width: '80%',
		textAlign: 'center',
		borderRadius: '20px'
	  }

  
  return (
	  <div className="container">
		  <NaviagtionBar/>
		  <div class="container">
    
    <section id="qna">
      <div class="status mx-auto mt-5">
        <div class="statusBar">
        </div>
      </div>
      <div class="qBox my-5 py-3 mx-auto">

      </div>
      <div class="answerBox">

      </div>
    </section>

    <script src="./js/data.js" charset="utf-8"></script>
    <script src="./js/start.js" charset="utf-8"></script>
  </div>
	  
        <div className="row mt-5">
          <div className="col-sm-12" style={totallWrap}>
            
				<form>
				<label style={introWrap}>
				1. 나는 현재 즐거운 감정을 느끼고 있다. 
				</label>
				<Chart></Chart>
				</form>
			  <form>
				<label style={introWrap}>
				2. 나는 현재 편안한 감정을 느끼고 있다. 
				</label>
				<Chart></Chart>
				</form>
			  <form>
				<label style={introWrap}>
				3. 나는 현재 행복한 감정을 느끼고 있다. 
				</label>
				<Chart></Chart>
				</form>
			  <form>
			  
				<label style={introWrap}>
				4. 나는 현재 부정적인 감정을 느끼고 있다. 
				</label>
				<Chart></Chart>
				</form>
			  <form>
				<label style={introWrap}>
				5. 나는 현재 짜증나는 감정을 느끼고 있다. 
				</label>
				<Chart></Chart>
				</form>

				<form>
				<label style={introWrap}>
				6. 나는 현재 무기력한 감정을 느끼고 있다. 
				</label>
				<Chart></Chart>
				</form>
				
		
			  <Button as="input" type="submit" value="Submit" />{' '}
          </div>
        </div>

      </div>
  );
};

export default Young;