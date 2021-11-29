import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import ReactSearchBox from 'react-search-box'
import './re_main.css';
import restdata from './restaurantData.json';
import Button from "react-bootstrap/Button";

class SearchBox extends Component {

    state={
        value : ""
    }

    render() {
        return (
            <>
                <div style={{margin:"auto",display:"block", padding:"30px"}}>
                    <ReactSearchBox
                        placeholder="음식점을 입력해주세요."
                        data={restdata.data}
                        onSelect={record => console.log(record)}
                        onFocus={() => {
                            console.log(this.data)
                            console.log('This function is called when is focussed')
                        }}
                        onChange={
                            value=>{
                                    if(value==="음식미담"||value==="비일"||value==="또와또"

                                    ||value==="가문의우동"||value==="갯마을칼국수"||value==="디어파인"||value==="몬스터플레이스"||value==="마시앤바시"

                                    ||value==="버거인"||value==="사이공마켓"||value==="샤오촨"||value==="선다래"||value==="와우신내떡"

                                    ||value==="을의커피"||value==="작은도쿄"||value==="청파멘션"||value==="포36거리"||value==="효이다방"
                                    ){
                                        console.log(value)
                                        this.state.value=value
                                    }
                                    else{
                                        console.log("error!")
                                        value="error"
                                        this.state.value=value
                                    }
                                }
                        }
                        fuseConfigs={{
                            threshold: 0.05,
                        }}
                        value=""
                    />
                </div>
                <div style={{display:"block", margin:"auto"}}>
                    <Button variant="outline-secondary" id="button-addon2" style={{width: '10rem'}}
                    onClick={
                        value=>{
                            if(this.state.value==="음식미담"){
                                this.props.history.push("review/see/midam")
                            }
                            else if(this.state.value==="비일"){
                                this.props.history.push("review/see/b1")
                            }
                            else if(this.state.value==="또와또"){
                                this.props.history.push("review/see/come")
                            }
                            else if(this.state.value==="가문의우동"){
                                this.props.history.push("review/see/gamoon")
                            }
                            else if(this.state.value==="갯마을칼국수"){
                                this.props.history.push("review/see/gatmael")
                            }
                            else if(this.state.value==="디어파인"){
                                this.props.history.push("review/see/dear")
                            }
                            else if(this.state.value==="몬스터플레이스"){
                                this.props.history.push("review/see/monster")
                            }
                            else if(this.state.value==="마시앤바시"){
                                this.props.history.push("review/see/masi")
                            }


                            else if(this.state.value==="버거인"){
                                this.props.history.push("review/see/burgerin")
                            }
                            else if(this.state.value==="사이공마켓"){
                                this.props.history.push("review/see/saigong")
                            }
                            else if(this.state.value==="샤오촨"){
                                this.props.history.push("review/see/shaochan")
                            }
                            else if(this.state.value==="선다래"){
                                this.props.history.push("review/see/sundarae")
                            }
                            else if(this.state.value==="와우신내떡"){
                                this.props.history.push("review/see/sinna")
                            }
                            else if(this.state.value==="을의커피"){
                                this.props.history.push("review/see/ell")
                            }



                            else if(this.state.value===""){
                                alert("음식점 이름을 작성해주세요.")
                            }
                            else{
                                alert("해당 음식점의 리뷰 기능은 현재 지원하지 않습니다.")
                            }
                        }

                    }
                    >
                        리뷰 쓰러 가기 ✍🏻
                    </Button>
                </div>
        </>
        )
    }
}

export default withRouter(SearchBox);