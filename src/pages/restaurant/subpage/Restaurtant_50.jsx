import React from 'react'; // eslint-disable-line no-unused-vars
import '../rst.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, CardGroup } from "react-bootstrap";
import NaviagtionBar from '../../navbar';
import Footer from "../../footer/Footer";
import Map_501 from './map/Map_50-1';
import Map_502 from './map/Map_50-2';
import Map_503 from './map/Map_50-3';
import Foodimg_501 from '../foodimg/Foodimg_50-1';
import Foodimg_502 from '../foodimg/Foodimg_50-2';
import Foodimg_503 from '../foodimg/Foodimg_50-3';
import TopAlert from "../TopAlert";


const google = window.google;

class Restaurtant10 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      button1State: true,
      button2State: false,
      button3State: false
    }
    this.toggleState1 = this.toggleState1.bind(this)
    this.toggleState2 = this.toggleState2.bind(this)
    this.toggleState3 = this.toggleState3.bind(this)
  }

  render() {

    return (
      <div className="App">
        <header>
          <NaviagtionBar />

          <h2>음 식 점 추천</h2> <br />
          <div className="parent">

            <div>
              <Button variant="outline-secondary" className="button1" onClick={this.toggleState1}>몬스터플레이스 | 블루베리 요거트</Button>
              <Button variant="outline-secondary" className="button2" onClick={this.toggleState2}>디어파인 | 블루베리 요거트</Button>
              <Button variant="outline-secondary" className="button3" onClick={this.toggleState3}>효이다방</Button>
              <br /><br />
              {this.state.button1State === true && <Foodimg_501/>}
              {this.state.button2State === true && <Foodimg_502/>}
              {this.state.button3State === true && <Foodimg_503/>}
            </div>

          </div>
          <br /><br /><br />

          <h2>음 식 점 정 보</h2> <br />

          <div className="warp">
            <div className="preview">

              <div>
              <TopAlert/>
              </div>

            </div>
            <div className="map">
              {this.state.button1State === true && <Map_501 />}
              {this.state.button2State === true && <Map_502/>}
              {this.state.button3State === true && <Map_503 />}

            </div>
          </div>


          <h2>리 뷰</h2><br />
          <div className="reviewcard">
          <CardGroup>
              <Card>
                <TopAlert/>
              </Card>
              <Card>
                <TopAlert/>
              </Card>
              <Card>
                <TopAlert/>
              </Card>
            </CardGroup>
          </div>
        </header>
        <Footer></Footer>
      </div>
    )
  }

  toggleState1() {
    if ((this.state.button2State = true)) {
      this.setState({ button2State: !this.state.button2State })
    }
    if ((this.state.button3State = true)) {
      this.setState({ button3State: !this.state.button3State })
    }
    {
      this.setState({ button1State: !this.state.button1State })
    }
  }

  toggleState2() {
    if ((this.state.button1State = true)) {
      this.setState({ button1State: !this.state.button1State })
    }
    if ((this.state.button3State = true)) {
      this.setState({ button3State: !this.state.button3State })
    }
    {
      this.setState({ button2State: !this.state.button2State })
    }
  }

  toggleState3() {
    if ((this.state.button1State = true)) {
      this.setState({ button1State: !this.state.button1State })
    }
    if ((this.state.button2State = true)) {
      this.setState({ button2State: !this.state.button2State })
    }
    {
      this.setState({ button3State: !this.state.button3State })
    }
  }
}

export default Restaurtant10;
