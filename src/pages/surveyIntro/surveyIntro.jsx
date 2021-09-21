import React from 'react';
import Start from './start.js'
import NaviagtionBar from '../navbar.js';
import Footer from "../footer/Footer";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";


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
		margin: 'auto',

	}
	
	const main = {
		backgroundColor: 'whitesmoke',
		width: '80%',
		textAlign: 'center',
		borderRadius: '20px'
	  }

  
  return (
  	<>
		<NaviagtionBar/>
	  	<div className="container">
		  <Card style={{marginTop:"-5px"}}>
		  <div class="container">
			<section id="main" class="mx-auto my-5 py-5 px-3" style={{textAlign:"center"}}>
			  <h1 style={{marginBottom:"20px"}}>나의 감정에 맞는 음식은?</h1>
				<h5 style={{marginBottom:"20px"}}>심리 검사로 알아보는 오늘의 음식!</h5>
			  <div class="col-lg-6 col-md-8 col-sm-10 col-12 mx-auto">
			  </div>
				<Start></Start>

				  <p class={surveyWrap}>
				  </p>
    		</section>
		  </div>
			  <Image style={{marginTop:"-90px",display:"block",margin:"auto",width:"75%"}} src="/images/noonsong.png"></Image>
		  </Card>
      	</div>
		<Footer></Footer>
	</>
  );
};

export default Young;