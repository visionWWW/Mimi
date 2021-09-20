import React from 'react';
import Start from './start.js'
import NaviagtionBar from '../navbar.js';
import Footer from "../footer/Footer";


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
    	textAlign: 'center',
		margin: 'auto'
	}
	
	const main = {
		backgroundColor: 'whitesmoke',
		width: '80%',
		textAlign: 'center',
		borderRadius: '20px'
	  }

  
  return (
  	<>
	  <div className="container">
		  <NaviagtionBar/>
		  <div class="container">
			<section id="main" class="mx-auto my-5 py-5 px-3">
			  <h1>나의 감정에 맞는 음식은?</h1>
			  <div class="col-lg-6 col-md-8 col-sm-10 col-12 mx-auto">
			  </div>
			  <p class={surveyWrap}>
				감정검사 사이트입니다! <br />
				감정의 만족도에 대한 척도를 체크 해주세요.<br/>
				아래 시작하기 버튼을 눌러 시작해 주십시오.
			  </p>
			  <Start></Start>
    		</section>
  		  </div>
      </div>
		<Footer></Footer>
	</>
  );
};

export default Young;