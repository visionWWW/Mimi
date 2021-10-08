import React from 'react'; // eslint-disable-line no-unused-vars
import '../rst.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, CardGroup } from "react-bootstrap";
import NaviagtionBar from '../../navbar';
import Footer from "../../footer/Footer";
import Foodimg_253 from '../foodimg/Foodimg_25-3';
import Foodimg_251 from '../foodimg/Foodimg_25-1';
import Foodimg_252 from '../foodimg/Foodimg_25-2';
import Map_252 from './map/Map_25-2';
import Map_253 from './map/Map_25-3';
import Map_251 from './map/Map_25-1';
import TopAlert from "../TopAlert";
import Preview251 from './preview/Preview25-1';
import Preview252 from './preview/Preview25-2';
import Preview253 from './preview/Preview25-3';


const google = window.google;

class Restaurtant25 extends React.Component {
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
              <Button variant="outline-secondary" className="button1" onClick={this.toggleState1}>작은도쿄 | 텐동</Button>
              <Button variant="outline-secondary" className="button2" onClick={this.toggleState2}>가문의우동 | 냄비우동</Button>
              <Button variant="outline-secondary" className="button3" onClick={this.toggleState3}>포36거리 | 쌀국수</Button>
              <br /><br />
              {this.state.button1State === true && <Foodimg_251/>}
              {this.state.button2State === true && <Foodimg_252/>}
              {this.state.button3State === true && <Foodimg_253/>}
            </div>

          </div>
          <br /><br /><br />

          <h2>음 식 점 정 보</h2> <br />

          <div className="warp">
            <div className="preview">

              <div>
              {this.state.button1State === true && <Preview251/>}
              {this.state.button2State === true && <Preview252/>}
              {this.state.button3State === true && <Preview253/>}
              </div>

            </div>
            <div className="map">
              {this.state.button1State === true && <Map_251/>}
              {this.state.button2State === true && <Map_252/>}
              {this.state.button3State === true && <Map_253/>}

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

export default Restaurtant25;
