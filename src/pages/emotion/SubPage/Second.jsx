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

class EightHappy extends React.Component {
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
                           src="/images/80.png"></Image>
                </Col>

                <div className="wrap">
                    <div className="text">
                        <br></br> 힘든 시험을 끝내고 달달한 초콜렛을 먹은 것처럼 기쁜 당신! <br/>
                        당신은 음식을 먹으면서 더 행복해질 필요가 있습니다. <br/>
                        저희가 기쁨이 100%가 될 수 있는 음식을 추천해드릴게요 :) <br/>
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
                                    <Card.Img style={{width: "150px"}} variant="top" src="/images/Selenium.png"/>
                                    <Card.Body>
                                        <Card.Title>셀레늄</Card.Title>
                                    </Card.Body> </Card>

                            </div>
                            <div className="back">
                                <Card className="card" style={{width: '18rem', display: 'inline-block'}}>
                                    <Card.Body>
                                        <Card.Title>셀레늄</Card.Title>
                                        <Card.Text>
                                            <br/>
                                            계란에는 강력한 항산화작용을 <br/>
                                            하는 셀레늄이 있기에 <br/>
                                            긍정적인 감정을 <br/>
                                            유지 혹은 높여줄 수 있습니다. <br/><br/>
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
                                    <Card.Img style={{width: "200px"}} variant="top" src="/images/Serotonin.png"/>
                                    <Card.Body>
                                        <Card.Title>세로토닌</Card.Title>
                                    </Card.Body> </Card>
                            </div>
                            <div className="back">
                                <Card className="card" style={{width: '18rem', display: 'inline-block'}}>
                                    <Card.Body>
                                        <Card.Title>세로토닌</Card.Title>
                                        <Card.Text>
                                            <br/>
                                            탄수화물인 면의 세로토닌이 <br/>
                                            일반적인 식사 상황에서<br/>
                                            긍정적인 방향으로의 <br/>
                                            변화를 수반하는 것을 <br/>
                                            예상할 수 있습니다. <br/><br/>
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
                                <Image src="/images/omurice.jpg" rounded
                                       style={{width: '17rem', display: 'inline-block'}}/>
                                <h6 className="ttokbokki">오므라이스</h6>
                            </Col>
                            <Col xs={6} md={6}>
                                <Image src="/images/pasta.jpg" rounded
                                       style={{width: '20rem', display: 'inline-block'}}/>
                                <h6 className="ramen">파스타</h6>
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

export default EightHappy;
