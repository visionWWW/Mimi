import React from 'react'; // eslint-disable-line no-unused-vars
import '../rst.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, CardGroup } from "react-bootstrap";
import ResName from '../res_name';
import ReviewText from '../reviewtext';
import NaviagtionBar from '../../navbar';
import Footer from "../../footer/Footer";
import Foodimg_101 from '../foodimg/Foodimg_10-1';
import Foodimg_102 from '../foodimg/Foodimg_10-2';
import Foodimg_103 from '../foodimg/Foodimg_10-3';
import Map_101 from './map/Map_10-1.';
import Map_102 from './map/Map_10-2';
import Map_103 from './map/Map_10-3';


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
              <button className="button1" onClick={this.toggleState1}>사이공마켓 | 분짜</button>
              <button className="button2" onClick={this.toggleState2}>갯마을칼국수 | 칼국수</button>
              <button className="button3" onClick={this.toggleState3}>어바웃샤브 | 칼국수</button>
              <br /><br />
              {this.state.button1State === true && <Foodimg_101 />}
              {this.state.button2State === true && <Foodimg_102 />}
              {this.state.button3State === true && <Foodimg_103 />}
            </div>

          </div>
          <br /><br /><br />

          <h2>음 식 점 정 보</h2> <br />

          <div className="warp">
            <div className="preview">

              <div>
                <p>평점: </p>
                <p>메뉴: </p>
                <p>가격: </p>
                <p>#키워드 #키워드 #키워드</p>
              </div>

            </div>
            <div className="map">
              {this.state.button1State === true && <Map_101 />}
              {this.state.button2State === true && <Map_102 />}
              {this.state.button3State === true && <Map_103 />}
            </div>
          </div>


          <h2>리 뷰</h2><br />
          <div className="reviewcard">
            <CardGroup>
              <Card>
                <Card.Img variant="top" src="http://drive.google.com/uc?export=view&id=1-8noao2KTy9n3OWVfuMIVtSqZTgtQqCJ" width="300px" height="300px" />
                <Card.Body>
                  <Card.Title> <ResName /> </Card.Title>
                  <Card.Text>
                    <ReviewText />
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="http://drive.google.com/uc?export=view&id=15dW5OCXrACR-kg4oW3BueGjR81zIJLXv" width="300px" height="300px" />
                <Card.Body>
                  <Card.Title>고씨네</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="http://drive.google.com/uc?export=view&id=1z18J_fnHBvtCnjSluv0oLwxLkFsB2OzZ" width="300px" height="300px" />
                <Card.Body>
                  <Card.Title>빨봉분식</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
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
