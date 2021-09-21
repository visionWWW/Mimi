import React from 'react'; // eslint-disable-line no-unused-vars
import '../rst.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, CardGroup } from "react-bootstrap";
import NaviagtionBar from '../../navbar';
import Footer from "../../footer/Footer";
import Foodimg_651 from '../foodimg/Foodimg_65-1';
import Foodimg_652 from '../foodimg/Foodimg_65-2';
import Foodimg_653 from '../foodimg/Foodimg_65-3';
import Map_651 from './map/Map_65-1';
import Map_652 from './map/Map_65-2';
import Map_653 from './map/Map_65-3';
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
              <Button variant="outline-secondary" className="button3" onClick={this.toggleState1}>신내떡 | 와우홀릭세트</Button>
              <Button variant="outline-secondary" className="button3" onClick={this.toggleState2}>샤오찬 | 마라탕</Button>
              <Button variant="outline-secondary" className="button3" onClick={this.toggleState3}>청파멘션 | 카페오렌지비앙코</Button>
              <br /><br />
              {this.state.button1State === true && <Foodimg_651 />}
              {this.state.button2State === true && <Foodimg_652/>}
              {this.state.button3State === true && <Foodimg_653 />}
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
              {this.state.button1State === true && <Map_651 />}
              {this.state.button2State === true && <Map_652 />}
              {this.state.button3State === true && <Map_653 />}
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
