import React from 'react';
import { Button, Card, Col, Row } from "react-bootstrap";
import NaviagtionBar from '../navbar';
import './result.css';


function Result() {
    return (
        <div className="App">
            <header>
                <NaviagtionBar />

                <h2>감정결과</h2>

                <div class="d-flex p-2">
                    <div className="wrap">
                        <div className="flip-container" ontouchstart="this.classList.toggle('hover');" style={{ width: '12rem', display: 'inline-block' }}>
                            <div className="flipper">
                                <div className="front">
                                    <Card className="card" style={{ width: '12rem', display: 'inline-block' }}>
                                        <Card.Img variant="top" src="/images/100.png" />
                                        <Card.Body>
                                            <Card.Title></Card.Title>
                                            <Card.Text>
                                                지금의 기쁨을 유지할 수 있도록 돕는 음식을 먹으면서 더 큰 행복감을 누리세요!
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>

                                </div>
                                <div className="back">
                                    <Card className="card" style={{ width: '12rem', display: 'inline-block' }}>
                                        <Card.Img variant="top" src="/images/back_100.png" />
                                        <Card.Body>
                                            <Card.Title></Card.Title>
                                            <Button variant="outline-secondary" href={"/emotion/full-happy"}> 분석 결과 보러가기 </Button>
                                        </Card.Body> </Card>
                                </div></div></div>


                        <div className="flip-container" ontouchstart="this.classList.toggle('hover');" style={{ width: '12rem', display: 'inline-block' }}>
                            <div className="flipper">
                                <div className="front">
                                    <Card className="card" style={{ width: '12rem', display: 'inline-block' }}>
                                        <Card.Img variant="top" src="/images/80.png" />
                                        <Card.Body>
                                            <Card.Title></Card.Title>
                                            <Card.Text>
                                                더 큰 기쁨을 누릴 자격이 있는 당신입니다! 음식을 통해 더 큰 기쁨을 맛보아요!
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="back">
                                    <Card className="card" style={{ width: '12rem', display: 'inline-block' }}>
                                        <Card.Img variant="top" src="/images/back_80.png" />
                                        <Card.Body>
                                            <Card.Title></Card.Title>
                                            <Button variant="outline-secondary" href={"/emotion/80-happy"}>분석 결과 보러가기</Button>
                                        </Card.Body> </Card>
                                </div></div></div></div></div>

                <div class="d-flex p-2">
                    <div className="wrap">
                        <div className="flip-container" ontouchstart="this.classList.toggle('hover');" style={{ width: '12rem', display: 'inline-block' }}>
                            <div className="flipper">
                                <div className="front">
                                    <Card className="card" style={{ width: '12rem', display: 'inline-block' }}>
                                        <Card.Img variant="top" src="/images/65.png" />
                                        <Card.Body>
                                            <Card.Title></Card.Title>
                                            <Card.Text>
                                                정서적으로 안정되고 편안한 상태이시군요~
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>

                                </div>
                                <div className="back">
                                    <Card className="card" style={{ width: '12rem', display: 'inline-block' }}>
                                        <Card.Img variant="top" src="/images/back_65.png" />
                                        <Card.Body>
                                            <Card.Title>
                                            </Card.Title>
                                            <Button variant="outline-secondary" href={"/emotion/65-happy"} > 분석 결과 보러가기 </Button>
                                        </Card.Body> </Card>
                                </div></div></div>


                        <div className="flip-container" ontouchstart="this.classList.toggle('hover');" style={{ width: '12rem', display: 'inline-block' }}>
                            <div className="flipper">
                                <div className="front">
                                    <Card className="card" style={{ width: '12rem', display: 'inline-block' }}>
                                        <Card.Img variant="top" src="/images/50.png" />
                                        <Card.Body>
                                            <Card.Title></Card.Title>
                                            <Card.Text>
                                                맛있는 음식 먹고 기운내자고요! 화이팅!
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="back">
                                    <Card className="card" style={{ width: '12rem', display: 'inline-block' }}>
                                        <Card.Img variant="top" src="/images/back_50.png" />
                                        <Card.Body>
                                            <Card.Title></Card.Title>
                                            <Button variant="outline-secondary" href={"/emotion/half-happy"}>분석 결과 보러가기</Button>
                                        </Card.Body> </Card>
                                </div></div></div></div></div>
                <div class="d-flex p-2">
                    <div className="wrap">

                        <div className="flip-container" ontouchstart="this.classList.toggle('hover');" style={{ width: '12rem', display: 'inline-block' }}>
                            <div className="flipper">
                                <div className="front">
                                    <Card className="card" style={{ width: '12rem', display: 'inline-block' }}>
                                        <Card.Img variant="top" src="/images/25.png" />
                                        <Card.Body>
                                            <Card.Title></Card.Title>
                                            <Card.Text>
                                                고생했어요. 이 음식이 당신에게 위로가 됐으면 좋겠어요!
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>

                                </div>
                                <div className="back">
                                    <Card className="card" style={{ width: '12rem', display: 'inline-block' }}>
                                        <Card.Img variant="top" src="/images/back_25.png" />
                                        <Card.Body>
                                            <Card.Title></Card.Title>
                                            <Card.Text>
                                            </Card.Text>
                                            <Button variant="outline-secondary" href={"/emotion/25-happy"}>분석 결과 보러가기</Button>
                                        </Card.Body> </Card>
                                </div></div></div>

                        <div className="flip-container" ontouchstart="this.classList.toggle('hover');" style={{ width: '12rem', display: 'inline-block' }}>
                            <div className="flipper">
                                <div className="front">
                                    <Card className="card" style={{ width: '12rem', display: 'inline-block' }}>
                                        <Card.Img variant="top" src="/images/10.png" />
                                        <Card.Body>
                                            <Card.Title></Card.Title>
                                            <Card.Text>
                                                힘들죠? 오늘도 힘내줘서 고마워요 맛있는 음식 먹고 살아있음을 느껴봐요!
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>

                                </div>
                                <div className="back">
                                    <Card className="card" style={{ width: '12rem', display: 'inline-block' }}>
                                        <Card.Img variant="top" src="/images/back_10.png" />
                                        <Card.Body>
                                            <Card.Title></Card.Title>
                                            <Card.Text>
                                            </Card.Text>
                                            <Button variant="outline-secondary" href={"/emotion/10-happy"}>분석 결과 보러가기</Button>
                                        </Card.Body> </Card>
                                </div></div></div></div></div>

            </header>
        </div>
    );
}

export default Result;
