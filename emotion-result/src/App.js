import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './App.css';
import { Radar } from "react-chartjs-2";

const data = {
  labels: [
    '감정1',
    '감정2',
    '감정3',
    '감정4',
    '감정5',
    '감정6',
  ],
  datasets: [{
    label: '감정 분석 결과',
    data: [65, 92, 90, 81, 100, 90],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }]
};


const options = {
 plugins:{
         legend:{
            display:false
         }
      },
  responsive: false,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};
const element = document.getElementById("chart");
console.log(element);
class App extends Component {
  render() {
    return (
<div>
    <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
      <Navbar.Brand href="#home">
          <img
            src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3a2c92f5-f33b-4df5-84b5-3ce2ebdd0c0f%2F_-001_(1).png?table=block&id=360799d6-74b6-44a8-b131-ebc234ef5f06&spaceId=4145db40-ad1d-42f4-9f54-6e512b13bafb&width=580&userId=fc5b8e01-4d70-4ab8-8078-e67683ebc863&cache=v2"
            width="100"
            height="100"
            className="d-inline-block align-top"
          />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="../survey/src/survey.html">검사하기</Nav.Link>
          <Nav.Link href="">감정진단결과</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="../secondpage/src/secondpage.html">음식점 보기</Nav.Link>
        </Nav>
      </Navbar.Collapse>

      <Navbar.Collapse className="justify-content-end">
        <Nav.Link href="#pricing" className="ha">회원가입</Nav.Link>
      </Navbar.Collapse></Navbar>
    
    <h1>감정분석결과</h1>
    <div className="wrap">
    <Radar className="chart" data={data} options={options} style={{ height:"25%", width: "25%", display:"inline-block"}} />
        <div className="text">감정결과가 나타날 곳입니다. <br></br><br></br><br></br><br></br><br></br><br></br><a href="#">자세히 보기</a></div>
        </div>
    
    <h1 className="recwrap">추천성분</h1>
    <div className="wrap">
    <Card className="card" style={{ width: '18rem', display:'inline-block' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body> </Card> 
    <Card className="card" style={{ width: '18rem', display:'inline-block' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body> </Card> 
    <Card className="card" style={{ width: '18rem', display:'inline-block' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body> </Card> </div>
</div>
    );
  }
}

export default App;