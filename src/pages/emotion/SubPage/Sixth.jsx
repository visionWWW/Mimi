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

class TenHappy extends React.Component {
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
                           src="/images/10.png"></Image>
                </Col>

                <div className="wrap">
                    <div className="text">
                        <br></br> 바쁜 사회에서 치이고 온 당신! <br/>
                        많이 힘들죠? <br/>
                        오늘도 수고했어요. <br/>
                        우리 함께 먹으면서 기분 좋아지는 건 어때요? <br/>
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
                                    <Card.Img style={{width: "150px"}} variant="top" src="/images/Glutamic_acid.png"/>
                                    <br/>
                                    <Card.Body>
                                        <br/>
                                        <Card.Title>글루탐산</Card.Title>
                                        <br/>
                                    </Card.Body> </Card>

                            </div>
                            <div className="back">
                                <Card className="card" style={{width: '18rem', display: 'inline-block'}}>
                                    <Card.Body>
                                        <Card.Title>글루탐산</Card.Title>
                                        <Card.Text>
                                            <br/>
                                            감칠맛의 <br/>
                                            글루탐산이 <br/>
                                            긍정적인 감정을 <br/>
                                            높여줄 수 있습니다. <br/><br/>
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
                                    <br/>
                                    <Card.Img style={{width: "150px"}} variant="top" src="/images/Serotonin.png"/>
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
                                            예상할 수 있습니다. <br/>
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
                                <Image src="/images/udon.jpeg" rounded
                                       style={{width: '13rem', display: 'inline-block'}}/>
                                <h6 className="ttokbokki">우동</h6>
                            </Col>
                            <Col xs={6} md={6}>
                                <Image src="/images/pasta.jpg" rounded
                                       style={{width: '20rem', display: 'inline-block'}}/>
                                <h6 className="ramen">파스타</h6>
                            </Col>
                        </Row>
                    </Container>
                </div>


                <Button className="button" variant="outline-secondary" href={"/restaurant/10"} style={{
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

export default TenHappy;
