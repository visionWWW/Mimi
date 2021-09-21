import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import NaviagtionBar from "../../navbar";
import '../emotion.css'
import Footer from "../../footer/Footer";

class SixtyFiveHappy extends React.Component {
    render() {
        return (
            <div>
                <NaviagtionBar/>
                <h1>감정분석결과</h1>
                <Col xs={12} md={12}>
                    <Image style={{
                        display: "block",
                        margin: "auto",
                        width: "280px",
                        height: "420px",
                        objectFit: "cover",
                        overflow: "hidden",
                        marginBottom: "50px"
                    }}
                           src="/images/65.png"></Image>
                </Col>

                <div className="wrap">
                    <div className="text">
                        <br></br> 맛있는 집밥 한 상을 먹은 것처럼 편안한 당신! <br/>
                        지금의 편안한 상태도 좋지만 약간의 각성을 도와줄 수 있는 음식을 먹는다면 더 행복한 하루가 될 수 있습니다. <br/>
                        추천음식 먹고 좋은 하루 되세요☺️ <br/>
                        <br></br>
                    </div>
                </div>

                <h1 className="recwrap">추천성분</h1>

                <div className="wrap">
                    <div className="flip-container" onTouchStart="this.classList.toggle('hover');"
                         style={{width: '18rem', display: 'inline-block'}}>
                        <div className="flipper">
                            <div className="front">
                                <Card className="card" style={{width: '18rem', display: 'inline-block'}}>
                                    <br/>
                                    <Card.Img style={{width: "150px"}} variant="top" src="/images/Curcumin.png"/>
                                    <Card.Body>
                                        <Card.Title>커큐민</Card.Title>
                                    </Card.Body> </Card>

                            </div>
                            <div className="back">
                                <Card className="card" style={{width: '18rem', display: 'inline-block'}}>
                                    <Card.Body>
                                        <Card.Title>커큐민</Card.Title>
                                        <Card.Text>
                                            <br/>
                                            강황의 커큐민은 <br/>
                                            세로토닌과 아드레날린 수치를 <br/>
                                            증가시켜 부정적인 감정을 <br/>
                                            낮춰줄 수 있습니다. <br/><br/>
                                        </Card.Text>
                                    </Card.Body> </Card>
                            </div>
                        </div>
                    </div>
                    <div className="flip-container" onTouchStart="this.classList.toggle('hover');"
                         style={{width: '18rem', display: 'inline-block'}}>
                        <div className="flipper">
                            <div className="front">
                                <Card className="card" style={{width: '18rem', display: 'inline-block'}}>
                                    <Card.Img style={{width: "150px"}} variant="top" src="/images/Caffeine.png"/>
                                    <Card.Body>
                                        <Card.Title>카페인</Card.Title>
                                    </Card.Body> </Card>
                            </div>
                            <div className="back">
                                <Card className="card" style={{width: '18rem', display: 'inline-block'}}>
                                    <Card.Body>
                                        <Card.Title>카페인</Card.Title>
                                        <Card.Text>
                                            <br/>
                                            카페인은 <br/>
                                            감정을 <br/>
                                            고조시켜주는 <br/>
                                            효능이 있습니다. <br/><br/>
                                        </Card.Text>
                                    </Card.Body> </Card>

                            </div>
                        </div>
                    </div>
                    <div className="flip-container" onTouchStart="this.classList.toggle('hover');"
                         style={{width: '18rem', display: 'inline-block'}}>
                        <div className="flipper">
                            <div className="front">
                                <Card className="card" style={{width: '18rem', display: 'inline-block'}}>
                                    <br/><br/>
                                    <Card.Img style={{width: "200px"}} variant="top" src="/images/Kapsaicyna.png"/>
                                    <Card.Body>
                                        <br/>
                                        <Card.Title>캡사이신</Card.Title>
                                        <br/>
                                    </Card.Body> </Card>
                            </div>
                            <div className="back">
                                <Card className="card" style={{width: '18rem', display: 'inline-block'}}>
                                    <Card.Body>
                                        <Card.Title>캡사이신</Card.Title>
                                        <Card.Text>
                                            <br/>
                                            캡사이신으로 매운맛을<br/>
                                            느끼게 하여<br/>
                                            일시적으로 부정적인 감정을 <br/>
                                            낮춰줄 수 있습니다. <br/>
                                            <br/>
                                        </Card.Text>
                                    </Card.Body> </Card>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wrap">
                    <h1 className="food">추천음식</h1>
                    <Container>
                        <Row>
                            <Col xs={6} md={6}>
                                <Image src="/images/tteokbokki.jpg" rounded
                                       style={{width: '20rem', display: 'inline-block'}}/>
                                <h6 className="ttokbokki">떡볶이</h6>
                            </Col>
                            <Col xs={6} md={6}>
                                <Image src="/images/curry.jpg" rounded
                                       style={{width: '18rem', display: 'inline-block'}}/>
                                <h6 className="ramen">카레</h6>
                            </Col>
                        </Row>
                    </Container>
                </div>


                <Button className="button" variant="outline-secondary" href={"/restaurant"} style={{
                    marginBottom: '30px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'block',
                    width: "300px"
                }}>🍽 음식점 추천 받기 🍽</Button>{' '}
                <Footer></Footer>
            </div>
        );
    }
}

export default SixtyFiveHappy;
