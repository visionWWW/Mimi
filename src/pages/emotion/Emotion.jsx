import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import NaviagtionBar from '../navbar';
import ResultCard from "./card";
import './emotion.css';
import Result from './emotionResult.js'
import RecommendCard from "./recommendCard";

class Emotion extends React.Component {
  render() {
    return (
      <div>
        <NaviagtionBar/>

        <h1>감정분석결과</h1>
        <ResultCard></ResultCard>
        <div className="wrap">

        <div className="text"><Result/></div>    
        </div>

        <h1 className="recwrap">추천성분</h1>
            
            
        <div className="wrap">
            <div className="flip-container" ontouchstart="this.classList.toggle('hover');" style={{ width: '18rem', display:'inline-block' }}>
            <div className="flipper">
              <div className="front">
                <Card className="card" style={{ width: '18rem', display:'inline-block' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>다시...</Card.Title>
                    <Card.Text>
                        <RecommendCard></RecommendCard>
                    </Card.Text>
                  </Card.Body> </Card>
              
            </div>
              <div className="back">
                <Card className="card" style={{ width: '18rem', display:'inline-block' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>뒷면</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body> </Card>
              </div>
            </div>
            </div> 
          <div className="flip-container" ontouchstart="this.classList.toggle('hover');" style={{ width: '18rem', display:'inline-block' }}>
            <div className="flipper">
              <div className="front">
                <Card className="card" style={{ width: '18rem', display:'inline-block' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>앞면</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  </Card.Body> </Card>
              </div>
              <div className="back">
                <Card className="card" style={{ width: '18rem', display:'inline-block' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>뒷면</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body> </Card>

              </div>
            </div></div>
          <div className="flip-container" ontouchstart="this.classList.toggle('hover');" style={{ width: '18rem', display:'inline-block' }}>
            <div className="flipper">
              <div className="front">
                <Card className="card" style={{ width: '18rem', display:'inline-block' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>앞면</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  </Card.Body> </Card>
              </div>
              <div className="back">
                <Card className="card" style={{ width: '18rem', display:'inline-block' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>뒷면</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body> </Card>
              </div>
            </div></div>
        
            
            
            
            
        </div>

        <div className="wrap">
          <h1 className="food">추천음식</h1>
          <Container>
            <Row>
              <Col xs={6} md={6}>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQy82vhXGHn0j7xvGPnzQGRt8jfrR4KNCMaA&usqp=CAU" rounded style={{ width: '18rem', display:'inline-block' }}/>
                <h6 className="ttokbokki">떡볶이</h6>
              </Col>
              <Col xs={6} md={6}>
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Nongshim_Yukejang_Bowl_Noodle_Soup_20201111_002.jpg/227px-Nongshim_Yukejang_Bowl_Noodle_Soup_20201111_002.jpg" rounded style={{ width: '18rem', display:'inline-block' }}/>
                <h6 className="ramen">육개장</h6>
              </Col>
            </Row>
          </Container>

        </div>


        <Button className="button" variant="outline-primary" href={"/restaurant"} style={{ marginBottom: '30px', marginLeft:'auto', marginRight:'auto', display:'block', width:"300px"}}>🍽 음식점 추천 받기 🍽</Button>{' '}
      </div>
    );
  }
}

export default Emotion;