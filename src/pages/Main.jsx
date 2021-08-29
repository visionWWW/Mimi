import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Carousel} from 'react-bootstrap'
import logo from '../logo.svg';
import {NavLink} from 'react-router-dom'
import mainImg from './mainImg'

class Main extends React.Component {
    render() {
        {
            const carouselWrap = {
                width: '1000px',
                margin: 'auto'
            }
            const introWrap = {
                width: '700px',
                margin: 'auto'
            }

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
                                <Nav.Link href="./survey/src/survey.html">검사하기</Nav.Link>
                                <Nav.Link href="">감정진단결과</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="./secondpage/src/secondpage.html">음식점 보기</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>

                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link href="#pricing" className="ha">회원가입</Nav.Link>
                        </Navbar.Collapse></Navbar>

                    <Carousel style={carouselWrap}>
                        <Carousel.Item>
                            <NavLink to="./survey/src/survey.html" >
                                <img
                                    className="d-block w-100"
                                    src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a89fdd4b-63d9-49e7-a637-993b7e2e38ce/004.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210825T141124Z&X-Amz-Expires=86400&X-Amz-Signature=3998cf1fc66b7deba08305f0c9e22d0f7266682fcde14a5b19ff25c70c6d1e02&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22004.png%22"
                                    alt="First slide"
                                />
                            </NavLink>
                        </Carousel.Item>
                        <Carousel.Item>
                            <NavLink to="./secondpage/src/secondpage.html" >{/* 두번째 링크 수정필요 */}
                                <img
                                    className="d-block w-100"
                                    src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4c4f502d-8052-4c14-83cd-5d36c1de65b3/002.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210825T135546Z&X-Amz-Expires=86400&X-Amz-Signature=6a2ea81b651b9edb937f97232089d8bf87ec54d107e343ab527e5c2a4bc0ad47&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22002.png%22"
                                    alt="Second slide"
                                />
                            </NavLink>
                        </Carousel.Item>
                        <Carousel.Item>
                            <NavLink to="./secondpage/src/secondpage.html" >
                                <img
                                    className="d-block w-100"
                                    src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/424649c8-23e5-496c-beeb-e88fbcee40fe/007.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210825T141146Z&X-Amz-Expires=86400&X-Amz-Signature=b9b677dc50c5a409c6dd26494b3025e3f4673fe732868750503cc93a16862310&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22007.png%22"
                                    alt="Third slide"
                                />
                            </NavLink>
                        </Carousel.Item>
                    </Carousel>

                    <div style={introWrap}>
                        <h2>프로젝트 소개</h2><br></br>

                        사용자의 심리분석 웹 서비스를 통해 이용자의 기분에 따른 음식성분과 음식점을 추천하는 웹 서비스입니다.<br></br>
                        1. 사용자에게 해당 음식점의 메뉴 정보와 성분 및 리뷰 제공<br></br>
                        2. 인공지능의 학습기능을 통해 사용자 맞춤 음식 및 음식점 정보 제공<br></br><br></br>

                        <h2>개발배경</h2><br></br>
                        **목적**<br></br>
                        : 코로나 사태로 우울감을 겪고 있는 사람들에게 머신러닝을 이용한 자신의 기분에 맞는 음식/음식점 추천 서비스를 통해 우울감을 해소시키고자 함.<br></br>
                        : 코로나로 인해 식습관이 망가진 사람들에게 식품 성분이 심리 상태와 관련있다는 정보를 제공하여 올바른 식습관을 만드는데 기여하고자 함.<br></br>
                        : 코로나 19로 인해 매출이 급감하는 요식업계를 위해 상권 활성화에 도움이 될 서비스를 만들어보고자 함.<br></br>

                        **특장점** <br></br>
                        : 숙명여대 사회심리학과와 화학생명공학부 학생들이 연구결과 제공한 자료를 바탕으로 보다 전문적인 심리검사와 추천 알고리즘 설계<br></br>
                        : 기존 서비스는 사용자 개개인의 취향을 고려하지 않은 전체에 대한 서비스를 제공함.<br></br>
                        이와 비교하여 해당 프로젝트는 개인의 취향과 감정상태를 심리검사를 통해 커스터마이징하여 음식점을 추천한다는 특장점을 갖음.<br></br><br></br>


                        <h2>주요기능</h2><br></br>
                        - **심리상태 분석 서비스 기능**<br></br>
                        : 분석 결과에 따른 사용자의 심리상태 설명 제공<br></br><br></br>

                        - **머신러닝을 이용한 심리상태에 맞는 음식 성분 및 음식 추천 기능**<br></br>
                        : 사용자에게 적합한 음식성분과 음식점 추천<br></br>
                        : 일상생활에 필수적인 음식과 사람의 감정간의 상관관계를 통한 올바른 식습관 문화를 형성<br></br>
                        : 코로나로 건강 및 식단을 중요하게 생각하는 사람들에게 양질의 정보 제공<br></br><br></br>

                        - **지도 필터링 기능으로 사용자 주변 음식점 소개**<br></br>
                        : 사용자 위치를 기반으로 추천음식에 대한 음식점 소개<br></br>
                        : 음식점 위치와 음식성분을 아이콘으로 지도에 시각화<br></br><br></br>

                        - **음식점 후기 제공**<br></br>
                        : 소비자의 리뷰를 통해 추천 알고리즘에 대한 솔직한 후기 제공<br></br> <br></br>


                        <h2>기대효과</h2><br></br>
                        **1. 사용자 심리상태에 적절한 음식 정보 제공**<br></br>
                        음식점에 대한 기본 정보(사업장, 영업시간, 위치, 전화번호), 해당 점포에서 판매하는 음식, 판매하는 성분 정보와 검증된 리뷰를 제공합니다.<br></br>
                        특히 접근성이 높은 웹 페이지로 제작하여, 별도의 설치 없이 해당 정보를 빠르게 제공하는 것이 장점입니다.<br></br><br></br>

                        **2. 식습관 형성 기여**<br></br>
                        해당 서비스는 소비자로 하여금 음식에 대한 심리적인 접근을 가능케 합니다. 따라서 이들의 식단 선택 기회를 넓혀줌에 따라 보다 주체적이고 적극적인 식습관 형성에 도움을 줄 것으로 기대합니다.<br></br>
                        또한 코로나로 배달음식과 패스트푸드 섭취가 잦은 요즘, 건강한 식습관 형성에 도움을 줄 수 있습니다.<br></br><br></br>

                        **3. 상업 활성화**<br></br>
                        코로나 19 발병 이후 많은(85.7%이상) 외식업체 매출이 26.1%이상 감소했습니다.<br></br>
                        주 소비자인 MZ 세대의 특성을 고려한 여러 리뷰 이벤트, 접근성이 좋은 웹 서비스, sns 홍보로 콘텐츠를 제공하여 주 이용층들의 흥미를 이끌어내고자 합니다.<br></br>
                        이를 통해 해당 상권의 식당 이용을 증진시켜 상권을 살리는 데 기여할 것입니다.<br></br>
                    </div>
                </div>


            );
        }
    }
}

export default Main;
