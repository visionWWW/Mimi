import React from 'react';
import {Carousel} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import NaviagationBar from './navbar';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Footer from "./footer/Footer";

class Main extends React.Component {
    render() {
        {
            const Wrap = {
                width: '85%',
                margin: 'auto'
            }
            const CarouselHeight = {
                // width: '1100px', 반응형 웹 처리가 안 되어서 삭제
                margin: 'auto',
                padding:'50px'
            }
            const TabMargin={
                marginLeft:'20px',
                marginRight:'20px',
                marginTop:'10px'
            }
            const ParaStyle={
                textAlign:'center'
            }

            return (
                <div>
                   <NaviagationBar/>

                    <Carousel style={Wrap}>
                        <Carousel.Item>
                            <NavLink to="/surveyIntro" >
                                <img
                                    className="d-block w-100"
                                    src={process.env.PUBLIC_URL + '/images/002.png'}
									alt="First slide"
                                />
                            </NavLink>
                        </Carousel.Item>
                        <Carousel.Item>
                            <NavLink to="/restaurant">{/* 두번째 링크 수정필요 */}
                                <img
                                    className="d-block w-100"
                                    src={process.env.PUBLIC_URL + '/images/004.png'}
                                    alt="Second slide"
                                />
                            </NavLink>
                        </Carousel.Item>
                        <Carousel.Item>
                            <NavLink to="/review" >
                                <img
                                    className="d-block w-100"
                                    src={process.env.PUBLIC_URL + '/images/007.png'}
                                    alt="Third slide"
                                />
                            </NavLink>
                        </Carousel.Item>
                        
                    </Carousel>
                    <hr style={{marginTop:'50px',marginBottom:'10px', color:"lightgray"}}></hr>
                    <Tabs style={CarouselHeight}>
                        <TabList>
                            <Tab> <h4 style={TabMargin}>About US</h4> </Tab>
                            <Tab> <h4 style={TabMargin}>개발배경</h4> </Tab>
                            <Tab> <h4 style={TabMargin}>주요기능</h4> </Tab>
                            <Tab> <h4 style={TabMargin}>기대효과</h4> </Tab>
                        </TabList>

                        <TabPanel>
                        <p style={ParaStyle}>
                            <h3 style={{marginTop:'30px',marginBottom:'30px'}}>🍽 MIMI Project 🍽</h3>
                            미미는 '아름다운 맛'이라는 뜻을 담고 있는 한자어로,
                            <h5>사용자의 심리분석 웹 서비스를 통해 이용자의 기분에 따른 음식성분과 음식점을 추천하는 웹 서비스입니다.</h5><br/>

                            미미에서는 다음과 같은 기능을 제공하고 있습니다.<br/><br/>
                            1. 사용자에게 해당 음식점의 메뉴 정보와 성분 및 리뷰 제공<br/>
                            2. 인공지능의 학습기능을 통해 사용자 맞춤 음식 및 음식점 정보 제공<br/>
                        </p>
                        </TabPanel>
                        <TabPanel>
                        <p style={ParaStyle}>
                            <h5 style={{marginTop:"30px",marginBottom:"-20px"}}><i>저희는,</i></h5><br/>
                            <h3 style={{marginTop:"20px",marginBottom:"-20px"}}>코로나로</h3><br/>
                            <hr style={{margin:"auto",width:"50%",marginTop:"20px",marginBottom:"20px"}}></hr>
                            <b>우울감을 겪고 있는 사람</b>들에게 <br/>
                            기분에 맞는 음식/음식점 추천 서비스를 통해 <b>우울감을 해소</b>시키고자 합니다.<br/>
                            <br/>
                            <b>식습관이 망가진 사람</b>들에게 <br/>
                            식품 성분이 심리 상태와 관련있다는 정보를 제공하여 <b>올바른 식습관을 만드는데 기여</b>하고자 합니다.<br/>
                            <br/>
                            <b>매출이 급감하는 요식업계</b>를 위해<br/>
                            <b>상권 활성화</b>에 도움이 될 서비스를 만들어보고자 합니다.<br/>

                        </p>
                        </TabPanel>
                        <TabPanel>
                         <p style={ParaStyle}>
                            <h5 style={{marginTop:"30px",marginBottom:"-10px"}}>심리상태 분석 서비스 기능</h5><br/>
                            : 분석 결과에 따른 사용자의 심리상태 설명 제공<br/>
                             <hr style={{margin:"auto",width:"75%",marginTop:"20px",marginBottom:"20px"}}></hr>
                             <h5 style={{marginTop:"30px",marginBottom:"-10px"}}>인공지능을 이용한 심리상태에 맞는 음식 성분 및 음식 추천 기능</h5><br/>
                            : 사용자에게 적합한 음식성분과 음식점 추천<br/>
                            : 일상생활에 필수적인 음식과 사람의 감정간의 상관관계를 통한 올바른 식습관 문화를 형성<br/>
                            : 코로나로 건강 및 식단을 중요하게 생각하는 사람들에게 양질의 정보 제공<br/>
                             <hr style={{margin:"auto",width:"75%",marginTop:"20px",marginBottom:"20px"}}></hr>
                             <h5 style={{marginTop:"30px",marginBottom:"-10px"}}>음식점 리뷰 제공</h5><br/>
                            : 소비자의 리뷰를 통해 추천 알고리즘에 대한 솔직한 후기 제공<br/>
                         </p>
                        </TabPanel>
                        <TabPanel>
                            <p style={ParaStyle}>
                                <h5 style={{marginTop:"30px",marginBottom:"-10px"}}>1. 사용자 심리상태에 적절한 음식 정보 제공</h5><br/>
                                음식점에 대한 기본 정보(사업장, 영업시간, 위치, 전화번호), 해당 점포에서 판매하는 음식, 판매하는 성분 정보와 검증된 리뷰를 제공합니다.<br/>
                                특히 접근성이 높은 웹 페이지로 제작하여, 별도의 설치 없이 해당 정보를 빠르게 제공하는 것이 장점입니다.<br/>
                                <hr style={{margin:"auto",width:"75%",marginTop:"20px",marginBottom:"20px"}}></hr>
                                <h5 style={{marginTop:"30px",marginBottom:"-10px"}}>2. 식습관 형성 기여</h5><br/>
                                해당 서비스는 소비자로 하여금 음식에 대한 심리적인 접근을 가능케 합니다. 따라서 이들의 식단 선택 기회를 넓혀줌에 따라 보다 주체적이고 적극적인 식습관 형성에 도움을 줄 것으로 기대합니다.<br/>
                                또한 코로나로 배달음식과 패스트푸드 섭취가 잦은 요즘, 건강한 식습관 형성에 도움을 줄 수 있습니다.<br/>
                                <hr style={{margin:"auto",width:"75%",marginTop:"20px",marginBottom:"20px"}}></hr>
                                <h5 style={{marginTop:"30px",marginBottom:"-10px"}}>3. 상업 활성화</h5><br/>
                                코로나 19 발병 이후 많은(85.7%이상) 외식업체 매출이 26.1%이상 감소했습니다.<br/>
                                주 소비자인 MZ 세대의 특성을 고려한 여러 리뷰 이벤트, 접근성이 좋은 웹 서비스, sns 홍보로 콘텐츠를 제공하여 주 이용층들의 흥미를 이끌어내고자 합니다.<br/>
                                이를 통해 해당 상권의 식당 이용을 증진시켜 상권을 살리는 데 기여할 것입니다.<br/>
                            </p>
                        </TabPanel>
                    </Tabs>
                    <Footer></Footer>
                </div>


            );
        }
    }
}

export default Main;
